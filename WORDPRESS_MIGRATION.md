# AnimeFreak WordPress Migration

## Scope

This project remains a working React/Vite frontend. The current visual system is intentionally unchanged: Tailwind classes, CSS variables, component markup, interaction patterns, local assets, animations, and responsive layouts are still owned by the existing frontend.

The migration preparation adds a data boundary under `src/api/` and `src/data/contentRepository.ts`. The existing local records remain the fallback, so the site continues to work when WordPress is not configured.

## Current architecture

- `src/main.tsx` mounts the React application.
- `src/App.tsx` owns the hand-written route state, cart state, and modal state.
- `src/components/` contains shared sections and overlays for the homepage, blog, manga, shop, account, search, and forms.
- `src/pages/` contains archive, detail, informational, and legal views.
- `src/data/mockData.ts` currently contains the local content records and asset URLs.
- `src/types/index.ts` contains the UI-facing data contracts.
- `src/index.css` and Tailwind utility classes define the current visual language.
- `src/assets/images/` contains five local JPG assets used by the current preview content.

## Data flow after this change

Existing UI consumers now import content from `src/data/contentRepository.ts`, not directly from `mockData.ts`. That repository is the compatibility boundary for the current synchronous fallback data.

WordPress-ready request modules are separated by concern:

- `src/api/wordpress.ts`: base URL, request handling, and response errors.
- `src/api/posts.ts`: posts, single posts, categories, tags, and search.
- `src/api/manga.ts`: manga collection and single manga requests.
- `src/api/chapters.ts`: chapters and chapter details.
- `src/api/pages.ts`: WordPress pages and single-page requests.
- `src/api/products.ts`: WooCommerce Store API products.

Configure the API root with `VITE_WORDPRESS_API_URL`. Do not put a production domain in source code. The expected value is the WordPress REST root, such as `https://cms.example.com/wp-json`.

When that variable is present, `ContentProvider` requests posts, manga, and WooCommerce products on startup and updates the existing UI collections when valid responses arrive. If an endpoint is unavailable or returns no records, the original local records remain visible. Configure `VITE_WOOCOMMERCE_CHECKOUT_URL` to hand the cart to the real WooCommerce checkout; the frontend no longer creates simulated order IDs or download claims.

## Current hard-coded content

The following content is still local fallback content and must move to WordPress or WooCommerce during the CMS phase:

- Articles, article body paragraphs, authors, tags, categories, dates, SEO fields, and cover images in `src/data/mockData.ts`.
- Manga metadata, previews, reviews, and synopsis content in `src/data/mockData.ts`.
- Story metadata and chapter prose in `src/data/mockData.ts`.
- Shop products, prices, formats, file sizes, feature lists, and download descriptions in `src/data/mockData.ts`.
- Trending topics and featured-card selection in `src/data/mockData.ts`.
- Hero text, navigation labels, footer copy, creator-program copy, account demo data, and legal copy in component/page files.
- The five bundled JPGs in `src/assets/images/`; these can be retained as fallback assets or uploaded to the WordPress Media Library.
- External Unsplash author avatars referenced by local article records.

The UI and legal/business copy should not automatically become editable CMS fields without deciding who owns those controls. Site branding and policy text need editorial approval before being exposed in WordPress.

## WordPress content model

### Blog posts

Use the built-in `post` type unless editorial requirements require a separate `article` custom post type.

Required fields:

- WordPress post ID, slug, title, excerpt, rendered body, status, publication date, modified date.
- Author relationship and author avatar.
- Featured media URL and alt text.
- Category and tag taxonomy terms.
- Optional reading time, SEO title, and SEO description custom fields.

Frontend endpoint contract:

- `GET /wp-json/wp/v2/posts?_embed=1&per_page=20`
- `GET /wp-json/wp/v2/posts?slug={slug}&_embed=1`
- `GET /wp-json/wp/v2/categories?per_page=100`
- `GET /wp-json/wp/v2/tags?per_page=100`
- `GET /wp-json/wp/v2/posts?search={query}&_embed=1`

### WordPress pages

The frontend adapter supports pages for future CMS-managed informational content:

- `GET /wp-json/wp/v2/pages?per_page=100`
- `GET /wp-json/wp/v2/pages?slug={slug}`

### Manga

Create a `manga` custom post type with `show_in_rest: true`.

Required fields:

- `id`, `title`, `slug`, `description`, `storySynopsis`, `cover`, `author`.
- `status`, `featured`, `genres`, `publishedAt`.
- `rating`, `reviewsCount`, and AI disclosure text if these remain part of the product/editorial model.
- Relationship to chapters.

Recommended endpoints:

- `GET /wp-json/wp/v2/manga?_embed=1`
- `GET /wp-json/wp/v2/manga?slug={slug}&_embed=1`
- `GET /wp-json/wp/v2/manga/{id}`

The current UI type also preserves legacy preview/review fields for the fallback site. Those should eventually be separate media/review data rather than large serialized fields.

### Chapters and reader pages

Create a `chapter` custom post type with `show_in_rest: true`, or use a dedicated relation/table if chapter volume is high.

Required fields:

- `id`, `mangaId`, `chapterNumber`, `title`, and `publishedDate`.
- Ordered `pages`, each containing `pageNumber` and an image URL/media ID.
- Access state for free, preview, or purchased content.

Recommended endpoints:

- `GET /wp-json/wp/v2/chapters?manga={mangaId}`
- `GET /wp-json/wp/v2/chapters/{id}`

Protected chapter images must not be exposed as permanent public URLs if chapters are paid. Use an authenticated or expiring media endpoint.

### WooCommerce products

Use WooCommerce products for all purchasable editions and downloads. The frontend adapter targets the public Store API:

- `GET /wp-json/wc/store/v1/products`
- `GET /wp-json/wc/store/v1/products?slug={slug}`

Required product data:

- WooCommerce product ID, name/title, slug, full description, short description.
- Regular price, sale price, currency, and formatted price.
- Images and image alt text.
- Product categories, SKU, stock status, and purchasable state.
- Downloadable/virtual flags and protected download metadata.

WooCommerce must own cart totals, taxes, checkout, payments, orders, customer identity, and download permissions. Do not trust prices, tax values, or download URLs from local storage or client state.

## Pages and component ownership

The current page structure is intentionally retained:

- Homepage sections: `Hero`, `FeaturedStories`, `TrendingTopics`, `OriginalAiManga`, `LatestArticles`, `PopularStories`, `DigitalShop`, `CreatorSection`, `Newsletter`.
- Shared chrome: `Header`, `Footer`, `SearchModal`, `CartDrawer`, `AccountModal`, `CookieBanner`.
- Detail/archive pages: article, category, story, manga, product, creator, about, and contact pages.
- Legal pages: the six files under `src/pages/legal/`.

During CMS integration, replace data loading at page boundaries rather than rewriting these presentational components. Add loading, error, and not-found states where asynchronous requests are introduced.

## Functionality that is still only a frontend preview

- `App.tsx` stores the cart in `localStorage`.
- `CartDrawer.tsx` performs a simulated checkout and generates a browser-only order ID.
- Account downloads, reviews, newsletter signup, contact submission, and creator submission do not persist to a server.
- The hand-written route state is not yet mapped to browser URLs or WordPress permalinks.
- Unknown detail slugs currently fall back to the first local item; CMS integration must use a real not-found state.

These are intentionally not replaced with fake WordPress calls in this preparation task. They require the WordPress/WooCommerce installation and its authentication, payment, moderation, and security decisions.

## Required WordPress installation work

1. Register `manga` and `chapter` custom post types with REST support.
2. Register manga/chapter fields and relationships through REST-visible custom fields.
3. Decide whether stories are a separate custom post type or a blog taxonomy/content format.
4. Configure categories, tags, genres, media sizes, and SEO fields.
5. Install/configure WooCommerce and the digital-download product workflow.
6. Configure authenticated checkout and customer/download permissions.
7. Add CORS rules for the deployed frontend origin if the frontend remains separately hosted.
8. Add server-side endpoints for newsletter, contact, creator submissions, and reviews.
9. Add rate limiting, spam protection, validation, moderation, and consent records for public forms.
10. Define the permalink scheme and update the frontend route state to support deep links and browser history.
11. Import local articles, manga, chapters, products, and media into the new content models.
12. Configure `VITE_WORDPRESS_API_URL` and `VITE_WOOCOMMERCE_CHECKOUT_URL` in the deployed frontend environment.
13. Replace the account, reviews, forms, and reader access flows with authenticated WordPress/WooCommerce flows.

## What cannot be directly migrated

- Local React state such as cart contents, modal state, review state, and simulated orders.
- Browser `localStorage` values as authoritative customer/order data.
- Hard-coded legal and marketing copy without editorial ownership decisions.
- Preview JPG paths under `/src/assets/images/` as WordPress media IDs; the files need to be uploaded and remapped.
- Client-side payment simulation; real payment and download security must be implemented by WooCommerce.
- The current state-based routes without adding URL/permalink handling.