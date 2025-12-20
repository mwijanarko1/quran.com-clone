"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { ThemeMode, ReadingMode, ScriptStyle } from "@/types/quran";

interface SettingsDrawerProps {
  onClose: () => void;
}

export function SettingsDrawer({ onClose }: SettingsDrawerProps) {
  const [theme, setTheme] = useState<ThemeMode>("auto");
  const [readingMode, setReadingMode] = useState<ReadingMode>("translation");
  const [scriptStyle, setScriptStyle] = useState<ScriptStyle>("uthmani");
  const [fontSize, setFontSize] = useState<"small" | "medium" | "large">("medium");
  const [showWordByWord, setShowWordByWord] = useState(false);

  const handleReset = () => {
    setTheme("auto");
    setReadingMode("translation");
    setScriptStyle("uthmani");
    setFontSize("medium");
    setShowWordByWord(false);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">Settings</h2>
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

      {/* Settings Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Reading Experience */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-4">Reading Experience</h3>

          {/* Theme */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Theme</span>
              <Select value={theme} onValueChange={(value: ThemeMode) => setTheme(value)}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="auto">Auto</SelectItem>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="sepia">Sepia</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Font Size */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Quran Font Size</span>
              <Select value={fontSize} onValueChange={(value: "small" | "medium" | "large") => setFontSize(value)}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Script Style */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Arabic Script</span>
              <Select value={scriptStyle} onValueChange={(value: ScriptStyle) => setScriptStyle(value)}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="uthmani">Uthmani</SelectItem>
                  <SelectItem value="indopak">IndoPak</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Word By Word */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-4">Word By Word</h3>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-700">Show tooltip when playing audio</span>
                <p className="text-xs text-gray-500 mt-1">
                  Show word translation in tooltip while playing ayah
                </p>
              </div>
              <Switch
                checked={showWordByWord}
                onCheckedChange={setShowWordByWord}
              />
            </div>

            <div className="text-xs text-gray-500 bg-blue-50 p-3 rounded-lg">
              Display the translation of every word in line (underneath the word) or in a bubble above the word while listening to the Quran
            </div>
          </div>
        </div>

        {/* Translations */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-4">Translations</h3>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Translation Language</span>
              <Select defaultValue="en">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="ar">Arabic</SelectItem>
                  <SelectItem value="ur">Urdu</SelectItem>
                  <SelectItem value="id">Indonesian</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Selected Translation</span>
              <Select defaultValue="saheeh">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="saheeh">Saheeh International</SelectItem>
                  <SelectItem value="maududi">Tafheem-ul-Quran (Maududi)</SelectItem>
                  <SelectItem value="yusuf-ali">Yusuf Ali</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Audio */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-4">Audio</h3>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Selected Reciter</span>
              <Select defaultValue="mishary">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mishary">Mishary Rashid Alafasy</SelectItem>
                  <SelectItem value="sudais">Abdur-Rahman As-Sudais</SelectItem>
                  <SelectItem value="shuraim">Saad Al-Ghamidi</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t p-4">
        <Button
          variant="outline"
          onClick={handleReset}
          className="w-full"
        >
          Reset Settings
        </Button>
      </div>
    </div>
  );
}
