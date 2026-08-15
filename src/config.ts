// ============================================================================
// Site Configuration
// ============================================================================

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "EKO SOLAR PROS | Orphaned Solar Rescue & Battery Add-Ons | Atlanta",
  description: "Installer gone out of business? EKO SOLAR PROS rescues orphaned solar systems in Atlanta, GA — diagnostics, inverter repair, RMA warranty claims, and battery storage add-ons for existing solar. We adopt systems installed by any company and get them producing again.",
  language: "en",
};

// ============================================================================
// Navigation Configuration
// ============================================================================

export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  items: NavItem[];
}

export const navigationConfig: NavigationConfig = {
  logo: "EKO SOLAR PROS",
  items: [
    { label: "Repairs", href: "#works" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
};

// ============================================================================
// Hero Section Configuration
// ============================================================================

export interface HeroConfig {
  title: string;
  subtitle: string;
  backgroundImage: string;
  servicesLabel: string;
  copyright: string;
}

export const heroConfig: HeroConfig = {
  title: "EKO SOLAR PROS",
  subtitle: "Installer Gone? Orphaned Solar? We'll Rescue It.",
  backgroundImage: "./hero-main.jpg",
  servicesLabel: "Rescue | Repair | Add Batteries",
  copyright: "© 2026 EKO SOLAR PROS Atlanta",
};

// ============================================================================
// About Section Configuration
// ============================================================================

export interface AboutConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  image1: string;
  image1Alt: string;
  image2: string;
  image2Alt: string;
  authorImage: string;
  authorName: string;
  authorBio: string;
}

export const aboutConfig: AboutConfig = {
  titleLine1: "We adopt the solar systems other companies abandoned,",
  titleLine2: "bringing orphaned panels back to life and adding battery storage.",
  description: "Thousands of Georgia homeowners have solar on their roof and no one to call — the installer went out of business, stopped answering, or never serviced what they sold. That's exactly who EKO SOLAR PROS exists for. We adopt orphaned systems installed by any company: our certified technicians diagnose and fix inverter failures, panel issues, wiring problems, and monitoring glitches, and we process RMA warranty claims so faulty equipment gets replaced at no equipment cost to you. Already producing? We add battery storage to existing solar so you keep the lights on through outages and use your own power at night. We've restored over 1,500 systems across Atlanta and Georgia — no matter who installed your solar, we'll take it from here.",
  image1: "./about-1.jpg",
  image1Alt: "EKO SOLAR PROS technician diagnosing solar system issues",
  image2: "./about-2.jpg",
  image2Alt: "Close-up of solar panel inspection",
  authorImage: "",
  authorName: "",
  authorBio: "",
};

// ============================================================================
// Works Section Configuration
// ============================================================================

export interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface WorksConfig {
  title: string;
  subtitle: string;
  projects: WorkItem[];
}

export const worksConfig: WorksConfig = {
  title: "Recent Repairs",
  subtitle: "Solar systems we've brought back to life across Atlanta and Georgia.",
  projects: [
    { 
      id: 1, 
      title: "Inverter Replacement - Buckhead", 
      category: "Inverter Repair", 
      image: "./work-1.jpg" 
    },
    { 
      id: 2, 
      title: "Commercial System Restore - Midtown", 
      category: "Commercial Repair", 
      image: "./work-2.jpg" 
    },
    { 
      id: 3, 
      title: "Battery Integration Fix - Alpharetta", 
      category: "Battery Repair", 
      image: "./work-3.jpg" 
    },
    { 
      id: 4, 
      title: "Panel Replacement - Decatur", 
      category: "Panel Repair", 
      image: "./work-4.jpg" 
    },
  ],
};

// ============================================================================
// Services Section Configuration
// ============================================================================

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  title: "Rescue, Repair & Battery Services",
  subtitle: "Expert care for orphaned solar systems, no matter who installed them — plus battery storage add-ons for solar that's already working.",
  services: [
    {
      id: "01",
      title: "Orphaned System Rescue",
      description: "Installer out of business or won't return calls? We adopt solar systems abandoned by their original installer — full system health check, we track down your equipment records and warranties, fix what's broken, and become your permanent point of contact for service going forward.",
      image: "./solar-house-1.jpg"
    },
    {
      id: "02",
      title: "Battery Storage Add-Ons",
      description: "Add battery backup to your existing solar system — keep your lights, fridge, and Wi-Fi on through outages, and use your own solar power at night instead of buying from the grid. We size, install, and integrate batteries from Tesla, Enphase, EG4, and other major brands with any existing array.",
      image: "./solar-house-2.jpg"
    },
    { 
      id: "03", 
      title: "System Diagnostics", 
      description: "Comprehensive analysis of your entire solar system. We identify why your panels aren't producing, using professional testing equipment to check inverters, panels, wiring, and monitoring systems. You'll get a clear diagnosis and repair plan.", 
      image: "./service-1.jpg" 
    },
    { 
      id: "04", 
      title: "Inverter Repair & Replacement", 
      description: "Inverters are the most common failure point. We repair or replace all major brands including SolarEdge, Enphase, SMA, and Fronius. Our technicians carry common parts for same-day repairs when possible.", 
      image: "./service-2.jpg" 
    },
    { 
      id: "05", 
      title: "Panel Replacement & Repair", 
      description: "Cracked, damaged, or underperforming panels? We replace individual panels or entire arrays, matching specifications to maintain system warranty and performance. We work with all panel manufacturers.", 
      image: "./service-3.jpg" 
    },
    { 
      id: "06", 
      title: "Monitoring & Electrical Fixes", 
      description: "Can't see your production data? We fix monitoring systems, app connections, and electrical issues including faulty wiring, grounding problems, and disconnects. Get your system visibility back.", 
      image: "./service-4.jpg" 
    },
    { 
      id: "07", 
      title: "RMA Warranty Claims", 
      description: "We handle all paperwork and processing for manufacturer warranty claims. If your inverter or panels are under warranty, we'll get them replaced at no equipment cost to you. We work directly with SolarEdge, Enphase, Tesla, and all major manufacturers.", 
      image: "./service-1.jpg" 
    },
  ],
};

// ============================================================================
// Testimonials Section Configuration
// ============================================================================

export interface TestimonialItem {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
}

export interface TestimonialsConfig {
  title: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  title: "What Our Customers Say",
  testimonials: [
    { 
      id: 1, 
      name: "Jennifer Williams", 
      title: "Homeowner, Sandy Springs", 
      quote: "My solar stopped working 3 years after installation. The original installer went out of business. EKO SOLAR PROS diagnosed a failed inverter within an hour and had it replaced the same week. My panels are producing again and I'm saving $250/month!", 
      image: "./testimonial-1.jpg" 
    },
    { 
      id: 2, 
      name: "Robert Chen", 
      title: "Business Owner, Atlanta", 
      quote: "Our commercial solar system was underperforming by 40%. The installer said everything was fine. EKO SOLAR PROS found faulty wiring and replaced 12 panels. Production is now higher than when it was new. These guys know their stuff.", 
      image: "./testimonial-2.jpg" 
    },
    { 
      id: 3, 
      name: "Amanda Davis", 
      title: "Homeowner, Marietta", 
      quote: "My monitoring app stopped working and I had no idea if my panels were producing. EKO SOLAR PROS fixed the communication issue and discovered my inverter was failing. They saved me months of lost production. Highly recommend!", 
      image: "./testimonial-3.jpg" 
    },
  ],
};

// ============================================================================
// Pricing Section Configuration
// ============================================================================

export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  unit: string;
  featured: boolean;
  features: string[];
}

export interface PricingConfig {
  title: string;
  subtitle: string;
  ctaButtonText: string;
  plans: PricingPlan[];
}

export const pricingConfig: PricingConfig = {
  title: "Solar Troubleshooting Specialist",
  subtitle: "Transparent pricing for rescues, repairs, and battery add-ons. We work on all brands and systems installed by any company. We also process RMA warranty claims for equipment replacement at no cost to you.",
  ctaButtonText: "Schedule Service",
  plans: [
    { 
      id: 1, 
      name: "Diagnostic Service", 
      price: 400, 
      unit: "site visit & diagnostic", 
      featured: false, 
      features: [
        "Complete system inspection",
        "Inverter performance test",
        "Panel output analysis",
        "Electrical connection check",
        "Monitoring system review",
        "Written diagnosis report",
        "Repair estimate provided",
        "RMA warranty claim processing"
      ] 
    },
    { 
      id: 2, 
      name: "Standard Repair", 
      price: 499, 
      unit: "starting price", 
      featured: true, 
      features: [
        "Includes diagnostic service",
        "Inverter repair/replacement",
        "Panel replacement (1-4 panels)",
        "Wiring and connection fixes",
        "Monitoring system repair",
        "90-day repair warranty",
        "Same-day service when possible",
        "All major brands supported"
      ] 
    },
    { 
      id: 3, 
      name: "Major System Restore", 
      price: 1299, 
      unit: "starting price", 
      featured: false, 
      features: [
        "Includes diagnostic service",
        "Complete inverter replacement",
        "Multiple panel replacement",
        "Full electrical rework",
        "System reconfiguration",
        "1-year repair warranty",
        "Priority scheduling",
        "Performance guarantee"
      ] 
    },
  ],
};

// ============================================================================
// FAQ Section Configuration
// ============================================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQConfig {
  title: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  title: "Common Questions",
  faqs: [
    {
      question: "My installer went out of business. Can you take over my system?",
      answer: "Yes — this is our specialty. We call these 'orphaned' systems, and we adopt them. We start with a full diagnostic, recover your equipment model and serial information, check what's still under manufacturer warranty, fix what's broken, and become your permanent service contact. You'll never be stuck with a dead system and nobody to call again."
    },
    {
      question: "Can I add batteries to my existing solar system?",
      answer: "In almost every case, yes. Whether your system is grid-tied with no storage or has an older battery that needs upgrading, we size and install battery storage that integrates with your existing panels and inverter. We work with Tesla Powerwall, Enphase IQ Battery, EG4, and other major brands. Batteries keep your home powered during outages and let you use your solar power at night."
    },
    {
      question: "Do you work on systems installed by other companies?",
      answer: "Absolutely! Most of our repairs are on systems we didn't install. We work on all brands and systems regardless of who originally installed them. Many solar companies go out of business or stop providing service - we're here to fill that gap and keep your system running."
    },
    { 
      question: "How do I know if my solar system isn't working?", 
      answer: "Signs your system needs attention: higher electric bills than expected, monitoring app showing zero or low production, error messages on your inverter, physical damage to panels, or your system hasn't been cleaned in over a year. If you're unsure, our $400 site visit and diagnostic will tell you exactly what's happening."
    },
    { 
      question: "What is RMA warranty claim processing?", 
      answer: "RMA (Return Merchandise Authorization) is the process of getting faulty equipment replaced under manufacturer warranty. We handle all the paperwork, documentation, and communication with manufacturers like SolarEdge, Enphase, Tesla, and others. If your inverter or panels are under warranty, we process the claim at no additional cost - you only pay for our diagnostic and installation labor."
    },
    { 
      question: "What brands do you repair?", 
      answer: "We repair all major solar brands including SolarEdge, Enphase, SMA, Fronius, Tesla, SunPower, LG, Panasonic, Canadian Solar, Q Cells, and many more. Our technicians are trained on multiple platforms and carry common replacement parts for faster repairs."
    },
    { 
      question: "Will repairs void my warranty?", 
      answer: "No. We use manufacturer-approved parts and follow proper procedures to maintain your existing warranties. In many cases, we can work directly with manufacturers for warranty claims, potentially saving you money on covered repairs."
    },
    { 
      question: "How quickly can you fix my system?", 
      answer: "We offer same-week diagnostic appointments. Many common repairs like inverter replacements can be completed same-day or next-day if we have parts in stock. For specialty parts, we typically get them within 3-5 business days. Emergency service is available for critical issues."
    },
    { 
      question: "Why did my solar system stop working?", 
      answer: "Common causes include inverter failure (most common), panel damage from weather, loose electrical connections, monitoring system issues, or shading from new tree growth. Our diagnostic service identifies the exact cause and provides a clear repair plan with upfront pricing."
    },
  ],
};

// ============================================================================
// Blog Section Configuration
// ============================================================================

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  category: string;
}

export interface BlogConfig {
  title: string;
  subtitle: string;
  allPostsLabel: string;
  readMoreLabel: string;
  readTimePrefix: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  title: "Solar Repair Insights",
  subtitle: "Learn about common solar problems, maintenance tips, and when to call a professional.",
  allPostsLabel: "All Articles",
  readMoreLabel: "Read More",
  readTimePrefix: "Read ",
  posts: [
    { 
      id: 1, 
      title: "5 Signs Your Solar System Needs Repair", 
      excerpt: "Learn the warning signs that your solar panels aren't working properly. From rising electric bills to error codes, we cover what to watch for and when to call a professional.", 
      readTime: "5 min", 
      date: "Feb 28, 2026", 
      image: "./blog-1.jpg", 
      category: "Troubleshooting" 
    },
    { 
      id: 2, 
      title: "Why Do Solar Inverters Fail?", 
      excerpt: "Inverters are the heart of your solar system and the most common failure point. Understand why they fail, how to prevent issues, and what replacement options are available.", 
      readTime: "6 min", 
      date: "Feb 15, 2026", 
      image: "./blog-2.jpg", 
      category: "Repairs" 
    },
  ],
};

// ============================================================================
// Contact Section Configuration
// ============================================================================

export interface ContactFormOption {
  value: string;
  label: string;
}

export interface ContactConfig {
  title: string;
  subtitle: string;
  nameLabel: string;
  emailLabel: string;
  projectTypeLabel: string;
  projectTypePlaceholder: string;
  projectTypeOptions: ContactFormOption[];
  messageLabel: string;
  submitButtonText: string;
  image: string;
}

export const contactConfig: ContactConfig = {
  title: "Get Your Solar Working Again",
  subtitle: "Installer disappeared? Want batteries added? Tell us about your system — we rescue and repair all brands, no matter who installed them.",
  nameLabel: "Name *",
  emailLabel: "Email *",
  projectTypeLabel: "Service Needed",
  projectTypePlaceholder: "Select service type...",
  projectTypeOptions: [
    { value: "orphaned", label: "Orphaned System — Installer Gone" },
    { value: "battery", label: "Battery Add-On for Existing Solar" },
    { value: "diagnostic", label: "Site Visit & Diagnostic ($400)" },
    { value: "inverter", label: "Inverter Issue" },
    { value: "panels", label: "Panel Problems" },
    { value: "monitoring", label: "Monitoring/Connection Issue" },
    { value: "warranty", label: "RMA Warranty Claim" },
    { value: "other", label: "Other / Not Sure" },
  ],
  messageLabel: "Describe Your Issue (Optional)",
  submitButtonText: "Schedule Service",
  image: "./contact.jpg",
};

// ============================================================================
// Footer Configuration
// ============================================================================

export interface FooterLink {
  label: string;
  href: string;
  icon?: string;
}

export interface FooterConfig {
  marqueeText: string;
  marqueeHighlightChars: string[];
  navLinks1: FooterLink[];
  navLinks2: FooterLink[];
  ctaText: string;
  ctaHref: string;
  copyright: string;
  tagline: string;
}

export const footerConfig: FooterConfig = {
  marqueeText: "We Rescue Solar Systems Others Abandoned",
  marqueeHighlightChars: ["R", "S", "O", "A"],
  navLinks1: [
    { label: "Home", href: "#hero" },
    { label: "Repairs", href: "#works" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "SMS Terms", href: "/terms.html" },
    { label: "Privacy Policy", href: "/privacy-policy.html" },
  ],
  navLinks2: [
    { label: "Instagram", href: "#", icon: "Instagram" },
    { label: "Facebook", href: "#", icon: "Dribbble" },
    { label: "LinkedIn", href: "#", icon: "Dribbble" },
  ],
  ctaText: "Schedule Repair",
  ctaHref: "#contact",
  copyright: "© 2026 EKO SOLAR PROS. All rights reserved.",
  tagline: "Atlanta's Solar Repair Experts",
};
