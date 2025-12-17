import quranData from '../data/quran-complete.json';
import type { QuranData, SurahInfo, VerseInfo, QuranSurah, QuranMetadata } from '@/types/quran';

// Import the JSON data
const rawQuranData: QuranData = quranData as QuranData;

// Cache for processed data
let quranCache: {
  metadata: QuranMetadata;
  surahs: SurahInfo[];
  verses: VerseInfo[];
  surahMap: Map<number, QuranSurah>;
} | null = null;

// Initialize cache
function initializeCache() {
  if (quranCache) return quranCache;

  const surahs: SurahInfo[] = [];
  const verses: VerseInfo[] = [];
  const surahMap = new Map<number, QuranSurah>();

  rawQuranData.surahs.forEach((surah) => {
    surahMap.set(surah.number, surah);

    // Add surah info
    surahs.push({
      id: surah.number,
      nameArabic: surah.name,
      nameTransliterated: surah.englishName,
      nameTranslated: surah.englishNameTranslation,
      location: surah.revelationType,
      verseCount: surah.numberOfAyahs,
    });

    // Add verse info
    surah.verses.forEach((verse) => {
      verses.push({
        id: verse.number,
        surahId: surah.number,
        arabicText: verse.arabicText,
        verseNumber: verse.numberInSurah,
        translation: verse.translation,
        indonesianTranslation: verse.indonesianTranslation,
        page: verse.page,
        juz: verse.juz,
      });
    });
  });

  quranCache = {
    metadata: rawQuranData.metadata,
    surahs,
    verses,
    surahMap
  };
  return quranCache;
}

// Public API functions
export function getAllSurahs(): SurahInfo[] {
  const cache = initializeCache();
  return cache.surahs;
}

export function getSurahById(id: number): QuranSurah | null {
  const cache = initializeCache();
  return cache.surahMap.get(id) || null;
}

export function getVersesBySurahId(surahId: number): VerseInfo[] {
  const cache = initializeCache();
  return cache.verses.filter(verse => verse.surahId === surahId);
}

export function getVerse(surahId: number, verseId: number): VerseInfo | null {
  const cache = initializeCache();
  return cache.verses.find(verse => verse.surahId === surahId && verse.verseNumber === verseId) || null;
}

export function getMetadata(): QuranMetadata {
  const cache = initializeCache();
  return cache.metadata;
}

export function getSurahName(surahId: number): string {
  const surah = getSurahById(surahId);
  return surah ? surah.englishName : '';
}

export function getTotalVerses(): number {
  const cache = initializeCache();
  return cache.verses.length;
}

export function getTotalSurahs(): number {
  const cache = initializeCache();
  return cache.surahs.length;
}

// Search functions
export function searchSurahs(query: string): SurahInfo[] {
  const cache = initializeCache();
  const lowercaseQuery = query.toLowerCase();

  return cache.surahs.filter(surah =>
    surah.nameArabic.includes(query) ||
    surah.nameTransliterated.toLowerCase().includes(lowercaseQuery) ||
    surah.nameTranslated.toLowerCase().includes(lowercaseQuery)
  );
}

export function searchVerses(query: string): VerseInfo[] {
  const cache = initializeCache();
  const lowercaseQuery = query.toLowerCase();

  return cache.verses.filter(verse =>
    verse.arabicText.includes(query)
  );
}
