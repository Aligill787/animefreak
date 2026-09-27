import React, { useState } from 'react';
import { ShoppingBag, ArrowRight, Download, Check, FileText } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { Product, PageRoute } from '../types';

interface DigitalShopProps {
  onNavigate: (route: PageRoute) => void;
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
}

export const DigitalShop: React.FC<DigitalShopProps> = ({
  onNavigate,
  onAddToCart,
  onBuyNow,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'manga-volume' | 'art-pack' | 'wallpapers'>('all');
  const [addedId, setAddedId] = useState<string | null>(null);

  const filteredProducts = activeFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeFilter);

  const handleAddToCart = (product: Product) => {
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section className="py-14 sm:py-20 border-t border-white/6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-purple-400 mb-1.5">
              Creator Marketplace
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Digital Manga Shop
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1.5 max-w-xl">
              Support independent authors with high-resolution, DRM-free digital manga volumes, creator art assets, and collector bundles.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 self-start md:self-end">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              All Items ({PRODUCTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('manga-volume')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeFilter === 'manga-volume'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Manga Volumes
            </button>
            <button
              onClick={() => setActiveFilter('art-pack')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeFilter === 'art-pack'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Art & Assets
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isJustAdded = addedId === product.id;

            return (
              <div
                key={product.id}
                className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col group"
              >
                {/* Product Cover image */}
                <div 
                  className="relative aspect-[4/3] overflow-hidden bg-[#0c0d16] cursor-pointer"
                  onClick={() => onNavigate({ type: 'product-detail', productSlug: product.slug })}
                >
                  <img
                    src={product.cover}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12131c] via-transparent to-transparent opacity-80" />

                  {/* Format & Size Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-slate-300 border border-white/10 flex items-center gap-1">
                      <FileText className="h-3 w-3 text-purple-400" />
                      {product.format}
                    </span>
                  </div>

                  {/* File Size */}
                  <div className="absolute top-3 right-3 text-[10px] font-mono text-slate-400 bg-black/80 px-2 py-0.5 rounded border border-white/10">
                    {product.fileSize}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <h3
                        onClick={() => onNavigate({ type: 'product-detail', productSlug: product.slug })}
                        className="font-display text-lg font-bold text-white group-hover:text-purple-300 transition-colors cursor-pointer leading-snug"
                      >
                        {product.title}
                      </h3>
                      <div className="font-mono text-base font-bold text-purple-300 shrink-0">
                        ${product.price.toFixed(2)}
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Trust indicator */}
                  <div className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-1">
                    <Download className="h-3 w-3 text-slate-400" />
                    <span>Instant high-speed digital download</span>
                  </div>

                  {/* Action Buttons: Add to Cart & Buy Now */}
                  <div className="pt-3 border-t border-white/8 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={isJustAdded}
                      className={`inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all focus:outline-none ${
                        isJustAdded
                          ? 'bg-emerald-600/20 border-emerald-500/40 text-emerald-300'
                          : 'border-white/10 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="h-3.5 w-3.5 text-purple-400" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => onBuyNow(product)}
                      className="inline-flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-xs font-semibold text-white shadow-md shadow-purple-900/25 transition-all focus:outline-none"
                    >
                      <span>Buy Now</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
