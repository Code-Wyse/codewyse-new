import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Thompson",
    designation: "Co-Founder @ ThriveCommerce",
    image: image1,
    content:
      "Working with CodeWyse felt like having an in-house team. They helped us launch our MVP in just 5 weeks with a clean, scalable architecture. Their communication, project planning, and design feedback were top-notch.",
  },
  {
    id: 2,
    name: "Luis Fernandez",
    designation: "CTO @ RevoStack",
    image: image2,
    content:
      "We approached CodeWyse to rebuild our legacy mobile app. Not only did they modernize the stack, but they also introduced UX improvements that boosted engagement by 40%. It was a strategic partnership from day one.",
  },
  {
    id: 3,
    name: "Amanda Greene",
    designation: "Founder @ StyleBoard",
    image: image1,
    content:
      "The team at CodeWyse took the time to understand our brand and built a stunning eCommerce site that performs flawlessly. Their attention to detail and ability to translate our vision into reality exceeded expectations.",
  },
  {
    id: 4,
    name: "James Bennett",
    designation: "Product Manager @ HealthSync",
    image: image2,
    content:
      "CodeWyse helped us launch a cross-platform mobile app with complex integrations under a tight timeline. The result? A secure, high-performing app and a seamless deployment experience. Highly recommend them for startup-scale builds.",
  },
];
