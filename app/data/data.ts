import {
  Boxes,
  Cloud,
  CreditCard,
  FlaskConical,
  MessageSquare,
} from "lucide-react";
import { FaEnvelope } from "react-icons/fa";


export enum ProjectCategory {
  All = "all",
  Web = "web",
  App = "app",
}
export const headerData = {
  // logoText: "SA.",
  navLinks: [
    { label: "About", href: "#home", icon: "home" },
    { label: "Services", href: "#services", icon: "services" },
    { label: "Experince", href: "#experience", icon: "experience" },
    { label: "Skills", href: "#skills", icon: "skills" },
    { label: "Projects", href: "#projects", icon: "projects" },
    { label: "Contact", href: "#contact", icon: "contact" },
  ],
  resume: {
    label: "Resume",
    href: "/resume/ShahraizAli.pdf",
    download: true,
  },
};

export const heroData = {
  greeting: "Hello, I'm",
  name: "SHAHRAIZ ALI",
  role: "Full Stack Developer",
  description:
    "I don’t just build apps, I create scalable, real-world solutions that deliver impact. With 2+ years of experience in full-stack and mobile development, I’ve worked on data-driven platforms like stock analytics systems, healthcare tracking apps, and service-based marketplaces. I combine strong technical expertise in MERN, Next.js, and React Native with a focus on performance, usability, and real-time experiences. From designing APIs to integrating third-party services and authentication systems, I turn complex ideas into production-ready products. I bring a problem-solving mindset, clean architecture, and a product-driven approach to every project.",
  primaryCta: {
    label: "My Resume",
    href: "/resume/ShahraizAli.pdf",
    icon: "download",
    download: true,
  },
  secondaryCta: { label: "About Me", href: "#about", icon: "info" },
  heroImage: "/file.svg",
};

export const servicesData = {
  eyebrow: "What I Provide",
  title: "My Services",
  services: [
    {
      icon: "network",
      title: "Web Development",
      description:
        "I build scalable and high-performance web applications using modern Full Stack technologies. From dynamic dashboards to full-fledged platforms, I focus on clean architecture, responsive design, and seamless user experience. I also integrate REST APIs, authentication systems, and real-time features to deliver production-ready solutions.",
    },
    {
      icon: "stack",
      title: "App Development",
      description:
        "I develop cross-platform mobile applications using React Native for both Android and iOS. My apps focus on performance, intuitive UI, and real-time functionality, including features like authentication, live data updates, and API integrations. I ensure smooth user experiences across devices with scalable and maintainable code. I also deployed applications on palay store and app store.",
    },
    {
      icon: "design",
      title: "DevOps",
      description:
        "I streamline development and deployment processes using tools like AWS, Docker, and CI/CD pipelines. From managing cloud services to optimizing application performance, I ensure reliable, secure, and scalable deployments. I focus on automation and efficient workflows to support fast and stable product delivery.",
    },
    // {
    //   icon: "seo",
    //   title: "SEO",
    //   description:
    //     "Improve your website's visibility on search engines with my SEO services. I can help optimize your content, manage metadata, and ensure that your site ranks higher on search results.",
    // },
    // {
    //   icon: "marketing",
    //   title: "Digital Marketing",
    //   description:
    //     "Elevate your brand's presence with targeted digital marketing strategies. From social media campaigns to content marketing, I offer a comprehensive approach to increase your online reach.",
    // },
    // {
    //   icon: "google",
    //   title: "Google My Business Management",
    //   description:
    //     "I can help you manage your Google My Business profile, ensuring that your business appears in local searches, collects reviews, and engages with customers effectively.",
    // },
  ],
};

export const projectsData = {
  eyebrow: "Some of my recent Projects",
  title: "Featured Projects",
  categories: [
    { label: "All", value: ProjectCategory.All },
    { label: "Web Development", value: ProjectCategory.Web },
    { label: "App Development", value: ProjectCategory.App },
    // { label: "Digital Marketing", value: ProjectCategory.Marketing },
  ],
  projects: [
    {
      id: "Up-Invest",
      slug: "real-time-stock-market",
      title: "Up-Invest",
      description:
        "UpInvest is a real-time stock analytics platform that helps users track portfolios and visualize live market trends through interactive dashboards.",
      category: ProjectCategory.Web,
      image: "/projects/upinvestWeb.jpeg",
      ctaLabel: "See Details",
      Technology: [
         {
          teach: "Frontend",
          lang:"React, Next.js"
        },
        {
          teach: "Backend",
          lang: "Nest.js (Node.js)",
        },
       
        {
          teach: "State Management",
          lang:"Redux Toolkit"
        },
        {
          teach: "Database",
          lang:"PostgreSQL"
        },
        {
          teach: "Services & Tools",
          lang:"Firebase Cloud Messaging (FCM), Third-party Financial APIs, REST APIs"
        }
      ],
      solution: [
        {
          about: "Real-time Data Handling",
          question: "The platform needed to deliver sub-second portfolio updates on both web and mobile interfaces, but third-party market feeds were inconsistent and occasionally delayed.",
          solution: "Integrated multiple third-party financial APIs with a unified normalization layer, built a robust polling and WebSocket fallback strategy, and used React Query (RTQ) for cache hydration. This ensured fast, accurate live updates in desktop dashboards and mobile market walls, while preventing flash-load glitches during API failovers."
        },
        {
          about: "Performance with Large Data Sets",
          question: "Large historical datasets, charts, and filters caused memory spikes and UI jank, especially on lower-end devices.",
          solution: "Implemented server-side aggregation, cursor-based pagination, and lazy-loading components to stream only required data. Added virtualization for table rows and chart points, and optimized JSON payloads to reduce bandwidth for mobile clients. The result was a smooth, responsive interface on Windows/Mac and Android/iOS."
        },
        {
          about: "User Engagement",
          question: "Investors needed immediate alerts and meaningful contextual insights, but update notifications were previously generic and delayed.",
          solution: "Built an engagement engine that processes market triggers, detects significant portfolio changes, and dispatches rich notifications through FCM for mobile devices and in-browser push on web. Combined event-based alerts with historical trend summaries to keep traders informed and active."
        },
        {
          about: "Secure Authentication",
          question: "Users demanded enterprise-grade login controls across web/mobile apps, including social auth and MFA, without adding friction.",
          solution: "Implemented a unified identity service using JWT, OAuth2 social providers, refresh-token rotation, and optional 2FA by email/SMS. Web and mobile sessions share secure token storage strategies (HttpOnly cookies for web, secure keychain storage for mobile) to maintain consistent security posture."
        },
        {
          about: "Cross-Platform Consistency",
          question: "The same features needed to work identically on responsive web and React Native mobile versions, but duplicated logic caused drift.",
          solution: "Built shared business logic modules and API contracts, enforced UI token standards, and used a common design system for components on both platforms. Real-time state synchronization and UI behavior aligned across devices, creating a cohesive experience for all users."
        }
      ],
      details: {
        heroImages: [
          "https://images.unsplash.com/photo-1608039829574-620fc10353a1?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80",
        ],
        desc2:
          "UpInvest is a real-time stock market analytics platform built for web and mobile users to track portfolios and monitor live market trends. The application provides interactive dashboards, live data visualization, and insights to help users make informed investment decisions. It was designed with a scalable architecture to handle continuous data updates and a growing user base.",
        features: [
          "Social media visual system",
          "Hyper-local ad funnels",
          "Influencer launch kit",
          "Automated WhatsApp ordering",
          "Promo analytics dashboard",
          "Customer review automation",
        ],
        tools: [
          "Figma",
          "Meta Ads",
          "Zapier",
          "Canva",
          "Google Sheets",
          "Meta Business Suite",
        ],
        actions: [
          {
            label: "Visit Now",
            href: "https://www.facebook.com",
            variant: "solid",
          },
          {
            label: "Source Code",
            href: "https://github.com/shahraiz109",
            variant: "outline",
          },
        ],
      },
    },
    {
      id: "E-COMMERCE",
      title: "Omooma",
      description:
        "Women's healthcare platform with health tracking tools, courses, and centralized authentication system with cross-domain SSO.",
      category: ProjectCategory.Web,
      image: "/projects/omooma.png",
      featured: true,
      ctaLabel: "See Details",
      Technology: [
        {
          teach: "Frontend",
          lang: "Next.js, React.js, TypeScript, RTQ (React Query), React Hook Form, Formik, i18n-next",
        },
        {
          teach: "Backend",
          lang:"Node.js, Express, JWT, Redis"
        },
        {
          teach: "Authentication",
          lang:"Dedicated Authentication Microservice, Cross-Domain Cookies"
        },
        {
          teach: "Integrations",
          lang:"Shopify (E-Commerce), Strapi CMS (Content Management)"
        },
        {
          teach: "Performance",
          lang:"Database Indexing, Pagination, RTQ Caching"
        },
         {
          teach: "Seo",
          lang:"Dynamic Meta Tags, Open Graph, Twitter Cards, JSON-LD Schema"
        },
        {
          teach: "Architecture",
          lang:"Microservices, Frontend Authentication Service, Cross-Subdomain Communication"
        }
      ],
      solution:[
        {
          about: "Centralized Authentication with Cross-Domain SSO",
          question: "The platform operates across multiple subdomains (tracking, e-commerce, courses, content management), requiring users to authenticate separately on each subdomain. This fragmented authentication experience created user friction and poor UX. The system needed a centralized authentication solution that works seamlessly across all Omooma subdomains.",
          solution: "Architected and implemented a dedicated authentication microservice with Single Sign-On (SSO) functionality across Omooma subdomains. The solution uses JWT tokens stored in cookies with strict domain control ending in .omooma.com. When users log in on any subdomain, the authentication service sets a secure cookie that's accessible to all subdomains. Implemented a separate frontend microservice to control the full authentication flow including registration, login, forgot password, and profile management. This centralization ensures users maintain their session across tracking.omooma.com, shop.omooma.com, courses.omooma.com, and other subdomains without repeated logins"
        },
        {
          about:"Frontend Authentication Microservice Implementation",
          question:"Authentication UI components (login forms, registration, password reset, profile management) were duplicated across multiple subdomains, causing inconsistency and maintenance challenges. A centralized authentication interface was needed.",
          solution:"Developed a separate frontend microservice dedicated to handling all authentication-related UI and workflows. This microservice serves authentication pages accessible across all subdomains through a centralized authentication portal (auth.omooma.com). The microservice includes: user registration forms with validation, login interface, forgot password flow with email verification, password reset functionality, and profile management. React Hook Form integrated with Formik provides comprehensive client-side validation. Users interact with this centralized authentication service regardless of which subdomain they're accessing, ensuring consistent experience and reducing code duplication across platforms",
        },
         {
          about:"Shopify Product Integration for E-Commerce",
          question:"The platform needed to integrate e-commerce functionality to sell health products, supplements, and wellness items. Building a custom e-commerce system from scratch would be time-consuming and inefficient.",
          solution:"Integrated Shopify APIs to browse and display products seamlessly on the Omooma platform. Implemented product catalog browsing, category filtering, search functionality, and product detail pages. The integration allows users to browse health products, view pricing, check inventory, and complete purchases through Shopify's secure checkout. Shopify handles payment processing, order management, inventory tracking, and shipping logistics. The integration is seamless, providing native shopping experience within the Omooma platform. Product data is synchronized in real-time, ensuring inventory accuracy and up-to-date pricing. The Shopify integration enables the platform to offer comprehensive health solutions beyond tracking and courses",
        },
        {
          about:"Multilingual Support with i18n-next",
          question:"The platform needed to support multiple languages to serve a global user base. Users from different countries required content in their native languages for better accessibility and user experience.",
          solution:"Implemented i18n-next for comprehensive multilingual support across all platforms and subdomains. The internationalization system supports multiple languages with translation files for all UI elements, content, and messages. Users can select their preferred language through a language switcher, and their preference is stored in cookies for persistence across sessions. Dynamic content from Strapi CMS is served in the user's selected language. The implementation includes right-to-left (RTL) language support for Arabic and other RTL languages. Localized metadata is implemented for SEO, ensuring each language version ranks independently. The multilingual support enables the platform to serve users globally while maintaining consistent functionality across all languages",
        },
      ],
      details: {
        heroImages: ["/projects/e-shop.png", "/projects/e-shop.png"],
        desc2:
          "Omooma is a comprehensive women's healthcare platform that provides tracking tools for pregnancy, ovulation, and period calculations with intelligent predictions based on saved dates. The platform features educational courses, health articles, pregnancy-to-delivery guidance, and access to professional doctor support. A critical challenge was rescuing a project initially delayed by an external agency, which required architecting and maintaining a dedicated microservice for tracking functionality. The platform implements a centralized authentication system with Single Sign-On (SSO) across multiple Omooma subdomains, enabling users to seamlessly access tracking tools, e-commerce features, courses, and content management through a single authentication flow.",
        features: [
          "Developed comprehensive women's healthcare platform with tracking tools for pregnancy, ovulation, and period calculations, featuring courses, health articles, and professional doctor support. Architected centralized authentication microservice with SSO across Omooma subdomains."
        ],
        tools: ["HTML", "JavaScript", "Scss", "CSS", "Bootstrap", "EmailJs"],
        actions: [
          {
            label: "Visit Now",
            href: "https://darkpan-dashboard.example.com",
            variant: "solid",
          },
          {
            label: "Source Code",
            href: "https://github.com/shahraiz109/darkpan",
            variant: "outline",
          },
        ],
      },
    },
    {
      id: "DOORCUT",
      slug: "SYS POS",
      title: "SYS POS",
      description:
        "Offline-first e-commerce platform with local data storage, order synchronization, multi-store stock management, and advanced analytics.",
      category: ProjectCategory.Web,
      image: "/projects/syspos.png",
      ctaLabel: "See Details",
      Technology: [
        {
          teach: "Frontend",
          lang: "Next.js, React, TypeScript, RTQ (React Query), IndexedDB, PouchDB, Tailwind CSS",
        },
        {
          teach: "Backend",
          lang:"Node.js, Express, MySQL, Redis, Cron Jobs"
        },
        {
          teach: "Architecture",
          lang:"Offline-First, Factory Pattern, Microservices"
        },
        {
          teach: "Database",
          lang:"MySQL (primary data), Redis (caching, hot products), IndexedDB (local queries), PouchDB (offline storage)"
        },
        {
          teach: "Integrations",
          lang:"Payment APIs, Inventory Management"
        },
         {
          teach: "Performance",
          lang:"Database Indexing, Pagination, Full-Text Search, Caching Strategy"
        }
      ],
      solution:[
        {
          about: "Offline Order Synchronization",
          question: "Orders placed offline needed to be automatically synchronized when connectivity returned, ensuring no orders were lost and maintaining data consistency between offline and online states.",
          solution: "Developed an intelligent background synchronization system using cron jobs that continuously monitors PouchDB for pending offline orders. When internet connectivity is detected, the system automatically calls the booking API with stored order payloads, creates orders on the server, and removes them from PouchDB once successfully synchronized. Failed sync attempts are retried with exponential backoff, ensuring eventual consistency"
        },
        {
          about:"Comprehensive Admin Analytics Dashboard",
          question:"Administrators needed detailed insights into system performance and business metrics across multiple time dimensions (hourly, daily, weekly, monthly, yearly) for data-driven decision making.",
          solution:"Built a comprehensive admin analytics dashboard with granular time-based filtering. The system aggregates data at multiple levels: hourly for real-time monitoring, daily for operational insights, weekly for trend analysis, monthly for business planning, and yearly for strategic forecasting. Analytics APIs are optimized with database views, materialized aggregations, and strategic indexing to deliver fast query performance across all time dimensions"
        },
        {
          about:"Database Scalability with Indexing and Pagination",
          question:"As the product catalog grew, database queries became slow, impacting user experience. Loading all products at once caused performance degradation and increased memory consumption.",
          solution:"Implemented strategic database indexing on frequently queried fields (product name, category, status, created_at) and added full-text search indexes for product descriptions. Implemented server-side pagination that fetches only a limited number of products per request (e.g., 20-50 products). The system uses cursor-based pagination for efficient scrolling and infinite scroll on the frontend, loading products on-demand as users scroll. This approach maintains optimal performance regardless of catalog size"
        },
        {
          about:"Background Job Processing for Sync Operations",
          question:"Offline orders and data synchronization needed to be processed reliably in the background without blocking the main application thread or requiring user intervention.",
          solution:"Implemented background job processing system using cron jobs that run at regular intervals (every 5-10 minutes) to check for pending synchronization tasks. Jobs scan PouchDB for offline orders, attempt synchronization, log successes and failures, and retry failed operations. The system uses exponential backoff for retries and maintains a job history for monitoring and debugging. Jobs are designed to be idempotent, ensuring safe retries without data duplication"
        },
        {
          about:"Redis Caching for Hot Products",
          question:"Popular or trending products were being queried repeatedly, causing unnecessary database load and slowing down product listing pages.",
          solution:"Implemented Redis-based caching for hot products (trending items, recently viewed products, frequently purchased items). Products are cached in Redis with appropriate TTL (Time To Live) values, reducing database queries significantly. Cache invalidation strategies ensure data freshness when product details or inventory changes. This approach improved product listing page load times by 80% and reduced database load by 60%"
        },
      ],
      details: {
        heroImages: [
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1600&q=80",
        ],
        desc2:
          "SYS POS is an offline-first e-commerce booking platform designed to operate seamlessly in areas with unreliable internet connectivity. The system enables users to browse products, check quantities, and complete bookings entirely offline, with automatic synchronization when internet connectivity is restored. Built with Next.js, TypeScript, and RTQ for efficient API integration, the platform uses PouchDB and IndexedDB for local data storage and implements background job processing for order synchronization. The system includes comprehensive admin analytics, multi-store stock management, and optimized search capabilities.",
        features: [
          "Built an offline-first e-commerce booking platform with PouchDB and IndexedDB for local data storage, enabling seamless offline-to-online synchronization with RTQ API integration."
        ],
        tools: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Figma",
          "Framer Motion",
          "Ahrefs",
        ],
        actions: [
          {
            label: "Visit Now",
            href: "https://cryptocoin-landing.example.com",
            variant: "solid",
          },
          {
            label: "Source Code",
            href: "https://github.com/shahraiz109/cryptocoin",
            variant: "outline",
          },
        ],
      },
    },

    {
      id: "house",
      slug: "house-base-haircut-service",
      title: "Sportunity – Sports & Activity Booking Platform",
      description:
        "A cross-platform app for discovering, booking, and managing sports and recreational activities seamlessly.",
      category: ProjectCategory.App,
      image: "/projects/p.jpeg",
      ctaLabel: "See Details",
      Technology: [
        {
          teach: "Frontend",
          lang: "React Native, React, Next.js",
        },
        {
          teach: "Language",
          lang:"TypeScript, JavaScript"
        },
        {
          teach: "State Management",
          lang:"Redux"
        },
        {
          teach: "Styling",
          lang:" Tailwind CSS, Component Libraries (shadcn/ui, Material UI)"
        },
        {
          teach: "APIs",
          lang:"RESTful APIs"
        }
      ],
      solution: [
        {
          about: "Complex Booking Flow",
          question: "Multistep reservations, class capacity, and cancellation policies made booking flows difficult to manage for users and developers.",
          solution: "Implemented centralized state management with Redux to capture booking metadata, handle retry/resume flows, and enforce business rules. We decomposed booking journeys into modular screens, added validation checkpoints, and ensured users can safely recover from intermediate failures without losing progress."
        },
        {
          about: "Real-time Data Sync",
          question: "Resource availability and schedule changes needed to be reflected immediately to prevent double bookings and stale slots.",
          solution: "Optimized API integrations with websocket subscriptions and background refresh logic. The system uses optimistic UI updates and last-write-wins resolution for mobile and web clients, ensuring availability is synchronized across all storefronts within seconds."
        },
        {
          about: "Cross-Platform UI Consistency",
          question: "Inconsistent components and differences in styling created a fragmented brand experience across web and React Native apps.",
          solution: "Built a shared component library and design token system, plus a common style guide for spacings, typography, and interaction patterns. This enabled consistent feel on desktop browser and mobile touch interfaces while preserving native usability."
        },
        {
          about: "Authentication & Security",
          question: "Users expected secure sign-in flow with session persistence, while the app needed to protect sensitive booking data.",
          solution: "Implemented secure OAuth2 login, token refresh, and secure storage mechanisms (secure store for mobile, HttpOnly cookies for web). Added role-based access control, CSRF protection, and login rate limits to safeguard the booking ecosystem."
        }
      ],
      details: {
        heroImages: [
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1600&q=80",
        ],
        desc2:
          "Sportunity is a cross-platform application that allows users to discover, book, and manage sports and recreational activities. The platform provides a seamless booking experience with real-time updates, intuitive UI, and secure authentication, ensuring users can easily explore and participate in activities.",
        features: [
          "Hero narrative with conversion CTAs",
          "Modular pricing blocks",
          "Responsive layout system",
          "Newsletter growth funnels",
          "SEO optimized content clusters",
          "Illustrated roadmap timeline",
        ],
        tools: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Figma",
          "Framer Motion",
          "Ahrefs",
        ],
        actions: [
          {
            label: "Visit Now",
            href: "https://cryptocoin-landing.example.com",
            variant: "solid",
          },
          {
            label: "Source Code",
            href: "https://github.com/shahraiz109/cryptocoin",
            variant: "outline",
          },
        ],
      },
    },
    {
      id: "house2",
      slug: "house-base-haircut-service",
      title: "Minicabit – Ride-Hailing & Transfer Booking App",
      description:
        "Minicabit delivers a fast and user-friendly ride-hailing experience with real-time booking and location-based transfers.",
      category: ProjectCategory.App,
      image: "/projects/image.png",
      ctaLabel: "See Details",
      solution:[
        {
          about: "Location-Based Functionality",
          question: "Real-time geolocation accuracy was critical for matching riders to nearby drivers and avoiding wrong pickups.",
          solution: "Integrated map SDKs and location APIs to provide continuous location tracking, geofencing, and dynamic pickup optimization. Implemented driver radius searching and ETA correction to deliver high accuracy on both mobile and web interfaces."
        },
        {
          about: "Smooth Booking Experience",
          question: "Ride booking flows with fare estimates, upgrade options, and route previews were complex and prone to user abandonment.",
          solution: "Designed a streamlined, multi-step booking process with immediate feedback and state persistence via Redux. Added in-progress handling, auto-resume after network interruptions, and clear next-step guidance to reduce drop-off."
        },
        {
          about: "Performance Optimization",
          question: "Frequent location updates, map rendering, and real-time driver matching placed heavy load on devices.",
          solution: "Implemented efficient data throttling, event debouncing, and minimal map redraws; leveraged native map rendering on mobile with lightweight overlays. Optimized API payloads and caching to keep the app responsive even in poor network conditions."
        },
        {
          about: "User Experience",
          question: "Riders needed a fast, dependable UI for selecting rides, comparing options, and completing transactions.",
          solution: "Built clear, accessible UI components with priority actions, error states, and confirmation flows. Ensured consistent user experience on web and mobile by syncing route details, trip history, and notifications across devices."
        }
      ],
      Technology: [
        {
          teach: "Frontend",
          lang: " React Native, React",
        },
        {
          teach: "Language",
          lang:"JavaScript, TypeScript"
        },
        {
          teach: "State Management",
          lang:" Redux"
        },
        {
          teach: "Features",
          lang:"Real-time updates, Location-based services"
        },
        {
          teach: "APIs",
          lang:"RESTful APIs"
        }
      ],
      details: {
        heroImages: [
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1600&q=80",
        ],
        desc2:
          "Minicabit is a ride-hailing and transfer booking platform that enables users to book rides by selecting passenger count, pickup, and drop-off locations in real time. The application focuses on delivering a fast, reliable, and user-friendly booking experience across mobile and web platforms.",
        features: [
          "Hero narrative with conversion CTAs",
          "Modular pricing blocks",
          "Responsive layout system",
          "Newsletter growth funnels",
          "SEO optimized content clusters",
          "Illustrated roadmap timeline",
        ],
        tools: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Figma",
          "Framer Motion",
          "Ahrefs",
        ],
        actions: [
          {
            label: "Visit Now",
            href: "https://cryptocoin-landing.example.com",
            variant: "solid",
          },
          {
            label: "Source Code",
            href: "https://github.com/shahraiz109/cryptocoin",
            variant: "outline",
          },
        ],
      },
    },
    {
      id: "house3",
      slug: "UpInvest",
      title: "UpInevest ",
      description:
        "Built a real-time stock analytics mobile app for tracking portfolios and visualizing live market trends.",
      category: ProjectCategory.App,
      image: "/projects/n.jpeg",
      ctaLabel: "See Details",
      solution: [
  {
    about: "Real-time Data Handling",
    question: "The mobile app needed to deliver real-time portfolio updates with minimal latency, but unreliable third-party market APIs and unstable mobile network conditions caused delays and inconsistent data.",
    solution: "Implemented a hybrid data-fetching strategy using polling with WebSocket fallback, along with React Query for efficient caching and background updates. Optimized network handling for mobile environments to ensure smooth, near real-time portfolio updates even on unstable connections."
  },
  {
    about: "Performance with Large Data Sets",
    question: "Rendering large datasets, financial charts, and filters on mobile devices caused performance drops, memory issues, and UI lag, especially on low-end Android devices.",
    solution: "Optimized performance by implementing lazy loading, FlatList virtualization, and server-side pagination. Reduced payload sizes and optimized chart rendering to ensure smooth scrolling and responsive UI across both Android and iOS devices."
  },
  {
    about: "User Engagement",
    question: "Mobile users required instant and personalized alerts for portfolio changes, but traditional notification systems were delayed and lacked relevance.",
    solution: "Integrated Firebase Cloud Messaging (FCM) for real-time push notifications, built a trigger-based alert system for significant portfolio events, and delivered contextual insights directly to users, improving engagement and retention."
  },
  {
    about: "Secure Authentication",
    question: "Ensuring secure and seamless authentication on mobile devices was challenging, especially when handling social login, session persistence, and multi-factor authentication.",
    solution: "Implemented JWT-based authentication with secure token storage using device keychain/secure storage, integrated OAuth providers for social login, and added optional 2FA via email/SMS to enhance security without compromising user experience."
  },
  {
    about: "Cross-Platform Consistency",
    question: "Maintaining consistency between Android and iOS platforms while aligning with the web version was difficult due to platform-specific behaviors and UI differences.",
    solution: "Used shared API contracts and centralized business logic, applied a consistent design system, and handled platform-specific optimizations to ensure a uniform experience across Android, iOS, and web platforms."
  }
],
      Technology: [
        {
          teach: "Frontend",
          lang: "React, Next.js",
        },
        {
          teach: "Mobile",
          lang:"React Native"
        },
        {
          teach: "Backend",
          lang:"Nest.js (Node.js)"
        },
        {
          teach: "Database",
          lang:"PostgreSQL"
        },
        {
          teach: "Services & Tools",
          lang:"Firebase Cloud Messaging (FCM), Third-party Financial APIs, REST APIs"
        }
      ],
      details: {
        heroImages: [
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1600&q=80",
        ],
        desc2:
          "UpInvest is a real-time stock market analytics platform built for web and mobile users to track portfolios and monitor live market trends. The application provides interactive dashboards, live data visualization, and insights to help users make informed investment decisions. It was designed with a scalable architecture to handle continuous data updates and a growing user base.",
        features: [
          "Hero narrative with conversion CTAs",
          "Modular pricing blocks",
          "Responsive layout system",
          "Newsletter growth funnels",
          "SEO optimized content clusters",
          "Illustrated roadmap timeline",
        ],
        tools: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Figma",
          "Framer Motion",
          "Ahrefs",
        ],
        actions: [
          {
            label: "Visit Now",
            href: "https://cryptocoin-landing.example.com",
            variant: "solid",
          },
          {
            label: "Source Code",
            href: "https://github.com/shahraiz109/cryptocoin",
            variant: "outline",
          },
        ],
      },
    },
  ],
  // cta: {
  //   label: "See All",
  //   href: "#",
  // },
};

export const contactData = {
  eyebrow: "Feel Free To Contact Me",
  title: "Get In Touch",
  form: {
    ctaLabel: "Send",
  },
  contactInfo: [
    { icon: "user", label: "Shahraiz Ali" },
    { icon: "phone", label: "+92 3176284209" },
    { icon: "mail", label: "shahraizali232@gmail.com" },
    { icon: "location", label: "lahore, Punjab, Pakistan" },
  ],
socials: [
  {
    icon: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shahraiz-ali-722b95315/",
  },
  { icon: "github", label: "GitHub", href: "https://github.com/shahraiz109" },
  { icon: "mail", label: "Email", href: "mailto:shahraizali232@gmail.com" }
],
};

export const footerData = {
  marketplaces: [
    { label: "Fiverr", href: "https://www.fiverr.com" },
    { label: "UpWork", href: "https://www.upwork.com" },
    { label: "Freelancer", href: "https://www.freelancer.com" },
    { label: "ThemeForest", href: "https://themeforest.net" },
    { label: "RemoteHub", href: "https://www.remotehub.com" },
    { label: "Dribbble", href: "https://dribbble.com" },
    { label: "Resume", href: "/resume.pdf" },
  ],
 
  copyright: "© Copyright All Rights Reserved 2025",
  credit: "Developed by SHAHZAD ALI",
};

// experince
export const experiences = [
  {
    id: "1",
    title: "Full Stack Developer",
    company: "SHOPEX",
    date: "Jan 2025 – Present",
    shortDescription:
      "At Shopex, I worked as a Full Stack Developer, contributing to the development of scalable web and mobile applications across multiple domains. I played a key role in building UpInvest, a real-time stock market analytics platform with live data tracking and interactive dashboards. I also worked on Sportunity, a sports and activity booking platform, and Minicabit, a ride-hailing application focused on seamless passenger transportation. My work involved developing APIs, integrating third-party services, and ensuring smooth, real-time user experiences across platforms.",

    responsibilities: [
      {
        text: "Worked as a Full Stack Developer at Shopex, building scalable web and mobile applications across multiple domains",
      },
      {
        text: "Developed UpInvest, a real-time stock market analytics platform with live portfolio tracking and data visualization",
      },
      {
        text: "Designed and implemented backend services using Nest.js with PostgreSQL, ensuring scalable and efficient data handling",
      },
      {
        text: "Built responsive and high-performance web interfaces using React and Next.js for seamless user experience",
      },
      {
        text: "Developed cross-platform mobile applications using React Native for both Android and iOS",
      },
      {
        text: "Integrated real-time APIs and third-party financial services to provide accurate and up-to-date stock market data",
      },
      {
        text: "Implemented Firebase Cloud Messaging (FCM) for push notifications, enabling real-time alerts and user engagement",
      },
      {
        text: "Designed and developed secure authentication systems, including social login and session management",
      },
      {
        text: "Contributed to projects like Sportunity (activity booking platform) and Minicabit (ride-hailing app), focusing on performance and usability",
      },
      {
        text: "Optimized application performance and improved user experience by implementing efficient state management and clean architecture practices",
      },
    ],

    techStack: [
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
      {
        name: "CI/CD",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
      },
      {
        name: "React Native",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Stripe",
        icon: "https://cdn.svgporn.com/logos/stripe.svg",
      },
      {
        name: "WebSockets",
        icon: "https://cdn.svgporn.com/logos/websocket.svg",
      },
      {
        name: "Socket.IO",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "Redux Toolkit",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "FCM",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
      },
      {
        name: "AWS",
        icon: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcvvwv77u9oivso9oxspw.png",
      },
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      },
    ],
  },

  {
    id: "2",
    title: "MERN Stack Developer",
    company: "DevNexus",
    date: "Apr 2024 – Dec 2024",
    shortDescription:
      "At DevNexus, I contributed to building impactful digital solutions across healthcare, e-commerce, and mobility sectors. I worked on Omooma, a healthcare platform providing pregnancy and wellness tracking with data-driven insights. I also developed features for Syspos, an e-commerce booking platform with advanced analytics and a dynamic VAT system for accurate pricing. Additionally, I contributed to Tasleem, a ride-hailing platform, focusing on scalable architecture, authentication systems, and seamless user experiences",

    responsibilities: [
      {
        text: "Worked as a MERN Stack Developer at DevNexus, building scalable web and mobile applications across healthcare, e-commerce, and mobility domains",
      },
      {
        text: "Contributed to Omooma, a healthcare platform providing pregnancy, ovulation, and wellness tracking with data-driven insights",
      },
      {
        text: "Built responsive and user-friendly interfaces using React, Next.js, and Tailwind CSS, ensuring accessibility across devices",
      },
      {
        text: "Implemented advanced form handling and validation using React Hook Form, improving data accuracy and user experience",
      },
      {
        text: "Developed secure authentication and cross-domain session management using cookies and local storage for microservices architecture",
      },
      {
        text: "Worked on Syspos, an e-commerce booking platform with scalable architecture and optimized API handling",
      },
      {
        text: "Implemented a dynamic VAT calculation system, ensuring accurate pricing, real-time totals, and compliance with configurable tax rules",
      },
      {
        text: "Integrated RESTful APIs and improved performance using efficient state management techniques like Redux Toolkit",
      },
      {
        text: "Contributed to Tasleem, a ride-hailing platform, focusing on backend integration, user flows, and real-time functionality",
      },
      {
        text: "Collaborated with cross-functional teams to deliver production-ready features, focusing on performance, scalability, and clean code practices",
      },
    ],

    techStack: [
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
      {
        name: "CI/CD",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
      },
      {
        name: "React Native",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Stripe",
        icon: "https://cdn.svgporn.com/logos/stripe.svg",
      },
      {
        name: "WebSockets",
        icon: "https://cdn.svgporn.com/logos/websocket.svg",
      },
      {
        name: "Socket.IO",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "Redux Toolkit",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "FCM",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
      },
      {
        name: "AWS",
        icon: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcvvwv77u9oivso9oxspw.png",
      },
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      },
    ],
  },
];

// tecnoligy and skill

export const SkillsData = {
  frontend: [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0c6a8m-Dr93Lf1zVkHq6zZoHdLun4eNO1pw&s",
      name: "React.js",
    },
    {
      img: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
      name: "Next.js",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0c6a8m-Dr93Lf1zVkHq6zZoHdLun4eNO1pw&s",
      name: "React Native",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0c6a8m-Dr93Lf1zVkHq6zZoHdLun4eNO1pw&s",
      name: "Type Script",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0c6a8m-Dr93Lf1zVkHq6zZoHdLun4eNO1pw&s",
      name: "Java Script",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png",
      name: "Tailwind CSS",
    },
    {
      img: "https://cdn.worldvectorlogo.com/logos/redux.svg",
      name: "Redux",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",
      name: "Socket.IO",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0c6a8m-Dr93Lf1zVkHq6zZoHdLun4eNO1pw&s",
      name: "React query",
    },
    {
      img: "https://ui.shadcn.com/apple-touch-icon.png",
      name: "Shadcn UI",
    },
    {
      img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mui.svg",
      name: "Material UI",
    },
    {
      img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
      name: "Formik",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1926/1926121.png",
      name: "Context API",
    },
    {
      img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
      name: "Zustand",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL7c3ioYq8ahDffwAbWMv7O4nFh0Z4NITiozJjfh8YaBCu6yx72ETzU0I5MZCj9KajszoSsz53xDKplPAUTAgPOoygBaZd&s&ec=121584926",
      name: "Redux",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQym2tfhToRsiaeSfS-pMD7Tgxu16E8Lb72nL_Mkv_hoNMLD41CqctZRGrbzl5sGtHPGvC-q6rNiN6kHOWZTpIaldouKASf&s&ec=121584926",
      name: "Redux Toolkit",
    },
  ],
  backend: [
    {
      img: "https://nestjs.com/img/logo-small.svg",
      name: "Nest js",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
      name: "Node js",
    },
    {
      img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg",
      name: "Express js",
    },
    {
      img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/redis.svg",
      name: "Redis",
    },
    {
      img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
      name: "MongoDB",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",
      name: "SocketIO",
    },
    {
      img: "https://www.siriusopensource.com/sites/default/files/2025-04/postgresql.png",
      name: "PostgreSQL",
    },
    {
      img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/supabase.svg",
      name: "Supabase",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1828/1828479.png",
      name: "Authentication",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1828/1828479.png",
      name: "Authorization",
    },
    {
      img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/openid.svg",
      name: "OAuth",
    },
    {
      img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/auth0.svg",
      name: "Auth0",
    },
    {
      img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/firebase.svg",
      name: "Firebase",
    },
  ],
  tools: {
    cloud: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xQcwKitRgXfqdi34DYlocPSEXD2G2zZipg&s",
        name: "AWS",
      },
      {
        img: "https://images.ctfassets.net/crb83veve8xb/2YfNwMlyl1U0DLVXRgL8TB/9e8474e083f2ba01a296343d84f2282d/vercel_thumbnail.webp",
        name: "Vercel",
      },
      {
        img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/render.svg",
        name: "Render",
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/1200px-Amazon-S3-Logo.svg.png",
        name: "S3",
      },
      {
        img: "https://cdn-icons-png.flaticon.com/512/5968/5968843.png",
        name: "CI/CD",
      },
      {
        img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg",
        name: "EC2",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xQcwKitRgXfqdi34DYlocPSEXD2G2zZipg&s",
        name: "AWS Lambda",
      },
      {
        img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlecloud.svg",
        name: "GCP",
      },
    ],
    git: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoh5SY3J2BsoecJ8TsxtGX-34_b5HCIG6PIA&s",
        name: "Github",
      },
      {
        img: "https://avatars.githubusercontent.com/u/1086321?s=280&v=4",
        name: "GitLab",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_cVofKUs-uPNaQa1gf6hLoPdfpsvLEajbyA&s",
        name: "BitBucket",
      },
    ],
    payment: [
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1280px-Stripe_Logo%2C_revised_2016.svg.png",
        name: "Stripe",
      },
      {
        img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/paypal.svg",
        name: "PayPal",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbFabjC5u5ZQ6n-34BWOwupvjY2HBaFA3ijgbK4ThHC-ndFc3evhohTpPtJw6Qd3680qnH4bS9aKXLYmxUXYbobP6R59hy&s&ec=121584926",
        name: "Paypro",
      },
    ],
    communication: [
      {
        img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twilio.svg",
        name: "Twilio",
      },
      {
        img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/firebase.svg",
        name: "FCM",
      },
      {
        img: "https://i0.wp.com/community.nodemailer.com/wp-content/uploads/2015/10/n2-2.png?fit=422%2C360&ssl=1",
        name: "Nodemailer",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3QXgrxqk7Ydkm2fGU5IyV2okE-ht75HLqUg&s",
        name: "SendGrid",
      },
    ],
    testing: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlOfgLr5jZA3lIC4TJ7jkCL987-fCgMmvugg&s",
        name: "Jest",
      },
    ],
  },
};

export const categories = [
  {
    id: "cloud",
    label: "Cloud Platforms",
    icon: Cloud,
    bgColor: "bg-[rgb(59,130,246)]",
  },
  {
    id: "git",
    label: "Git Platforms",
    icon: Boxes,
    bgColor: "bg-[rgb(75,85,99)]",
  },
  {
    id: "payment",
    label: "Payment Gateways",
    icon: CreditCard,
    bgColor: "bg-[rgb(34,197,94)]",
  },
  {
    id: "communication",
    label: "Communication",
    icon: MessageSquare,
    bgColor: "bg-[rgb(168,85,247)]",
  },
  {
    id: "testing",
    label: "Testing",
    icon: FlaskConical,
    bgColor: "bg-[rgb(239,68,68)]",
  },
];
