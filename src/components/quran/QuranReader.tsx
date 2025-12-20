"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";
import { VerseDisplay } from "./VerseDisplay";
import { ChapterHeader } from "./ChapterHeader";
import { SettingsDrawer } from "@/components/layout/SettingsDrawer";
import type { QuranSurah, VerseInfo, ScriptStyle } from "@/types/quran";

interface QuranReaderProps {
  surah: QuranSurah;
  verses: VerseInfo[];
  startingVerse?: number;
}

export function QuranReader({ surah, verses, startingVerse = 1 }: QuranReaderProps) {
  const [scriptStyle, setScriptStyle] = useState<ScriptStyle>("uthmani");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);


  // Bismillah is not shown for At-Tawbah (9)
  const showBismillah = surah.number !== 9;

  // Show all verses since we removed scrolling
  const visibleVerses = verses;


  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
      <div className="absolute top-6 left-6 right-6 z-10 flex items-center justify-between">
        {/* Menu Button - Top Left */}
        <Sheet open={isNavOpen} onOpenChange={setIsNavOpen}>
          <button
            onClick={() => setIsNavOpen(true)}
            className="text-white hover:scale-110 transition-transform duration-200 cursor-pointer"
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
                d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
              />
            </svg>
          </button>
          <SheetContent side="left" className="w-64">
            <SheetHeader>
              <SheetTitle className="text-left">Navigation</SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-4">
              <Link
                href="/"
                className="block px-4 py-3 text-lg hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => setIsNavOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/surahs"
                className="block px-4 py-3 text-lg hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => setIsNavOpen(false)}
              >
                Surah List
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        {/* Settings Button - Top Right */}
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

      {/* Chapter Header */}
      <ChapterHeader surah={surah} showBismillah={showBismillah} scriptStyle={scriptStyle} />

      {/* Verses */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {visibleVerses.map((verse, index) => (
            <div key={verse.id}>
              <VerseDisplay
                verse={verse}
                surahId={surah.number}
                readingMode="translation"
                scriptStyle={scriptStyle}
                isFirstVerse={index === 0}
              />
              {index < visibleVerses.length - 1 && (
                <Separator className="my-8" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Settings Drawer */}
      <Sheet open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
        <SheetContent>
          <SettingsDrawer onClose={() => setIsSettingsOpen(false)} />
        </SheetContent>
      </Sheet>
    </div>
  );
}
