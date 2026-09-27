import { Product } from '../types';
import { wordpressRequest } from './wordpress';

interface WooCommerceProduct {
  id: number;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  sku: string;
  prices?: {
    price: string;
    regular_price: string;
    sale_price: string;
    currency_minor_unit: number;
  };
  images?: Array<{ src: string; alt?: string }>;
  categories?: Array<{ id: number; name: string; slug: string }>;
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  is_downloadable?: boolean;
}

function normalizeProduct(product: WooCommerceProduct): Product {
  const minorUnit = product.prices?.currency_minor_unit ?? 2;
  const divisor = 10 ** minorUnit;
  const price = Number(product.prices?.price || 0) / divisor;
  const salePrice = Number(product.prices?.sale_price || 0) / divisor;
  const category = product.categories?.[0]?.slug;

  return {
    id: String(product.id),
    sourceProductId: product.id,
    title: product.name,
    slug: product.slug,
    description: product.description,
    shortDescription: product.short_description,
    price: salePrice > 0 ? salePrice : price,
    salePrice: salePrice > 0 ? salePrice : undefined,
    cover: product.images?.[0]?.src || '',
    images: product.images?.map((image) => image.src) || [],
    format: 'Digital download',
    fileSize: '',
    features: [],
    digitalDownloadInfo: 'Digital delivery is managed by WooCommerce.',
    category: category === 'art-pack' || category === 'wallpapers' ? category : 'manga-volume',
    sku: product.sku,
    stockStatus: product.stock_status,
    downloadable: product.is_downloadable,
  };
}

export async function getProducts(params: Record<string, string> = {}): Promise<Product[]> {
  const query = new URLSearchParams(params);
  const products = await wordpressRequest<WooCommerceProduct[]>(
    `wc/store/v1/products${query.toString() ? `?${query}` : ''}`
  );
  return products.map(normalizeProduct);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await getProducts({ slug });
  return products[0] || null;
}
