"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { getAllSurahs, searchSurahs } from "@/lib/quran-data";
import type { SurahInfo } from "@/types/quran";

export default function SurahsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSurahs, setFilteredSurahs] = useState<SurahInfo[]>([]);
  const allSurahs = getAllSurahs();

  useEffect(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.trim();
      const surahNumber = parseInt(query);

      // If the query is a valid surah number (1-114), show only that surah
      if (!isNaN(surahNumber) && surahNumber >= 1 && surahNumber <= 114) {
        const surah = allSurahs.find(s => s.id === surahNumber);
        setFilteredSurahs(surah ? [surah] : []);
      } else {
        // Otherwise, use text search
        const results = searchSurahs(query);
        setFilteredSurahs(results);
      }
    } else {
      setFilteredSurahs(allSurahs);
    }
  }, [searchQuery, allSurahs]);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Home Button - Top Left */}
      <div className="absolute top-6 left-6 z-10">
        <Link
          href="/"
          className="text-white hover:scale-110 transition-transform duration-200 cursor-pointer block"
          aria-label="Go to Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9,22 9,12 15,12 15,22" />
          </svg>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-bold mb-8 tracking-wider">
            Surah List
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Browse all 114 chapters of the Quran. Each surah contains verses revealed to Prophet Muhammad (PBUH).
          </p>

          {/* Search Field */}
          <div className="max-w-lg mx-auto mt-8 relative search-container">
            <Input
              type="search"
              placeholder="Search by surah number (1-114) or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 text-lg bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-400 focus-visible:ring-gray-500 focus-visible:border-gray-500"
            />
          </div>
        </div>

        {/* Surah Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredSurahs.length > 0 ? (
            filteredSurahs.map((surah) => (
            <Link
              key={surah.id}
              href={`/${surah.id}`}
              className="group bg-gray-900/50 hover:bg-gray-800/70 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 p-6 block backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center justify-center w-14 h-14 bg-white text-black rounded-full font-bold text-xl group-hover:scale-110 transition-transform duration-200">
                  {surah.id}
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">
                    {surah.verseCount} verses
                  </div>
                  <div className="text-xs px-3 py-1 bg-gray-700 text-gray-300 rounded-full capitalize mt-1">
                    {surah.location}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-right">
                  <div className="text-2xl font-arabic text-white leading-tight">
                    {surah.nameArabic}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-white text-lg">
                    {surah.nameTransliterated}
                  </div>
                  <div className="text-sm text-gray-400">
                    {surah.nameTranslated}
                  </div>
                </div>
              </div>
            </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="text-gray-400 text-lg">
                No surahs found for "{searchQuery}"
              </div>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 text-emerald-400 hover:text-emerald-300 underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* Footer Stats */}
        <div className="mt-20 text-center">
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-700 p-8 max-w-lg mx-auto">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-white mb-2">
                  {allSurahs.length}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Total Surahs</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">
                  {allSurahs.reduce((total, surah) => total + surah.verseCount, 0)}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Total Verses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
