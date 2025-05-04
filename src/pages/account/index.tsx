import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiChevronRight, FiUser, FiPackage, FiHeart, FiMapPin, FiCreditCard, FiLogOut } from 'react-icons/fi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';

// Order type definition
type Order = {
  id: string;
  date: string;
  status: string;
  total: string;
};

export default function Account() {
  const { t } = useLanguage();
  const router = useRouter();
  const { user, isAuthenticated, isLoading, logout } = useAuth();

  // Kullanıcı giriş yapmamışsa login sayfasına yönlendir
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  const handleLogout = () => {
    logout();
  };

  // Hesap menü öğeleri
  const accountMenuItems = [
    { 
      icon: <FiUser size={20} />, 
      title: t('account.personalInfo.title'), 
      description: t('account.personalInfo.desc'),
      href: '/account/profile'
    },
    { 
      icon: <FiPackage size={20} />, 
      title: t('account.orders.title'), 
      description: t('account.orders.desc'),
      href: '/account/orders'
    },
    { 
      icon: <FiHeart size={20} />, 
      title: t('account.favorites.title'), 
      description: t('account.favorites.desc'),
      href: '/account/favorites'
    },
    { 
      icon: <FiMapPin size={20} />, 
      title: t('account.addresses.title'), 
      description: t('account.addresses.desc'),
      href: '/account/addresses'
    },
    { 
      icon: <FiCreditCard size={20} />, 
      title: t('account.paymentMethods.title'), 
      description: t('account.paymentMethods.desc'),
      href: '/account/payment-methods'
    }
  ];

  // Örnek son sipariş bilgileri (gerçek uygulamada API'den gelir)
  const recentOrders: Order[] = [];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // useEffect içinde login sayfasına yönlendiriyoruz, boş render
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{t('account.title')} | MaviTicaret</title>
        <meta name="description" content={t('account.welcomeDesc')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className="py-8">
        <div className="container">
          {/* Breadcrumb */}
          <div className="py-4 mb-6">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-primary-600">
                {t('general.home')}
              </Link>
              <FiChevronRight className="mx-2" size={16} />
              <span className="font-medium text-gray-900">{t('account.title')}</span>
            </div>
          </div>
          
          {/* Welcome Section */}
          <div className="bg-primary-600 text-white rounded-lg p-6 md:p-8 mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{t('account.welcome')}, {user?.name}</h1>
            <p className="text-primary-100">
              {t('account.welcomeDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Account Menu */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                  <h2 className="text-xl font-bold">{t('account.accountMenu')}</h2>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {accountMenuItems.map((item, index) => (
                    <Link 
                      key={index} 
                      href={item.href} 
                      className="flex items-start p-4 sm:p-6 hover:bg-gray-50 transition-colors"
                    >
                      <div className="text-primary-600 mr-4 mt-1">{item.icon}</div>
                      <div>
                        <h3 className="font-medium text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      </div>
                      <div className="ml-auto">
                        <FiChevronRight className="text-gray-400" size={18} />
                      </div>
                    </Link>
                  ))}
                  
                  {/* Logout */}
                  <div className="p-4 sm:p-6">
                    <button 
                      onClick={handleLogout}
                      className="flex items-center text-red-600 hover:text-red-800"
                    >
                      <FiLogOut size={20} className="mr-2" />
                      <span>{t('account.logout')}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Recent Orders & Account Info */}
            <div>
              {/* Recent Orders */}
              <div className="bg-white rounded-lg shadow-sm mb-6">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="text-lg font-bold">{t('account.recentOrders')}</h2>
                  <Link href="/account/orders" className="text-sm text-primary-600 hover:text-primary-700">
                    {t('account.viewAll')}
                  </Link>
                </div>
                
                {recentOrders.length > 0 ? (
                  <div className="divide-y divide-gray-200">
                    {recentOrders.map((order, index) => (
                      <div key={index} className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">{t('orders.title')} #{order.id}</h3>
                          <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            {order.status}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>{order.date}</span>
                          <span className="font-medium">{order.total}</span>
                        </div>
                        <div className="mt-3">
                          <Link 
                            href={`/account/orders/${order.id}`} 
                            className="text-sm text-primary-600 hover:text-primary-700"
                          >
                            {t('account.orderDetails')}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-gray-500">
                    <p>{t('account.noOrders')}</p>
                    <Link 
                      href="/" 
                      className="text-primary-600 hover:text-primary-700 mt-2 inline-block"
                    >
                      {t('account.orders.startShopping')}
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Account Info */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-4 border-b border-gray-200">
                  <h2 className="text-lg font-bold">{t('account.accountInfo')}</h2>
                </div>
                
                <div className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500">{t('account.name')}</h3>
                      <p className="mt-1">{user?.name || '-'}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500">{t('account.email')}</h3>
                      <p className="mt-1">{user?.email || '-'}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500">{t('account.phone')}</h3>
                      <p className="mt-1">{user?.phone || '-'}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500">{t('account.memberSince')}</h3>
                      <p className="mt-1">{user?.memberSince || '-'}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Link 
                      href="/account/profile" 
                      className="text-sm font-medium text-primary-600 hover:text-primary-700"
                    >
                      {t('account.edit')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 