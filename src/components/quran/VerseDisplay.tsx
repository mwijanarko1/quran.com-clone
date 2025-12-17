"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import { VerseActions } from "./VerseActions";
import type { VerseInfo, ReadingMode } from "@/types/quran";

interface VerseDisplayProps {
  verse: VerseInfo;
  surahId: number;
  readingMode: ReadingMode;
  isFirstVerse?: boolean;
}

export function VerseDisplay({
  verse,
  surahId,
  readingMode,
  isFirstVerse = false,
}: VerseDisplayProps) {
  const [showTranslation, setShowTranslation] = useState(readingMode === "translation");

  return (
    <div className="verse-container">
      {/* Verse Actions */}
      <VerseActions
        verse={verse}
        surahId={surahId}
        showTranslation={showTranslation}
        onToggleTranslation={() => setShowTranslation(!showTranslation)}
      />

      {/* Arabic Text */}
      <div className="mb-6">
        <div className="text-right">
          <h1
            className="text-2xl leading-relaxed text-gray-800 font-arabic"
            dir="rtl"
            translate="no"
          >
            {verse.arabicText}
            <span className="text-emerald-600 mr-2">
              ﴿{verse.verseNumber}﴾
            </span>
          </h1>
        </div>
      </div>

      {/* Translation */}
      {showTranslation && (
        <div className="text-left">
          <div className="text-lg text-gray-700 leading-relaxed">
            <span className="font-medium text-emerald-600">
              {surahId}:{verse.verseNumber}
            </span>
            {" "}
            <span>
              {verse.translation}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
