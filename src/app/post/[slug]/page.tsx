// src/app/post/[slug]/page.tsx
import { getPostBySlug } from "@/lib/api";
import { notFound } from "next/navigation";

type Params = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: Params) {
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound();

  return (
    <main style={{ padding: "2rem" }}>
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <article dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </main>
  );
}
