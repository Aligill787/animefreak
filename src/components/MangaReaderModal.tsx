import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2, ZoomIn, ZoomOut, Sparkles, BookOpen } from 'lucide-react';
import { MANGA_ITEMS } from '../data/contentRepository';
  import { useContent } from '../data/ContentProvider';

interface MangaReaderModalProps {
  mangaId: string | null;
  onClose: () => void;
}

export const MangaReaderModal: React.FC<MangaReaderModalProps> = ({
  mangaId,
  onClose,
}) => {
    const { manga: MANGA_ITEMS } = useContent();
  const [currentPage, setCurrentPage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const manga = MANGA_ITEMS.find((m) => m.id === mangaId) || MANGA_ITEMS[0];
  const pages = manga?.previewPages || [];

  // Reset page when manga changes
  useEffect(() => {
    setCurrentPage(0);
    setIsZoomed(false);
  }, [mangaId]);

  // Keyboard navigation
  useEffect(() => {
    if (!mangaId) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mangaId, currentPage, pages.length, isFullscreen]);

  if (!mangaId) return null;

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 bg-[#050608] flex flex-col justify-between text-white select-none animate-fadeIn overflow-hidden"
    >
      {/* Top Controls Bar */}
      <div className="h-16 px-4 sm:px-6 border-b border-white/10 bg-[#08090e]/90 backdrop-blur-md flex items-center justify-between z-10 shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/30 text-[10px] font-mono text-purple-300">
            <Sparkles className="h-3 w-3" />
            <span>ORIGINAL MANGA PREVIEW</span>
          </div>
          <h2 className="font-display text-sm sm:text-base font-bold text-white truncate max-w-[200px] sm:max-w-md">
            {manga.title}
          </h2>
        </div>

        {/* Action icons & close */}
        <div className="flex items-center gap-2">
          {/* Zoom toggle */}
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            title={isZoomed ? 'Zoom Out' : 'Zoom In'}
            aria-label="Toggle Zoom"
          >
            {isZoomed ? <ZoomOut className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
          </button>

          {/* Fullscreen toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors hidden sm:inline-flex"
            title="Toggle Fullscreen"
            aria-label="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-2"
            aria-label="Close Reader"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Reader Stage */}
      <div 
        className="flex-1 relative flex items-center justify-center p-2 sm:p-4 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Previous page trigger button */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/60 border border-white/10 hover:bg-purple-600/50 text-white disabled:opacity-20 disabled:pointer-events-none transition-all"
          aria-label="Previous Page"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Manga Page Display */}
        <div className={`relative max-h-full transition-all duration-300 flex items-center justify-center ${
          isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
        }`}
        onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            src={pages[currentPage]}
            alt={`${manga.title} - Page ${currentPage + 1}`}
            className="max-h-[78vh] sm:max-h-[82vh] w-auto object-contain rounded-md shadow-2xl border border-white/10 bg-black"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Next page trigger button */}
        <button
          onClick={handleNext}
          disabled={currentPage === pages.length - 1}
          className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/60 border border-white/10 hover:bg-purple-600/50 text-white disabled:opacity-20 disabled:pointer-events-none transition-all"
          aria-label="Next Page"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Bottom Navigation & Scrubber */}
      <div className="h-16 px-4 sm:px-6 border-t border-white/10 bg-[#08090e]/90 backdrop-blur-md flex items-center justify-between z-10 shrink-0">
        
        {/* Left: AI Disclosure indicator */}
        <div className="hidden md:flex items-center gap-2 text-xs text-slate-400">
          <BookOpen className="h-4 w-4 text-purple-400" />
          <span>Original Manga by AnimeFreak Imprint</span>
        </div>

        {/* Center: Page Counter & Progress Stepper */}
        <div className="flex items-center gap-3 mx-auto md:mx-0">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className="text-xs font-semibold px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300 hover:text-white disabled:opacity-30"
          >
            Prev
          </button>

          <span className="font-mono text-sm font-semibold tracking-wider text-purple-300 bg-black/40 px-3 py-1 rounded border border-white/8">
            Page {currentPage + 1} / {pages.length}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === pages.length - 1}
            className="text-xs font-semibold px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300 hover:text-white disabled:opacity-30"
          >
            Next
          </button>
        </div>

        {/* Right: Keyboard navigation helper */}
        <div className="hidden lg:flex items-center gap-2 text-[11px] font-mono text-slate-500">
          <span>Use ◄ / ► arrow keys</span>
        </div>

      </div>
    </div>
  );
};
