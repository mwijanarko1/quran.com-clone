"use client";

import type { QuranSurah, ScriptStyle } from "@/types/quran";

interface ChapterHeaderProps {
  surah: QuranSurah;
  showBismillah: boolean;
  scriptStyle?: ScriptStyle;
}

export function ChapterHeader({ surah, showBismillah, scriptStyle = "uthmani" }: ChapterHeaderProps) {
  const arabicFontClass = scriptStyle === "indopak" ? "font-indopak" : "font-arabic";
  return (
    <div className="bg-black border-b border-gray-700">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Chapter Icon and Info */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2" translate="no">
            {surah.englishName}
          </h1>
          <p className="text-lg text-gray-300 mb-4" translate="no">
            {surah.englishNameTranslation}
          </p>

          <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
            <span>{surah.numberOfAyahs} verses</span>
            <span>•</span>
            <span className="capitalize">{surah.revelationType}</span>
          </div>
        </div>

        {/* Bismillah */}
        {showBismillah && (
          <div className="text-center mb-8">
            <div className={`text-2xl ${arabicFontClass} text-gray-200 leading-relaxed`}>
              بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
            </div>
            <div className="text-sm text-gray-400 mt-2">
              In the name of Allah, the Entirely Merciful, the Especially Merciful.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
