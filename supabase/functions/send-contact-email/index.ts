import { Resend } from "https://esm.sh/resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Input validation schema
const ContactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().max(200, "Company name must be less than 200 characters").optional(),
  reason: z.string().max(100, "Reason must be less than 100 characters").optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000, "Message must be less than 5000 characters"),
  formType: z.enum(["contact", "deploy"], { errorMap: () => ({ message: "Invalid form type" }) }),
});

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse and validate input
    const rawBody = await req.json();
    const validationResult = ContactSchema.safeParse(rawBody);
    
    if (!validationResult.success) {
      console.error("Validation error:", validationResult.error.errors);
      return new Response(
        JSON.stringify({ 
          error: "Invalid input", 
          details: validationResult.error.errors.map(e => e.message) 
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, email, company, reason, message, formType } = validationResult.data;

    console.log("Received validated contact form submission:", { name, email, company, reason, formType });

    // Email to info@data-hat.com (admin notification)
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          New ${formType === "deploy" ? "Pilot Request" : "Contact Form"} Submission
        </h1>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
          </tr>
          ${company ? `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${company}</td>
          </tr>
          ` : ""}
          ${reason ? `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Reason:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${reason}</td>
          </tr>
          ` : ""}
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; vertical-align: top;">Message:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          Submitted on: ${new Date().toLocaleString()}
        </p>
      </div>
    `;

    // Confirmation email to the user
    const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Thank You for Contacting Data-Hat!</h1>
        <p>Dear ${name},</p>
        <p>We have received your ${formType === "deploy" ? "pilot request" : "message"} and appreciate you reaching out to us.</p>
        <p>Our team will review your inquiry and get back to you within 24-48 hours.</p>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Your Submission Details:</h3>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          ${reason ? `<p><strong>Reason:</strong> ${reason}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: white; padding: 10px; border-radius: 4px;">${message}</p>
        </div>
        
        <p>In the meantime, feel free to explore our solutions at <a href="https://data-hat.com/solutions" style="color: #007bff;">data-hat.com/solutions</a>.</p>
        
        <p>Best regards,<br>The Data-Hat Team</p>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        <p style="color: #999; font-size: 12px;">
          This is an automated confirmation email. Please do not reply directly to this message.
        </p>
      </div>
    `;

    // Send email to admin (info@data-hat.com)
    const adminEmailResponse = await resend.emails.send({
      from: "Data-Hat Contact <onboarding@resend.dev>",
      to: ["info@data-hat.com"],
      subject: `New ${formType === "deploy" ? "Pilot Request" : "Contact Form"}: ${name} from ${company || "N/A"}`,
      html: adminEmailHtml,
      reply_to: email,
    });

    console.log("Admin email sent:", adminEmailResponse);

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "Data-Hat <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting Data-Hat!",
      html: userEmailHtml,
    });

    console.log("User confirmation email sent:", userEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        adminEmail: adminEmailResponse, 
        userEmail: userEmailResponse 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

Deno.serve(handler);
