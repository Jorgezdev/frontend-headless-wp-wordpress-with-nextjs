import { getPageBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Params = {
  params: {
    slug: string;
  };
};

// Función para generar metadatos dinámicos
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageBySlug(slug);
  if (!page) return {};

  return {
    title: page.title.rendered,
    description: page.excerpt?.rendered?.replace(/<[^>]+>/g, "").slice(0, 160),
  };
}

export default async function PageBySlug({ params }: Params) {
  try {
    const { slug } = await params;
    const page = await getPageBySlug(slug);
    if (!page) return notFound();

    return (
      <main style={{ padding: "2rem" }}>
        <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
        <article dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
      </main>
    );
  } catch (error) {
    console.error("Error al cargar la página:", error);
    return (
      <main style={{ padding: "2rem", color: "red" }}>
        <h1>Error al cargar la página</h1>
        <p>Verifica que el servidor de WordPress esté disponible.</p>
      </main>
    );
  }
}
