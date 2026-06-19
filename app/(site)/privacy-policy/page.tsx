import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Codewyse privacy policy: how we collect, use and protect your data across our web, mobile, AI & ML, SaaS and CRM services.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const page = () => {
  return (
    <section className="pt-[100px] pb-10">
      <div className=" mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        <h1 className="text-4xl font-bold text-black mb-6 text-center">Privacy Policy</h1>

        <p className="text-gray-600 mb-6 text-center">
          Effective Date: April 30, 2025
        </p>
        <p className="text-gray-600 mb-6 text-center">
          Last Updated: April 30, 2025
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <div>
            <p>At <b>CodeWyse</b>, your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.</p>
          </div>
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2"> 1. Information We Collect</h2>
            <p>We collect both personal and non-personal information to provide and improve our services.</p>
            <h2 className="text-2xl font-semibold mb-2">  Personal Information:</h2>
            <p>- Full name
              - Email address
              - Phone number
              - Business name and website (if applicable)
              - Billing and payment details (when purchasing products)
            </p>
            <h2 className="text-2xl font-semibold mb-2">  Non-Personal Information:</h2>
            <p>- Browser type and version
              - IP address
              - Pages visited and time spent on site
              - Device type and operating system
            </p>

          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2"> 2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li> Deliver products and services you've requested  </li>
              <li>Respond to inquiries and support requests</li>
              <li> Send updates, offers, and transactional emails  </li>
              <li>Improve website functionality and user experience</li>
              <li> Ensure security, compliance, and detect fraud</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">3. How We Share Your Information</h2>
            <p>We do *not* sell your personal data. We only share information with third parties under these circumstances:</p>
            <ul>
              <li> <b>Service providers:</b> Such as payment gateways, email marketing platforms, or hosting providers (e.g., Stripe, Mailchimp, Vercel)  </li>
              <li><b>Legal obligations:</b> If required by law or to respond to legal requests </li>
              <li><b>Business transfers:</b> In case of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">4. *Cookies and Tracking Technologies*</h2>
            <p>We use cookies and similar technologies to:</p>
            <ul><li>Analyze site traffic </li>
            <li> Remember your preferences</li>
            <li>Improve site functionality</li>
            </ul>
            <p>You can control or disable cookies through your browser settings.</p>
          </div>

         <div>
            <h2 className="text-2xl font-semibold mb-2"> 5. Data Retention</h2>
            <p>We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy or comply with legal obligations.</p>
          </div>


                   <div>
            <h2 className="text-2xl font-semibold mb-2"> 6. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul>
              <li>Access the data we hold about you  </li>
              <li> Request correction or deletion of your data  </li>
              <li> Opt out of marketing communications</li>
              <li>Withdraw consent at any time (where applicable)</li>
            </ul>
            <p>To exercise your rights, please email us at <a href="mailto:info@codewyse.io">info@codewyse.io</a>
</p>
          </div>
          

          <div>
            <h2 className="text-2xl font-semibold mb-2">7. Data Security</h2>
            <p>We use industry-standard practices to safeguard your personal information, including HTTPS encryption, firewalls, and secure data storage.</p>
            <p>However, no method of transmission or storage is 100% secure, so we cannot guarantee absolute security.</p>
          </div>

                    <div>
            <h2 className="text-2xl font-semibold mb-2">8. Children’s Privacy</h2>
            <p>CodeWyse does not knowingly collect or solicit personal data from children under the age of 13. If we discover we’ve received information from a child without parental consent, we will delete it immediately.</p>
          </div>


              <div>
            <h2 className="text-2xl font-semibold mb-2">9. Third-Party Links</h2>
            <p>Our website or services may contain links to third-party websites. We are not responsible for the privacy practices of those sites. We recommend reviewing their privacy policies separately.</p>
          </div>

                        <div>
            <h2 className="text-2xl font-semibold mb-2">10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. The most recent version will always be posted on this page with the effective date. Your continued use of our services implies acceptance of any changes.</p>
          </div>

                                  <div>
            <h2 className="text-2xl font-semibold mb-2">11. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our data practices, contact us at:</p>
            <ul><li>
              <a href="mailto:info@codewyse.io">info@codewyse.io</a></li>
              <li><a href="https://www.codewyse.io">www.codewyse.io</a></li></ul>
          </div>

          {/* Add more sections as needed */}
        </div>
      </div>
    </section>
  );
};

export default page;
