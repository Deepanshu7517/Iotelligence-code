import assemblyInspectionVideo from '../assets/applications-component/AssemblyInspection.mp4'
import chassisInspectionVideo from '../assets/applications-component/ChasisInspection.mp4'
import cosmeticInspectionVideo from '../assets/applications-component/CosmeticInspection.mp4'
import labelInspectionVideo from '../assets/applications-component/LabelInspection.mp4'
import {
  CodeXml,
  Smartphone,
  Cloud,
  BrainCircuit,
  PenTool,
  type LucideIcon,
  Linkedin,
  Instagram,
  Car,
  BatteryCharging,
  ShoppingCart,
  HeartPulse,
  CircuitBoard,
  Building,
  Wind,
  Beaker,
} from "lucide-preact";
import { PlaceHolderImages } from "./placeholder-images";
import hanonLogo from "../../src/assets/hanon.png";
import aliconLogo from "../../src/assets/aliconLogo.png";
import bartechLogo from "../../src/assets/bartech.png";
import sensingAutomationLogo from "../../src/assets/sensingAutomationLogo.png";
import omIndustriesLogo from "../../src/assets/omIndustriesLogo.png";
import {
  CheckCircle,
  Users,
  BarChart,
  HardHat,
  Share2,
  ScanLine,
  Search,
  Weight,
  Gauge,
  Check,
} from "lucide-preact";
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
];

export const milestones = [
  { year: "2025", description: "Founded" },
  { data: "10+", description: "Happy Clients" },
  { data: "15+", description: "Projects Completed" },
];

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
};

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Building responsive, high-performance websites and web applications tailored to your business needs.",
    icon: CodeXml,
    link: "/web-development",
  },
  {
    title: "Mobile Apps",
    description:
      "Designing and developing native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
    link: "",
  },
  {
    title: "Cloud Integration",
    description:
      "Leveraging cloud platforms like AWS and Google Cloud to build scalable and resilient infrastructure.",
    icon: Cloud,
    link: "",
  },
  {
    title: "AI & Automation",
    description:
      "Implementing AI-powered solutions and automation to enhance efficiency and drive growth.",
    icon: BrainCircuit,
    link: "",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually appealing user interfaces that provide an exceptional user experience.",
    icon: PenTool,
    link: "",
  },
];

const projectImages = PlaceHolderImages.filter((p) =>
  p.id.startsWith("project-")
).map((p) => p.imageUrl);

export const projects = [
  {
    title: "Enterprise CRM Platform",
    description:
      "A comprehensive CRM solution that improved user engagement by 40% through intuitive design and powerful features.",
    image: projectImages[0],
    imageHint: "dashboard ui",
  },
  {
    title: "E-commerce Mobile App",
    description:
      "A sleek and performant mobile app that boosted sales and customer retention for a major retail brand.",
    image: projectImages[1],
    imageHint: "mobile app",
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "An advanced analytics dashboard providing real-time insights, helping the client make data-driven decisions.",
    image: projectImages[2],
    imageHint: "website analytics",
  },
];

export const iotelligenceProjects = [
  {
    title: "Camera Based Part Inspection",
    description:
      "AI-powered vision inspection system used to detect missing, incorrect, or defective components such as inserts, threads, ball guides, rivets, and packing accuracy in real time.",
    images: [
      "/assets/iotelligence/camera-inspection/insert-detection.jpg",
      "/assets/iotelligence/camera-inspection/thread-detection.jpg",
      "/assets/iotelligence/camera-inspection/ball-guide-detection.jpg",
      "/assets/iotelligence/camera-inspection/rivet-detection.jpg",
      "/assets/iotelligence/camera-inspection/packing-inspection.jpg",
    ],
    imageHint: "machine vision inspection",
  },

  {
    title: "Part Weight and Count Validation",
    description:
      "Automated validation system ensuring correct part count and weight using sensors, PLC integration, and vision-assisted verification to prevent dispatch and packing errors.",
    images: [
      "/assets/iotelligence/weight-count/weight-validation-panel.jpg",
      "/assets/iotelligence/weight-count/mobile-validation.jpg",
    ],
    imageHint: "industrial weight validation",
  },

  {
    title: "Part Traceability",
    description:
      "End-to-end traceability solution enabling tracking of parts across all manufacturing processes using QR codes, process sequencing, and real-time verification to ensure compliance and quality.",
    images: [
      "/assets/iotelligence/traceability/qr-code-part.jpg",
      "/assets/iotelligence/traceability/process-flow.jpg",
      "/assets/iotelligence/traceability/correct-sequence.jpg",
      "/assets/iotelligence/traceability/incorrect-sequence.jpg",
      "/assets/iotelligence/traceability/shopfloor-tracking.jpg",
    ],
    imageHint: "manufacturing traceability",
  },

  {
    title: "SCADA Based Automation",
    description:
      "SCADA-driven automation system for batch processing and material handling, enabling precise dosing, valve control, recipe management, alarms, and real-time monitoring across multiple kettles.",
    images: [
      "/assets/iotelligence/scada/process-diagram.jpg",
      "/assets/iotelligence/scada/batch-selection.jpg",
      "/assets/iotelligence/scada/recipe-management.jpg",
      "/assets/iotelligence/scada/real-time-monitoring.jpg",
    ],
    imageHint: "scada automation dashboard",
  },

  {
    title: "Unlocking Efficiency: Manpower Management",
    description:
      "Advanced manpower analytics dashboard providing insights into attendance, productivity, skill utilization, absenteeism trends, and workforce optimization for data-driven decision making.",
    images: [
      "/assets/iotelligence/manpower/attendance-dashboard.jpg",
      "/assets/iotelligence/manpower/employee-analytics.jpg",
      "/assets/iotelligence/manpower/training-kiosk.jpg",
      "/assets/iotelligence/manpower/absenteeism-trends.jpg",
    ],
    imageHint: "manpower analytics dashboard",
  },

  {
    title: "Visualisation for EOL Testing Parameters",
    description:
      "End-of-Line (EOL) testing visualization platform that monitors control limits, detects deviations, generates alarms, and enables root-cause analysis for quality assurance.",
    images: [
      "/assets/iotelligence/eol/charts-dashboard.jpg",
      "/assets/iotelligence/eol/deviation-alerts.jpg",
      "/assets/iotelligence/eol/parameter-monitoring.jpg",
    ],
    imageHint: "quality testing dashboard",
  },

  {
    title: "Maximize Efficiency: OEE Dashboard",
    description:
      "Comprehensive OEE dashboard capturing availability, performance, and quality metrics with real-time loss tracking, SPC calculations, and automated production reporting.",
    images: [
      "/assets/iotelligence/oee/oee-overview.jpg",
      "/assets/iotelligence/oee/performance-metrics.jpg",
      "/assets/iotelligence/oee/quality-monitoring.jpg",
      "/assets/iotelligence/oee/production-report.jpg",
    ],
    imageHint: "oee manufacturing dashboard",
  },
];

export const technologies = [
  "React",
  "Node.js",
  "AWS",
  "PostgreSQL",
  "Microsoft",
  "Google Cloud",
  "Stripe",
  "Next.js",
  "TypeScript",
  "Docker",
];

const testimonialAvatars = PlaceHolderImages.filter((p) =>
  p.id.startsWith("testimonial-")
).map((p) => p.imageUrl);

export const testimonials = [
  {
    quote:
      "NovaTech Solutions transformed our digital presence. Their team is professional, skilled, and delivered beyond our expectations. Highly recommended!",
    name: "Sarah Johnson",
    company: "CEO, Innovate Inc.",
    avatar: testimonialAvatars[0],
    avatarHint: "profile portrait",
  },
  {
    quote:
      "The mobile app they developed for us is a masterpiece. It's fast, intuitive, and has received amazing feedback from our users.",
    name: "Michael Chen",
    company: "Founder, TechGurus",
    avatar: testimonialAvatars[1],
    avatarHint: "professional headshot",
  },
  {
    quote:
      "Working with NovaTech was a breeze. Their expertise in cloud integration helped us scale our services seamlessly.",
    name: "Emily Rodriguez",
    company: "CTO, CloudScape",
    avatar: testimonialAvatars[2],
    avatarHint: "ceo portrait",
  },
];

export const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Projects" },
    { href: "#", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  services: services.map((service) => ({
    href: service.link,
    label: service.title,
  })),
};

export const socialLinks = [
  {
    href: "https://www.linkedin.com/company/iotelligence-software-solutions/",
    icon: Linkedin,
  },
  {
    href: "https://www.instagram.com/iotelligence?utm_source=qr&igsh=aHZnbTY2eWZqYWVi",
    icon: Instagram,
  },
];
export const techStackProjects = [
  {
    title: "IIoT Data Platform",
    description:
      "A real-time data monitoring and analytics platform for industrial machinery, providing insights into operational efficiency and predictive maintenance.",
    image:
      "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    imageHint: "industrial dashboard",
    stack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
      backend: ["Node.js", "Express", "MQTT"],
      database: ["PostgreSQL", "TimescaleDB"],
    },
  },
  {
    title: "Computer Vision QA System",
    description:
      "An AI-powered quality assurance system that uses computer vision to detect defects in manufacturing lines with high accuracy.",
    image:
      "https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    imageHint: "computer vision",
    stack: {
      frontend: ["React", "Material-UI"],
      backend: ["Python", "Flask", "OpenCV", "TensorFlow"],
      database: ["MongoDB"],
    },
  },
  {
    title: "Field Service Mobile App",
    description:
      "A cross-platform mobile app for technicians to manage work orders, track parts inventory, and access technical documentation in the field.",
    image:
      "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    imageHint: "mobile interface",
    stack: {
      frontend: ["React Native", "Redux"],
      backend: ["Firebase"],
      database: ["Firestore"],
    },
  },
];

// About Section Data
export const expertise = [
  "Real-time data monitoring",
  "Intelligent dashboards",
  "Computer vision solutions",
  "Traceability systems",
  "Advanced analytics",
];

export const clients = [
  { name: "Hanon Systems", location: "Bhiwadi", note: "", logo: hanonLogo },
  {
    name: "Subros",
    location: "Manesar & Karsanpura",
    logo: "https://www.subros.com/public/upload/logo/20241221112238.webp",
  },
  {
    name: "IFB",
    location: "Binola & Kolkata",
    logo: "https://www.ifbappliances.com/content/dam/ifbindustrieslimitedprogram/icons/ifb-logo.svg",
  },
  { name: "Alicon", location: "Binola", logo: aliconLogo },
  {
    name: "Munjal Kiriu",
    location: "Manesar",
    logo: "https://munjalkiriu.co.in/wp-content/uploads/2020/03/logo.png",
  },
  {
    name: "Amem",
    location: "Bhiwadi",
    logo: "https://www.anandgroupindia.com/wp-content/uploads/2021/08/amem-new.png",
  },
  {
    name: "Anchemco",
    location: "Parwanoo",
    logo: "https://www.anandgroupindia.com/wp-content/uploads/2019/05/i-logo.png",
  },
  {
    name: "Elofic",
    location: "Faridabad",
    logo: "https://www.elofic.com/wp-content/uploads/elementor/thumbs/Elofic-logo-White-qymo29rqogyh6mz9qnqetvdwdbxitnz4eev1tcz7cw.png",
  },
  {
    name: "Super Screws",
    location: "Faridabad",
    logo: "https://www.superscrews.com/images/logo.png",
  },
];

export const collaborators = [
  {
    name: "Unique Controls & Solutions",
    location: "Kolhapur",
    logo: "https://www.uniquecontrols.net/images/logo.png",
  },
  { name: "Bartech", location: "Pune & Nashik", logo: bartechLogo },
  { name: "Sensing Automations", location: "NCR", logo: sensingAutomationLogo },
  { name: "OM Industries", location: "NCR", logo: omIndustriesLogo },
];

// Products Page
export const digitalOperations = [
  {
    title: "End-to-End Connectivity",
    icon: Share2,
  },
  {
    title: "Effective System Performance",
    icon: BarChart,
  },
  {
    title: "Visibility of Plant Operations",
    icon: HardHat,
  },
  {
    title: "Identification of KPI's to Monitor Performance",
    icon: CheckCircle,
  },
  {
    title: "Strategic Decision Making",
    icon: Users,
  },
  {
    title: "Operational Excellence: Processes & Technologies",
    icon: CheckCircle,
  },
  {
    title: "Effective Dashboards",
    icon: BarChart,
  },
];

export const transformationSteps = [
  "DATA",
  "INSIGHTS",
  "DECISIONS",
  "ACTIONS",
  "Better Outcomes Create Value",
];

export const smartPeopleLayers = [
  "Standard way of working",
  "Empower and engage people",
  "Performance Culture",
];

export const useCases = [
  {
    title: "Part Inspection",
    icon: Search,
    features: [
      "Insert Detection",
      "Thread Detection (0.76, 0.78, 0.84, 0.86)",
      "Counter Sunk Detection",
      "Rivet Detection",
      "Packing Inspection",
    ],
    imageHint: "conveyor belt",
  },
  {
    title: "Insert Thread Inspection",
    icon: Check,
    features: [
      "Insert Thread NG/OK detection",
      "Camera inspection setup images",
      "Thread missing insert detection",
      "Software results visualization",
      "PLC validation integration",
    ],
    imageHint: "factory machine",
  },
  {
    title: "Radiator Fan Orientation Detection",
    icon: Gauge,
    features: [
      "Clock-wise vs anti-clockwise detection",
      "Real-time visual feedback",
      "Setup and implementation images",
    ],
    imageHint: "industrial fan",
  },
  {
    title: "OCR-Based Part Validation",
    icon: ScanLine,
    features: [
      "Serial number reading",
      "Part code validation",
      "Batch code tracking",
      'Rating labels (e.g., "LUMAX 2911")',
      "Multiple text recognition examples",
    ],
    imageHint: "barcode scan",
  },
  {
    title: "Quality Module Features",
    icon: Check,
    features: [
      "Process tracking with grease inspection",
      "Face movement tracking for operator monitoring",
      "Process validation in real-time",
    ],
    imageHint: "quality control",
  },
  {
    title: "Dimension Measurement",
    icon: Gauge,
    features: [
      "Camera-based dimension measurement",
      "Rivet detection (detected vs not detected)",
      "Measurement accuracy (Width: 10.99, Length: 13.34)",
      "Concentricity and pin-to-pin distance",
      "Dashboard integration",
    ],
    imageHint: "technical drawing",
  },
  {
    title: "Part Weight and Count Validation",
    icon: Weight,
    features: [
      "Real-time weight checking",
      "QR code scanning",
      "Counting validation systems",
      "Mobile integration for validation",
    ],
    imageHint: "warehouse scale",
  },
];

export const eolFeatures = [
  "Real-time visibility into manufacturing processes and product quality",
  "Actionable insights for continuous improvement",
  "Product traceability through IIoT solutions",
  "Interface for action plans addressing abnormalities",
  "Proactive problem-solving",
  "Root cause identification",
  "Cost reduction (warranty claims, returns, rework)",
];

export const traceabilityGoals = [
  "End-to-End Traceability",
  "Process Integration across all manufacturing processes",
  "Identification and Labeling",
  "Real-time Monitoring",
  "Compliance and Reporting for audit purposes",
];

export const oeeFeatures = [
  "Monitor and maintain product quality standards",
  "Detect and address issues in real time",
  "Identify opportunities for process optimization",
  "Deliver high-quality products consistently",
];

export const energyBenefits = [
  "Enhanced Visibility into energy patterns",
  "Cost Savings through efficiency improvements",
  "Data-Driven Decision Making",
  "Sustainability goals support",
  "Integration with Production Data",
];
const dashboardImages = PlaceHolderImages.filter((p) =>
  p.id.startsWith("dashboard-")
).map((p) => p.imageUrl);

export const productDashboards = [
  {
    title: "Real-Time Sales Analytics",
    description:
      "A dashboard providing live insights into sales performance, tracking KPIs like revenue, conversion rates, and top-selling products.",
    image: dashboardImages[0],
    imageHint: "sales dashboard",
  },
  {
    title: "User Engagement Tracker",
    description:
      "Monitor user activity, feature adoption, and retention metrics to understand user behavior and improve product experience.",
    image: dashboardImages[1],
    imageHint: "user analytics",
  },
  {
    title: "Inventory Management System",
    description:
      "An intuitive dashboard for tracking stock levels, managing supply chain, and forecasting inventory needs to prevent stockouts.",
    image: dashboardImages[2],
    imageHint: "inventory ui",
  },
];

export const applications = [
  {
    title: "Assembly Inspection AI",
    description: "Identifies objects and verifies complex product assemblies",
    video: assemblyInspectionVideo,
    videoHint: "circuit board",
  },
  {
    title: "Cosmetic Inspection AI",
    description: "Captures minute surface-level defects and anomalies",
    video: cosmeticInspectionVideo,
    videoHint: "car door",
  },
  {
    title: "Dimensioning AI",
    description:
      "Validates critical product dimensions of various shapes and kinds",
    video: chassisInspectionVideo,
    videoHint: "mechanical part",
  },
  {
    title: "Label Inspection AI",
    description:
      "Reads and verifies complex characters on various kinds of surfaces",
    video: labelInspectionVideo,
    videoHint: "product label",
  },
];
export const industries = [
  { title: "Automobile & Transportation", icon: Car },
  { title: "Battery and Electric Vehicles", icon: BatteryCharging },
  { title: "Consumer Goods and FMCG", icon: ShoppingCart },
  { title: "Healthcare and Medical Devices", icon: HeartPulse },
  { title: "Electronics and Semiconductors", icon: CircuitBoard },
  { title: "Building Materials and Infrastructure", icon: Building },
  { title: "Energy and Utilities", icon: Wind },
  { title: "Chemicals and Plastics", icon: Beaker },
];
