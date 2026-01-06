import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy | Data-Hat AI</title>
        <meta name="description" content="Data-Hat AI Privacy Policy - Learn how we collect, use, and protect your personal information." />
      </Helmet>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-display text-header mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Effective Date: May 29, 2025</p>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            <p>
              This Privacy Policy explains how DataDon LLC ("we," "us," or "our") collects, uses, and shares your personal information when you visit, use, or make a purchase from our website, www.data-hat.com (the "Website"). Your privacy is important to us, and we are committed to handling your data transparently and securely. We comply with all relevant data protection laws, including the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA), the California Online Privacy Protection Act (CalOPPA), and the General Data Protection Regulation (GDPR).
            </p>
            <p>
              By accessing or using our Website, you agree to the terms outlined in this Privacy Policy. If you do not agree with these terms, please do not use our Website.
            </p>

            <h2 className="text-2xl font-display text-header mt-8">1. Information We Collect</h2>
            <p>When you interact with our Website, we collect various types of information from and about you.</p>
            
            <h3 className="text-xl font-semibold text-foreground">A. Personal Information You Provide to Us:</h3>
            <p>You may provide us with the following personal information directly:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Email Address:</strong> When you subscribe to our newsletter, contact us, or create an account.</li>
              <li><strong>First Name and Last Name:</strong> When you create an account, make a purchase, or communicate with us.</li>
              <li><strong>Phone Number:</strong> When you make a purchase or seek customer support.</li>
              <li><strong>Address, State, Province, ZIP/Postal code, City:</strong> Required for order fulfillment and billing.</li>
              <li><strong>Social Media Profile Information:</strong> If you choose to connect or sign in using your social media accounts, we may access information from your public profile.</li>
              <li><strong>Other Information:</strong> Any additional information you voluntarily submit through forms, surveys, or direct communications.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground">B. Information Collected Automatically:</h3>
            <p>When you visit our Website, we automatically collect certain information about your device and browsing activity:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Log Data:</strong> This includes your IP address, browser type, operating system, referring URLs, pages you visit, and the dates and times of your visits.</li>
              <li><strong>Cookies and Similar Technologies:</strong> We use cookies, web beacons, and similar technologies to track your browsing behavior.</li>
            </ul>

            <h2 className="text-2xl font-display text-header mt-8">2. How We Use Your Information</h2>
            <p>We use the information we collect for several purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Website Operation:</strong> To operate and provide you with access to our Website and its features.</li>
              <li><strong>Order Processing:</strong> To process your purchases, ship products, and offer customer support related to your orders.</li>
              <li><strong>Communication:</strong> To send you transactional emails, respond to your inquiries, and send you marketing communications (if you have opted in).</li>
              <li><strong>Personalization:</strong> To tailor our Website content, product recommendations, and offers to your specific interests.</li>
              <li><strong>Improvement:</strong> To understand how you use our Website, identify areas for improvement, and develop new features and services.</li>
              <li><strong>Marketing & Advertising:</strong> To send you promotional materials, offers, and advertisements about our products and services.</li>
              <li><strong>Security & Fraud Prevention:</strong> To protect our Website, systems, and users from fraud, unauthorized access, and other security threats.</li>
              <li><strong>Legal Compliance:</strong> To meet our legal and regulatory obligations.</li>
            </ul>

            <h2 className="text-2xl font-display text-header mt-8">3. How We Share Your Information</h2>
            <p>We may share your personal information with third parties under specific circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> We engage third-party service providers to perform services on our behalf, including payment processing, shipping, data analysis, marketing, and customer support.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, sale of assets, or bankruptcy, your personal information may be transferred as part of the transaction.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if legally required to do so, or in response to valid requests by public authorities.</li>
              <li><strong>Protection of Rights:</strong> We may disclose your information when necessary to investigate, prevent, or take action regarding illegal activities or suspected fraud.</li>
              <li><strong>With Your Consent:</strong> We may share your information with third parties when we have your explicit consent.</li>
              <li><strong>Aggregated or Anonymized Data:</strong> We may share aggregated or anonymized data that cannot reasonably identify you.</li>
            </ul>

            <h2 className="text-2xl font-display text-header mt-8">4. Your Privacy Rights</h2>
            <p>We respect your privacy rights and provide you with mechanisms to control your personal information.</p>
            
            <h3 className="text-xl font-semibold text-foreground">For California Residents (CCPA + CPRA & CalOPPA)</h3>
            <p>As a California resident, you have the following rights under the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA):</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Know:</strong> You can request disclosure of the categories and specific pieces of personal information we have collected about you.</li>
              <li><strong>Right to Delete:</strong> You can request the deletion of personal information we have collected from you, subject to certain exceptions.</li>
              <li><strong>Right to Correct:</strong> You have the right to request the correction of inaccurate personal information we maintain about you.</li>
              <li><strong>Right to Opt-Out of Sale/Sharing:</strong> You have the right to opt-out of the "sale" or "sharing" of your personal information.</li>
              <li><strong>Right to Non-Retaliation:</strong> We will not discriminate against you for exercising any of your CCPA rights.</li>
            </ul>
            <p>To exercise your CCPA rights, please submit a verifiable consumer request to us via email: info@data-hat.com</p>

            <h3 className="text-xl font-semibold text-foreground">For European Economic Area (EEA) and UK Residents (GDPR)</h3>
            <p>If you are located in the EEA or the UK, you have the following rights under the General Data Protection Regulation (GDPR):</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right of Access:</strong> You can obtain confirmation of whether your personal data is being processed, and if so, access to that data.</li>
              <li><strong>Right to Rectification:</strong> You can request the correction of inaccurate personal data concerning you.</li>
              <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> You can request the deletion of your personal data under certain circumstances.</li>
              <li><strong>Right to Restriction of Processing:</strong> You can request the restriction of processing of your personal data under certain circumstances.</li>
              <li><strong>Right to Data Portability:</strong> You have the right to receive your personal data in a structured, commonly used, and machine-readable format.</li>
              <li><strong>Right to Object:</strong> You can object to the processing of your personal data, particularly where processing is based on legitimate interests or for direct marketing.</li>
              <li><strong>Right to Withdraw Consent:</strong> Where our processing relies on your consent, you have the right to withdraw that consent at any time.</li>
              <li><strong>Right to Lodge a Complaint:</strong> You have the right to lodge a complaint with a supervisory authority.</li>
            </ul>
            <p>To exercise your GDPR rights, please submit a request to us via email: info@data-hat.com</p>

            <h3 className="text-xl font-semibold text-foreground">General Rights for All Users</h3>
            <p><strong>Opt-out of Marketing Communications:</strong> You can opt-out of receiving marketing emails from us by following the unsubscribe instructions in those emails or by contacting us directly.</p>

            <h2 className="text-2xl font-display text-header mt-8">5. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies to monitor activity on our Website and store certain information. Cookies are small data files placed on your device. We use:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Strictly Necessary Cookies:</strong> Essential for our Website's basic functions.</li>
              <li><strong>Performance Cookies:</strong> Collect data on how you use our Website to help us improve its performance.</li>
              <li><strong>Functionality Cookies:</strong> Allow our Website to remember your choices to provide enhanced, personalized features.</li>
              <li><strong>Targeting/Advertising Cookies:</strong> Used to deliver advertisements more relevant to your interests.</li>
            </ul>
            <p>You can set your browser to refuse all cookies or to indicate when a cookie is being sent. However, refusing cookies may prevent you from using some parts of our Website.</p>

            <h2 className="text-2xl font-display text-header mt-8">6. Data Security</h2>
            <p>We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include technical, administrative, and physical safeguards. However, no internet transmission or electronic storage method is 100% secure, and we cannot guarantee absolute security.</p>

            <h2 className="text-2xl font-display text-header mt-8">7. Data Retention</h2>
            <p>We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements.</p>

            <h2 className="text-2xl font-display text-header mt-8">8. Children's Privacy</h2>
            <p>Our Website is not intended for children under the age of 16. We do not knowingly collect personal information from children under 16. If we discover that we have collected personal information from a child under 16 without verifiable parental consent, we will promptly remove that information from our servers. If you believe a child under 16 has provided us with personal information, please contact us at info@data-hat.com.</p>

            <h2 className="text-2xl font-display text-header mt-8">9. International Data Transfers</h2>
            <p>DataDon LLC is based in San Jose, California, USA. If you are located outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States, where our servers are located and our central database is operated. By using our Website, you consent to the transfer of your information to the United States.</p>
            <p>For users in the EEA and UK, we ensure that any transfer of personal data outside the EEA or UK complies with GDPR, for instance, by relying on standard contractual clauses or other appropriate safeguards.</p>

            <h2 className="text-2xl font-display text-header mt-8">10. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy periodically to reflect changes in our practices or for operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top. We encourage you to review this Privacy Policy regularly for any updates.</p>

            <h2 className="text-2xl font-display text-header mt-8">11. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, your privacy rights, or our data practices, please contact us:</p>
            <div className="bg-muted/50 p-6 rounded-lg mt-4">
              <p><strong>Company:</strong> DataDon LLC</p>
              <p><strong>Location:</strong> San Jose, California USA 95135</p>
              <p><strong>Email:</strong> info@data-hat.com</p>
              <p><strong>Website:</strong> www.data-hat.com</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
