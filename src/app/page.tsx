// src/app/page.tsx
import { getPageBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ilustre Municipalidad de Conchalí",
  description: "Sitio web oficial de la Ilustre Municipalidad de Conchalí. Infórmate sobre noticias, servicios y contacto.",
  keywords: ["Municipalidad de Conchalí", "Conchalí", "Chile", "Gobierno local", "Servicios públicos"],
  openGraph: {
    title: "Ilustre Municipalidad de Conchalí",
    description: "Conoce los servicios, noticias y contacto de la Municipalidad de Conchalí.",
    url: "https://municipalidadconchali.cl", // cámbialo por el dominio final
    type: "website",
    locale: "es_CL",
  },
};

export default async function HomePage() {
  const page = await getPageBySlug("inicio"); // asegúrate que el slug coincida con el de WordPress

  if (!page) return notFound();

  return (
    <main style={{ padding: "2rem" }}>
      <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
      <article dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </main>
  );
}
