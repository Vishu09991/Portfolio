import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Vishnu Hari Sahal",
  title: "Hi all, I'm Vishnu Hari Sahal",
  description:
    "I'm a full stack developer who enjoys taking a product from a rough idea to a working, deployable application. I focus on writing clean, well-structured code and thinking about scalability early — so what I build today doesn't fall apart when it needs to grow tomorrow.",
  resumeLink: "https://drive.google.com/file/d/1Ha0RoeBiJL1r9DeQ1fGqV_83x7WuBs5t/view?usp=sharing",
};

export const openSource = {
  githubUserName: "Vishu09991",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:sahalvishnuhari237@gmail.com",
  url: "mailto:sahalvishnuhari237@gmail.com",
  linkedin: "https://www.linkedin.com/in/vishnu-hari-sahal-968a01287",
  github: "https://github.com/Vishu09991/Vishu09991",
};

export const skillsSection = {
  title: "Skills",
  subTitle: "Technical proficiencies and tools used in production software engineering",
  skillsCategories: [
    {
      title: "Languages",
      subTitle: "Core programming languages",
      skills: [
        { skillName: "Java", iconifyTag: "logos:java", brandColor: "#f89820" },
        { skillName: "Python", iconifyTag: "logos:python", brandColor: "#3776ab" },
        { skillName: "C++", iconifyTag: "skill-icons:cpp", brandColor: "#00599c" },
        { skillName: "JavaScript", iconifyTag: "logos:javascript", brandColor: "#f7df1e" },
        { skillName: "SQL", iconifyTag: "vscode-icons:file-type-sql", brandColor: "#336791" },
      ],
    },
    {
      title: "Backend & Frameworks",
      subTitle: "Backend frameworks & distributed systems",
      skills: [
        { skillName: "Spring Boot", iconifyTag: "logos:spring-icon", brandColor: "#6db33f" },
        { skillName: "Apache Kafka", iconifyTag: "logos:kafka-icon", brandColor: "#00b4d8" },
        { skillName: "Node.js", iconifyTag: "logos:nodejs-icon", brandColor: "#339933" },
        { skillName: "Express.js", iconifyTag: "skill-icons:expressjs-light", brandColor: "#00d2ff" },
        { skillName: "FastAPI", iconifyTag: "simple-icons:fastapi", brandColor: "#009688" },
      ],
    },
    {
      title: "Frontend",
      subTitle: "Frontend web technologies",
      skills: [
        { skillName: "React.js", iconifyTag: "vscode-icons:file-type-reactjs", brandColor: "#61dafb" },
        { skillName: "HTML5", iconifyTag: "vscode-icons:file-type-html", brandColor: "#e34f26" },
        { skillName: "CSS3", iconifyTag: "vscode-icons:file-type-css", brandColor: "#1572b6" },
        { skillName: "Bootstrap", iconifyTag: "logos:bootstrap", brandColor: "#7952b3" },
      ],
    },
    {
      title: "Databases",
      subTitle: "Relational & NoSQL databases",
      skills: [
        { skillName: "MySQL", iconifyTag: "logos:mysql", brandColor: "#00758f" },
        { skillName: "MongoDB", iconifyTag: "skill-icons:mongodb", brandColor: "#47a248" },
        { skillName: "PostgreSQL", iconifyTag: "logos:postgresql", brandColor: "#336791" },
      ],
    },
    {
      title: "Cloud & Tools",
      subTitle: "Cloud, DevOps & developer tools",
      skills: [
        { skillName: "AWS", iconifyTag: "logos:aws", brandColor: "#ff9900" },
        { skillName: "Git / GitHub", iconifyTag: "akar-icons:github-fill", brandColor: "#f05032" },
        { skillName: "Docker", iconifyTag: "logos:docker-icon", brandColor: "#2496ed" },
        { skillName: "Linux/UNIX", iconifyTag: "logos:linux-tux", brandColor: "#fcc624" },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Backend & Microservices",
    progressPercentage: "95",
  },
  {
    Stack: "Full-Stack & Payment Systems",
    progressPercentage: "90",
  },
  {
    Stack: "Cloud & DevOps",
    progressPercentage: "85",
  },
  {
    Stack: "Programming (Java, Python, C++)",
    progressPercentage: "92",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "S.R.M. Institute of Science and Technology",
    subHeader: "B.Tech in Computer Science",
    duration: "Aug 2023 – Present",
    desc: "Location: Chennai, Tamil Nadu",
    grade: "CGPA: 9.5/10",
    descBullets: [
      "Specializing in Computer Science & Engineering with focus on distributed systems, data structures, and backend architecture.",
    ],
  },
  {
    schoolName: "R.P.S. Public School",
    subHeader: "Senior Secondary (Class XII)",
    duration: "Apr 2021 – Mar 2023",
    desc: "Location: Haryana, India",
    grade: "Score: 94%",
    descBullets: [
      "Completed Senior Secondary Education with distinction in Physics, Chemistry, and Mathematics.",
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Cloud Computing Intern",
    company: "Wipro",
    companyLogo: "/img/icons/common/wipro.jpg",
    date: "Dec 2025 – Jan 2026",
    desc: "",
    descBullets: [
      "Implemented IAM best practices across cloud infrastructure, reducing potential security vulnerabilities by 15% based on weekly internal security audits",
      "Developed and deployed Python automation scripts for routine infrastructure tasks, decreasing deployment errors by 12% and improving system reliability",
      "Enhanced log monitoring coverage from 65% to 95% by building custom dashboards in cloud monitoring tools",
    ],
    tags: ["AWS", "IAM", "Python", "Cloud Monitoring", "DevOps"],
  },
  {
    role: "Lead Software Engineer – Web Development",
    company: "DoItForMe",
    companyLogo: "/img/icons/common/doitforme.jpg",
    date: "Feb 2026 – Apr 2026",
    desc: "",
    descBullets: [
      "Built and maintained scalable backend and frontend features for a gig marketplace using Next.js 15, Supabase, and PostgreSQL",
      "Integrated Cashfree Payment Gateway to power end-to-end payment orchestration — order creation, payment verification, and transaction tracking",
      "Designed and implemented an escrow-based payment system for secure, fraud-safe holding of funds until transaction completion",
      "Optimized payment flow performance and reduced latency by designing asynchronous, event-driven processing pipelines",
    ],
    tags: ["Next.js 15", "Supabase", "PostgreSQL", "Cashfree", "Escrow", "Event-Driven"],
  },
  {
    role: "Software Engineering Job Simulation",
    company: "JPMorganChase & Co. (Forage)",
    companyLogo: "/img/icons/common/jpmorgan.jpg",
    date: "Nov 2025",
    desc: "",
    descBullets: [
      "Engineered a Spring Boot microservice using Apache Kafka for real-time, high-throughput ingestion of financial transactions, sustaining 6,000 transactions/minute at 99.99% reliability",
      "Implemented data validation, persistence, and downstream processing with Spring Data JPA on an H2 SQL database",
      "Integrated external REST APIs and exposed analytical endpoints for processed transaction data, following SDLC best practices",
    ],
    tags: ["Java", "Spring Boot", "Apache Kafka", "Spring Data JPA", "H2 SQL", "REST APIs"],
  },
];



export const projects: ProjectType[] = [
  {
    name: "StockX – FinTech Stock Trading Platform",
    desc: "",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    descBullets: [
      "Built a full-stack, real-time stock trading platform, reducing order placement latency by 150ms+ and trading errors by 10%",
      "Architected trade execution, position updates, and portfolio calculations as distributed RESTful services, saving traders 5 hours weekly",
      "Built interactive React dashboards visualizing holdings and performance, improving P&L data accuracy by 7%",
    ],
    link: "https://stock-x-frontend-five.vercel.app",
  },
  {
    name: "Real-Time Credit Risk Prediction System",
    desc: "",
    tags: ["Python", "Scikit-Learn", "FastAPI", "SHAP"],
    descBullets: [
      "Built a real-time loan default risk model, reducing false positives by 15% at a fixed decision threshold",
      "Engineered an explainable risk-assessment microservice with FastAPI, cutting processing time by 30% for 800+ daily applications",
      "Applied SHAP-based explainability with a visualization dashboard for transparent borrower risk insights",
    ],
    github: "https://github.com/Vishu09991/Real-Time-Credit-Risk",
    link: "# [DRAFT - please confirm live link]",
  },
  {
    name: "ePower Billing Suite",
    desc: "",
    tags: ["Java", "Swing", "AWT", "JDBC", "MySQL"],
    descBullets: [
      "Developed a Java Swing electricity billing system (EBMS) handling 5,000+ monthly transactions, cutting billing processing time by 30%",
      "Engineered a normalized 35-table MySQL database with JDBC integration, reducing security vulnerabilities found in penetration tests by 60%",
      "Applied object-oriented design principles, reducing billing-related bug reports by 20% and improving system maintainability",
    ],
    github: "https://github.com/Vishu09991/ePower-Billing-Suite",
    link: "https://github.com/Vishu09991/ePower-Billing-Suite",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "IEEE Xplore — 2026 International Conference on AI Innovations and Industry (ICAIII)",
    role: "Co-author",
    feedback: "Performance Evaluation of Small Language Models on Movie Review Dataset",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Vishnu Hari Sahal | Software Development Engineer",
  description: greetings.description,
  author: "Vishnu Hari Sahal",
  image: "https://avatars.githubusercontent.com/u/Vishu09991",
  url: "https://vishnuharisahal.com", // [DRAFT - please confirm]
  keywords: [
    "Vishnu Hari Sahal",
    "Vishnu Hari Sahal Portfolio",
    "Software Development Engineer",
    "Backend Engineer",
    "Full Stack Developer",
    "Spring Boot",
    "Next.js",
    "Java",
    "Python",
    "Kafka",
    "Payments Systems",
  ],
};

