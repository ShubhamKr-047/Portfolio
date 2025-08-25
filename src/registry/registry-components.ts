import type { Registry } from "shadcn/registry";

export const components: Registry["items"] = [
  {
    name: "theme-switcher",
    type: "registry:component",
    description:
      "A theme switcher component for Next.js apps with next-themes and Tailwind CSS, supporting system, light, and dark modes.",
    title: "Theme Switcher",
    author: "shubham <shubhamkumar.cse047@gmail.com>",
    dependencies: ["next-themes", "lucide-react", "motion"],
    registryDependencies: ["<registryBaseUrl>/utils.json"],
    files: [
      {
        path: "theme-switcher/theme-switcher.tsx",
        type: "registry:component",
      },
    ],
    docs: "https://shubhamkr-047portfolio.vercel.app/components/theme-switcher-component",
  },
  {
    name: "flip-sentences",
    type: "registry:component",
    title: "Flip Sentences",
    author: "shubham <shubhamkumar.cse047@gmail.com>",
    dependencies: ["motion"],
    registryDependencies: ["<registryBaseUrl>/utils.json"],
    files: [
      {
        path: "flip-sentences/flip-sentences.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "apple-hello-effect",
    type: "registry:component",
    description:
      "Create a Xin chào and Hello writing effect inspired by Apple using Motion for React.",
    title: "Apple Hello Effect",
    author: "shubham <shubhamkumar.cse047@gmail.com>",
    dependencies: ["motion"],
    registryDependencies: ["<registryBaseUrl>/utils.json"],
    files: [
      {
        path: "apple-hello-effect/apple-hello-effect.tsx",
        type: "registry:component",
      },
    ],
    docs: "https://shubhamkr-047portfolio.vercel.app/components/writing-effect-inspired-by-apple",
  },
];
