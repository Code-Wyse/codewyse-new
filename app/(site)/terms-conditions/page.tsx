import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms And Condition : Codewyse",

  // other metadata
  description: "Terms And Condition : Codewyse"
};

const page = () => {
  return (
    <section className="pt-[100px] pb-10">
    <div className=" mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
      <h1 className="text-4xl font-bold text-black mb-6 text-center">Terms and Conditions</h1>

      <p className="text-gray-600 mb-6 text-center">
        Last updated: April 27, 2025
      </p>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        {/* Section 1 */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Welcome to [Your Company Name]! These Terms and Conditions outline the rules and regulations
            for the use of our website. By accessing this website, we assume you accept these terms.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">2. Intellectual Property Rights</h2>
          <p>
            Other than the content you own, under these Terms, [Your Company Name] and/or its licensors own
            all the intellectual property rights and materials contained in this Website.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">3. Restrictions</h2>
          <p>
            You are specifically restricted from all of the following: publishing any Website material in any media, 
            selling or commercializing Website material, using this Website in any way that impacts user access, etc.
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">4. Limitation of Liability</h2>
          <p>
            In no event shall [Your Company Name], nor any of its officers, directors and employees, 
            be held liable for anything arising out of or in any way connected with your use of this Website.
          </p>
        </div>

        {/* Add more sections as needed */}
      </div>
    </div>
  </section>
  );
};

export default page;
