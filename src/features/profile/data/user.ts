import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Shubham",
  lastName: "Kumar",
  displayName: "Shubham Kumar",
  username: "shubhamkumar",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Competitive Programmer",
    "Full Stack Developer",
  ],
  address: "Bhagalpur, Bihar, India",
  phoneNumber: "KzkxNzk3OTg2NjU2OQ==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "c2h1YmhhbWt1bWFyLmNzZTA0N0BnbWFpbC5jb20=", // base64 encoded
  website: "https://shubhamkr-047portfolio.vercel.app/",
  resume:
    "https://drive.google.com/file/d/1E501zDg6ZaRYGpvctsQMoK_Zg4cf2phr/view?usp=sharing",
  jobTitle: "Full Stack Developer",
  jobs: [
    {
      title: "Competitive Programmer",
      company: "Expet-Codeforces",
      website: "https://codeforces.com/profile/Im_Gonna_Be_King_Of_Reds",
    },
  ],
  about: `
Hello, World! I am Shubham Kumar — a Computer Science undergraduate at Indian Institute of Information Technology, Nagpur with a strong passion for competitive programming, problem-solving, and building impactful software solutions.

With achievements such as [ICPC Regionalist’24](https://icpc.global/ICPCID/HVXPDTUIMK9F), Expert on [Codeforces](https://codeforces.com/profile/Im_Gonna_Be_King_Of_Reds) (Top 2.5% in India), and 5★ on [CodeChef](https://www.codechef.com/users/godfrey7) (Top 1.5% in India), I thrive in tackling challenging algorithmic problems and pushing the boundaries of efficiency. I’ve solved 1000+ problems in CP and DSA, constantly sharpening my analytical and coding skills.

Beyond CP/DSA, I love creating innovative applications. Some of my key projects include:

• [Momento](https://momento-client.vercel.app/) — a full-stack social media platform built with React, Node.js, MongoDB, and Redux, featuring authentication, CRUD operations, and responsive UI.

• [PDFPal](https://pdf-pal-fryc.vercel.app/) — an AI-powered PDF chatbot using Next.js, PostgreSQL, OpenAI, PineconeDB, and AWS S3, enabling real-time interaction with PDFs via natural language.

• [Algorithm Visualizer](https://shubhamkr-047.github.io/Algorithm-Visualizer/) — an interactive platform to learn sorting/searching algorithms with real-time animations and customizable learning controls.

I also lead the Google Developer Group (GDG) CP/DSA team at IIIT Nagpur, where I guide a community of 500+ students, conduct 50+ post-contest discussions, and actively promote competitive programming on campus.

Let's connect and collaborate!
  `,
  avatar: "/icons/dp1.png",
  ogImage: "/icons/dp1.png",

  keywords: ["shubhamkumar", "shubham kumar", "shubham", "kumar"],
  dateCreated: "2023-10-20", // YYYY-MM-DD
};
