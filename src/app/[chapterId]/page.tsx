import { notFound } from "next/navigation";
import { getSurahById, getVersesBySurahId } from "@/lib/quran-data";
import { QuranReader } from "@/components/quran/QuranReader";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{
    chapterId: string;
  }>;
  searchParams: Promise<{
    startingVerse?: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { chapterId } = await params;
  const chapterIdNum = parseInt(chapterId, 10);

  if (isNaN(chapterIdNum)) {
    return {
      title: "Surah Not Found - Quran.com",
    };
  }

  const surah = getSurahById(chapterIdNum);
  if (!surah) {
    return {
      title: "Surah Not Found - Quran.com",
    };
  }

  return {
    title: `${surah.englishName} - ${surah.englishNameTranslation} - Quran.com`,
    description: `Read Surah ${surah.englishName} (${surah.englishNameTranslation}) from the Holy Quran. ${surah.numberOfAyahs} verses, revealed in ${surah.revelationType}.`,
    openGraph: {
      title: `${surah.englishName} - ${surah.englishNameTranslation}`,
      description: `Read Surah ${surah.englishName} (${surah.englishNameTranslation}) from the Holy Quran.`,
      url: `https://quran.com/${chapterId}`,
    },
  };
}

export default async function ChapterPage({ params, searchParams }: PageProps) {
  const { chapterId } = await params;
  const { startingVerse } = await searchParams;

  const chapterIdNum = parseInt(chapterId, 10);
  const startingVerseNum = startingVerse ? parseInt(startingVerse, 10) : 1;

  if (isNaN(chapterIdNum) || chapterIdNum < 1 || chapterIdNum > 114) {
    notFound();
  }

  const surah = getSurahById(chapterIdNum);
  if (!surah) {
    notFound();
  }

  const verses = getVersesBySurahId(chapterIdNum);

  return (
    <QuranReader
      surah={surah}
      verses={verses}
      startingVerse={startingVerseNum}
    />
  );
}

// Generate static params for all surahs (optional for better performance)
export async function generateStaticParams() {
  return Array.from({ length: 114 }, (_, i) => ({
    chapterId: (i + 1).toString(),
  }));
}
