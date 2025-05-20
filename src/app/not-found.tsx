// src/app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center text-center min-h-[70vh] px-4">
      <h1 className="text-4xl font-bold text-primary mb-4">404 - Página no encontrada</h1>
      <p className="text-gray-700 mb-6">
        Lo sentimos, no pudimos encontrar la página que estás buscando uwu
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
