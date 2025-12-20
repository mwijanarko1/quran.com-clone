import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-8 bg-emerald-400 rounded flex items-center justify-center text-white font-bold text-sm">
                LOGO
              </div>
              <span className="text-xl font-bold">Quran</span>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Read, Listen, Search, and Reflect on the Quran in multiple languages.
              A trusted platform used by millions worldwide to connect with Allah's final revelation.
            </p>

          </div>

          {/* Navigate Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigate</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Surahs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/1" className="text-gray-300 hover:text-white transition-colors">
                  Al-Fatihah (The Opening)
                </Link>
              </li>
              <li>
                <Link href="/36" className="text-gray-300 hover:text-white transition-colors">
                  Ya-Sin
                </Link>
              </li>
              <li>
                <Link href="/55" className="text-gray-300 hover:text-white transition-colors">
                  Ar-Rahman (The Beneficent)
                </Link>
              </li>
              <li>
                <Link href="/67" className="text-gray-300 hover:text-white transition-colors">
                  Al-Mulk (The Sovereignty)
                </Link>
              </li>
              <li>
                <Link href="/112" className="text-gray-300 hover:text-white transition-colors">
                  Al-Ikhlas (The Sincerity)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <Link href="/sitemap.xml" className="hover:text-white transition-colors">
                Sitemap
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                Terms and Conditions
              </Link>
            </div>

            <div className="text-sm text-gray-400">
              © 2025 Quran. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
