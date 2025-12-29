import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface DeployFormDialogProps {
  trigger: React.ReactNode;
}

const DeployFormDialog = ({ trigger }: DeployFormDialogProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    workEmail: "",
    howCanHelp: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Work email is required";
    } else if (!validateEmail(formData.workEmail)) {
      newErrors.workEmail = "Please enter a valid email";
    }
    if (!formData.howCanHelp.trim()) {
      newErrors.howCanHelp = "This field is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        const { data, error } = await supabase.functions.invoke('send-contact-email', {
          body: {
            name: formData.name,
            email: formData.workEmail,
            company: formData.companyName,
            message: formData.howCanHelp,
            formType: "deploy"
          }
        });

        if (error) throw error;

        toast.success("Thank you! We'll be in touch soon. A confirmation email has been sent to your inbox.");
        setFormData({ name: "", companyName: "", workEmail: "", howCanHelp: "" });
        setOpen(false);
      } catch (error: any) {
        console.error("Error sending deploy form:", error);
        toast.error("Error sending request. Please try again or contact us at info@data-hat.com");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md soft-glass border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-header">
            Start Your Pilot
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Tell us about your needs and we'll help you deploy Momentum.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-foreground">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Your name"
              className="bg-background/50 border-border focus:border-primary"
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="companyName" className="text-sm font-medium text-foreground">
              Company Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="companyName"
              value={formData.companyName}
              onChange={(e) => handleChange("companyName", e.target.value)}
              placeholder="Your company"
              className="bg-background/50 border-border focus:border-primary"
            />
            {errors.companyName && (
              <p className="text-sm text-destructive">{errors.companyName}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="workEmail" className="text-sm font-medium text-foreground">
              Work Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="workEmail"
              type="email"
              value={formData.workEmail}
              onChange={(e) => handleChange("workEmail", e.target.value)}
              placeholder="you@company.com"
              className="bg-background/50 border-border focus:border-primary"
            />
            {errors.workEmail && (
              <p className="text-sm text-destructive">{errors.workEmail}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="howCanHelp" className="text-sm font-medium text-foreground">
              How can Momentum help? <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="howCanHelp"
              value={formData.howCanHelp}
              onChange={(e) => handleChange("howCanHelp", e.target.value)}
              placeholder="Tell us about your retail challenges..."
              className="bg-background/50 border-border focus:border-primary min-h-[100px] resize-none"
            />
            {errors.howCanHelp && (
              <p className="text-sm text-destructive">{errors.howCanHelp}</p>
            )}
          </div>

          <Button type="submit" size="lg" variant="glow" className="w-full group" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Deploy Momentum"}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DeployFormDialog;
