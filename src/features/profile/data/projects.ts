import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "momento",
    title: "Momento - Social Media App",
    period: {
      start: "Oct 2024",
    },
    link: "https://momento-client.vercel.app/",
    skills: [
      "Full Stack",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "JWT",
      "bcrypt",
      "Material-UI",
    ],
    description: `A full-stack social media application supporting CRUD operations on posts, featuring user authentication, post creation, and profile management.
- 🔐 Secure user authentication and authorization with JSON Web Tokens (JWT) and bcrypt
- 📝 Complete CRUD operations for posts with user-friendly interface
- 👤 User profile management and customization features
- 🎨 Responsive design with Material-UI components for enhanced user experience
- 📱 Mobile-friendly interface with interactive components
- 🚀 Achieved 50+ active users with 20% increase in user engagement

Technologies used: React, Node.js, Express, MongoDB, Redux, JWT, bcrypt, Material-UI`,
    isExpanded: true,
  },
  {
    id: "pdfpal",
    title: "PDFPal",
    period: {
      start: "Apr 2024",
    },
    link: "https://pdf-pal-fryc.vercel.app/",
    skills: [
      "AI/ML",
      "Next.js 15",
      "PostgreSQL",
      "OpenAI",
      "AWS S3",
      "PineconeDB",
      "ShadCN",
      "DrizzleORM",
      "Clerk",
    ],
    description: `AI-powered PDF Chatbot Platform built using Next.js 15, DrizzleORM, and OpenAI.
- 🤖 Real-time PDF content querying and interaction using natural language
- 🔍 Retrieval-Augmented Generation (RAG) implementation with vector space embedding
- ⚡ Fast, contextually relevant responses powered by PineconeDB
- 🛡️ Secure and scalable system design with AWS S3 for file handling
- 🔐 User authentication and management with Clerk
- 🎨 Responsive, accessible chat interface built with ShadCN UI for polished user experience
- 📊 Efficient data management with PostgreSQL and DrizzleORM

Technologies used: Next.js 15, PostgreSQL, OpenAI, AWS S3, PineconeDB, ShadCN, DrizzleORM, Clerk`,
  },
  {
    id: "algorithm-visualizer",
    title: "Algorithm Visualizer",
    period: {
      start: "Dec 2023",
    },
    link: "https://shubhamkr-047.github.io/Algorithm-Visualizer/",
    skills: [
      "Web Development",
      "HTML",
      "CSS",
      "JavaScript",
      "Sorting Algorithms",
      "CSS Grid",
      "Flexbox",
      "Keyframes",
    ],
    description: `Developed an interactive Algorithm Visualizer that supports 6 sorting and searching algorithms.
- 🎯 Step-by-step execution visualization through smooth real-time animations
- ⚙️ Customizable learning controls including speed adjustment, input size variation, and reset options
- 📚 Improved usability and helped beginners better understand algorithmic flow
- 🎨 Responsive interface with clean styling and fluid animations
- 🔧 Implemented using modern web technologies: HTML, CSS, JavaScript
- 📐 Utilized CSS Grid, Flexbox, and Keyframes for optimal layout and animations

Technologies used: HTML, CSS, JavaScript, CSS Grid, Flexbox, Keyframes`,
  },
  {
    id: "shubham-portfolio",
    title: "Portfolio",
    period: {
      start: "Aug 2023",
    },
    link: "https://shubhamkr-047portfolio.vercel.app/",
    skills: [
      "Next.js 15",
      "Tailwind CSS v4",
      "Radix UI",
      "Motion",
      "shadcn/ui",
      "Vercel",
    ],
    description: `A minimal portfolio showcasing my projects and skills.
- 🎨 Clean & modern design with responsive layout
- 🌓 Light & Dark theme support for better user experience
- 📱 Mobile-friendly interface with optimized navigation
- ⚡ Fast loading performance with Next.js optimization
- 🎯 SEO optimized with proper meta tags and structured data
- 🔗 Easy project linking and external resource integration
- 📊 Professional presentation of skills, experiences, and achievements
- 🛠️ Built with modern web technologies for maintainability`,
  },
];
