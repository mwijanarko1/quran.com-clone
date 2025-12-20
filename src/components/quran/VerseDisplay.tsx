"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import { VerseActions } from "./VerseActions";
import type { VerseInfo, ReadingMode, ScriptStyle } from "@/types/quran";

interface VerseDisplayProps {
  verse: VerseInfo;
  surahId: number;
  readingMode: ReadingMode;
  scriptStyle?: ScriptStyle;
  isFirstVerse?: boolean;
}

export function VerseDisplay({
  verse,
  surahId,
  readingMode,
  scriptStyle = "uthmani",
  isFirstVerse = false,
}: VerseDisplayProps) {
  const [showTranslation, setShowTranslation] = useState(readingMode === "translation");

  const arabicFontClass = scriptStyle === "indopak" ? "font-indopak" : "font-arabic";

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
            className={`text-2xl leading-relaxed text-gray-200 ${arabicFontClass}`}
            dir="rtl"
            translate="no"
          >
            {verse.arabicText}
          </h1>
        </div>
      </div>

      {/* Translation */}
      {showTranslation && (
        <div className="text-left">
          <div className="text-lg text-gray-300 leading-relaxed">
            <span>
              {verse.translation}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
