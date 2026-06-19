import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Return & Refund Policy",
  description:
    "Codewyse return and refund policy for custom software, web, mobile, AI & ML, SaaS and CRM development services — eligibility, timeframes and how to request a refund.",
  alternates: { canonical: "/refund-policy" },
  robots: { index: true, follow: true },
};

const page = () => {
  return (
    <section className="pt-[100px] pb-10">
      <div className=" mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        <h1 className="text-4xl font-bold text-black mb-6 text-center">
          Return &amp; Refund Policy
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
              At <b>CodeWyse</b>, we want every client to be satisfied with our
              work. Because we provide custom software development and
              professional services (rather than physical or off-the-shelf
              products), this policy explains when payments are refundable, the
              applicable timeframes, and how to request a refund.
            </p>
          </div>

          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">1. Nature of Our Services</h2>
            <p>
              Codewyse delivers bespoke web, mobile, AI &amp; ML, SaaS, MVP and
              CRM development services. Work is typically scoped, quoted, and
              delivered in agreed milestones or phases. Refund eligibility
              depends on the stage of the project at the time a request is made.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">2. Refund Eligibility</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <b>Before work begins:</b> If you have made a payment or deposit
                and no work, planning, or resource allocation has yet started,
                you may request a full refund within <b>7 days</b> of payment.
              </li>
              <li>
                <b>After work has begun:</b> Once discovery, design, development,
                or any other work has commenced, payments and deposits for work
                already performed are <b>non-refundable</b>. Any unused,
                pre-paid amount not yet allocated to delivered work may be
                refunded on a pro-rata basis at our discretion.
              </li>
              <li>
                <b>Completed milestones:</b> Payments tied to milestones that
                have been delivered and accepted are non-refundable.
              </li>
              <li>
                <b>Subscriptions / retainers:</b> Recurring service or
                maintenance fees may be cancelled for future billing cycles but
                are non-refundable for the current cycle once it has started.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">3. Non-Refundable Items</h2>
            <p>The following are not eligible for refunds:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Third-party costs incurred on your behalf (e.g. licenses, hosting, domains, paid APIs).</li>
              <li>Work that has been delivered, reviewed, and accepted.</li>
              <li>Custom work cancelled by the client after development has started.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">4. How to Request a Refund</h2>
            <p>
              To request a refund, email us at{" "}
              <a href="mailto:info@codewyse.io">info@codewyse.io</a> with your
              order/invoice reference, the project name, and the reason for your
              request. We will review eligible requests and respond within{" "}
              <b>5–7 business days</b>.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">5. Processing of Refunds</h2>
            <p>
              Approved refunds are issued to the original payment method used at
              the time of purchase. Depending on your bank or payment provider,
              it may take <b>7–14 business days</b> for the refunded amount to
              appear in your account.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">6. Disputes &amp; Chargebacks</h2>
            <p>
              We encourage you to contact us first so we can resolve any concern
              directly. Raising a chargeback before contacting us may delay
              resolution. We are committed to fair, good-faith outcomes for
              every client.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
            <p>
              For any questions about this Return &amp; Refund Policy, contact
              us at:
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
              <li>
                Phone (USA): <a href="tel:+18886802233">+1 888 680 2233</a>
              </li>
              <li>Office (USA): 30 N Gould St Ste R, Sheridan, WY 82801</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
