import React, { useState, useEffect } from 'react';
import { ArrowLeft, ShoppingBag, Download, Check, ShieldCheck, FileText, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { Product, PageRoute } from '../types';
import { AdPlaceholder } from '../components/AdPlaceholder';

interface ProductDetailPageProps {
  productSlug: string;
  onNavigate: (route: PageRoute) => void;
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  productSlug,
  onNavigate,
  onAddToCart,
  onBuyNow,
}) => {
  const product = PRODUCTS.find((p) => p.slug === productSlug) || PRODUCTS[0];
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = `${product.title} – Digital Shop – AnimeFreak`;
  }, [product]);

  const handleAddToCart = () => {
    onAddToCart(product);
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
            onClick={() => onNavigate({ type: 'shop' })}
            className="hover:text-purple-300 transition-colors"
          >
            Shop
          </button>
          <span>/</span>
          <span className="text-slate-300 truncate max-w-xs">{product.title}</span>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Cover image (Left) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/12 shadow-2xl bg-[#0c0d16]">
              <img
                src={product.cover}
                alt={product.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md text-xs font-mono uppercase text-purple-300 border border-white/10 flex items-center gap-1.5">
                  <FileText className="h-3.5 w-3.5 text-purple-400" />
                  {product.format}
                </span>
              </div>
            </div>
          </div>

          {/* Product Purchase Module (Right) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-purple-400">
                <Sparkles className="h-3.5 w-3.5" />
                <span>OFFICIAL DIGITAL RELEASE</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {product.title}
              </h1>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                <span>File Size: {product.fileSize}</span>
                <span>·</span>
                <span>DRM-Free Personal License</span>
              </div>

              <div className="font-display text-3xl font-extrabold text-white pt-2">
                ${product.price.toFixed(2)}
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {product.description}
            </p>

            {/* Features List */}
            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Edition Highlights & Specs:
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Purchase Buttons */}
            <div className="pt-4 border-t border-white/8 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-3.5 rounded-xl border text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isAdded
                      ? 'bg-emerald-600/20 border-emerald-500/40 text-emerald-300'
                      : 'border-white/10 bg-white/5 hover:bg-white/10 text-white'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span>Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-4 w-4 text-purple-400" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onBuyNow(product)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Buy Now (${product.price.toFixed(2)})</span>
                </button>
              </div>

              {/* Digital download security notice */}
              <div className="p-3.5 rounded-xl bg-[#0e101a] border border-white/8 flex items-start gap-2.5 text-xs text-slate-400">
                <ShieldCheck className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Secure Delivery:</strong> {product.digitalDownloadInfo} Re-download anytime directly from your registered AnimeFreak account.
                </span>
              </div>
            </div>

          </div>

        </div>

        <AdPlaceholder slotName="Product Page Leaderboard" format="leaderboard" />

      </main>
    </div>
  );
};
