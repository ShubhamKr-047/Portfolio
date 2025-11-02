import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "momento",
    title: "Momento - Social Media Platform",
    period: {
      start: "Oct 2024",
    },
    link: "https://momento-opal.vercel.app/",
    theme: true,
    skills: [
      "Full Stack",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "JWT",
      "Material-UI",
      "Formik",
    ],
    description: `A modern full-stack social media platform with posts, comments, likes, follow system, and profile management.
- 🔐 Secure JWT authentication with bcrypt password hashing and protected routes
- 📝 Full CRUD operations for posts and comments with image support
- ❤️ Like/unlike posts, follow/unfollow users, and track profile views
- 🔍 Real-time debounced search (500ms) reducing API calls by 90%
- 🗑️ Account deletion with cascading removal of posts and friend connections
- 🎨 Dark/light theme toggle with Material-UI and responsive design
- 🔒 Access control and ownership validation for all operations
- ⚡ Performance optimizations: pagination, infinite scroll, lazy loading, and image compression (60-80% reduction)

`,
    isExpanded: true,
  },
  {
    id: "pdf",
    title: "PDFPal",
    period: {
      start: "Apr 2024",
    },
    link: "https://pdf-pal-fryc.vercel.app/",
    theme: true,
    skills: [
      "AI/ML",
      "Next.js",
      "PostgreSQL",
      "Gemini",
      "AWS S3",
      "PineconeDB",
      "ShadCN",
      "DrizzleORM",
      "Clerk",
    ],
    description: `AI-powered PDF Chatbot Platform built using Next.js, DrizzleORM, and Gemini.
- 🤖 Real-time PDF content querying and interaction using natural language
- 🔍 Retrieval-Augmented Generation (RAG) implementation with vector space embedding
- ⚡ Fast, contextually relevant responses powered by PineconeDB
- 🛡️ Secure and scalable system design with AWS S3 for file handling
- 🔐 User authentication and management with Clerk
- 📊 Efficient data management with PostgreSQL and DrizzleORM
- 🎨 Responsive, accessible chat interface built with ShadCN UI for polished user experience

`,
  },
  {
    id: "algo",
    title: "Algorithm Visualizer",
    period: {
      start: "Dec 2023",
    },
    link: "https://shubhamkr-047.github.io/Algorithm-Visualizer/",
    theme: true,
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
    description: `Developed an interactive Algorithm Visualizer that supports 6 sorting algorithms.
- 🎯 Step-by-step execution visualization through smooth real-time animations
- 📚 Improved usability and helped beginners better understand algorithmic flow
- 🎨 Responsive interface with clean styling and fluid animations
- 🔧 Implemented using modern web technologies: HTML, CSS, JavaScript
- 📐 Utilized CSS Grid, Flexbox, and Keyframes for optimal layout and animations
- ⚙️ Customizable learning controls including speed adjustment, input size variation, and reset options

`,
  },
  {
    id: "sk-logo",
    title: "Portfolio",
    period: {
      start: "Aug 2023",
    },
    link: "https://shubhamkr-047portfolio.vercel.app/",
    theme: true,
    skills: [
      "Next.js 15",
      "Tailwind CSS",
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
