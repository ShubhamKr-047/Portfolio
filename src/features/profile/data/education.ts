import type { Education } from "../types/education";

export const EDUCATION: Education[] = [
  {
    id: "iiit-nagpur",
    institution: "Indian Institute of Information Technology, Nagpur",
    period: {
      start: "2022",
      end: "2026",
    },
    website: "https://iiitn.ac.in/",
    icon: "education",
    description: `- Currently studying for a Bachelor's degree in Computer Science and Engineering.
- Language Proficiency: Hindi, English.
- Lead the Google Developer Group (GDG) CP/DSA team
- Achievements:
    - Qualified as [ICPC Regionalist'24](https://icpc.global/ICPCID/HVXPDTUIMK9F).
    - Reached Expert on [Codeforces](https://codeforces.com/profile/Im_Gonna_Be_King_Of_Reds).`,
    skills: [
      "C++",
      "Java",
      "Python",
      "Data Structures",
      "Algorithms",
      "Databases Management System",
      "Systems Design",
      "Distributed Systems",
      "Software Engineering",
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming",
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "OpenAI",
      "PineconeDB",
      "AWS S3",
      "Docker",
      "Git",
      "Self-learning",
      "Teamwork",
      "Presentation",
    ],
    theme: true,
    isExpanded: false,
  },
  {
    id: "saint-josephs",
    institution: "Saint Joseph's School",
    period: {
      start: "2007",
      end: "2021",
    },
    website: "http://sjsbhagalpur.org/",
    icon: "education",
    description: `- Completed 10th and 12th from CISCE board.
- Qualified National Science Olympiad with Zonal Rank: 3, International Rank: 761 (Dec 2019).`,
    skills: [
      "Academic Excellence",
      "Mathematics",
      "Computer Science",
      "Leadership",
      "Teamwork",
    ],
    theme: true,
    isExpanded: false,
  },
];
