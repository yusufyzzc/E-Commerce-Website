import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FiChevronRight, FiHeart, FiShoppingCart } from 'react-icons/fi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useLanguage } from '../../context/LanguageContext';

// Product type
type Product = {
  id: number;
  nameKey: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  href: string;
  inStock: boolean;
  isNew: boolean;
};

// Demo products data
const demoProducts: Product[] = [
  {
    id: 1,
    nameKey: 'products.gumusKaplamaKolye',
    price: 149.99,
    originalPrice: 179.99,
    discount: 16,
    image: '/images/products/gumus kaplama kolye.jpg',
    href: '/product/gumus-kaplama-kolye',
    inStock: true,
    isNew: false
  },
  {
    id: 2,
    nameKey: 'products.inciBileklik',
    price: 129.99,
    originalPrice: 159.99,
    discount: 18,
    image: '/images/products/inci bileklik.jpeg',
    href: '/product/inci-bileklik',
    inStock: true,
    isNew: true
  },
  {
    id: 3,
    nameKey: 'products.dekoratifMumSeti',
    price: 89.99,
    originalPrice: 89.99,
    discount: 0,
    image: '/images/products/dekoratif_mum_seti.png',
    href: '/product/dekoratif-mum-seti',
    inStock: true,
    isNew: false
  },
  {
    id: 4,
    nameKey: 'products.desenliPelusAyicikMavi',
    price: 69.99,
    originalPrice: 99.99,
    discount: 30,
    image: '/images/products/mavi_pelus_ayicik.jpeg',
    href: '/product/mavi-pelus-ayicik',
    inStock: false,
    isNew: false
  },
  {
    id: 5,
    nameKey: 'products.altinRengiYildizSus',
    price: 39.99,
    originalPrice: 49.99,
    discount: 20,
    image: '/images/products/altin_rengi_yildiz_sus.jpg',
    href: '/product/altin-rengi-yildiz-sus',
    inStock: true,
    isNew: true
  },
  {
    id: 6,
    nameKey: 'products.renkliIpYumagi',
    price: 79.99,
    originalPrice: 79.99,
    discount: 0,
    image: '/images/products/renkli_ip_yumagi.jpg',
    href: '/product/renkli-ip-yumagi',
    inStock: true,
    isNew: false
  },
  {
    id: 7,
    nameKey: 'products.iLovePelusAyi',
    price: 129.99,
    originalPrice: 149.99,
    discount: 13,
    image: '/images/products/i_love_pelus_ayi.jpg',
    href: '/product/i-love-pelus-ayi',
    inStock: true,
    isNew: true
  },
  {
    id: 8,
    nameKey: 'products.fiyonkPelusAyicik',
    price: 99.99,
    originalPrice: 129.99,
    discount: 23,
    image: '/images/products/fiyonk_pelus_ayicik.jpg',
    href: '/product/fiyonk-pelus-ayicik',
    inStock: true,
    isNew: false
  }
];

export default function Products() {
  const { t } = useLanguage();
  const [products] = useState<Product[]>(demoProducts);
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [notification, setNotification] = useState<{
    message: string;
    type: 'success' | 'error' | null;
  }>({ message: '', type: null });

  // Load favorites from localStorage on component mount
  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem('favorites');
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    } catch (error) {
      console.error('Error loading favorites from localStorage:', error);
    }
  }, []);

  // Check if a product is in favorites
  const isInFavorites = (productId: number): boolean => {
    return favorites.some(item => item.id === productId);
  };

  // Add to favorites
  const handleAddToFavorites = (product: Product) => {
    if (isInFavorites(product.id)) {
      // Remove from favorites if already added
      const updatedFavorites = favorites.filter(item => item.id !== product.id);
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      
      setNotification({
        message: t('products.removedFromFavorites'),
        type: 'success'
      });
    } else {
      // Add to favorites
      const updatedFavorites = [...favorites, product];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      
      setNotification({
        message: t('products.addedToFavorites'),
        type: 'success'
      });
    }
    
    // Clear notification after 3 seconds
    setTimeout(() => {
      setNotification({ message: '', type: null });
    }, 3000);
  };

  // Add to cart
  const handleAddToCart = (product: Product) => {
    // Here you would actually add the product to the cart
    // For demo purposes, just show notification
    setNotification({
      message: t('products.addedToCart'),
      type: 'success'
    });
    
    // Clear notification after 3 seconds
    setTimeout(() => {
      setNotification({ message: '', type: null });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{t('products.title')} | MaviTicaret</title>
        <meta name="description" content={t('products.description')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      {/* Notification */}
      {notification.type && (
        <div className={`fixed top-20 right-4 z-50 p-4 rounded-md shadow-md ${
          notification.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          <div className="flex items-center">
            <span>{notification.message}</span>
            <button 
              className="ml-3"
              onClick={() => setNotification({ message: '', type: null })}
            >
              <FiChevronRight className="transform rotate-45" size={18} />
            </button>
          </div>
        </div>
      )}
      
      <main className="container py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-primary-600">
            {t('general.home')}
          </Link>
          <FiChevronRight className="mx-2" size={16} />
          <span className="font-medium text-gray-900">{t('products.title')}</span>
        </div>

        {/* Page title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{t('products.title')}</h1>
          <p className="text-gray-600">{t('products.description')}</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden group">
              {/* Product Image and Badges */}
              <div className="relative">
                <Link href={product.href} className="block aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={t(product.nameKey)}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </Link>
                
                {/* Badges (New, Discount) */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {product.isNew && (
                    <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {t('products.new')}
                    </span>
                  )}
                  {product.discount > 0 && (
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                      -{product.discount}%
                    </span>
                  )}
                </div>
                
                {/* Stock Badge */}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <span className="bg-white text-red-600 text-sm font-medium px-3 py-1 rounded-full">
                      {t('products.outOfStock')}
                    </span>
                  </div>
                )}
                
                {/* Actions */}
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  <button 
                    className={`p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors ${
                      isInFavorites(product.id) ? 'text-red-600' : 'text-gray-600 hover:text-red-600'
                    }`}
                    onClick={() => handleAddToFavorites(product)}
                    aria-label={isInFavorites(product.id) ? t('products.removeFromFavorites') : t('products.addToFavorites')}
                  >
                    <FiHeart size={20} className={isInFavorites(product.id) ? "fill-current" : ""} />
                  </button>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <Link href={product.href} className="block">
                  <h3 className="text-lg font-medium text-gray-800 hover:text-primary-600 transition-colors mb-1">
                    {t(product.nameKey)}
                  </h3>
                </Link>
                
                <div className="flex items-center mb-4">
                  <span className="font-bold text-gray-800">
                    {product.price.toFixed(2)} TL
                  </span>
                  
                  {product.discount > 0 && (
                    <span className="ml-2 line-through text-gray-500 text-sm">
                      {product.originalPrice.toFixed(2)} TL
                    </span>
                  )}
                </div>
                
                <button
                  className={`w-full btn ${product.inStock ? 'btn-primary' : 'btn-disabled'}`}
                  disabled={!product.inStock}
                  onClick={() => handleAddToCart(product)}
                >
                  <FiShoppingCart className="mr-2" />
                  {t('products.addToCart')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
} 