import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping & Service Delivery Policy",
  description:
    "How Codewyse delivers its digital software and development services — delivery methods, timelines, acceptance and support. No physical shipping is involved.",
  alternates: { canonical: "/service-delivery-policy" },
  robots: { index: true, follow: true },
};

const page = () => {
  return (
    <section className="pt-[100px] pb-10">
      <div className=" mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        <h1 className="text-4xl font-bold text-black mb-6 text-center">
          Shipping &amp; Service Delivery Policy
        </h1>

        <p className="text-gray-600 mb-6 text-center">
          Effective Date: June 19, 2026
        </p>
        <p className="text-gray-600 mb-6 text-center">
          Last Updated: June 19, 2026
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <div>
            <p>
              <b>CodeWyse</b> provides digital software development and
              professional services. We do <b>not</b> ship physical goods. This
              policy explains how our services are delivered, the typical
              timelines, and how delivery is confirmed.
            </p>
          </div>

          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">1. Digital Delivery Only</h2>
            <p>
              All our products and services — including web applications, mobile
              apps, AI &amp; ML solutions, SaaS platforms, MVPs and CRM systems —
              are delivered electronically. There is no physical shipment,
              courier, or postal delivery involved, and therefore no shipping
              charges apply.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">2. How We Deliver</h2>
            <p>Depending on the engagement, deliverables are provided through:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access to a hosted application URL or staging/production environment.</li>
              <li>Source code delivered via a Git repository (e.g. GitHub, GitLab, Bitbucket).</li>
              <li>Documentation, design files, and credentials shared securely by email or a project workspace.</li>
              <li>Deployment to your chosen cloud or app store account, where applicable.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">3. Delivery Timelines</h2>
            <p>
              Timelines are defined in the project proposal, quotation, or
              statement of work agreed before commencement. Custom development
              is delivered in milestones or phases, and estimated dates are
              communicated for each. Timelines may be adjusted by mutual
              agreement when scope changes or when client-side dependencies
              (content, approvals, third-party access) affect the schedule.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Confirmation &amp; Acceptance</h2>
            <p>
              Each milestone or final deliverable is considered delivered once
              we provide access to the relevant code, environment, or files and
              notify you. We invite your review and feedback during an agreed
              acceptance window. If we do not receive feedback within that
              window, the deliverable is treated as accepted.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">5. Support After Delivery</h2>
            <p>
              Post-delivery support, warranty, or maintenance terms (if any) are
              specified in your agreement. Additional support and enhancements
              can be arranged through a separate maintenance or retainer plan.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">6. Contact Us</h2>
            <p>
              For questions about service delivery, contact us at:
            </p>
            <ul className="list-disc pl-6">
              <li>
                Email: <a href="mailto:info@codewyse.io">info@codewyse.io</a>
              </li>
              <li>
                Phone (Pakistan):{" "}
                <a href="tel:+923353909432">+92 335 3909 432</a>
              </li>
              <li>Office (Pakistan): 184 Alma 1, Emaar DHA, Islamabad</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
