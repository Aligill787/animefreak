/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute, CartItem, Product } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { AdPlaceholder } from './components/AdPlaceholder';
import { FeaturedStories } from './components/FeaturedStories';
import { TrendingTopics } from './components/TrendingTopics';
import { OriginalAiManga } from './components/OriginalAiManga';
import { LatestArticles } from './components/LatestArticles';
import { PopularStories } from './components/PopularStories';
import { DigitalShop } from './components/DigitalShop';
import { CreatorSection } from './components/CreatorSection';
import { Newsletter } from './components/Newsletter';
import { CookieBanner } from './components/CookieBanner';
import { SearchModal } from './components/SearchModal';
import { CartDrawer } from './components/CartDrawer';
import { MangaReaderModal } from './components/MangaReaderModal';
import { AccountModal } from './components/AccountModal';

// Dedicated Page Views
import { ArticlePage } from './pages/ArticlePage';
import { MangaDetailPage } from './pages/MangaDetailPage';
import { StoryDetailPage } from './pages/StoryDetailPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CategoryPage } from './pages/CategoryPage';
import { CreatorPage } from './pages/CreatorPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Legal Pages
import { PrivacyPolicyPage } from './pages/legal/PrivacyPolicyPage';
import { TermsPage } from './pages/legal/TermsPage';
import { DisclaimerPage } from './pages/legal/DisclaimerPage';
import { CopyrightDmcaPage } from './pages/legal/CopyrightDmcaPage';
import { CookiePolicyPage } from './pages/legal/CookiePolicyPage';
import { RefundPolicyPage } from './pages/legal/RefundPolicyPage';
import { ContentProvider } from './data/ContentProvider';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>({ type: 'home' });
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('animefreak_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modal states
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [activeMangaReaderId, setActiveMangaReaderId] = useState<string | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('animefreak_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  // Cart operations
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleBuyNow = (product: Product) => {
    handleAddToCart(product);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartTotalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Router navigation helper
  const navigateTo = (route: PageRoute) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ContentProvider>
      <div className="min-h-screen flex flex-col bg-[#08090e] text-slate-100 font-sans selection:bg-purple-600 selection:text-white">
      
      {/* Universal Sticky Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
      />

      {/* Main Content Router View */}
      <main className="flex-1">
        {currentRoute.type === 'home' && (
          /* Exact General Flow specified in Section 30 of prompt */
          <>
            {/* 1. HERO */}
            <Hero onNavigate={navigateTo} />

            {/* 2. ADVERTISEMENT (Between hero and content) */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <AdPlaceholder slotName="Homepage Top Billboard" format="leaderboard" />
            </div>

            {/* 3. FEATURED STORIES */}
            <FeaturedStories
              onNavigate={navigateTo}
              onOpenMangaReader={(id) => setActiveMangaReaderId(id)}
            />

            {/* 4. TRENDING TOPICS */}
            <TrendingTopics onNavigate={navigateTo} />

            {/* 5. ORIGINAL AI MANGA */}
            <OriginalAiManga
              onNavigate={navigateTo}
              onOpenMangaReader={(id) => setActiveMangaReaderId(id)}
            />

            {/* 6. ADVERTISEMENT */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <AdPlaceholder slotName="Mid-Page Banner" format="banner" />
            </div>

            {/* 7. LATEST BLOG ARTICLES */}
            <LatestArticles onNavigate={navigateTo} />

            {/* 8. POPULAR STORIES */}
            <PopularStories onNavigate={navigateTo} />

            {/* 9. DIGITAL MANGA SHOP */}
            <DigitalShop
              onNavigate={navigateTo}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
            />

            {/* 10. CREATOR SECTION */}
            <CreatorSection onNavigate={navigateTo} />

            {/* 11. NEWSLETTER */}
            <Newsletter />

            {/* 12. ADVERTISEMENT */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <AdPlaceholder slotName="Pre-Footer Leaderboard" format="leaderboard" />
            </div>
          </>
        )}

        {/* Dedicated Blog View */}
        {currentRoute.type === 'blog' && (
          <div className="pb-16">
            <CategoryPage categorySlug="all" onNavigate={navigateTo} />
          </div>
        )}

        {/* Dedicated Category View */}
        {currentRoute.type === 'category' && (
          <div className="pb-16">
            <CategoryPage categorySlug={currentRoute.categorySlug} onNavigate={navigateTo} />
          </div>
        )}

        {/* Dedicated Stories Archive View */}
        {currentRoute.type === 'stories' && (
          <div className="py-10">
            <PopularStories onNavigate={navigateTo} />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
              <AdPlaceholder slotName="Stories Archive Banner" format="banner" />
            </div>
          </div>
        )}

        {/* Dedicated Manga Archive View */}
        {currentRoute.type === 'manga' && (
          <div className="py-10">
            <OriginalAiManga
              onNavigate={navigateTo}
              onOpenMangaReader={(id) => setActiveMangaReaderId(id)}
            />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
              <AdPlaceholder slotName="Manga Catalog Leaderboard" format="leaderboard" />
            </div>
          </div>
        )}

        {/* Dedicated Shop View */}
        {currentRoute.type === 'shop' && (
          <div className="py-10">
            <DigitalShop
              onNavigate={navigateTo}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
            />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
              <AdPlaceholder slotName="Shop Footer Leaderboard" format="leaderboard" />
            </div>
          </div>
        )}

        {/* Dedicated Creators View */}
        {currentRoute.type === 'creators' && (
          <CreatorPage onNavigate={navigateTo} />
        )}

        {/* Dedicated About View */}
        {currentRoute.type === 'about' && (
          <AboutPage onNavigate={navigateTo} />
        )}

        {/* Dedicated Contact View */}
        {currentRoute.type === 'contact' && (
          <ContactPage onNavigate={navigateTo} />
        )}

        {/* Dedicated Article Detail View */}
        {currentRoute.type === 'article' && (
          <ArticlePage articleSlug={currentRoute.articleSlug} onNavigate={navigateTo} />
        )}

        {/* Dedicated Manga Detail View */}
        {currentRoute.type === 'manga-detail' && (
          <MangaDetailPage
            mangaSlug={currentRoute.mangaSlug}
            onNavigate={navigateTo}
            onOpenMangaReader={(id) => setActiveMangaReaderId(id)}
            onAddToCart={handleAddToCart}
          />
        )}

        {/* Dedicated Story Detail View */}
        {currentRoute.type === 'story-detail' && (
          <StoryDetailPage storySlug={currentRoute.storySlug} onNavigate={navigateTo} />
        )}

        {/* Dedicated Product Detail View */}
        {currentRoute.type === 'product-detail' && (
          <ProductDetailPage
            productSlug={currentRoute.productSlug}
            onNavigate={navigateTo}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
          />
        )}

        {/* Legal Pages */}
        {currentRoute.type === 'privacy' && <PrivacyPolicyPage onNavigate={navigateTo} />}
        {currentRoute.type === 'terms' && <TermsPage onNavigate={navigateTo} />}
        {currentRoute.type === 'disclaimer' && <DisclaimerPage onNavigate={navigateTo} />}
        {currentRoute.type === 'copyright' && <CopyrightDmcaPage onNavigate={navigateTo} />}
        {currentRoute.type === 'cookies' && <CookiePolicyPage onNavigate={navigateTo} />}
        {currentRoute.type === 'refund' && <RefundPolicyPage onNavigate={navigateTo} />}
      </main>

      {/* Universal Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Global Interactive Overlays */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={navigateTo}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onNavigate={navigateTo}
      />

      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        onNavigate={navigateTo}
      />

      <MangaReaderModal
        mangaId={activeMangaReaderId}
        onClose={() => setActiveMangaReaderId(null)}
      />

      {/* Cookie Consent Banner */}
      <CookieBanner onNavigate={navigateTo} />

      </div>
    </ContentProvider>
  );
}
