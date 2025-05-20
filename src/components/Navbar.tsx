import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 shadow-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo o título */}
        <div className="text-2xl font-bold text-blue-800 drop-shadow-sm">
          Municipalidad
        </div>

        {/* Navegación */}
        {/* Aplica space-x-4 al contenedor flex para espaciar los elementos hijos. */}
        {/* Puedes ajustar el valor '4' a '6' o '8' para más espacio. */}
        <div className="flex items-center text-sm font-medium text-gray-800 space-x-4">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Inicio
          </Link>
          <Link href="/posts" className="hover:text-blue-600 transition-colors">
            Noticias
          </Link>
          <Link href="/page/servicios" className="hover:text-blue-600 transition-colors">
            Servicios
          </Link>
          <Link href="/page/contacto" className="hover:text-blue-600 transition-colors">
            Contacto
          </Link>

          {/* Botón destacado */}
          {/* El botón "Ingresar" ya está separado por space-x-4. 
              Si quieres un espacio EXTRA específico para él, podrías añadir un ml-X adicional,
              pero generalmente space-x es suficiente. Por ejemplo: ml-4 o ml-6 si space-x-4 no es suficiente.
              Para este ejemplo, lo dejo sin ml- extra, confiando en space-x-4. */}
          <Link
            href="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Ingresar
          </Link>
        </div>
      </nav>
    </header>
  );
}
