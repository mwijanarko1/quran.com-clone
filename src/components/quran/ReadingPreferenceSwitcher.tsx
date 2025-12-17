"use client";

import { Button } from "@/components/ui/button";
import type { ReadingMode } from "@/types/quran";

interface ReadingPreferenceSwitcherProps {
  readingMode: ReadingMode;
  onReadingModeChange: (mode: ReadingMode) => void;
}

export function ReadingPreferenceSwitcher({
  readingMode,
  onReadingModeChange,
}: ReadingPreferenceSwitcherProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-100 rounded-lg p-1 flex">
        <Button
          variant={readingMode === "translation" ? "default" : "ghost"}
          size="sm"
          onClick={() => onReadingModeChange("translation")}
          className="rounded-md"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          Translation
        </Button>
        <Button
          variant={readingMode === "reading" ? "default" : "ghost"}
          size="sm"
          onClick={() => onReadingModeChange("reading")}
          className="rounded-md"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 .623v22.004c0 .165.067.324.186.44a.64.64 0 0 0 .448.183h17.332a.64.64 0 0 0 .448-.182.62.62 0 0 0 .186-.44V.622a.62.62 0 0 0-.186-.44.64.64 0 0 0-.448-.183H3.634a.64.64 0 0 0-.448.182.62.62 0 0 0-.186.44m10.146 13.493H7.227v-1.66h5.919zm4.227-4.152H7.227v-1.66h10.146zm0-4.151H7.227V4.152h10.146z" />
          </svg>
          Reading
        </Button>
      </div>
    </div>
  );
}
