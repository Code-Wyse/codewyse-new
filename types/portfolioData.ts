// src/types/portfolioData.ts
import image1 from "@/public/images/user/user-01.png";

export type Tab = {
  id: string;
  title: string;
  content: string;
  bold: string;
  list: string[];
};
export type Portforlio = {
  id: any;
  image: string;
}

export type Project = {
  slug: string;
  semititle: string;
  title: string;
  description: string;
  bannerImage: string;
  process: string;
  processtitle: String;
  processtitle2: String;
  process2: string;
  tabs: Tab[];
  lastImage: string;
  longDescription: string[];
  logndescTitle: string;
  review: string;
  reviewName: string;
  designation: string;
  reviewimage: any;
  portfolio: Portforlio[];
};

export const projectData: Project[] = [
  {
    slug: "tordao",
    semititle: 'TORDAO ',
    title: "Technologies Used: Node.js, Tailwind CSS, GSAP Animation ",
    description: "Web 3.0 token platform built with a Node.js backend, Tailwind CSS UI, and interactive animations to deliver a sleek, immersive user experience.",
    bannerImage: "/images/project/tordao/front/CRM-Graphic-tordao.jpg",
    processtitle: 'The Challenge',
    process:
      "TORDAO aimed to launch a Web 3.0 token platform with a strong digital presence that educates users, establishes credibility in a competitive crypto space, and communicates complex blockchain utilities — all while remaining visually appealing and accessible across devices",
    processtitle2: 'Our Solution',
    process2: 'We crafted a high-performance, responsive website using modern technologies tailored for blockchain audiences. From UX strategy to development, every piece was optimized to boost engagement, minimize friction, and embody TORDAO futuristic brand identity.',
    tabs: [
      {
        id: "Web Design",
        title: "Web Design",
        content: "Using Node.js, we created a modular backend capable of scaling with growing token interactions. Tailwind CSS allowed us to rapidly style responsive components while keeping performance in mind. Animations were handled using GSAP, ensuring smooth transitions.",
        bold: 'Key Features:',
        list: [
          "REST API integrations for token data",
          "Wallet-ready components for future expansion",
          "Lazy-loaded sections and optimized asset delivery",
        ],
      },
      {
        id: "Web Development",
        title: "Web Development",
        content: "Using Node.js, we created a modular backend capable of scaling with growing token interactions. Tailwind CSS allowed us to rapidly style responsive components while keeping performance in mind. Animations were handled using GSAP, ensuring smooth transitions.",
        bold: 'Key Features:',
        list: [
          "REST API integrations for token data",
          "Wallet-ready components for future expansion",
          "Lazy-loaded sections and optimized asset delivery",
        ],
      },
      {
        id: "Branding",
        title: "Branding",
        content: "We helped TORDAO extend their vision into a compelling visual brand. From logo direction to color palette refinement, everything was made to reflect authority, community trust, and blockchain sophistication.",
        bold: 'Deliverables:',
        list: [
          "Visual identity guidelines",
          "Font system reflecting modern tech tone",
          "Iconography set optimized for mobile and web",
        ],
      },
    ],
    lastImage: "/images/project/tordao/result-illustration/1.png",
    logndescTitle: ' Results ',
    longDescription: [

      " Page load time: ~1.1s (desktop)",
      " Bounce rate reduced by 22%",
      " Token landing page conversions up by 30% (in first 4 weeks)"
    ],
    reviewName: 'Tordoa',
    reviewimage: image1,
    designation: "TORDAO Product Manager",
    review: "CodeWyse brought our Web3 vision to life with precision and creativity. Their design made our platform stand out, and the dev team was a dream to work with.",
    portfolio: [
      {
        id: 1,
        image: "/images/project/tordao/laptop-mockup/1.png",
      },
      {
        id: 2,
        image: "/images/project/tordao/laptop-mockup/2.png",
      },
      {
        id: 3,
        image: "/images/project/tordao/laptop-mockup/3.png",
      },
      {
        id: 4,
        image: "/images/project/tordao/laptop-mockup/4.png",
      },
      {
        id: 5,
        image: "/images/project/tordao/laptop-mockup/5.png",
      },
      {
        id: 6,
        image: "/images/project/tordao/laptop-mockup/6.png",
      },
      {
        id: 7,
        image: "/images/project/tordao/laptop-mockup/7.png",
      },
    ]

  },



  {
    slug: "trifits",
    semititle: 'Trifits',
    title: "Technologies Used: Flutter (Mobile App), Node.js (Backend), React (Admin Panel)",
    description: "Personalized fitness and meal planning app offering BMI-based nutrition programs and guided workout videos, supervised by certified nutritionists.",
    bannerImage: "/images/project/trifit/mobile-show-case/TRI.jpg",
    processtitle: 'The Challenge',
    process:
      "Trifits wanted to bridge the gap between personal training, nutrition, and tech. The goal was to deliver a cross-platform mobile app where users could receive meal and workout plans tailored to their BMI — all while ensuring expert oversight from registered nutritionists and trainers.",
    processtitle2: 'Our Solution',
    process2: 'We built a scalable fitness app powered by Node.js on the backend and Flutter for the mobile experience. Users receive customized plans based on BMI and activity level, with nutritionists assigning meal and fitness modules through a React-based admin portal. The app delivers video workouts, dietary tracking, and motivational progress features.',
    tabs: [
      {
        id: "App Design",
        title: "App Design",
        content: "Designed for simplicity and motivation, the app interface promotes daily engagement. The layout prioritizes clarity and ease-of-use with engaging visuals and progress feedback.",
        bold: 'Highlights:',
        list: [
          "BMI onboarding flow with avatar progress display",
          "Daily workout & meal card interface",
          "Video playback integration for guided exercises",
          "Push reminders for meals and workouts",
        ],
      },
      {
        id: "Web & Backend Development",
        title: "Web & Backend Development",
        content: "The Node.js backend processes user data securely and delivers real-time plan updates. React powers the admin dashboard, enabling nutritionists to upload plans, assign videos, and monitor user progress.",
        bold: 'Key Features:',
        list: [
          "BMI-based automatic plan generation",
          "Nutritionist portal to review and update user plans",
          "Video library management with tagging by fitness goal",
        ],
      },
      {
        id: "Branding",
        title: "Branding",
        content: "Trifits’ brand identity embodies strength, health, and simplicity. We created a vibrant, energetic palette and UX language to motivate users and reinforce their fitness goals.",
        bold: 'Deliverables:',
        list: [
          "Brand color scheme reflecting health and performance",
          "Iconography set for meals, workouts, progress, and alerts",
          "Typography system optimized for mobile reading",
        ],
      },
    ],
    lastImage: "/images/project-details/last-portfolio_img.jpg",
    logndescTitle: ' Results ',
    longDescription: [

      "Over 5,000 installs in the first 3 months",
      "80%+ user retention across week 1",
      "98% positive feedback from nutritionists using admin panel",
      "Video load time under 1.2 seconds",
    ],
    reviewName: 'Trifits',
    reviewimage: image1,
    designation: "Trifits CEO",
    review: "Trifits is now a complete digital trainer. The team nailed our vision — from BMI-based plans to easy nutritionist control. Our users love the experience",
     portfolio: [
      {
        id: 1,
        image: "/images/project/trifit/mobile-mockup/1.png",
      },
      {
        id: 2,
        image: "/images/project/trifit/mobile-mockup/2.png",
      },
      {
        id: 3,
        image: "/images/project/trifit/mobile-mockup/3.png",
      },
      {
        id: 4,
        image: "/images/project/trifit/mobile-mockup/4.png",
      },
      {
        id: 5,
        image: "/images/project/trifit/mobile-mockup/5.png",
      },
    ]
  },

  {
    slug: "junohouseclub",
    semititle: 'Juno House Club',
    title: "Technologies Used: WordPress (Custom Theme Development), PHP, SCSS, JavaScript",
    description: "A fully custom-coded WordPress website tailored for Juno House — a private women’s club — reflecting elegance, empowerment, and modern luxury. No page builders were used; everything was handcrafted for performance, flexibility, and brand precision.",
    bannerImage: "/images/project/Juno/front/CRM-Graphic-Juno.jpg",
    processtitle: 'The Challenge',
    process:
      "Juno House required a bespoke WordPress solution that mirrored the club's exclusive atmosphere and branding — without relying on heavy plugins or page builders. The site needed to be visually refined, content-flexible, and fast, with support for multilingual content and structured updates for events, press, and memberships.",
    processtitle2: 'Our Solution',
    process2: 'We developed a fully custom WordPress theme from the ground up. Every component — from the layout system to interactive elements — was built using clean PHP templates, SCSS for styling, and minimal JS for transitions. Admin editing was made seamless via ACF Pro, allowing Juno’s team full content control with zero risk of breaking layout integrity.',
    tabs: [
      {
        id: "Web Design",
        title: "Web Design",
        content: "Inspired by the elegance of Juno House’s interiors, the site features graceful typography, calm color palettes, and immersive layouts that make the digital experience feel as exclusive as the physical space.",
        bold: 'Highlights:',
        list: [
          "Custom homepage slider with layered parallax",
          "Typography-driven sections with smooth scroll reveals",
          "Handcoded components that align with printed brand collateral",
        ],
      },
      {
        id: "Custom WP Development",
        title: "Custom WP Development",
        content: "No themes or builders — this project is 100% custom code, written for performance, scalability, and precision.",
        bold: 'Key Features:',
        list: [
          "Clean PHP theme with no bloated dependencies",
          "ACF Pro-powered admin experience for intuitive content control",
          " Custom post types for Events, Testimonials, and Press",
          "Built-in support for multilingual content (WPML ready)",
          "Custom animations and transitions via JavaScript and GSAP",
        ],
      },
      {
        id: "Branding",
        title: "Branding",
        content: "We ensured that the mood of “New York meets Barcelona” translated into every hover, scroll, and transition. The website feels editorial yet inviting — balancing minimalism with flair.",
        bold: 'Deliverables:',
        list: [
          "Custom-styled forms and newsletter CTAs",
          "Visual identity integration (typography, logo rules, brand palette)",
          "Language switcher styled for luxury UX",
        ],
      },
    ],
    lastImage: "/images/project/Juno/result-illustration/1.png",
    logndescTitle: ' Results ',
    longDescription: [
      "100% custom-coded — zero builder lock-in or plugin bloat",
      "+35% page engagement after redesign",
      "Site loads in under 1.4 seconds globally",
      "Seamless EN/ES multilingual support with optimized SEO structure",
    ],
    reviewName: 'JunoHouse',
    reviewimage: image1,
    designation: "Juno House Team",
    review: "Juno’s online presence now feels like an extension of our physical experience. The attention to detail and custom craftsmanship is exactly what we hoped for.",
     portfolio: [
      {
        id: 1,
        image: "/images/project/Juno/laptop-mockup/1.png",
      },
      {
        id: 2,
        image: "/images/project/Juno/laptop-mockup/2.png",
      },
      {
        id: 3,
        image: "/images/project/Juno/laptop-mockup/3.png",
      },
      {
        id: 4,
        image: "/images/project/Juno/laptop-mockup/4.png",
      },
      {
        id: 5,
        image: "/images/project/Juno/laptop-mockup/5.png",
      },
      {
        id: 6,
        image: "/images/project/Juno/laptop-mockup/6.png",
      },
      {
        id: 7,
        image: "/images/project/Juno/laptop-mockup/7.png",
      },
    ]
  },


  {
    slug: "crazzypizza",
    semititle: 'Crazzy Pizza',
    title: "Technologies Used: WordPress (Custom Theme & Plugin Development), PHP, JavaScript, SCSS",
    description: "A fully custom-coded WordPress website for Crazzy Pizza — a multinational pizza brand with delivery and pickup options. We crafted a custom theme and developed bespoke plugins to streamline order flows, location management, and menu interactions — all without relying on third-party builders or ACF.",
    bannerImage: "/images/project/crazy-pizza/mobile-show-case/CRM-Graphic-Crazy-Pizza.jpg",
    processtitle: 'About Crazzy Pizza',
    process:
      "Crazzy Pizza is a globally recognized brand that brings bold flavors, fast delivery, and an energetic brand voice to the pizza industry. With international locations and a growing online customer base, the brand required a powerful and easy-to-manage platform for showcasing menus, managing store availability, and handling location-specific orders.",
    processtitle2: 'Our Solution',
    process2: 'We built a custom WordPress theme and multiple purpose-built plugins to cover everything from product display to store hours — all optimized for performance, admin ease, and scalability. Unlike typical WordPress sites, no page builders or ACF were used. Every feature was developed with clean code to ensure lightweight performance and full control over UI and logic.',
    tabs: [
      {
        id: "Key Features",
        title: "Key Features",
        content: " ",
        bold: '',
        list: [
          "Dynamic Menu Plugin – Admins can add, update, or categorize pizzas and add-ons with an easy backend interface",
          "Store & Pickup Logic Plugin – Location-based availability and store status (open/closed) controls",
          "Custom Store Hours Plugin – Schedule-based logic for opening times withautomatic toggles",
          "Order Forwarding Ready – Backend structured to support third-party order APIs or redirections",
          "Mobile-First Responsive Theme – Custom-coded layout optimized for food ordering UX"
        ],
      },
      {
        id: "Design & Experience",
        title: "Design & Experience",
        content: "The design embraces Crazzy Pizza’s fun, modern identity while prioritizing conversion. Strong visuals, bold colors, and user-focused navigation make it easy to explore menus, switch between delivery and pickup, and complete an order quickly.",
        bold: '',
        list: [
          ""
        ],
      },
    ],
    lastImage: "/images/project/crazy-pizza/result-illustration/1.png",
    logndescTitle: ' Results ',
    longDescription: [
      "Load time under 1.4 seconds (no bloated plugins)",
      "+60% mobile conversion rate after redesign",
      "Fully secure and easy to maintain via custom-coded backend",
      "Zero third-party dependencies – completely controlled system",
    ],
    reviewName: ' Crazzy Pizza',
    reviewimage: image1,
    designation: "Crazzy Pizza Management",
    review: "We love how everything just works. Managing pizzas, pickup times, and orders is simpler than ever — and the site is blazing fast.",
     portfolio: [
      {
        id: 1,
        image: "/images/project/crazy-pizza/laptop-mockup/1.png",
      },
      {
        id: 2,
        image: "/images/project/crazy-pizza/laptop-mockup/2.png",
      },
      {
        id: 3,
        image: "/images/project/crazy-pizza/laptop-mockup/3.png",
      },
      {
        id: 4,
        image: "/images/project/crazy-pizza/laptop-mockup/4.png",
      },
      {
        id: 5,
        image: "/images/project/crazy-pizza/laptop-mockup/5.png",
      },
      {
        id: 6,
        image: "/images/project/crazy-pizza/laptop-mockup/6.png",
      },
      {
        id: 7,
        image: "/images/project/crazy-pizza/laptop-mockup/7.png",
      },
    ]
  },


  {
    slug: "ensure-ups",
    semititle: 'Ensure UPS',
    title: "Technologies Used: Flutter (Mobile App), Laravel (Backend), ESP32 (Device Firmware with cURL & BLE)",
    description: "An intelligent UPS monitoring system with mobile app access, real-time inverter status, historical logs, and smart alerts — integrated with a custom ESP firmware and BLE service.",
    bannerImage: "/images/project/ensure/mobile-show-case/ENSURE.jpg",
    processtitle: 'The Challenge',
    process:
      "Ensure UPS needed a smart energy monitoring solution that would empower users to monitor their UPS/inverter health, get real-time alerts, and review usage logs. The challenge was to ensure seamless integration between the hardware (ESP), mobile app, and backend while maintaining real-time responsiveness and BLE communication stability.",
    processtitle2: 'Our Solution',
    process2: 'We built a mobile-first, connected platform using Flutter for cross-platform compatibility, Laravel for secure backend logic, and a custom ESP firmware that pushes status updates using cURL to the API and communicates locally via BLE. The system supports device pairing, alert handling, real-time tracking, and historical log visualization.',
    tabs: [
      {
        id: "App Design",
        title: "App Design",
        content: "The Flutter app is designed for real-time feedback and reliability. Users can connect to their UPS device via BLE, monitor live charging status, view voltage/current stats, and receive state-based alerts.",
        bold: 'Highlights:',
        list: [
          "Real-time charging status and voltage display",
          "BLE pairing and connection feedback",
          "Log screen with filter by time range",
          "Clean UI with dark/light mode support"
        ],
      },
      {
        id: "Backend Integration",
        title: "Backend Integration",
        content: "The ESP32 device was programmed to send cURL requests to Laravel APIs for remote monitoring, while simultaneously supporting BLE-based data transfers for local communication. Laravel handles API authentication, data logging, and alert broadcasting via Firebase.",
        bold: 'Key Features:',
        list: [
          "ESP sends periodic UPS data via secure cURL POST",
          "BLE service for direct mobile interaction (offline mode)",
          "Alert system based on inverter status: Charging, Discharging, Full, Failure",
          "History logs with timestamps, voltage data, and duration calculation",
        ],
      },
      {
        id: "Branding",
        title: "Branding",
        content: "Ensure UPS branding focused on clarity, stability, and trust — values critical to energy management. The user interface reflects a calm, tech-savvy tone with intuitive icons and structured feedback.",
        bold: 'Deliverables:',
        list: [
          "Custom icons for charging states",
          "High-contrast color palette for visibility in daylight",
          "UX copywriting for alerts and technical terms",
        ],
      },
    ],
    lastImage: "/images/project-details/last-portfolio_img.jpg",
    logndescTitle: ' Results ',
    longDescription: [
      "Average BLE data sync time: < 1s",
      "ESP to server ping cycle: Every 60 seconds",
      "Logged 10,000+ data entries across devices in first month",
      "Alert latency: < 3 seconds from event to notification",
    ],
    reviewName: 'JunoHouse',
    reviewimage: image1,
    designation: "Juno House Team",
    review: "Ensure UPS is now smarter than ever. The seamless sync between hardware,server, and app has made monitoring incredibly easy for our users.",
     portfolio: [
      {
        id: 1,
        image: "/images/project/ensure/laptop-mockup/1.png",
      },
      {
        id: 2,
        image: "/images/project/ensure/laptop-mockup/2.png",
      },
      {
        id: 3,
        image: "/images/project/ensure/laptop-mockup/3.png",
      },
      {
        id: 4,
        image: "/images/project/ensure/laptop-mockup/4.png",
      },
      {
        id: 5,
        image: "/images/project/ensure/laptop-mockup/5.png",
      },
    ]
  },

  {
    slug: "vnexia",
    semititle: 'Vnexia',
    title: "Technologies Used: NestJS (Backend), Flutter (Mobile App), Blade (Web Portal)",
    description: "AI-powered health & safety monitoring platform with a real-time mobile app and web dashboard built to ensure workplace compliance and rapid incident response.",
    bannerImage: "/images/project/vnexia/mobile-show-case/VNEXIA.jpg",
    processtitle: 'The Challenge',
    process:
      "Vnexia aimed to digitize health and safety operations using AI — enabling real-time worker monitoring, risk detection, and reporting across industrial sites. The challenge was to engineer a platform that is fast, secure, scalable, and intuitive for both field workers and safety managers.",
    processtitle2: 'Our Solution',
    process2: 'We built a cross-platform solution with a NestJS backend powering both a Flutter-based mobile app and a Laravel Blade web dashboard. The architecture was optimized for real-time AI alert handling, robust worker tracking, and compliance logging — all while maintaining a seamless user experience across devices.',
    tabs: [
      {
        id: "Web Design",
        title: "Web Design",
        content: "The admin and safety dashboards were designed with usability and visibility in mind. The UI offers intuitive access to area management, AI-generated alerts, device status, and live feeds.",
        bold: 'Highlights:',
        list: [
          "Clean grid-based layout using Blade and Bootstrap",
          "Visual alert tables and graphs for quick assessment",
          "Dynamic modals for real-time action and user/device linking",
        ],
      },
      {
        id: "Web & Mobile Development",
        title: "Web & Mobile Development",
        content: "The backend, built on NestJS, provides secure, modular APIs for both mobile and web clients. The Flutter mobile app delivers real-time notifications, device pairing, and worker interaction features with native performance.",
        bold: 'Key Features:',
        list: [
          "Real-time AI alerts (push + web notifications)",
          "Area and worksite management with device keys",
          " BLE device integration on mobile",
          "Secure user access control (admins, managers, workers)",
        ],
      },
      {
        id: "Branding",
        title: "Branding",
        content: "Vnexia’s brand reflects precision, care, and innovation in safety. We developed a simple, trustworthy identity for an industrial audience — blending professional aesthetics with tech-forward UX.",
        bold: 'Deliverables:',
        list: [
          "Brand palette and UI consistency rules",
          "Icons representing alert levels and safety equipment",
          "Font system optimized for readability under field conditions",
        ],
      },
    ],
    lastImage: "/images/project-details/last-portfolio_img.jpg",
    logndescTitle: ' Results ',
    longDescription: [
      "Instant AI alert delivery to mobile in <2 seconds",
      "15+ active worksites managed within first launch phase",
      "99.9% API uptime during 24/7 monitoring",
      "Smooth performance on Android/iOS via Flutter",
    ],
    reviewName: 'Vnexia',
    reviewimage: image1,
    designation: "Vnexia CTO",
    review: "CodeWyse helped us bring our AI vision to life. From dashboard to mobile alerts, the experience feels intuitive and robust. Our safety response time has improved drastically.",
     portfolio: [
      {
        id: 1,
        image: "/images/project/vnexia/laptop-mockup/1.png",
      },
      {
        id: 2,
        image: "/images/project/vnexia/laptop-mockup/2.png",
      },
      {
        id: 3,
        image: "/images/project/vnexia/laptop-mockup/3.png",
      },
      {
        id: 4,
        image: "/images/project/vnexia/laptop-mockup/4.png",
      },
      {
        id: 5,
        image: "/images/project/vnexia/laptop-mockup/5.png",
      },
    ]
  },

  {
    slug: "kseic",
    semititle: 'kseic',
    title: "Technologies Used: WordPress (Custom Theme & Plugin Development), PHP, MySQL, jQuery",
    description: "KSEIC is an elite tactical competition website developed for managing registrations, real-time result tracking, and overall performance display for SWAT teams from around the globe. The platform was custom-built using WordPress with bespoke theme and plugin development to support the unique needs of the tournament.",
    bannerImage: "/images/project/Kuwait-Swat/front/CRM-Graphic-KS.jpg",
    processtitle: 'The Challenge',
    process:
      "KSEIC needed a platform capable of handling team registrations, displaying daily event scores, and automatically compiling results for multi-day tournaments — all in a high-security and performance-sensitive environment.",
    processtitle2: 'Our Solution',
    process2: 'We created a fully customized WordPress solution, combining a tailor-made theme for branding and user experience with a powerful plugin that manages registration flows, scoring inputs, and live tournament result generation. The platform supports real-time updates, secure role-based access, and mobile-first responsive.',
    tabs: [
      {
        id: "Custom Theme",
        title: "Custom Theme",
        content: "Designed for a sharp, tactical aesthetic reflecting the SWAT brand identity, while maintaining usability across devices.",
        bold: 'Highlights:',
        list: [
          "Branded UI with dark-themed tactical visuals",
          "Homepage with countdown, highlights, and result feeds",
          "Team profiles and country-wise participation breakdown",
          "Fully responsive and multilingual-ready"
        ],
      },
      {
        id: "Custom Plugin",
        title: "Custom Plugin",
        content: "A powerful plugin was built from scratch to handle every aspect of the tournament’s backend.",
        bold: 'Key Features:',
        list: [
          "Secure team registration with validation and file uploads",
          "Daily event score submissions by admins",
          "Automatic calculation of overall tournament rankings",
          "Role-based access for admins, scorers, and viewers",
          "Dynamic results table generation with print-ready exports"
        ],
      },
      {
        id: "Branding",
        title: "Branding",
        content: "The KSEIC brand emphasizes international competition, elite tactics, and professionalism. The web presence reflects this with a commanding, structured interface.",
        bold: 'Deliverables:',
        list: [
          "Custom logo and icon set for SWAT categories",
          "Visual hierarchy for events, teams, and results",
          "Typography tuned for both Arabic and English audiences",
        ],
      },
    ],
    lastImage: "/images/project/Kuwait-Swat/result-illustration/1.png",
    logndescTitle: 'Results',
    longDescription: [
      "100+ teams registered from 25+ countries",
      "Live results published daily during the competition",
      "Zero downtime during the full 4-day event",
      "100% accuracy in automated scoring calculations",
    ],
    reviewName: 'KSEIC',
    reviewimage: image1,
    designation: "Event Coordinator",
    review: "KSEIC was a major international event — and our website held up perfectly. The custom plugin handled scores and rankings just as we envisioned. Kudos to the team for delivering a flawless solution.",
     portfolio: [
      {
        id: 1,
        image: "/images/project/vnexia/laptop-mockup/1.png",
      },
      {
        id: 2,
        image: "/images/project/vnexia/laptop-mockup/2.png",
      },
      {
        id: 3,
        image: "/images/project/vnexia/laptop-mockup/3.png",
      },
      {
        id: 4,
        image: "/images/project/vnexia/laptop-mockup/4.png",
      },
      {
        id: 5,
        image: "/images/project/vnexia/laptop-mockup/5.png",
      },
    ]
  },


    {
    slug: "yeah-store",
    semititle: 'yeah-store',
    title: "Technologies Used: Node.js (Backend), Vue.js (Frontend)",
    description: "Yeah Store is a frontend generation tool that allows users to import products from major online marketplaces with ease. By simply selecting categories and product quantity, users can instantly generate visually appealing product pages for their eCommerce store.",
    bannerImage: "/images/project/YeahStore/front/CRM-Graphic-YS.jpg",
    processtitle: 'The Challenge',
    process:
      "Online retailers often struggle with building quick and attractive storefronts that stay updated with trending products across marketplaces. Manually curating products and designing storefronts takes time and limits scalability.",
    processtitle2: 'Our Solution',
    process2: 'We developed an automated tool where users can generate full product pages based on selected marketplace categories and number of items. With a Vue.js frontend for instant rendering and a Node.js backend for smart product import, the Yeah Store reduces store setup time from hours to minutes.',
    tabs: [
      {
        id: "Frontend Design",
        title: "Frontend Design",
        content: "Yeah Store’s UI focuses on simplicity, speed, and customization for non-technical users.",
        bold: 'Highlights:',
        list: [
          "Drag-and-drop layout editor",
          "Live product previews with auto-refresh",
          "Category-based product import wizard",
          "Mobile-first responsive design"
        ],
      },
      {
        id: "Backend & Integration",
        title: "Backend & Integration",
        content: "The backend handles product scraping/imports and templating logic, designed to scale with high-volume requests.",
        bold: 'Key Features:',
        list: [
          "Import products from marketplaces via APIs or scraping",
          "Auto-generate pages based on selected layouts",
          "Smart caching for faster reloads",
          "RESTful APIs for external integrations",
        ],
      },
      {
        id: "Branding",
        title: "Branding",
        content: "Yeah Store represents speed, automation, and user empowerment. The visual identity is clean and modern with a focus on UX-driven simplicity.",
        bold: 'Deliverables:',
        list: [
          "Bold and minimalist brand palette",
          "Icon system for product categories",
          "Typography for clarity and bold CTAs",
        ],
      },
    ],
    lastImage: "/images/project/YeahStore/result-illustration/1.png",
    logndescTitle: ' Results ',
    longDescription: [
      "Product pages generated in under 60 seconds",
      "500+ products imported across 8 categories during first test week",
      "100+ storefronts launched using Yeah Store templates",
      "Real-time update support for dynamic inventories",
    ],
    reviewName: 'Yeah Store',
    reviewimage: image1,
    designation: "Beta User, Yeah Store Launch Cohort",
    review: "Yeah Store is a game-changer. I imported 200+ trending products and built a store layout in less than 10 minutes. The interface is smooth and intuitive.",
     portfolio: [
      {
        id: 1,
        image: "/images/project/YeahStore/laptop-mockup/1.png",
      },
      {
        id: 2,
        image: "/images/project/YeahStore/laptop-mockup/2.png",
      },
      {
        id: 3,
        image: "/images/project/YeahStore/laptop-mockup/3.png",
      },
      {
        id: 4,
        image: "/images/project/YeahStore/laptop-mockup/4.png",
      },
      {
        id: 5,
        image: "/images/project/YeahStore/laptop-mockup/5.png",
      },
    ]
  },

  {
    slug: "mm",
    semititle: 'mm',
    title: "Technologies Used: WordPress (Custom Theme Development), PHP, ACF Pro, JavaScript",
    description: " MRM Trades is a modern trading and investment advisory website designed to provide financial insights, trading updates, and investment services. Built entirely on a custom-coded WordPress theme, the site reflects the firm’s credibility, professionalism, and focus on performance.",
    bannerImage: "/images/project/MR-Traders/front/CRM-Graphic-MM.jpg",
    processtitle: 'The Challenge',
    process:
      " MRM Trades needed a fast, secure, and brand-specific website that avoids bloated themes or plugins. The requirement was a lightweight, SEO-optimized custom WordPress theme that delivers clear financial information, handles blog updates, and provides lead generation features without compromising performance.",
    processtitle2: 'Our Solution',
    process2: 'We designed and developed a fully custom-coded WordPress theme tailored to MRM Trades’ brand, skipping page builders for cleaner code and faster load times. The theme was integrated with ACF Pro for dynamic content management, enabling the team to manage services, market news, and client testimonials with ease.',
    tabs: [
      {
        id: "Custom Theme Design",
        title: "Custom Theme Design",
        content: "Crafted from the ground up using best practices in WordPress development — no third-party page builders.",
        bold: 'Highlights:',
        list: [
          "Fully responsive design with minimal, professional UI",
          "Custom header/footer with clean navigation and CTAs",
          "Trading blog/news section with filterable categories",
          "High-performance theme built for SEO and speed",
          "Newsletter signup and CTA sections for lead generation"
        ],
      },
      {
        id: "Dynamic CMS Integration",
        title: "Dynamic CMS Integration",
        content: "Backend was built for easy updates by MRM staff, with intuitive content controls using ACF and WordPress standards.",
        bold: 'Key Features:',
        list: [
          "Custom Post Types: Services, Blogs, Testimonials",
          "ACF-based flexible sections for the homepage and inner pages",
          " Blog engine for trading insights and market updates",
          "Contact and lead forms integrated with email alerts",
          "Secure admin access with role-based editing permissions"
        ],
      },
      {
        id: "Branding",
        title: "Branding",
        content: "MRM’s identity needed to signal trust, expertise, and a data-driven mindset. The design applied strong typography, dark-blue tones, and structured layouts to convey this.",
        bold: 'Deliverables:',
        list: [
          "Typography system suited for financial content",
          "Iconography and color scheme aligned with trading industry",
          "Grid-based layouts with focus on clarity and user trust",
        ],
      },
    ],
    lastImage: "/images/project/MR-Traders/result-illustration/1.png",
    logndescTitle: ' Results ',
    longDescription: [
      "90+ Lighthouse performance score across pages",
      "3x increase in form submissions within first month",
      "Zero plugin dependency for layouts (theme-coded components)",
      "Secure and stable setup with easy content management",
    ],
    reviewName: 'MRM Trades',
    reviewimage: image1,
    designation: "Director, MRM Trades",
    review: "Exactly what we needed — clean, fast, and future-proof. The site reflects our identity and gives us full control without plugin clutter. Excellent execution by the dev team.",
     portfolio: [
      {
        id: 1,
        image: "/images/project/MR-Traders/laptop-mockup/1.png",
      },
      {
        id: 2,
        image: "/images/project/MR-Traders/laptop-mockup/2.png",
      },
      {
        id: 3,
        image: "/images/project/MR-Traders/laptop-mockup/3.png",
      },
      {
        id: 4,
        image: "/images/project/MR-Traders/laptop-mockup/4.png",
      },
      {
        id: 5,
        image: "/images/project/MR-Traders/laptop-mockup/5.png",
      },
    ]
  },

  {
    slug: "dj",
    semititle: 'dj',
    title: "Technologies Used: WordPress (Custom Theme), PHP, jQuery, ACF Pro",
    description: "DEventri Jordan is a premium event planning and management website built to showcase luxury event services, portfolios, and client testimonials. The site was crafted with a fully custom WordPress theme to reflect elegance, brand uniqueness, and provide intuitive content management.",
    bannerImage: "/images/project/DJ/front/CRM-Graphic-DJ.jpg",
    processtitle: 'The Challenge',
    process:
      "DEventri needed a high-end, visually compelling website to highlight its portfolio of exclusive events. The platform had to be fast, SEO-optimized, and easy for the non-technical staff to manage, while maintaining the premium brand experience across desktop and mobile.",
    processtitle2: 'Our Solution',
    process2: "We developed a fully custom WordPress theme tailored to DEventri's brand. Advanced Custom Fields Pro (ACF) was integrated for flexible content blocks, ensuring that the team could update service sections, photo galleries, and testimonials without technical skills. The final result was a responsive, elegant website that positions DEventri as a leader in luxury event planning.",
    tabs: [
      {
        id: "Custom Theme Design",
        title: "Custom Theme Design",
        content: "The theme was designed from scratch to mirror luxury aesthetics — with animation, layered visuals, and elegant typography.",
        bold: 'Highlights:',
        list: [
          "Hero sliders for flagship events",
          "Modular home page with customizable sections",
          "Event gallery with filterable categories",
          "Sticky nav and scroll-based animations for interactivity",
          "Mobile-friendly with touch/swipe gestures"
        ],
      },
      {
        id: "WordPress CMS Integration",
        title: "WordPress CMS Integration",
        content: "The backend was designed to be non-technical team–friendly using ACF and custom post types.",
        bold: 'Key Features:',
        list: [
          "Custom Post Types: Events, Testimonials, Team",
          "ACF-based content blocks with live preview",
          "SEO-ready markup with schema for events",
          "Contact forms, inquiry tracking, and social integration",
          "Speed-optimized and secure deployment"
        ],
      },
      {
        id: "Branding",
        title: "Branding",
        content: "DEventri’s brand embodies luxury, creativity, and personal attention. The website reinforces this image with graceful UI and smooth navigation.",
        bold: 'Deliverables:',
        list: [
          "Custom brand style integrated into theme",
          "Typography pairing for elegance and clarity",
          "Dynamic color accents across sections",
        ],
      },
    ],
    lastImage: "/images/project/Dj/result-illustration/1.png",
    logndescTitle: ' Results ',
    longDescription: [
      "Bounce rate reduced by 35% after redesign",
      "2x faster page speed compared to previous site",
      "50+ event galleries added via ACF in first 3 weeks",
      "Indexed and SEO-optimized pages with improved search visibility",
    ],
    reviewName: 'DEventri Jordan',
    reviewimage: image1,
    designation: "Founder, DEventri Jordan",
    review: "The site feels as premium as our services. We can now tell our story visually and update everything ourselves without a developer. It’s exactly the user experience we envisioned.",
     portfolio: [
      {
        id: 1,
        image: "/images/project/DJ/laptop-mockup/1.png",
      },
      {
        id: 2,
        image: "/images/project/DJ/laptop-mockup/2.png",
      },
      {
        id: 3,
        image: "/images/project/DJ/laptop-mockup/3.png",
      },
      {
        id: 4,
        image: "/images/project/DJ/laptop-mockup/4.png",
      },
      {
        id: 5,
        image: "/images/project/DJ/laptop-mockup/5.png",
      },
    ]
  },


  // …more projects
];
