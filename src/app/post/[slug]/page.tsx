import { getPostBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Params = {
  params: {
    slug: string;
  };
};

// Función para generar metadatos dinámicos
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params; // ✅ se espera params
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title.rendered,
    description: post.excerpt?.rendered?.replace(/<[^>]+>/g, "").slice(0, 160),
  };
}

export default async function PostPage({ params }: Params) {
  try {
    const { slug } = await params; // ✅ se espera params
    const post = await getPostBySlug(slug);
    if (!post) return notFound();

    return (
      <main style={{ padding: "2rem" }}>
        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <article dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </main>
    );
  } catch (error) {
    console.error("Error al cargar la página:", error);
    return (
      <main style={{ padding: "2rem", color: "red" }}>
        <h1>Error al cargar la entrada</h1>
        <p>Verifica que el servidor de WordPress esté disponible.</p>
      </main>
    );
  }
}
