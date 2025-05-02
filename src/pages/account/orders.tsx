import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiChevronRight, FiFilter, FiSearch, FiDownload, FiArrowLeft } from 'react-icons/fi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Orders() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Order status filter
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Empty orders array by default
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    // Check if user is logged in
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loginStatus);
    
    if (!loginStatus) {
      // Redirect to login if not logged in
      router.push('/login');
    }
    
    // In a real application, you would fetch orders from API
    // For now we'll just show an empty list
    
    setIsLoading(false);
  }, [router]);
  
  // Status badge styles
  const statusStyles = {
    delivered: 'bg-green-100 text-green-800',
    processing: 'bg-blue-100 text-blue-800',
    shipped: 'bg-purple-100 text-purple-800',
    cancelled: 'bg-red-100 text-red-800'
  };

  // Filter orders by status and search query
  const filteredOrders = orders.filter(order => {
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    const matchesSearch = searchQuery === '' || 
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.items.some(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesStatus && matchesSearch;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return null; // useEffect içinde yönlendirme yapıyoruz, boş render
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Siparişlerim | MaviTicaret</title>
        <meta name="description" content="MaviTicaret siparişlerim sayfası. Geçmiş siparişlerinizi görüntüleyin ve takip edin." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className="py-8">
        <div className="container">
          {/* Breadcrumb */}
          <div className="py-4 mb-2">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-primary-600">
                Anasayfa
              </Link>
              <FiChevronRight className="mx-2" size={16} />
              <Link href="/account" className="hover:text-primary-600">
                Hesabım
              </Link>
              <FiChevronRight className="mx-2" size={16} />
              <span className="font-medium text-gray-900">Siparişlerim</span>
            </div>
          </div>
          
          {/* Back to Account */}
          <div className="mb-6">
            <Link href="/account" className="inline-flex items-center text-primary-600 hover:text-primary-700">
              <FiArrowLeft size={16} className="mr-1" />
              <span>Hesabıma Dön</span>
            </Link>
          </div>
          
          {/* Page Title */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Siparişlerim</h1>
            <p className="text-gray-600 mt-2">
              Tüm siparişlerinizi bu sayfadan görüntüleyebilir ve takip edebilirsiniz.
            </p>
          </div>
          
          {/* Filters & Search */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Status Filter */}
              <div className="flex items-center">
                <FiFilter className="text-gray-500 mr-2" size={18} />
                <span className="text-gray-700 mr-2">Durum:</span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                >
                  <option value="all">Tümü</option>
                  <option value="processing">Hazırlanıyor</option>
                  <option value="shipped">Kargoya Verildi</option>
                  <option value="delivered">Teslim Edildi</option>
                  <option value="cancelled">İptal Edildi</option>
                </select>
              </div>
              
              {/* Search */}
              <div className="relative flex-grow md:max-w-xs">
                <input
                  type="text"
                  placeholder="Sipariş no veya ürün ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border border-gray-300 rounded-md pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
              </div>
            </div>
          </div>
          
          {/* Orders List */}
          {filteredOrders.length > 0 ? (
            <div className="space-y-4">
              {filteredOrders.map((order) => (
                <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  {/* Order Header */}
                  <div className="p-4 sm:p-6 border-b border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h2 className="text-lg font-bold">Sipariş #{order.id}</h2>
                        <p className="text-gray-600 text-sm mt-1">
                          Sipariş Tarihi: {order.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[order.status]}`}>
                          {order.statusText}
                        </span>
                        <Link 
                          href={`/account/orders/${order.id}`}
                          className="btn bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                        >
                          Detaylar
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Order Items */}
                  <div className="p-4 sm:p-6">
                    <div className="space-y-4">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="h-16 w-16 bg-gray-100 rounded-md flex-shrink-0 mr-4"></div>
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-gray-600 text-sm">Adet: {item.quantity}</p>
                            </div>
                          </div>
                          <div className="font-medium">
                            {item.price.toFixed(2)} ₺
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Order Footer */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 pt-4 border-t border-gray-200">
                      <div className="mb-4 sm:mb-0">
                        <Link 
                          href={`/account/orders/${order.id}`}
                          className="text-primary-600 hover:text-primary-700 font-medium"
                        >
                          Sipariş Detayları
                        </Link>
                      </div>
                      <div className="flex items-center gap-3">
                        <button className="flex items-center text-gray-700 hover:text-gray-900">
                          <FiDownload size={16} className="mr-1" />
                          <span>Fatura</span>
                        </button>
                        <div className="text-xl font-bold text-gray-900">
                          {order.total.toFixed(2)} ₺
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Empty Orders
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="max-w-md mx-auto">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-16 w-16 mx-auto text-gray-400 mb-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M20 7l-8-4-8 4m16 0v10a2 2 0 01-2 2H8a2 2 0 01-2-2V7m10 10v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2" 
                  />
                </svg>
                <h2 className="text-2xl font-bold mb-2">Sipariş Bulunamadı</h2>
                <p className="text-gray-600 mb-6">
                  {searchQuery || statusFilter !== 'all' ? 
                    'Arama kriterlerinize uygun sipariş bulunamadı. Lütfen farklı bir arama kriteri deneyin.' : 
                    'Henüz bir sipariş vermediniz. Alışverişe başlayarak ilk siparişinizi oluşturabilirsiniz.'}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  {(searchQuery || statusFilter !== 'all') && (
                    <button 
                      onClick={() => {
                        setSearchQuery('');
                        setStatusFilter('all');
                      }}
                      className="btn bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-md font-medium"
                    >
                      Filtreleri Temizle
                    </button>
                  )}
                  <Link 
                    href="/" 
                    className="btn bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-md font-medium"
                  >
                    Alışverişe Başla
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
} 