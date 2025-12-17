"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { VerseDisplay } from "./VerseDisplay";
import { ChapterHeader } from "./ChapterHeader";
import { ReadingPreferenceSwitcher } from "./ReadingPreferenceSwitcher";
import type { QuranSurah, VerseInfo, ReadingMode } from "@/types/quran";

interface QuranReaderProps {
  surah: QuranSurah;
  verses: VerseInfo[];
  startingVerse?: number;
}

export function QuranReader({ surah, verses, startingVerse = 1 }: QuranReaderProps) {
  const [readingMode, setReadingMode] = useState<ReadingMode>("translation");

  // Bismillah is not shown for At-Tawbah (9)
  const showBismillah = surah.number !== 9;

  return (
    <div className="min-h-screen bg-white">
      {/* Context Menu Bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <span className="font-medium text-gray-900" translate="no">
              {surah.englishName}
            </span>
            <span className="text-sm text-gray-500">
              Juz 1 / Hizb 1 -
            </span>
            <span className="text-sm font-medium text-gray-700">
              Page 1
            </span>
          </div>
        </div>
      </div>

      {/* Reading Preference Switcher */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <ReadingPreferenceSwitcher
            readingMode={readingMode}
            onReadingModeChange={setReadingMode}
          />
        </div>
      </div>

      {/* Chapter Header */}
      <ChapterHeader surah={surah} showBismillah={showBismillah} />

      {/* Verses */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {verses.map((verse, index) => (
            <div key={verse.id}>
              <VerseDisplay
                verse={verse}
                surahId={surah.number}
                readingMode={readingMode}
                isFirstVerse={index === 0}
              />
              {index < verses.length - 1 && (
                <Separator className="my-8" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="bg-gray-50 border-t border-gray-200 px-4 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {surah.number > 1 && (
              <Link href={`/${surah.number - 1}`}>
                <Button variant="outline" size="sm">
                  ← Previous Surah
                </Button>
              </Link>
            )}

            <Link href="/1">
              <Button variant="outline" size="sm">
                All Surahs
              </Button>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/1">
              <Button variant="outline" size="sm">
                Quran Home
              </Button>
            </Link>

            {surah.number < 114 && (
              <Link href={`/${surah.number + 1}`}>
                <Button variant="outline" size="sm">
                  Next Surah →
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
