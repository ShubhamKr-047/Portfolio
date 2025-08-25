import type { Registry } from "shadcn/registry";

export const examples: Registry["items"] = [
  {
    name: "apple-hello-effect-vi-demo",
    type: "registry:example",
    registryDependencies: ["<registryBaseUrl>/apple-hello-effect.json"],
    files: [
      {
        path: "examples/apple-hello-effect-vi-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "apple-hello-effect-en-demo",
    type: "registry:example",
    registryDependencies: ["<registryBaseUrl>/apple-hello-effect.json"],
    files: [
      {
        path: "examples/apple-hello-effect-en-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "theme-switcher-demo",
    type: "registry:example",
    registryDependencies: ["<registryBaseUrl>/theme-switcher.json"],
    files: [
      {
        path: "examples/theme-switcher-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
