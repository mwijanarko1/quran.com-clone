"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import { SettingsDrawer } from "./SettingsDrawer";

export function Navbar() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="118"
                height="25"
                fill="none"
                viewBox="0 0 118 25"
              >
                <text
                  x="59"
                  y="18"
                  fontFamily="Arial, sans-serif"
                  fontSize="18"
                  fontWeight="bold"
                  fill="#000"
                  textAnchor="middle"
                >
                  Quran
                </text>
              </svg>
            </Link>
          </div>

          {/* Center - Reading preference switcher */}
          <div className="hidden md:flex items-center">
            {/* This will be implemented in ReadingPreferenceSwitcher */}
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center space-x-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSettingsOpen(true)}
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
                </Button>
              </TooltipTrigger>
              <TooltipContent>Settings</TooltipContent>
            </Tooltip>

          </div>
        </div>
      </nav>

      {/* Settings Drawer */}
      <Sheet open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
        <SheetContent>
          <SettingsDrawer onClose={() => setIsSettingsOpen(false)} />
        </SheetContent>
      </Sheet>
    </>
  );
}
