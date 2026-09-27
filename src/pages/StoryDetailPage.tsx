import React, { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, Clock, User, ChevronRight, Sparkles, Type } from 'lucide-react';
import { STORIES } from '../data/contentRepository';
  import { useContent } from '../data/ContentProvider';
import { PageRoute } from '../types';
import { AdPlaceholder } from '../components/AdPlaceholder';

interface StoryDetailPageProps {
  storySlug: string;
  onNavigate: (route: PageRoute) => void;
}

export const StoryDetailPage: React.FC<StoryDetailPageProps> = ({
  storySlug,
  onNavigate,
}) => {
    const { stories: STORIES } = useContent();
  const story = STORIES.find((s) => s.slug === storySlug) || STORIES[0];
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = `${story.title} – Original Story – AnimeFreak`;
  }, [story]);

  const currentChapter = story.chapters[activeChapterIndex] || story.chapters[0];

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'large':
        return 'text-lg sm:text-xl leading-relaxed';
      case 'xlarge':
        return 'text-xl sm:text-2xl leading-loose';
      case 'normal':
      default:
        return 'text-base sm:text-lg leading-relaxed';
    }
  };

  return (
    <div className="min-h-screen pb-20">
      
      {/* Breadcrumb nav */}
      <nav aria-label="Breadcrumb" className="border-b border-white/8 bg-[#090b12]/50 py-3.5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 flex items-center gap-2 text-xs text-slate-400 font-mono">
          <button
            onClick={() => onNavigate({ type: 'home' })}
            className="hover:text-purple-300 transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <button
            onClick={() => onNavigate({ type: 'stories' })}
            className="hover:text-purple-300 transition-colors"
          >
            Stories
          </button>
          <span>/</span>
          <span className="text-slate-300 truncate max-w-xs">{story.title}</span>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-4 sm:px-6 pt-8 sm:pt-12">
        
        {/* Story Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/25 bg-purple-950/40 text-xs font-mono tracking-wider uppercase text-purple-300">
            <span>{story.genre}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {story.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono pt-1">
            <span className="flex items-center gap-1 text-slate-200">
              <User className="h-3.5 w-3.5 text-purple-400" />
              By {story.author}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <BookOpen className="h-3.5 w-3.5 text-slate-500" />
              {story.chaptersCount} Serialized Chapters
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-slate-500" />
              {story.readingTime}
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-2">
            {story.synopsis}
          </p>
        </div>

        {/* Story Cover Banner */}
        <div className="my-8 rounded-2xl overflow-hidden border border-white/12 shadow-2xl relative aspect-[21/9] bg-[#0c0d16]">
          <img
            src={story.cover}
            alt={story.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Chapter Selection Strip */}
        <div className="my-6 p-4 rounded-xl border border-white/8 bg-white/5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <span>Chapters:</span>
            <div className="flex gap-1.5">
              {story.chapters.map((ch, idx) => (
                <button
                  key={ch.number}
                  onClick={() => setActiveChapterIndex(idx)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                    activeChapterIndex === idx
                      ? 'bg-purple-600 text-white font-bold'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  Ch. {ch.number}
                </button>
              ))}
            </div>
          </div>

          {/* Reader font size adjuster */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Type className="h-3.5 w-3.5 text-slate-500" />
            <span>Size:</span>
            <button
              onClick={() => setFontSize('normal')}
              className={`px-2 py-0.5 rounded text-xs ${fontSize === 'normal' ? 'bg-purple-600/30 text-purple-300' : 'hover:text-white'}`}
            >
              A
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`px-2 py-0.5 rounded text-sm ${fontSize === 'large' ? 'bg-purple-600/30 text-purple-300' : 'hover:text-white'}`}
            >
              A+
            </button>
            <button
              onClick={() => setFontSize('xlarge')}
              className={`px-2 py-0.5 rounded text-base ${fontSize === 'xlarge' ? 'bg-purple-600/30 text-purple-300' : 'hover:text-white'}`}
            >
              A++
            </button>
          </div>
        </div>

        {/* Current Chapter Prose Reader */}
        <div className="my-8 p-6 sm:p-10 rounded-2xl border border-white/10 bg-[#0d0f18] space-y-6">
          <div className="border-b border-white/8 pb-4 space-y-1">
            <div className="text-xs font-mono text-purple-400 uppercase tracking-wider">
              Chapter {currentChapter.number} · {currentChapter.readTime}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              {currentChapter.title}
            </h2>
          </div>

          <div className={`space-y-5 text-slate-200 font-serif ${getFontSizeClass()}`}>
            {currentChapter.content.map((para, i) => (
              <p key={i} className="leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Chapter Next Navigation */}
          <div className="pt-6 border-t border-white/8 flex items-center justify-between">
            {activeChapterIndex > 0 ? (
              <button
                onClick={() => setActiveChapterIndex(activeChapterIndex - 1)}
                className="px-4 py-2 rounded-xl border border-white/10 text-xs font-semibold text-slate-300 hover:text-white"
              >
                ← Previous Chapter
              </button>
            ) : <div />}

            {activeChapterIndex < story.chapters.length - 1 ? (
              <button
                onClick={() => setActiveChapterIndex(activeChapterIndex + 1)}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white transition-colors"
              >
                Next Chapter →
              </button>
            ) : (
              <div className="text-xs font-mono text-purple-400">
                End of Preview Chapters
              </div>
            )}
          </div>
        </div>

        {/* Advertisement */}
        <AdPlaceholder slotName="Prose Story Footer" format="banner" />

      </main>
    </div>
  );
};
