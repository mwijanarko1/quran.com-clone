// Quran data types based on quran-complete.json structure
export interface QuranVerse {
  number: number;
  numberInSurah: number;
  arabicText: string;
  translation: string;
  indonesianTranslation: string;
  page: number;
  juz: number;
}

export interface QuranSurah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
  juzNumber: number;
  juzs: number[];
  pages: number[];
  verses: QuranVerse[];
}

export interface QuranMetadata {
  version: string;
  lastUpdated: string;
  totalSurahs: number;
  totalAyahs: number;
  dataSource: string;
  translations: {
    english: string;
    indonesian: string;
  };
  textCleaningApplied: string[];
  quranStructure: {
    sajdas: { count: number; references: any[] };
    rukus: { count: number; references: any[] };
    pages: { count: number; references: any[] };
    manzils: { count: number; references: any[] };
    hizbQuarters: { count: number; references: any[] };
    juzs: { count: number; references: any[] };
  };
}

export interface QuranData {
  metadata: QuranMetadata;
  surahs: QuranSurah[];
}

// Utility types for the app
export interface SurahInfo {
  id: number;
  nameArabic: string;
  nameTransliterated: string;
  nameTranslated: string;
  location: string;
  verseCount: number;
}

export interface VerseInfo {
  id: number;
  surahId: number;
  arabicText: string;
  verseNumber: number;
  translation: string;
  indonesianTranslation: string;
  page: number;
  juz: number;
}

// Navigation types
export type NavigationMode = 'surah' | 'verse' | 'juz' | 'page';

// Reading preferences
export type ReadingMode = 'translation' | 'reading';
export type ThemeMode = 'light' | 'dark' | 'sepia' | 'auto';

// Settings types
export interface UserSettings {
  theme: ThemeMode;
  readingMode: ReadingMode;
  fontSize: 'small' | 'medium' | 'large';
  showWordByWord: boolean;
  selectedTranslation: string;
  selectedReciter: string;
}
