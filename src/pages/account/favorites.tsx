console.log("build kontrol");

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  FiChevronRight, FiSearch, FiHeart, FiShoppingCart,
  FiX, FiFilter, FiChevronDown
} from 'react-icons/fi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useLanguage } from '../../context/LanguageContext';

// Tip tanımı eklendi
type FavoriteItem = {
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


// Tipli demoFavorites dizisi
let demoFavorites: FavoriteItem[] = [
  {
    id: 1,
    nameKey: 'products.silverNecklace',
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
    nameKey: 'products.pearlBracelet',
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
    nameKey: 'products.decorativeCandleSet',
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
    nameKey: 'products.blueStuffedBear',
    price: 69.99,
    originalPrice: 99.99,
    discount: 30,
    image: '/images/products/mavi_pelus_ayicik.jpeg',
    href: '/product/mavi-pelus-ayicik',
    inStock: false,
    isNew: false
  }
];


export default function Favorites() {
  const { t } = useLanguage();
  const [favorites, setFavorites] = useState(demoFavorites);
  const [filteredFavorites, setFilteredFavorites] = useState(demoFavorites);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [notification, setNotification] = useState<{ message: string, type: 'success' | 'error' | null }>({ message: '', type: null });

  // Apply filters and search
  useEffect(() => {
    let result = [...favorites];
    
    // Apply search
    if (searchTerm) {
      result = result.filter(item => 
        t(item.nameKey).toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply filters
    switch (selectedFilter) {
      case 'inStock':
        result = result.filter(item => item.inStock);
        break;
      case 'onSale':
        result = result.filter(item => item.discount > 0);
        break;
      case 'newest':
        result = result.filter(item => item.isNew);
        break;
      case 'priceHighToLow':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'priceLowToHigh':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      // All items (default)
      default:
        break;
    }
    
    setFilteredFavorites(result);
  }, [searchTerm, selectedFilter, favorites, t]);

  // Add to cart handler
  const handleAddToCart = (product: any) => {
    // Here you would add the product to the cart
    // For now, just show a notification
    setNotification({
      message: t('favorites.addedToCart'),
      type: 'success'
    });
    
    // Clear notification after 3 seconds
    setTimeout(() => {
      setNotification({ message: '', type: null });
    }, 3000);
  };

  // Remove from favorites handler
  const handleRemoveFromFavorites = (productId: number) => {
    // Here you would remove the product from favorites
    setFavorites(prev => prev.filter(item => item.id !== productId));
    
    // Show notification
    setNotification({
      message: t('favorites.removedFromFavorites'),
      type: 'success'
    });
    
    // Clear notification after 3 seconds
    setTimeout(() => {
      setNotification({ message: '', type: null });
    }, 3000);
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedFilter('all');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{t('favorites.title')} | MaviTicaret</title>
        <meta name="description" content={t('favorites.subtitle')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className="container py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-primary-600">
            {t('general.home')}
          </Link>
          <FiChevronRight className="mx-2" size={16} />
          <Link href="/account" className="hover:text-primary-600">
            {t('account.title')}
          </Link>
          <FiChevronRight className="mx-2" size={16} />
          <span className="font-medium text-gray-900">{t('favorites.title')}</span>
        </div>

        {/* Page title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{t('favorites.title')}</h1>
          <p className="text-gray-600">{t('favorites.subtitle')}</p>
        </div>

        {/* Back to account on mobile */}
        <div className="lg:hidden mb-6">
          <Link href="/account" className="btn btn-outline flex items-center justify-center w-full">
            <FiChevronRight className="rotate-180 mr-2" size={16} />
            {t('favorites.backToAccount')}
          </Link>
        </div>

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
                <FiX />
              </button>
            </div>
          </div>
        )}

        {/* Search and filter section - only show when we have favorites */}
        {filteredFavorites.length > 0 && (
          <div className="mb-6 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                className="input pr-10 w-full"
                placeholder={t('favorites.search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
            </div>
            
            <div className="relative">
              <button 
                className="btn btn-outline flex items-center gap-2"
                onClick={() => setFilterOpen(!filterOpen)}
              >
                <FiFilter size={16} />
                {t('favorites.filter.title')}
                <FiChevronDown className={`transition-transform ${filterOpen ? 'rotate-180' : ''}`} size={16} />
              </button>
              
              {filterOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-10 py-2">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <div className="font-medium text-gray-800">{t('favorites.filter.title')}</div>
                  </div>
                  
                  <div className="py-1">
                    {[
                      { id: 'all', label: t('favorites.filter.all') },
                      { id: 'inStock', label: t('favorites.filter.inStock') },
                      { id: 'onSale', label: t('favorites.filter.onSale') },
                      { id: 'newest', label: t('favorites.filter.newest') },
                      { id: 'priceHighToLow', label: t('favorites.filter.priceHighToLow') },
                      { id: 'priceLowToHigh', label: t('favorites.filter.priceLowToHigh') },
                    ].map((filter) => (
                      <button
                        key={filter.id}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                          selectedFilter === filter.id ? 'text-primary-600 font-medium' : 'text-gray-700'
                        }`}
                        onClick={() => {
                          setSelectedFilter(filter.id);
                          setFilterOpen(false);
                        }}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                  
                  <div className="px-4 py-2 border-t border-gray-100">
                    <button 
                      className="text-sm text-primary-600 hover:text-primary-800"
                      onClick={() => {
                        clearAllFilters();
                        setFilterOpen(false);
                      }}
                    >
                      {t('favorites.filter.clearAll')}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Favorites list */}
        {filteredFavorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredFavorites.map((product) => (
              <div key={product.id} className="card group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="relative overflow-hidden">
                  <Link href={product.href}>
                    <div className="aspect-w-3 aspect-h-4 relative">
                      <img 
                        src={product.image} 
                        alt={t(product.nameKey)} 
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                    </div>
                  </Link>
                  
                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-col gap-2 z-10">
                    {product.isNew && (
                      <span className="bg-secondary-600 text-white text-xs font-bold px-2 py-1 rounded">
                        {t('products.new')}
                      </span>
                    )}
                    {product.discount > 0 && (
                      <span className="bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">
                        %{product.discount} {t('products.discount')}
                      </span>
                    )}
                    {!product.inStock && (
                      <span className="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded">
                        {t('cart.outOfStock')}
                      </span>
                    )}
                  </div>
                  
                  {/* Remove button */}
                  <button 
                    className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition-colors duration-300"
                    onClick={() => handleRemoveFromFavorites(product.id)}
                    title={t('favorites.removeFromFavorites')}
                  >
                    <FiHeart className="text-red-500" size={18} />
                  </button>
                </div>
                
                <div className="p-4">
                  <Link href={product.href} className="block">
                    <h3 className="text-gray-800 font-medium mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {t(product.nameKey)}
                    </h3>
                  </Link>
                  
                  <div className="flex items-center mb-3">
                    {product.discount > 0 ? (
                      <>
                        <span className="text-primary-600 font-bold text-lg">{product.price.toFixed(2)} TL</span>
                        <span className="text-gray-400 text-sm line-through ml-2">{product.originalPrice.toFixed(2)} TL</span>
                      </>
                    ) : (
                      <span className="text-primary-600 font-bold text-lg">{product.price.toFixed(2)} TL</span>
                    )}
                  </div>
                  
                  <button 
                    className={`w-full btn ${product.inStock ? 'btn-primary' : 'btn-gray cursor-not-allowed'}`}
                    onClick={() => product.inStock && handleAddToCart(product)}
                    disabled={!product.inStock}
                  >
                    <FiShoppingCart className="mr-2" size={16} />
                    {t('favorites.addToCart')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-gray-100 rounded-full">
              <FiHeart className="text-gray-400" size={32} />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">{t('favorites.emptyFavorites')}</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">{t('favorites.emptyFavoritesDesc')}</p>
            <Link href="/" className="btn btn-primary">
              {t('favorites.startShopping')}
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}