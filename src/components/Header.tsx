import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiShoppingCart, FiHeart, FiUser, FiMenu, FiSearch, FiX, FiChevronDown, FiGlobe, FiLogOut } from 'react-icons/fi';
import dynamic from 'next/dynamic';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

// Dynamically import LanguageSelector to avoid SSR issues
const LanguageSelector = dynamic(() => import('./LanguageSelector'), { ssr: false });

const Header: React.FC = () => {
  const router = useRouter();
  const { t, language } = useLanguage();
  const { user, isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 1, name: t('categories.newArrivals.title'), href: '/category/yeni-urunler' },
    { id: 2, name: t('categories.discounted.title'), href: '/category/indirimli-urunler' },
    { id: 3, name: t('categories.jewelry.title'), href: '/category/taki-aksesuar' },
    { id: 4, name: t('categories.decoration.title'), href: '/category/susleme-hobi' },
    { id: 5, name: t('categories.packaging.title'), href: '/category/ambalaj-sunum' },
    { id: 6, name: t('categories.party.title'), href: '/category/parti-etkinlik' },
    { id: 7, name: t('categories.homeLife.title'), href: '/category/ev-yasam' },
    { id: 8, name: t('categories.plush.title'), href: '/category/plus-oyuncak' },
  ];

  // Get the correct logo based on the current language
  const logoSrc = language === 'tr' ? '/images/logo/logo_tr.png' : '/images/logo/logo_en.png';

  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
      setIsSearchOpen(false);
    }
  };

  // Handle logout
  const handleLogout = () => {
    logout();
    setIsAccountMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-gray-100 py-2 hidden md:block">
        <div className="container flex justify-end items-center">
          <LanguageSelector className="ml-4" />
        </div>
      </div>

      {/* Main header */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button 
            className="p-2 rounded-md lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img src={logoSrc} alt="MaviTicaret" className="h-14" />
            </Link>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder={t('general.searchPlaceholder')}
                className="input pr-10 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button 
                type="submit" 
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-primary-600"
              >
                <FiSearch size={20} />
              </button>
            </form>
          </div>

          {/* Mobile search button */}
          <button 
            className="p-2 rounded-md md:hidden"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <FiSearch size={24} />
          </button>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Language selector (mobile) */}
            <div className="md:hidden">
              <button 
                className="flex flex-col items-center text-gray-700 hover:text-primary-600"
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              >
                <FiGlobe size={24} />
                <span className="text-xs mt-1">{t('general.language')}</span>
              </button>
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 mr-2 bg-white rounded-md shadow-lg z-50">
                  <LanguageSelector />
                </div>
              )}
            </div>
            
            <Link href="/account/favorites" className="flex flex-col items-center text-gray-700 hover:text-primary-600">
              <FiHeart size={24} />
              <span className="text-xs mt-1">{t('account.favorites.title')}</span>
            </Link>
            
            {/* Account with dropdown */}
            <div className="relative">
              <button 
                className="flex flex-col items-center text-gray-700 hover:text-primary-600"
                onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
              >
                <FiUser size={24} />
                <span className="text-xs mt-1 flex items-center">
                  {isAuthenticated ? (user?.name?.split(' ')[0] || t('general.myAccount')) : t('general.myAccount')}
                  <FiChevronDown size={12} className="ml-1" />
                </span>
              </button>
              
              {/* Account dropdown menu */}
              {isAccountMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  {isAuthenticated ? (
                    <>
                      <Link href="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        {t('general.myAccount')}
                      </Link>
                      <Link href="/account/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        {t('general.myOrders')}
                      </Link>
                      <Link href="/account/favorites" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        {t('account.favorites.title')}
                      </Link>
                      <button 
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        <div className="flex items-center">
                          <FiLogOut size={16} className="mr-2" />
                          {t('account.logout')}
                        </div>
                      </button>
                    </>
                  ) : (
                    <>
                      <Link href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        {t('general.login')}
                      </Link>
                      <Link href="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        {t('general.register')}
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
            
            <Link href="/cart" className="flex flex-col items-center text-gray-700 hover:text-primary-600">
              <div className="relative">
                <FiShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary-600 rounded-full">0</span>
              </div>
              <span className="text-xs mt-1">{t('general.myCart')}</span>
            </Link>
          </div>
        </div>

        {/* Mobile search */}
        {isSearchOpen && (
          <div className="mt-4 md:hidden">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder={t('general.searchPlaceholder')}
                className="input pr-10 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button 
                type="submit"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
              >
                <FiSearch size={20} />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Categories navbar */}
      <div className="border-t border-primary-700 bg-primary-600 text-white hidden lg:block">
        <div className="container py-3">
          <nav className="flex justify-center space-x-8">
            <Link
              href="/products"
              className="text-white hover:text-primary-200 font-medium transition-colors"
            >
              {t('products.title')}
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className="text-white hover:text-primary-200 font-medium transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <Link
              href="/products"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('products.title')}
            </Link>
            {categories.map((category, index) => (
              <Link
                key={category.id}
                href={category.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            
            <div className="border-t border-gray-200 pt-2 mt-2">
              {!isAuthenticated ? (
                <>
                  <Link
                    href="/login"
                    className="block px-3 py-2 rounded-md text-base font-medium text-primary-600 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('general.login')}
                  </Link>
                  <Link
                    href="/register"
                    className="block px-3 py-2 rounded-md text-base font-medium text-primary-600 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('general.register')}
                  </Link>
                </>
              ) : (
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-gray-50"
                >
                  <div className="flex items-center">
                    <FiLogOut size={16} className="mr-2" />
                    {t('account.logout')}
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 