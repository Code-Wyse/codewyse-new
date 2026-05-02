import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the Codewyse terms and conditions for engaging our web, mobile, AI & ML, SaaS and CRM development services.",
  alternates: { canonical: "/terms-conditions" },
  robots: { index: true, follow: true },
};

const page = () => {
  return (
    <section className="pt-[100px] pb-10">
      <div className=" mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        <h1 className="text-4xl font-bold text-black mb-6 text-center">Terms and Conditions</h1>

        <p className="text-gray-600 mb-6 text-center">
          Last Updated: April 30, 2025
        </p>
        <p className="text-gray-600 mb-6 text-center">
          Effective Date: April 30, 2025
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          {/* Section 1 */}
          <div>
            <p>Welcome to <b>CodeWyse</b>. By using our website, services, or any associated products, you agree to the following terms and conditions. Please read them carefully.</p>
            <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing or using any part of the CodeWyse platform, services, or deliverables, you confirm your acceptance of these Terms and Conditions and agree to be legally bound by them.

            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">2. Scope of Agreement</h2>
            <p>
             This agreement becomes effective on the date you first engage with our services, submit an inquiry, or purchase a product from CodeWyse. These terms apply to all users, clients, and visitors.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">3. Product Licensing and Use  </h2>
            <p>
             CodeWyse may offer software products such as boilerplates or pre-built modules (e.g., authentication systems, payment gateways, CMS setups). These are licensed to you under a single-use, perpetual license model unless otherwise stated.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">You may:</h2>
            <p>
            - Use the software for commercial and personal projects.  <br/>
- Customize and integrate modules as needed for your project.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">You may not:</h2>
            <p>
- Resell, redistribute, or sublicense the software without explicit written permission.  <br/>
- Use our modules in a way that violates applicable laws or regulations.

            </p>
            <p>CodeWyse retains the right to revoke access or licensing if misuse, redistribution, or violations occur.</p>
          </div>


          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Refund Policy  </h2>
            <p>Due to the nature of digital assets and source code, all sales of CodeWyse software products are *final*. No refunds or exchanges will be provided once access or files have been delivered.</p>
          </div>

                    <div>
            <h2 className="text-2xl font-semibold mb-2"> 5. Service Disclaimer</h2>
            <p>While we aim to deliver high-performance solutions, CodeWyse does not guarantee that any software, site, or service we build will be free from errors or interruptions. All offerings are provided "as is" without warranties of any kind.</p>
          </div>

              <div>
            <h2 className="text-2xl font-semibold mb-2"> 6. Limitation of Liability </h2>
            <p>CodeWyse will not be liable for any indirect, incidental, or consequential damages, including but not limited to lost profits, business disruption, or data loss. In any case, our total liability is limited to the amount paid by you directly to CodeWyse for the product or service in question.</p>
          </div>


              <div>
            <h2 className="text-2xl font-semibold mb-2"> 7. Client Responsibilities </h2>
            <p>You are solely responsible for any content, data, or third-party integrations you provide. CodeWyse is not liable for outcomes caused by user-generated content or external system changes (e.g., API deprecations).</p>
          </div>

             <div>
            <h2 className="text-2xl font-semibold mb-2"> 8. Price Changes   </h2>
            <p>We may update the pricing of our products and services at any time as our offerings evolve. Early purchases are honored at the price paid, and any discounts offered are valid at the time of purchase only.</p>
          </div>


                       <div>
            <h2 className="text-2xl font-semibold mb-2">9. Governing Law and Jurisdiction</h2>
            <p>These Terms and Conditions are governed by the laws of [Your Jurisdiction – e.g., Canada, UAE, etc.]. Any disputes shall be resolved in the courts of that jurisdiction.</p>
          </div>

                 <div>
            <h2 className="text-2xl font-semibold mb-2"> 10. Independent Relationship </h2>
            <p>You agree that no partnership, joint venture, employment, or agency relationship exists between you and CodeWyse. You may not represent yourself as an agent or affiliate of CodeWyse without written permission.</p>
            <p>For questions regarding our terms or if you require a custom licensing agreement, please contact us at: <a href="mailto:hello@codewyse.io">hello@codewyse.io</a></p>
          </div>

          {/* Add more sections as needed */}
        </div>
      </div>
    </section>
  );
};

export default page;
