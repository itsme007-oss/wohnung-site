import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900">
          Wohnung
        </Link>

        <div className="flex gap-6 text-sm md:text-base">
          <Link href="/" className="text-gray-700 hover:text-black">
            Startseite
          </Link>
          <Link href="/galerie" className="text-gray-700 hover:text-black">
            Galerie
          </Link>
          <Link href="/360" className="text-gray-700 hover:text-black">
            360° Rundgang
          </Link>
          <Link href="/kontakt" className="text-gray-700 hover:text-black">
            Kontakt
          </Link>
        </div>
      </nav>
    </header>
  );
}