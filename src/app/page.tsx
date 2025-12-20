"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { SettingsDrawer } from "@/components/layout/SettingsDrawer";
import { searchSurahs } from "@/lib/quran-data";
import type { SurahInfo } from "@/types/quran";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSurahs, setFilteredSurahs] = useState<SurahInfo[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchSurahs(searchQuery);
      setFilteredSurahs(results.slice(0, 5)); // Limit to 5 results
      setShowDropdown(true);
    } else {
      setFilteredSurahs([]);
      setShowDropdown(false);
    }
  }, [searchQuery]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.search-container')) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen bg-black text-white flex items-center justify-center relative">
        {/* Settings Button - Top Right */}
        <div className="absolute top-6 right-6 z-10">
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="text-white hover:scale-110 transition-transform duration-200 cursor-pointer"
            aria-label="Change Settings"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.32 7.582a4.044 4.044 0 1 0 4.044 4.043 4.056 4.056 0 0 0-4.043-4.043m8.73 4.043q-.003.567-.082 1.13l2.46 1.926a.586.586 0 0 1 .134.747l-2.328 4.02a.59.59 0 0 1-.715.248l-2.894-1.162a9 9 0 0 1-1.962 1.146l-.433 3.072a.6.6 0 0 1-.581.498H9.993a.61.61 0 0 1-.582-.482l-.433-3.072a8.6 8.6 0 0 1-1.962-1.147l-2.893 1.163a.59.59 0 0 1-.715-.249L1.08 15.445a.586.586 0 0 1 .133-.748l2.46-1.926a9 9 0 0 1-.082-1.146q.003-.567.083-1.13L1.213 8.57a.586.586 0 0 1-.133-.747l2.328-4.02a.59.59 0 0 1 .715-.248l2.893 1.162A9 9 0 0 1 8.978 3.57L9.411.498A.6.6 0 0 1 9.993 0h4.656a.61.61 0 0 1 .582.482l.432 3.072A8.6 8.6 0 0 1 17.628 4.7l2.89-1.163a.59.59 0 0 1 .716.249l2.328 4.019a.586.586 0 0 1-.133.747l-2.461 1.927q.078.57.083 1.145"
              />
            </svg>
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-serif font-bold mb-8 tracking-wider">
              Quran
            </h1>
            <div className="max-w-lg mx-auto mb-8 relative search-container">
              <Input
                type="search"
                placeholder="Search for Surahs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery.trim() && setShowDropdown(true)}
                className="w-full h-12 text-lg bg-white text-black border-0 focus-visible:ring-white"
              />

              {/* Search Results Dropdown */}
              {showDropdown && filteredSurahs.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-64 overflow-y-auto">
                  {filteredSurahs.map((surah) => (
                    <Link
                      key={surah.id}
                      href={`/${surah.id}`}
                      className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                      onClick={() => {
                        setSearchQuery("");
                        setShowDropdown(false);
                      }}
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
              )}

              {/* No results message */}
              {showDropdown && searchQuery.trim() && filteredSurahs.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-10 px-4 py-3 text-gray-500 text-center">
                  No surahs found for "{searchQuery}"
                </div>
              )}
            </div>
            <Link href="/surahs">
              <Button size="lg" className="h-12 px-8 text-lg bg-white text-black hover:bg-gray-100">
                Surah List
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Settings Drawer */}
      <Sheet open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
        <SheetContent>
          <SettingsDrawer onClose={() => setIsSettingsOpen(false)} />
        </SheetContent>
      </Sheet>
    </div>
  );
}
