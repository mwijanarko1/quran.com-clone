import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAllSurahs } from "@/lib/quran-data";
import type { SurahInfo } from "@/types/quran";

export default function Home() {
  const allSurahs = getAllSurahs();

  // Popular surahs to highlight
  const popularSurahs = [
    { id: 1, name: "Al-Fatihah", description: "The Opening" },
    { id: 2, name: "Al-Baqarah", description: "The Cow" },
    { id: 36, name: "Ya-Sin", description: "Ya Sin" },
    { id: 55, name: "Ar-Rahman", description: "The Beneficent" },
    { id: 56, name: "Al-Waqi'ah", description: "The Inevitable" },
    { id: 67, name: "Al-Mulk", description: "The Sovereignty" },
    { id: 78, name: "An-Naba", description: "The Tidings" },
    { id: 112, name: "Al-Ikhlas", description: "The Sincerity" },
  ];

  const getSurahInfo = (id: number) => allSurahs.find(s => s.id === id);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Read, Listen, Search, and Reflect on the Quran
            </h1>
            <p className="text-xl sm:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              The Noble Quran translated into many languages in a simple and easy interface.
              Discover the beauty and wisdom of Allah's final revelation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/1">
                <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
                  Start Reading
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-700"
              >
                Listen to Audio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need to Connect with the Quran
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple translations, beautiful audio recitations, advanced search,
              and tools for deeper reflection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Read</h3>
              <p className="text-gray-600">Beautiful Arabic text with multiple translation options</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Listen</h3>
              <p className="text-gray-600">High-quality audio recitations by renowned reciters</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Search</h3>
              <p className="text-gray-600">Powerful search across Arabic text and translations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reflect</h3>
              <p className="text-gray-600">Tools for deeper understanding and contemplation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Surahs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Surahs
            </h2>
            <p className="text-lg text-gray-600">
              Start your journey with these frequently read chapters
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularSurahs.map((popular) => {
              const surah = getSurahInfo(popular.id);
              if (!surah) return null;

              return (
                <Link
                  key={surah.id}
                  href={`/${surah.id}`}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-emerald-600">
                      {surah.id}
                    </span>
                    <span className="text-sm text-gray-500">
                      {surah.verseCount} verses
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1" translate="no">
                    {surah.nameTransliterated}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {surah.nameTranslated}
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    {surah.location}
                  </p>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link href="/1">
              <Button variant="outline" size="lg">
                Browse All Surahs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Access
            </h2>
            <p className="text-lg text-gray-600">
              Jump to popular sections and verses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Essentials</h3>
              <div className="space-y-3">
                <Link href="/1" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <span className="mr-2">📖</span>
                    Al-Fatihah (The Opening)
                  </Button>
                </Link>
                <Link href="/112" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <span className="mr-2">⭐</span>
                    Al-Ikhlas (The Sincerity)
                  </Button>
                </Link>
                <Link href="/113" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <span className="mr-2">🛡️</span>
                    Al-Falaq (The Daybreak)
                  </Button>
                </Link>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Recitations</h3>
              <div className="space-y-3">
                <Link href="/36" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <span className="mr-2">🌙</span>
                    Ya-Sin
                  </Button>
                </Link>
                <Link href="/55" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <span className="mr-2">💝</span>
                    Ar-Rahman (The Beneficent)
                  </Button>
                </Link>
                <Link href="/67" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <span className="mr-2">👑</span>
                    Al-Mulk (The Sovereignty)
                  </Button>
                </Link>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Navigation</h3>
              <div className="space-y-3">
                <Link href="/1?startingVerse=1" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <span className="mr-2">🎯</span>
                    Ayatul Kursi (2:255)
                  </Button>
                </Link>
                <Link href="/2?startingVerse=1" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <span className="mr-2">📚</span>
                    Start Al-Baqarah
                  </Button>
                </Link>
                <Link href="/114" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <span className="mr-2">🏁</span>
                    End of Quran
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
