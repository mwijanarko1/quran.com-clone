import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="32"
                fill="none"
                viewBox="0 0 118 21"
                className="text-emerald-400"
              >
                <path
                  fill="currentColor"
                  d="M17.468 15.318q-.11 1.452-.528 2.486-.396 1.035-1.078 1.562-.484.375-1.232.572-.726.198-1.518.198-1.342 0-2.618-.418T7.26 18.42l-1.452-.616q-.418-.154-.528-.154a5 5 0 0 1-.946.396 3 3 0 0 1-.902.154q-.462 0-.748-.176a.51.51 0 0 1-.286-.484q0-.33.308-.506t.902-.176q.77 0 1.672.396a10 10 0 0 0 1.65-.594q.198-.066.44-.176.264-.11.594-.22-2.177-.22-3.806-1.21a6.7 6.7 0 0 1-2.486-2.706q-.88-1.716-.88-4.004 0-2.42 1.056-4.29A7.4 7.4 0 0 1 4.796 1.15Q6.688.116 9.108.116q2.486 0 4.356.946a6.83 6.83 0 0 1 2.904 2.75q1.034 1.782 1.034 4.268 0 2.376-1.012 4.224a7.4 7.4 0 0 1-2.838 2.904q-1.825 1.034-4.18 1.1a5.7 5.7 0 0 0-.99.22q-.462.155-.88.33-.88.352-1.452.506l.858.022q1.892.066 3.212.066 2.288 0 3.74-.308 1.232-.264 1.936-.682t1.254-1.254zM5.412 8.256q0 2.288.506 4.026t1.364 2.684 1.892.946q1.079 0 1.892-.968.836-.99 1.276-2.75t.44-4.026q0-2.288-.506-4.026t-1.364-2.684Q10.054.513 9.02.512q-1.078 0-1.914.99-.814.968-1.254 2.728t-.44 4.026m24.841 5.346q0 1.012.264 1.474.286.462.968.462V16q-.682-.066-1.364-.066-2.287 0-3.828.308v-1.584q-.99 1.65-3.498 1.65-1.76 0-2.486-.88-.33-.396-.484-1.056-.154-.683-.154-1.782V6.98q0-1.012-.286-1.474-.264-.462-.946-.462v-.462q.683.066 1.364.066 2.289 0 3.828-.308v9.438q0 .704.242 1.056.264.33.836.33a1.54 1.54 0 0 0 1.1-.44q.484-.462.484-1.144v-6.6q0-1.012-.286-1.474-.264-.462-.946-.462v-.462q.683.066 1.364.066 2.289 0 3.828-.308zm10.122-9.328q1.077 0 1.54.66.484.66.484 1.562 0 .99-.572 1.584-.55.572-1.452.572-.946 0-1.452-.418-.506-.44-.506-1.166 0-1.298 1.122-2.046-.396 0-.704.154a2.17 2.17 0 0 0-.924.792q-.374.528-.374 1.166v6.6q0 1.034.418 1.43.44.374 1.474.374V16q-.285 0-.484-.022-2.31-.066-3.08-.066-.682 0-3.058.066a4 4 0 0 1-.462.022v-.462q.682 0 .946-.33.286-.352.286-1.254V6.98q0-1.012-.286-1.474-.264-.462-.946-.462v-.462q.705.066 1.364.066 2.287 0 3.828-.308v1.584q.835-1.65 2.838-1.65m5.422 11.88q-1.409 0-2.134-.748-.704-.77-.704-1.914 0-.99.506-1.628.528-.66 1.232-1.012t1.826-.726Q47.71 9.73 48.26 9.4t.55-.924V6.518q0-.704-.352-1.254t-1.21-.55q-.683 0-1.232.374.747.264 1.1.792.374.506.374 1.144 0 .858-.616 1.386-.594.506-1.452.506t-1.364-.528q-.484-.55-.484-1.386 0-.66.33-1.144t1.034-.88q1.23-.704 3.52-.704 1.21 0 2.09.242a3.07 3.07 0 0 1 1.496.858q.44.462.572 1.166.154.683.154 1.914v5.896q0 .55.066.748.087.198.286.198.153 0 .33-.088.175-.11.33-.242l.22.374q-.947.814-2.706.814-1.32 0-1.848-.44-.528-.462-.572-1.232-1.034 1.672-3.08 1.672m2.2-1.76q.462 0 .814-.374V9.378q-.198.33-.726.858-.594.572-.902 1.122-.309.528-.308 1.452 0 1.584 1.122 1.584m15.317-10.12q1.76 0 2.486.88.33.396.484 1.078.154.66.154 1.76v5.962q0 .902.264 1.254.285.33.968.33V16q-2.376-.088-3.08-.088-.748 0-3.124.088v-.462q.572 0 .792-.33.22-.352.22-1.254v-7.15q0-.704-.264-1.034-.242-.352-.814-.352-.638 0-1.122.462-.462.44-.462 1.122v6.952q0 .902.22 1.254.22.33.792.33V16a92 92 0 0 0-2.904-.088q-.748 0-3.3.088v-.462q.682 0 .946-.33.285-.352.286-1.254V6.98q0-1.012-.286-1.474-.264-.462-.946-.462v-.462q.704.066 1.364.066 2.287 0 3.828-.308v1.584q.99-1.65 3.498-1.65m7.7 8.25q1.056 0 1.606.484.572.484.572 1.408t-.572 1.408q-.55.484-1.606.484t-1.628-.484q-.55-.484-.55-1.408t.55-1.408q.572-.484 1.628-.484m9.421-8.25q.901 0 1.65.198.77.176 1.254.462.615.352.968.946.352.594.352 1.342 0 .924-.594 1.54-.594.594-1.518.594-.946 0-1.496-.528-.528-.55-.528-1.452 0-.792.506-1.386.528-.615 1.298-.814-.33-.264-.88-.264-1.409 0-1.98 1.518-.572 1.495-.572 3.564 0 2.112.792 3.014t1.958.902q1.605 0 2.662-1.474l.374.132a6.1 6.1 0 0 1-1.65 2.64q-1.144 1.1-2.948 1.1-2.398 0-3.85-1.43t-1.452-4.576q0-3.015 1.54-4.51 1.562-1.518 4.114-1.518m11.087 0q2.705 0 4.18 1.43 1.474 1.408 1.474 4.598T95.7 14.9q-1.473 1.408-4.18 1.408-2.705 0-4.18-1.408-1.473-1.408-1.473-4.598-.001-3.19 1.474-4.598 1.474-1.43 4.18-1.43m0 .44q-.705 0-1.123 1.386-.417 1.386-.418 4.202 0 2.816.419 4.202.417 1.364 1.121 1.364.705 0 1.123-1.364.417-1.386.417-4.202T92.643 6.1q-.417-1.386-1.121-1.386m25.017 9.24q0 .902.264 1.254.287.33.968.33V16q-2.376-.088-3.08-.088-.703 0-2.904.088v-.462q.44 0 .616-.33t.176-1.254v-7.15q0-.704-.264-1.034-.241-.352-.814-.352-.572 0-1.056.484a2.13 2.13 0 0 0-.572 1.144q.044.528.044.946v5.962q0 .924.22 1.254t.792.33V16a93 93 0 0 0-2.86-.088q-.704 0-2.904.088v-.462q.44 0 .616-.33.177-.352.176-1.254v-7.15q0-.704-.198-1.034-.198-.352-.66-.352-.638 0-1.122.462-.462.44-.462 1.122v6.952q0 .924.176 1.254.177.33.616.33V16a78 78 0 0 0-2.684-.088q-.747 0-3.3.088v-.462q.682 0 .946-.33.286-.352.286-1.254V6.98q0-1.012-.286-1.474-.264-.462-.946-.462v-.462q.705.066 1.364.066 2.289 0 3.828-.308v1.584q.924-1.65 3.278-1.65 1.76 0 2.486.88.33.396.484 1.034.55-1.056 1.452-1.474.924-.44 2.2-.44 1.76 0 2.486.88.33.396.484 1.078.154.66.154 1.76z"
                />
              </svg>
              <span className="text-xl font-bold">Quran.com</span>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Read, Listen, Search, and Reflect on the Quran in multiple languages.
              A trusted platform used by millions worldwide to connect with Allah's final revelation.
            </p>

            <p className="text-gray-400 text-sm">
              As a Sadaqah Jariyah, Quran.com is dedicated to helping people connect deeply with the Quran.
              Supported by Quran.Foundation, a 501(c)(3) non-profit organization.
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
              <li>
                <Link href="/radio" className="text-gray-300 hover:text-white transition-colors">
                  Quran Radio
                </Link>
              </li>
              <li>
                <Link href="/reciters" className="text-gray-300 hover:text-white transition-colors">
                  Reciters
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/developers" className="text-gray-300 hover:text-white transition-colors">
                  Developers
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-white transition-colors">
                  Help
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
              © 2025 Quran.com. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
