"use client";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import type { QuranSurah } from "@/types/quran";

interface ChapterHeaderProps {
  surah: QuranSurah;
  showBismillah: boolean;
}

export function ChapterHeader({ surah, showBismillah }: ChapterHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Chapter Icon and Info */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-emerald-100 rounded-full mb-6">
            <span className="text-4xl font-bold text-emerald-600">
              {surah.number.toString().padStart(3, '0')}
            </span>
            <span className="text-lg text-emerald-600 ml-1">surah</span>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2" translate="no">
            {surah.englishName}
          </h1>
          <p className="text-lg text-gray-600 mb-4" translate="no">
            {surah.englishNameTranslation}
          </p>

          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <span>{surah.numberOfAyahs} verses</span>
            <span>•</span>
            <span className="capitalize">{surah.revelationType}</span>
          </div>
        </div>

        {/* Bismillah */}
        {showBismillah && (
          <div className="text-center mb-8">
            <div className="text-2xl font-arabic text-gray-800 leading-relaxed">
              بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
            </div>
            <div className="text-sm text-gray-600 mt-2">
              In the name of Allah, the Entirely Merciful, the Especially Merciful.
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              Translation by <span className="font-medium">Saheeh International</span>
              <button className="text-emerald-600 hover:text-emerald-700 ml-2 underline">
                (Change)
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Link href={`/surah/${surah.number}/info`}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M11.625 0C5.208 0 0 5.208 0 11.625S5.208 23.25 11.625 23.25 23.25 18.042 23.25 11.625 18.042 0 11.625 0m1.162 17.438h-2.325v-6.975h2.326zm0-9.3h-2.325V5.812h2.326z"
                      />
                    </svg>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Surah Info</TooltipContent>
              </Tooltip>
            </Link>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M4 2v20.364l16-10.182z"
                    />
                  </svg>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Play Audio</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
