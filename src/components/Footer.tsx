// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white/30 backdrop-blur-md mt-auto py-6 shadow-inner rounded-t-xl">
      <div className="max-w-7xl mx-auto px-6 text-sm text-center text-gray-800">
        <p className="mb-2">© {new Date().getFullYear()} Ilustre Municipalidad de Conchalí</p>
        <div className="flex justify-center space-x-4">
          <Link href="/page/transparencia" className="hover:underline">Transparencia</Link>
          <Link href="/page/municipio" className="hover:underline">El Municipio</Link>
          <Link href="/posts" className="hover:underline">Noticias</Link>
        </div>
      </div>
    </footer>
  );
}
