import React, { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, Star, Sparkles, ShoppingBag, Eye, Calendar, User, ShieldCheck, Check, MessageSquare } from 'lucide-react';
import { MANGA_ITEMS, PRODUCTS } from '../data/contentRepository';
  import { useContent } from '../data/ContentProvider';
import { Manga, Product, PageRoute } from '../types';
import { AdPlaceholder } from '../components/AdPlaceholder';

interface MangaDetailPageProps {
  mangaSlug: string;
  onNavigate: (route: PageRoute) => void;
  onOpenMangaReader: (mangaId: string) => void;
  onAddToCart: (product: Product) => void;
}

export const MangaDetailPage: React.FC<MangaDetailPageProps> = ({
  mangaSlug,
  onNavigate,
  onOpenMangaReader,
  onAddToCart,
}) => {
    const { manga: MANGA_ITEMS, products: PRODUCTS } = useContent();
  const manga = MANGA_ITEMS.find((m) => m.slug === mangaSlug) || MANGA_ITEMS[0];
  const [reviews, setReviews] = useState(manga.reviews || []);
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = `${manga.title} – Original Manga – AnimeFreak`;
  }, [manga]);

  // Find corresponding digital shop product if exists
  const associatedProduct = PRODUCTS.find((p) => p.title.includes(manga.title.split(':')[0])) || {
    id: `prod-${manga.id}`,
    title: `${manga.title} — Digital Edition`,
    slug: manga.slug,
    description: manga.description,
    price: manga.price,
    cover: manga.cover,
    format: 'PDF + CBZ (DRM-Free)',
    fileSize: '160 MB',
    features: ['High-res print master', 'Bonus concept sketches', 'DRM-free download'],
    digitalDownloadInfo: 'Instant digital delivery.',
    category: 'manga-volume' as const,
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewAuthor || !newReviewComment) return;

    const newEntry = {
      id: `rev-${Date.now()}`,
      user: newReviewAuthor,
      date: new Date().toISOString().split('T')[0],
      rating: newRating,
      comment: newReviewComment,
    };

    setReviews([newEntry, ...reviews]);
    setNewReviewAuthor('');
    setNewReviewComment('');
  };

  const handleAddToCart = () => {
    onAddToCart(associatedProduct);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="min-h-screen pb-20">
      
      {/* Breadcrumb nav */}
      <nav aria-label="Breadcrumb" className="border-b border-white/8 bg-[#090b12]/50 py-3.5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-400 font-mono">
          <button
            onClick={() => onNavigate({ type: 'home' })}
            className="hover:text-purple-300 transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <button
            onClick={() => onNavigate({ type: 'manga' })}
            className="hover:text-purple-300 transition-colors"
          >
            Manga
          </button>
          <span>/</span>
          <span className="text-slate-300 truncate max-w-xs">{manga.title}</span>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        
        {/* Top Split Layout: Cover + Purchase & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Cover & Preview Thumbnails */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/12 shadow-2xl bg-[#0c0d16] group">
              <img
                src={manga.cover}
                alt={manga.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              
              {/* Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md text-xs font-mono uppercase text-purple-300 border border-white/10">
                  {manga.genre}
                </span>
              </div>
            </div>

            {/* Preview gallery triggers */}
            <div className="p-4 rounded-xl border border-white/8 bg-white/5 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Sample Reader Preview
              </div>
              <div className="grid grid-cols-4 gap-2">
                {manga.previewPages.map((page, idx) => (
                  <button
                    key={idx}
                    onClick={() => onOpenMangaReader(manga.id)}
                    className="aspect-[3/4] rounded-lg overflow-hidden border border-white/10 hover:border-purple-500 transition-all focus:outline-none"
                    aria-label={`Open sample page ${idx + 1}`}
                  >
                    <img
                      src={page}
                      alt={`Preview page ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Title, Metadata, AI Transparency, Synopsis, Purchase Box */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                <Sparkles className="h-3.5 w-3.5" />
                <span>INDEPENDENT MANGA PUBLICATION</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white">
                {manga.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono pt-1">
                <span className="flex items-center gap-1.5 text-slate-200">
                  <User className="h-3.5 w-3.5 text-purple-400" />
                  By {manga.author}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5 text-slate-500" />
                  {manga.pages} Story Pages
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5 text-amber-300">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  {manga.rating} ({reviews.length} Reader Reviews)
                </span>
              </div>
            </div>

            {/* AI-Assisted Disclosure Box (Requirement 8) */}
            <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-950/20 backdrop-blur-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-300 font-mono uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4 text-purple-400" />
                <span>AI-Assisted Artwork Disclosure</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {manga.aiDisclosure}
              </p>
              <div className="text-[11px] text-slate-400">
                Created independently by AnimeFreak Imprint. No third-party corporate franchise assets were used.
              </div>
            </div>

            {/* Story Synopsis */}
            <div className="space-y-2">
              <h2 className="font-display text-lg font-bold text-white">
                Story Synopsis
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {manga.storySynopsis}
              </p>
            </div>

            {/* Purchase & Preview Actions */}
            <div className="p-6 rounded-2xl border border-white/12 bg-[#10121d] space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Digital Release Price
                  </div>
                  <div className="font-display text-3xl font-extrabold text-white">
                    ${manga.price.toFixed(2)}
                  </div>
                </div>
                <div className="text-right text-xs text-slate-400 font-mono">
                  <div>Format: PDF & CBZ</div>
                  <div>DRM-Free Download</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => onOpenMangaReader(manga.id)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-purple-500/40 bg-purple-600/20 hover:bg-purple-600/30 text-sm font-semibold text-purple-200 transition-all focus:outline-none cursor-pointer"
                >
                  <Eye className="h-4 w-4" />
                  <span>Read Free Preview</span>
                </button>

                <button
                  onClick={handleAddToCart}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all focus:outline-none cursor-pointer ${
                    isAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white shadow-lg shadow-purple-900/30'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span>Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-4 w-4" />
                      <span>Buy Digital Edition (${manga.price.toFixed(2)})</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Advertisement Slot */}
        <AdPlaceholder slotName="Manga Detail In-Page Leaderboard" format="leaderboard" />

        {/* Reader Reviews & Rating Section */}
        <div className="my-14 space-y-8">
          <div className="flex items-center justify-between border-b border-white/8 pb-4">
            <div>
              <h3 className="font-display text-2xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-purple-400" />
                <span>Reader Reviews ({reviews.length})</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Verified community feedback on worldbuilding, pacing, and visual art.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Reviews List */}
            <div className="lg:col-span-7 space-y-4">
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="p-5 rounded-xl border border-white/8 bg-white/5 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-slate-200">
                      {rev.user}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{rev.date}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${
                          i < rev.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-600'
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                    "{rev.comment}"
                  </p>
                </div>
              ))}
            </div>

            {/* Leave a Review Form */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl border border-white/10 bg-[#0e101a] space-y-4">
                <h4 className="font-display text-base font-bold text-white">
                  Write a Reader Review
                </h4>

                <form onSubmit={handleAddReview} className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-slate-300">Your Name</label>
                    <input
                      type="text"
                      required
                      value={newReviewAuthor}
                      onChange={(e) => setNewReviewAuthor(e.target.value)}
                      placeholder="e.g. MangaEnthusiast"
                      className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300">Rating</label>
                    <div className="flex items-center gap-1 pt-1">
                      {[1, 2, 3, 4, 5].map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => setNewRating(val)}
                          className="p-1 text-slate-500 hover:text-amber-400 focus:outline-none"
                        >
                          <Star
                            className={`h-5 w-5 ${
                              val <= newRating
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-slate-600'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300">Your Review</label>
                    <textarea
                      rows={3}
                      required
                      value={newReviewComment}
                      onChange={(e) => setNewReviewComment(e.target.value)}
                      placeholder="What did you think of the pacing, panel transitions, and lore?"
                      className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white transition-colors cursor-pointer"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>

      </main>

    </div>
  );
};
