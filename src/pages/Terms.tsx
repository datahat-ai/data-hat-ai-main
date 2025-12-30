import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms and Conditions | DataHat AI</title>
        <meta name="description" content="DataHat AI Terms and Conditions - The terms governing your use of our website and services." />
      </Helmet>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-display text-header mb-4">Terms and Conditions</h1>
          <p className="text-muted-foreground mb-8"><strong>Effective Date:</strong> May 29, 2025</p>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            <p>
              Welcome to www.data-hat.com (the "Website"), owned and operated by DataDon LLC ("we," "us," or "our"), located in San Jose, California, USA. These Terms and Conditions ("Terms") govern your access to and use of our Website, including any content, functionality, and services offered on or through www.data-hat.com.
            </p>
            <p>
              By accessing or using the Website, you agree to be bound by these Terms and our Privacy Policy, which is incorporated herein by reference. If you do not agree to these Terms, you must not access or use the Website.
            </p>

            <h2 className="text-2xl font-display text-header mt-8">1. Acceptance of Terms</h2>
            <p>
              By using the Website, you affirm that you are of legal age to form a binding contract with DataDon LLC, or if you are not, that you have obtained parental or guardian consent to use the Website and that your parent or guardian agrees to these Terms on your behalf. You agree that you are responsible for ensuring that all persons who access the Website through your internet connection comply with these Terms.
            </p>

            <h2 className="text-2xl font-display text-header mt-8">2. Changes to the Terms</h2>
            <p>
              We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them and apply to all access to and use of the Website thereafter. Your continued use of the Website following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.
            </p>

            <h2 className="text-2xl font-display text-header mt-8">3. Accessing the Website and Account Security</h2>
            <p>
              We reserve the right to withdraw or amend this Website, and any service or material we provide on the Website, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Website is unavailable at any time or for any period.
            </p>
            <p>You are responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Making all arrangements necessary for you to have access to the Website.</li>
              <li>Ensuring that all persons who access the Website through your internet connection are aware of these Terms and comply with them.</li>
            </ul>
            <p>
              If you choose, or are provided with, a username, password, or any other piece of information as part of our security procedures, you must treat such information as confidential, and you must not disclose it to any other person or entity. You also acknowledge that your account is personal to you and agree not to provide any other person with access to this Website or portions of it using your username, password, or other security information.
            </p>
            <p>
              We have the right to disable any user name, password, or other identifier, whether chosen by you or provided by us, at any time in our sole discretion for any or no reason, including if, in our opinion, you have violated any provision of these Terms.
            </p>

            <h2 className="text-2xl font-display text-header mt-8">4. Intellectual Property Rights</h2>
            <p>
              The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by DataDon LLC, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p>These Terms permit you to use the Website for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Website, except as follows:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.</li>
              <li>You may store files that are automatically cached by your Web browser for display enhancement purposes.</li>
              <li>You may print or download one copy of a reasonable number of pages of the Website for your own personal, non-commercial use and not for further reproduction, publication, or distribution.</li>
              <li>If we provide desktop, mobile, or other applications for download, you may download a single copy to your computer or mobile device solely for your own personal, non-commercial use.</li>
              <li>If we provide social media features with certain content, you may take such actions as are enabled by such features.</li>
            </ul>
            <p>You must not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify copies of any materials from this site.</li>
              <li>Use any illustrations, photographs, video or audio sequences, or any graphics separately from the accompanying text.</li>
              <li>Delete or alter any copyright, trademark, or other proprietary rights notices from copies of materials from this site.</li>
            </ul>

            <h2 className="text-2xl font-display text-header mt-8">5. Trademarks</h2>
            <p>
              The DataDon LLC name, the Data-Hat logo, and all related names, logos, product and service names, designs, and slogans are trademarks of DataDon LLC or its affiliates or licensors. You must not use such marks without the prior written permission of DataDon LLC. All other names, logos, product and service names, designs, and slogans on this Website are the trademarks of their respective owners.
            </p>

            <h2 className="text-2xl font-display text-header mt-8">6. Prohibited Uses</h2>
            <p>You may use the Website only for lawful purposes and in accordance with these Terms. You agree not to use the Website:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
              <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent.</li>
              <li>To impersonate or attempt to impersonate DataDon LLC, a DataDon LLC employee, another user, or any other person or entity.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Website.</li>
            </ul>
            <p>Additionally, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Website in any manner that could disable, overburden, damage, or impair the site.</li>
              <li>Use any robot, spider, or other automatic device, process, or means to access the Website for any purpose.</li>
              <li>Use any manual process to monitor or copy any of the material on the Website without our prior written consent.</li>
              <li>Use any device, software, or routine that interferes with the proper working of the Website.</li>
              <li>Introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</li>
              <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Website.</li>
              <li>Attack the Website via a denial-of-service attack or a distributed denial-of-service attack.</li>
            </ul>

            <h2 className="text-2xl font-display text-header mt-8">7. Reliance on Information Posted</h2>
            <p>
              The information presented on or through the Website is made available solely for general information purposes. We do not warrant the accuracy, completeness, or usefulness of this information. Any reliance you place on such information is strictly at your own risk. We disclaim all liability and responsibility arising from any reliance placed on such materials by you or any other visitor to the Website.
            </p>

            <h2 className="text-2xl font-display text-header mt-8">8. Links from the Website</h2>
            <p>
              If the Website contains links to other sites and resources provided by third parties, these links are provided for your convenience only. We have no control over the contents of those sites or resources and accept no responsibility for them or for any loss or damage that may arise from your use of them.
            </p>

            <h2 className="text-2xl font-display text-header mt-8">9. Disclaimer of Warranties</h2>
            <p>
              You understand that we cannot and do not guarantee or warrant that files available for downloading from the internet or the Website will be free of viruses or other destructive code. You are responsible for implementing sufficient procedures and checkpoints to satisfy your particular requirements for anti-virus protection and accuracy of data input and output.
            </p>
            <p className="uppercase font-semibold">
              YOUR USE OF THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE IS AT YOUR OWN RISK. THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
            </p>

            <h2 className="text-2xl font-display text-header mt-8">10. Limitation on Liability</h2>
            <p className="uppercase font-semibold">
              TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL DATADON LLC, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
            </p>

            <h2 className="text-2xl font-display text-header mt-8">11. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless DataDon LLC, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Website.
            </p>

            <h2 className="text-2xl font-display text-header mt-8">12. Governing Law and Jurisdiction</h2>
            <p>
              All matters relating to the Website and these Terms, and any dispute or claim arising therefrom or related thereto, shall be governed by and construed in accordance with the internal laws of the State of California without giving effect to any choice or conflict of law provision or rule.
            </p>
            <p>
              Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Website shall be instituted exclusively in the federal courts of the United States or the courts of the State of California, in each case located in Santa Clara County, California.
            </p>

            <h2 className="text-2xl font-display text-header mt-8">13. Arbitration</h2>
            <p>
              At DataDon LLC's sole discretion, it may require you to submit any disputes arising from these Terms or use of the Website, including disputes arising from or concerning their interpretation, violation, invalidity, non-performance, or termination, to final and binding arbitration under the Rules of Arbitration of the American Arbitration Association applying California law.
            </p>

            <h2 className="text-2xl font-display text-header mt-8">14. Severability</h2>
            <p>
              If any provision of these Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms will continue in full force and effect.
            </p>

            <h2 className="text-2xl font-display text-header mt-8">15. Entire Agreement</h2>
            <p>
              The Terms and our Privacy Policy constitute the sole and entire agreement between you and DataDon LLC regarding the Website and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the Website.
            </p>

            <h2 className="text-2xl font-display text-header mt-8">16. Your Comments and Concerns</h2>
            <p>This Website is operated by DataDon LLC, located at San Jose, California USA 95135.</p>
            <p>All notices of copyright infringement claims should be sent to info@data-hat.com.</p>
            <p>All other feedback, comments, requests for technical support, and other communications relating to the Website should be directed to:</p>
            <div className="bg-muted/50 p-6 rounded-lg mt-4">
              <p><strong>Email:</strong> info@data-hat.com</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
