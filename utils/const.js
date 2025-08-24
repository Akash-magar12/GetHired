import {
  Megaphone,
  Palette,
  Users,
  DollarSign,
  Heart,
  Shield,
  Briefcase,
  GraduationCap,
  Headphones,
  FolderOpen,
} from "lucide-react";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Find Jobs", href: "/jobs" },
  // { name: "Companies", href: "/companies" },
  { name: "Upload Resume", href: "/upload-resume" }, // ✨ key feature
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const stats = [
  {
    id: 0,
    number: "10K",
    suffix: "+",
    description: "Job Matches ",
    nextLine: "Made Through NextStep",
  },
  {
    id: 1,

    number: "3K",
    suffix: "+",
    description: "Verified Employers Onboard",
  },
  {
    id: 2,

    number: "95%",
    suffix: "",
    description: "Satisfaction Rate From Both Talents",
    nextLine: "And Companies",
  },
  {
    id: 3,
    number: "24/7",
    suffix: "",
    description: "Dedicated Support To Guide Your",
    nextLine: "Hiring Or Job Search Journey",
  },
];

export const jobs = [
  {
    id: 1,
    company: "TechNova",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center",
    location: "San Francisco, USA",
    title: "Front-End Developer",
    types: ["Full Time"],
    contractType: "Permanent",
    salary: "$6,500-10,000/Month",
    description:
      "Develop Responsive User Interfaces Using React. Collaborate With Designers And Backend Teams To Improve UX Across Platforms.",
    postedAgo: "3 days ago",
  },
  {
    id: 2,
    company: "PixelCraft",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center",
    location: "Remote",
    title: "UI/UX Designer",
    types: ["Full Time", "Part Time"],
    contractType: "Permanent",
    salary: "$3,000-7,000/Month",
    description:
      "Work Closely With Product Teams To Design Intuitive, User-Friendly Interfaces. Portfolio Required. Remote Work Available.",
    postedAgo: "1 day ago",
  },
  {
    id: 3,
    company: "SecureMind",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center",
    location: "Singapore",
    title: "Cybersecurity Analyst",
    types: ["Full Time", "Urgent"],
    contractType: "Permanent",
    salary: "$5,500-9,000/Month",
    description:
      "Monitor Network Activity, Detect Threats, And Respond To Incidents In Real Time. Experience With Firewalls And SIEM Tools Required.",
    postedAgo: "2 days ago",
  },
];
export const jobCategories = [
  {
    title: "Marketing & Communication",
    jobs: 68,
    icon: Megaphone,
    color: "bg-blue-500",
  },
  {
    title: "Design & Development",
    jobs: 98,
    icon: Palette,
    color: "bg-orange-500",
  },
  {
    title: "Human Research & Development",
    jobs: 51,
    icon: Users,
    color: "bg-purple-500",
  },
  {
    title: "Finance Management",
    jobs: 45,
    icon: DollarSign,
    color: "bg-green-500",
  },
  {
    title: "Healthcare & Medical",
    jobs: 43,
    icon: Heart,
    color: "bg-emerald-500",
  },
  {
    title: "Armforce Guide & Security",
    jobs: 44,
    icon: Shield,
    color: "bg-blue-600",
  },
  {
    title: "Business & Consulting",
    jobs: 29,
    icon: Briefcase,
    color: "bg-pink-500",
  },
  {
    title: "Education & Training",
    jobs: 58,
    icon: GraduationCap,
    color: "bg-violet-500",
  },
  {
    title: "Customer Support Care",
    jobs: 65,
    icon: Headphones,
    color: "bg-indigo-500",
  },
  {
    title: "Project Management",
    jobs: 53,
    icon: FolderOpen,
    color: "bg-amber-500",
  },
];

export const alljobs = [
  {
    id: 1,
    company: "InnoSoft Labs",
    logo: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=100&h=100&fit=crop&crop=center",
    location: "Bangalore, India",
    title: "React Developer",
    types: ["Full Time"],
    contractType: "Permanent",
    salary: "₹8-12 LPA",
    description:
      "Build modern, responsive applications using React and Tailwind CSS. Collaborate with designers for seamless user experiences.",
    postedAgo: "2 days ago",
  },
  {
    id: 2,
    company: "CodeCrafters",
    logo: "https://images.unsplash.com/photo-1581091012184-5c8afcf9b7c5?w=100&h=100&fit=crop&crop=center",
    location: "Hyderabad, India",
    title: "Backend Engineer (Node.js)",
    types: ["Full Time"],
    contractType: "Permanent",
    salary: "₹10-15 LPA",
    description:
      "Develop scalable backend APIs using Node.js and Express. Experience with MongoDB and cloud services preferred.",
    postedAgo: "1 day ago",
  },
  {
    id: 3,
    company: "NextGen Tech",
    logo: "https://images.unsplash.com/photo-1601933471634-b43852f11806?w=100&h=100&fit=crop&crop=center",
    location: "Delhi, India",
    title: "Full Stack Developer",
    types: ["Full Time"],
    contractType: "Permanent",
    salary: "₹9-14 LPA",
    description:
      "Work on MERN stack projects, integrate APIs, and manage deployment. Strong problem-solving skills required.",
    postedAgo: "3 days ago",
  },
  {
    id: 4,
    company: "DesignHive",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop&crop=center",
    location: "Mumbai, India",
    title: "UI/UX Designer",
    types: ["Full Time", "Remote"],
    contractType: "Permanent",
    salary: "₹6-10 LPA",
    description:
      "Design user-friendly, aesthetic interfaces for web and mobile apps. Figma/Adobe XD proficiency is mandatory.",
    postedAgo: "5 days ago",
  },
  {
    id: 5,
    company: "FinSolve",
    logo: "https://images.unsplash.com/photo-1581093588401-22d8d8a2ffde?w=100&h=100&fit=crop&crop=center",
    location: "Pune, India",
    title: "Data Analyst",
    types: ["Full Time"],
    contractType: "Permanent",
    salary: "₹7-11 LPA",
    description:
      "Analyze financial datasets, build dashboards, and provide insights. Strong knowledge of SQL and Power BI required.",
    postedAgo: "2 days ago",
  },
  {
    id: 6,
    company: "HealthSphere",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=100&h=100&fit=crop&crop=center",
    location: "Chennai, India",
    title: "Mobile App Developer (Flutter)",
    types: ["Full Time"],
    contractType: "Permanent",
    salary: "₹6-9 LPA",
    description:
      "Develop healthcare-focused mobile apps using Flutter. Work closely with cross-functional medical teams.",
    postedAgo: "4 days ago",
  },
  {
    id: 7,
    company: "EduWave",
    logo: "https://images.unsplash.com/photo-1581092919535-7146a1e8c09b?w=100&h=100&fit=crop&crop=center",
    location: "Kolkata, India",
    title: "Content Strategist",
    types: ["Part Time", "Remote"],
    contractType: "Contract",
    salary: "₹3-5 LPA",
    description:
      "Create engaging learning content for edtech platforms. Experience in SEO and instructional design preferred.",
    postedAgo: "1 day ago",
  },
  {
    id: 8,
    company: "AgriTech India",
    logo: "https://images.unsplash.com/photo-1606813902916-1c9a2d36c3a4?w=100&h=100&fit=crop&crop=center",
    location: "Ahmedabad, India",
    title: "IoT Engineer",
    types: ["Full Time"],
    contractType: "Permanent",
    salary: "₹8-12 LPA",
    description:
      "Develop IoT devices and dashboards for smart farming. Experience with sensors and cloud platforms is required.",
    postedAgo: "6 days ago",
  },
  {
    id: 9,
    company: "GreenEnergy Corp",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop&crop=center",
    location: "Jaipur, India",
    title: "Project Manager",
    types: ["Full Time"],
    contractType: "Contract",
    salary: "₹12-18 LPA",
    description:
      "Lead renewable energy projects across Rajasthan. Experience in handling large-scale solar projects preferred.",
    postedAgo: "3 days ago",
  },
  {
    id: 10,
    company: "MediAI",
    logo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=center",
    location: "Gurgaon, India",
    title: "AI Research Engineer",
    types: ["Full Time"],
    contractType: "Permanent",
    salary: "₹15-22 LPA",
    description: "Work on AI/ML healthcare models. Experience in Python, TensorFlow, and NLP is a must.",
    postedAgo: "2 days ago",
  },
]

