import { getPageBySlug } from "@/lib/api";
import { notFound } from "next/navigation";

type Params = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Params) {
  const page = await getPageBySlug(params.slug);

  if (!page) return notFound();

  return (
    <main style={{ padding: "2rem" }}>
      <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
      <article dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </main>
  );
}
