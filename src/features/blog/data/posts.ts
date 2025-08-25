import type { Post } from "../types/post";

export const POSTS: Post[] = [
  {
    slug: "welcome",
    title: "Welcome to Shubham's Portfolio",
    description:
      "A minimal portfolio, component registry, and blog to showcase my work as a Full Stack Developer.",
    image: "/icons/dp1.png",
    createdAt: "2025-02-14",
    updatedAt: "2025-07-20",
    published: true,
  },
];

export function getAllPosts(): Post[] {
  return POSTS.filter((post) => post.published);
}

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug && post.published);
}
