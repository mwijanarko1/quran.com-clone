# Quran.com Clone

A modern, comprehensive Quran reading platform inspired by Quran.com. Built with Next.js, TypeScript, and Tailwind CSS to provide Muslims worldwide with easy access to the Holy Quran.

## 📖 About

This project is a faithful recreation of Quran.com's interface and functionality, offering:

- **Complete Quran Text**: All 114 Surahs with Arabic text
- **Beautiful Reading Experience**: Clean, distraction-free interface
- **Multiple Translations**: Support for various translation languages
- **Audio Recitations**: Audio playback functionality
- **Search & Navigation**: Powerful search and easy navigation
- **Responsive Design**: Works seamlessly on all devices
- **Free & Open Source**: No monetization, purely for Islamic benefit

## 🚀 Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript for type safety
- **UI Library**: ShadCN/UI components
- **Styling**: Tailwind CSS v4
- **Data Source**: Static Quran data (quran.json)
- **State Management**: React hooks
- **Icons**: Custom SVG icons

## ✨ Features

### 📚 Reading Experience
- **Arabic Text Display**: Beautiful Uthmani script rendering
- **Translation Toggle**: Switch between Arabic-only and translation view
- **Verse-by-Verse Reading**: Clear verse separation and numbering
- **Bismillah Display**: Properly shown where applicable (except Surah At-Tawbah)

### 🧭 Navigation
- **Surah Navigation**: Browse all 114 Surahs with search
- **Verse Linking**: Direct links to specific verses
- **Context Menu**: Shows current Surah and reading position
- **Quick Access**: Popular Surahs and verses shortcuts

### 🔍 Search & Discovery
- **Global Search**: Search across Arabic text and translations
- **Surah Search**: Find Surahs by name or number
- **Popular Surahs**: Highlighted frequently read chapters

### 🎵 Audio Features
- **Audio Player**: Built-in recitation playback
- **Reciter Selection**: Multiple reciter options
- **Verse Audio**: Play individual verses or entire Surahs

### 📱 User Experience
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Dark/Light Themes**: Multiple theme options
- **Accessibility**: Screen reader friendly, keyboard navigation
- **Fast Loading**: Optimized performance with static data

### 🛠 Developer Features
- **Type Safety**: Full TypeScript implementation
- **Component Architecture**: Modular, reusable components
- **SEO Optimized**: Proper meta tags and structured data
- **Static Generation**: Fast loading with pre-rendered pages

## 🛠 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd quran.com-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── [chapterId]/             # Dynamic Surah pages
│   │   └── page.tsx
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles
├── components/                  # React components
│   ├── layout/                  # Layout components
│   │   ├── Navbar.tsx          # Main navigation
│   │   ├── Footer.tsx          # Site footer
│   │   ├── NavigationDrawer.tsx # Mobile navigation
│   │   ├── SearchDrawer.tsx     # Search interface
│   │   └── SettingsDrawer.tsx   # Settings panel
│   └── quran/                   # Quran-specific components
│       ├── QuranReader.tsx     # Main reader component
│       ├── ChapterHeader.tsx   # Surah header
│       ├── VerseDisplay.tsx    # Individual verse display
│       ├── VerseActions.tsx    # Verse action buttons
│       └── ReadingPreferenceSwitcher.tsx
├── data/                       # Static data files
│   └── quran.json              # Complete Quran data
├── lib/                        # Utility functions
│   ├── quran-data.ts           # Data access layer
│   └── utils.ts                # Helper functions
├── types/                      # TypeScript definitions
│   └── quran.ts                # Quran data types
└── components/ui/              # ShadCN UI components
```

## 🎨 Design Philosophy

This clone maintains the clean, Islamic aesthetic of Quran.com:

- **Minimalist Interface**: Focus on the Quran text without distractions
- **Islamic Color Palette**: Greens, whites, and subtle accents
- **Typography**: Proper Arabic font rendering
- **Accessibility**: WCAG compliant design
- **Mobile-First**: Optimized for mobile reading experience

## 🔧 Configuration

### Environment Variables

The app uses static data, so no environment variables are required for basic functionality.

### Customization Options

- **Themes**: Light, Dark, Sepia modes
- **Font Sizes**: Small, Medium, Large options
- **Reading Modes**: Translation or Reading view
- **Audio Settings**: Reciter selection and playback speed

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deployment Platforms

This app can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **AWS Amplify**
- Any platform supporting Next.js

## 🤝 Contributing

We welcome contributions to improve this Quran reading platform:

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

### Areas for Contribution

- **Additional Translations**: Add more language translations
- **Audio Integration**: Improve audio playback features
- **Tafsir Integration**: Add scholarly explanations
- **Search Enhancement**: Improve search functionality
- **Accessibility**: Enhance screen reader support
- **Performance**: Optimize loading and rendering

## 📊 Performance

- **Static Data**: No API calls, instant loading
- **Code Splitting**: Automatic route-based splitting
- **Optimized Images**: Next.js Image component
- **PWA Ready**: Can be converted to Progressive Web App

## 🔒 Security & Privacy

- **No User Data Collection**: Completely anonymous usage
- **No Tracking**: No analytics or tracking scripts
- **Static Content**: No server-side processing
- **HTTPS Only**: Secure connections only

## 📝 License

This project is dedicated to the Muslim Ummah and is provided as a free, open-source resource under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Quran.com**: Original inspiration and design reference
- **Quran.Foundation**: Supporting Islamic technology projects
- **All Contributors**: Thanks to everyone helping make Islamic knowledge accessible

## 📞 Support

For questions, suggestions, or issues:
- Create an issue on GitHub
- Contact the maintainers
- Join the discussion in Islamic developer communities

---

**Note**: This is an independent project not affiliated with Quran.com or Quran.Foundation. It aims to provide similar functionality as a free, open-source alternative.
