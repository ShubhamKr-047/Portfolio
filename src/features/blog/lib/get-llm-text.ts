import { SITE_INFO } from "@/config/site";

import { getAllPosts } from "../data/posts";
import type { Post } from "../types/post";

export function getLLMText(post?: Post): string {
  if (post) {
    // Return content for a specific blog post
    const content = `# ${post.title}

> ${post.description}

## About

${SITE_INFO.description}

## Contact

- Website: ${SITE_INFO.url}
- GitHub: https://github.com/ShubhamKr-047
`;

    return content;
  }

  // Return content for the main blog listing
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
