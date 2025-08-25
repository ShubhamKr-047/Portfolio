import { SITE_INFO } from "@/config/site";

import { getAllPosts } from "../data/posts";

export function getLLMText(): string {
  const posts = getAllPosts();

  const content = `# ${SITE_INFO.name}

> ${SITE_INFO.description}

## Blog Posts

${posts.map((post) => `- [${post.title}](${SITE_INFO.url}/blog/${post.slug})`).join("\n")}

## About

${SITE_INFO.description}

## Contact

- Website: ${SITE_INFO.url}
- GitHub: https://github.com/ShubhamKr-047
`;

  return content;
}
