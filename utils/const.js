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
  { name: "Jobs", href: "/jobs" },
  { name: "Companies", href: "/companies" },
  { name: "About", href: "/about" },
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
    logoColor: "bg-blue-600",
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
    logoColor: "bg-indigo-700",
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
    logoColor: "bg-slate-800",
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
