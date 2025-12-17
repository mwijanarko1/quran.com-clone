"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { searchSurahs, searchVerses } from "@/lib/quran-data";
import type { SurahInfo, VerseInfo } from "@/types/quran";

interface SearchDrawerProps {
  onClose: () => void;
}

export function SearchDrawer({ onClose }: SearchDrawerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<{
    surahs: SurahInfo[];
    verses: VerseInfo[];
  }>({ surahs: [], verses: [] });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      setResults({
        surahs: searchSurahs(query),
        verses: searchVerses(query),
      });
    } else {
      setResults({ surahs: [], verses: [] });
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m23.5 21.466-7.01-7.01a9.07 9.07 0 0 0 1.736-5.343C18.226 4.088 14.138 0 9.113 0S0 4.088 0 9.113s4.088 9.113 9.113 9.113a9.07 9.07 0 0 0 5.343-1.735l7.01 7.009zM9.113 15.348a6.236 6.236 0 1 1 6.235-6.235 6.243 6.243 0 0 1-6.235 6.235"
            />
          </svg>
          <h2 className="text-lg font-semibold">Search</h2>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 15 15"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </div>

      {/* Search Input */}
      <div className="p-4 border-b">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search the Quran..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pr-12"
            enterKeyHint="search"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12.304 14.946a3.573 3.573 0 0 0 3.558-3.566V3.566A3.573 3.573 0 0 0 12.304 0a3.573 3.573 0 0 0-3.56 3.566v7.814a3.573 3.573 0 0 0 3.56 3.566m6.286-3.915c0 3.566-3.024 6.062-6.286 6.062-3.263 0-6.287-2.496-6.287-6.062H4c0 4.041 3.203 7.429 7.117 7.964v4.255h2.373v-4.255c3.914-.594 7.117-3.923 7.117-7.964z"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="flex-1 overflow-y-auto">
        {searchQuery.trim() && (
          <div className="p-4">
            {/* Surah Results */}
            {results.surahs.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Surahs ({results.surahs.length})
                </h3>
                <div className="space-y-2">
                  {results.surahs.slice(0, 5).map((surah) => (
                    <Link
                      key={surah.id}
                      href={`/${surah.id}`}
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={onClose}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-gray-500 w-8">
                          {surah.id}
                        </span>
                        <div>
                          <div className="font-medium text-gray-900">
                            {surah.nameTransliterated}
                          </div>
                          <div className="text-sm text-gray-600">
                            {surah.nameTranslated}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                {results.surahs.length > 5 && (
                  <div className="mt-3 text-center">
                    <Button variant="ghost" size="sm">
                      Show all {results.surahs.length} results
                    </Button>
                  </div>
                )}
              </div>
            )}

            {/* Verse Results */}
            {results.verses.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Verses ({results.verses.length})
                </h3>
                <div className="space-y-2">
                  {results.verses.slice(0, 10).map((verse) => (
                    <Link
                      key={`${verse.surahId}-${verse.verseNumber}`}
                      href={`/${verse.surahId}?startingVerse=${verse.verseNumber}`}
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={onClose}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-gray-500">
                          {verse.surahId}:{verse.verseNumber}
                        </span>
                        <div className="flex-1">
                          <div className="text-sm text-gray-700 line-clamp-2" dir="rtl">
                            {verse.arabicText}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                {results.verses.length > 10 && (
                  <div className="mt-3 text-center">
                    <Button variant="ghost" size="sm">
                      Show all {results.verses.length} results
                    </Button>
                  </div>
                )}
              </div>
            )}

            {results.surahs.length === 0 && results.verses.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">
                  We could not find any matching search results for "{searchQuery}".
                  Try searching for a different keyword.
                </p>
              </div>
            )}
          </div>
        )}

        {!searchQuery.trim() && (
          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Popular searches</h3>
            <div className="space-y-2">
              {[
                "Allah",
                "Mercy",
                "Prayer",
                "Paradise",
                "Prophet Muhammad",
              ].map((term) => (
                <button
                  key={term}
                  className="block w-full text-left p-2 text-sm text-gray-600 hover:bg-gray-50 rounded transition-colors"
                  onClick={() => handleSearch(term)}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
