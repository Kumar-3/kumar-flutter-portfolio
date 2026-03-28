import ArogyaSakhiImg from "./assets/projects/arogyasakhi.png";
import GlucoQRImg from "./assets/projects/glucoqr.png";
import HemoQRImg from "./assets/projects/hemoqr.jpg";
import ICollectionImg from "./assets/projects/icollection.png";
import PrePapQRImg from "./assets/projects/prepapqr.jpg";
import smartHive from "./assets/projects/smarthrms.jpg";
import vitaQR from "./assets/projects/vitadqr.png";

import DedicatedResourceImg from "./assets/awards/MDS_P_C2.jpg";
import OutstandingMonthlyImg from "./assets/awards/OCP_P_C1.jpg";
import TeamAwardImg from "./assets/awards/TMSCertificate.jpg";
import FastestLearningImg from "./assets/awards/fastestlearningemployee.jpg";
import OutstandingPerformanceImg from "./assets/awards/outstandingperformance.jpg";

import { Achievement, Experience, Project, Skill } from "./types";

export const SKILLS: Skill[] = [
  // Languages
  { name: "Dart", category: "Languages", level: 5 },
  { name: "Kotlin", category: "Languages", level: 4 },
  { name: "Java", category: "Languages", level: 4 },
  { name: "Swift", category: "Languages", level: 4 },

  // Frameworks & Architecture
  { name: "Flutter", category: "Frameworks & Architecture", level: 5 },
  {
    name: "State Management (BLoC, Cubit, Riverpod, GetX)",
    category: "Frameworks & Architecture",
    level: 5,
  },
  {
    name: "Clean Architecture",
    category: "Frameworks & Architecture",
    level: 5,
  },
  { name: "MVVM / MVC", category: "Frameworks & Architecture", level: 5 },

  // Backend & Integrations
  {
    name: "Firebase (Auth, Firestore, FCM, Analytics)",
    category: "Backend & Integrations",
    level: 5,
  },
  {
    name: "Crashlytics & Remote Config",
    category: "Backend & Integrations",
    level: 5,
  },
  { name: "RESTful APIs", category: "Backend & Integrations", level: 5 },
  {
    name: "Google Maps & ML Kit",
    category: "Backend & Integrations",
    level: 4,
  },

  // Device & Platform Communication
  {
    name: "Bluetooth Low Energy (BLE)",
    category: "Device & Platform Communication",
    level: 5,
  },
  {
    name: "GATT / UART Protocols",
    category: "Device & Platform Communication",
    level: 5,
  },
  {
    name: "Wi-Fi Interfaces",
    category: "Device & Platform Communication",
    level: 5,
  },
  {
    name: "Flutter Method Channels (Android / iOS)",
    category: "Device & Platform Communication",
    level: 5,
  },

  // Tools & DevOps
  { name: "Git & GitLab CI/CD", category: "Tools & DevOps", level: 5 },
  { name: "Figma to Pixel-Perfect UI", category: "Tools & DevOps", level: 5 },
  { name: "Dart Isolates & Concurrency", category: "Tools & DevOps", level: 4 },
  { name: "AWS Cloud Services", category: "Tools & DevOps", level: 4 },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "SmartQR Technologies Pvt. Ltd",
    logo: "/logos/smartqr.png", // add logo path
    role: "Senior Flutter Developer",
    period: "Aug 2023 – Present",
    current: true,
    location: "India",
    points: [
      "Delivered and deployed 6+ production-ready Flutter applications across Android and iOS platforms.",
      "Improved UI performance by optimizing widget rebuilds and leveraging Dart isolates for background computations.",
      "Integrated native functionality via Flutter Method Channels across Android (Kotlin) and iOS (Swift), including camera, sensors, and background services.",
      "Reduced production crashes by ~35% using Firebase Crashlytics insights and structured error handling.",
      "Worked on Flutter Embedded solutions for Raspberry Pi 5 with device communication via Wi-Fi, BLE (GATT), and UART.",
      "Implemented unit and integration testing and collaborated using Git/GitLab CI/CD pipelines.",
    ],
  },
  {
    company: "PiSyst India Pvt. Ltd",
    logo: "/logos/pisyst.png", // add logo path
    role: "Flutter Developer",
    employmentType: "Full-time",
    period: "Jun 2022 – Jul 2023 · 1 yr 2 mos",
    location: "Pune, Maharashtra, India · On-site",
    points: [
      "Developed and maintained cross-platform Flutter applications using GetX and BLoC for scalable state management.",
      "Converted Figma designs into pixel-perfect, responsive, and accessible user interfaces.",
      "Integrated REST APIs, authentication flows, and secure local storage using Android Room and secure storage.",
      "Collaborated with backend teams and worked on full-stack features using HTML, CSS, and PHP.",
      "Deployed and managed backend resources on AWS Cloud Services for scalability and reliability.",
    ],
  },
  {
    company: "PiSyst India Pvt. Ltd",
    logo: "/logos/pisyst.png", // same logo reused
    role: "Full Stack Developer Intern",
    employmentType: "Internship",
    period: "Jan 2022 – Jun 2022 · 6 mos",
    location: "Pune, Maharashtra, India · On-site",
    points: [
      "Gained hands-on experience in Flutter and Dart by building UI components and implementing basic application features.",
      "Assisted in REST API integrations and state handling under senior developer guidance.",
      "Worked with senior engineers to understand Clean Architecture, reusable widgets, and Flutter best practices.",
      "Participated in debugging, testing, and code reviews across mobile and web projects.",
    ],
  },
];
export const PROJECTS: Project[] = [
  {
    id: "hemoqr",
    title: "HemoQR – Hemoglobin (Hb) Test",
    description:
      "Cross-platform medical diagnostic application for hemoglobin measurement used in real-world clinical workflows.",
    tags: ["Flutter", "Kotlin", "Swift", "Python (Chaquopy)", "Hive"],
    challenges:
      "Implemented RAW image capture using Android Camera2 via Method Channels and integrated Python-based inference pipelines for ROI processing.",
    downloads: "12k+",
    type: "Medical",
    imageUrl: HemoQRImg,
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.smartqr.hemoqr",
    iosUrl:
      "https://apps.apple.com/in/app/hemoqr-hemoglobin-hb-test/id6477867652",
  },
  {
    id: "prepapqr",
    title: "PrePapQR",
    description:
      "Women’s health diagnostic application for pH strip analysis with controlled production rollout.",
    tags: ["Flutter", "Cubit", "Python Inference", "Hive Encryption"],
    challenges:
      "Extended ROI and inference pipelines with calibration profiles and ensured encryption of sensitive medical data.",
    downloads: "15k+",
    type: "Medical",
    imageUrl: PrePapQRImg,
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.smartqr.prepapqr",
    iosUrl: "https://apps.apple.com/in/app/prepapqr/id6469682291",
  },
  {
    id: "vitadqr",
    title: "VitaDQR",
    description:
      "Vitamin-related diagnostic screening app with limited public distribution.",
    tags: ["Flutter", "Firebase", "REST APIs"],
    challenges:
      "Ensured accurate diagnostic data handling and optimized UI performance for low-end devices.",
    type: "Medical",
    imageUrl: vitaQR,
    androidUrl:
      "https://play.google.com/store/apps/details?id=co.in.smartqr.vitadqr",
  },
  {
    id: "smarthrms",
    title: "Smart HRMS",
    description:
      "Internal enterprise HRMS application for attendance, approvals, and workforce management.",
    tags: ["Flutter", "Clean Architecture", "Role-Based Access"],
    challenges:
      "Designed modular architecture and implemented secure role-based workflows.",
    type: "Enterprise",
    imageUrl: smartHive,
    androidUrl:
      "https://play.google.com/store/apps/details?id=in.co.smartqr.smarthrms",
  },
  {
    id: "arogyasakhi",
    title: "Arogya Sakhi",
    description:
      "Healthcare application supporting diagnostic and patient-centric workflows with limited deployment.",
    tags: ["Flutter", "Clean Architecture", "Firebase", "REST APIs"],
    challenges:
      "Built scalable Flutter architecture and integrated secure healthcare workflows.",
    type: "Medical",
    imageUrl: ArogyaSakhiImg,
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.smartqr.arogyasakhi",
  },

  {
    id: "icollection",
    title: "I-Collection",
    description:
      "Enterprise-grade field collection application used by internal operations teams.",
    tags: ["Flutter", "Offline Storage", "REST APIs"],
    challenges:
      "Implemented offline-first architecture with background sync and performance optimization.",
    type: "Enterprise",
    imageUrl: ICollectionImg,
    androidUrl:
      "https://play.google.com/store/apps/details?id=in.co.ingene.icollection",
  },
  {
    id: "glucoqr",
    title: "GlucoQR",
    description:
      "Glucose diagnostic application currently in early-stage production rollout.",
    tags: ["Flutter", "Platform Channels", "Firebase"],
    challenges:
      "Integrated device communication and ensured reliable data flow between hardware and Flutter UI.",
    type: "Medical",
    imageUrl: GlucoQRImg,
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  // =========================
  // COURSES & CERTIFICATIONS
  // =========================
  {
    type: "course",
    title: "Flutter & Dart – The Complete Guide [2025 Edition]",
    issuer: "Udemy",
    year: "2025",
    credentialId: "UC-eea8c882-69b9-4229-90f1-c6003077e55b",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-eea8c882-69b9-4229-90f1-c6003077e55b",
    skills: ["Flutter", "Dart", "State Management", "App Architecture"],
  },
  {
    type: "course",
    title: "Python Data Structures",
    issuer: "Coursera",
    year: "2020",
    certificateUrl:
      "https://www.coursera.org/account/accomplishments/certificate/22R66HS4DFZP",
    skills: ["Python", "Data Structures"],
  },
  {
    type: "course",
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "Coursera",
    year: "2020",
    certificateUrl:
      "https://www.coursera.org/account/accomplishments/certificate/XGAK7SYVBTP5",
    skills: ["Python", "Programming Fundamentals"],
  },
  {
    type: "course",
    title: "Cybersecurity and the Internet of Things",
    issuer: "Coursera",
    year: "2020",
    certificateUrl:
      "https://www.coursera.org/account/accomplishments/certificate/APB3A7TEQ29Z",
    skills: ["Cybersecurity", "IoT Security"],
  },
  {
    type: "course",
    title: "Convolutional Neural Networks",
    issuer: "Coursera",
    year: "2020",
    certificateUrl:
      "https://www.coursera.org/account/accomplishments/certificate/YU9CT9VPNYSL",
    skills: ["Deep Learning", "CNN", "Computer Vision"],
  },

  // =========================
  // AWARDS & RECOGNITION
  // =========================
  {
    type: "award",
    title: "Most Outstanding & Consistent Performing Resource of the Year",
    issuer: "PiSyst India Pvt. Ltd",
    year: "2022–2023",
    imageUrl: OutstandingPerformanceImg,
  },
  {
    type: "award",
    title: "Fastest Learning Employee",
    issuer: "PiSyst India Pvt. Ltd",
    year: "2023–2024",
    imageUrl: FastestLearningImg,
  },
  {
    type: "award",
    title: "Most Dedicated Resource Award",
    issuer: "PiSyst India Pvt. Ltd",
    year: "2022",
    imageUrl: DedicatedResourceImg,
  },
  {
    type: "award",
    title: "Outstanding Performance Award",
    issuer: "PiSyst India Pvt. Ltd",
    year: "2022",
    imageUrl: OutstandingMonthlyImg,
  },
  {
    type: "award",
    title: "Team Excellence – Tool Management System Project",
    issuer: "PiSyst India Pvt. Ltd",
    year: "2022",
    imageUrl: TeamAwardImg,
  },
];

export const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Government College of Engineering, Karad",
    period: "2019 – 2022",
  },
  {
    degree: "B.Sc. in Computer Science",
    school: "Smt. Kasturbai Walchand College, Sangli",
    period: "2017 – 2019",
  },
];
