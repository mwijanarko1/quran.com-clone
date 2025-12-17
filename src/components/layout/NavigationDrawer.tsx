"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { getAllSurahs, searchSurahs } from "@/lib/quran-data";
import type { SurahInfo } from "@/types/quran";

interface NavigationDrawerProps {
  onClose: () => void;
}

export function NavigationDrawer({ onClose }: NavigationDrawerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSurahs, setFilteredSurahs] = useState<SurahInfo[]>(getAllSurahs());

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      setFilteredSurahs(searchSurahs(query));
    } else {
      setFilteredSurahs(getAllSurahs());
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">Navigate</h2>
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

      {/* Search */}
      <div className="p-4 border-b">
        <Input
          type="search"
          placeholder="Search Surah"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Navigation tabs */}
      <div className="flex border-b">
        <button className="flex-1 py-3 text-center font-medium border-b-2 border-blue-600 text-blue-600">
          Surah
        </button>
        <button className="flex-1 py-3 text-center text-gray-600 hover:text-gray-900">
          Verse
        </button>
        <button className="flex-1 py-3 text-center text-gray-600 hover:text-gray-900">
          Juz
        </button>
        <button className="flex-1 py-3 text-center text-gray-600 hover:text-gray-900">
          Page
        </button>
      </div>

      {/* Tip */}
      <div className="px-4 py-2 text-sm text-gray-600 border-b">
        <span>Tip: try navigating with</span>
        <kbd className="ml-2 px-2 py-1 bg-gray-100 rounded text-xs">⌘K</kbd>
      </div>

      {/* Surah List */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <div className="space-y-1">
            {filteredSurahs.map((surah) => (
              <Link
                key={surah.id}
                href={`/${surah.id}`}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={onClose}
              >
                <span className="text-sm font-medium text-gray-500 w-8">
                  {surah.id}
                </span>
                <div className="flex-1">
                  <div className="font-medium text-gray-900" translate="no">
                    {surah.nameTransliterated}
                  </div>
                  <div className="text-sm text-gray-600" translate="no">
                    {surah.nameArabic}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
