import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your Codewyse account.",
  alternates: { canonical: "/auth/signup" },
  robots: { index: false, follow: false },
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
