import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NewArrivals() {
  // Yeni sezon ürünleri (isNew: true özelliğine sahip ürünler)
  const newArrivalsProducts = [
    {
      id: 1,
      name: 'Peluş Ayıcık Anahtarlık',
      price: 336.00,
      originalPrice: 356.00,
      discount: 6,
      image: '/images/products/pelus_ayicik_anahtarlik.jpeg',
      href: '/product/pelus-ayicik-anahtarlik',
      isNew: true,
    },
    {
      id: 12,
      name: 'İnci Bileklik',
      price: 280.00,
      originalPrice: 320.00,
      discount: 12,
      image: '/images/products/inci%20bileklik.jpeg',
      href: '/product/inci-bileklik',
      isNew: true,
    },
    {
      id: 14,
      name: 'Altın Kaplama Küpe',
      price: 220.00,
      originalPrice: 250.00,
      discount: 12,
      image: '/images/products/altin%20kaplama%20kupe.jpeg',
      href: '/product/altin-kaplama-kupe',
      isNew: true,
    },
    {
      id: 24,
      name: 'Dekoratif Yastık Kılıfı',
      price: 120.00,
      originalPrice: 150.00,
      discount: 20,
      image: '/images/products/dekoratif%20yastık%20kılıfı.jpeg',
      href: '/product/dekoratif-yastik-kilifi',
      isNew: true,
    },
    {
      id: 26,
      name: 'Pamuklu Battaniye',
      price: 280.00,
      originalPrice: 320.00,
      discount: 12.5,
      image: '/images/products/pamuklu%20battaniye.jpeg',
      href: '/product/pamuklu-battaniye',
      isNew: true,
    },
    {
      id: 21,
      name: 'Parti Konfeti',
      price: 45.00,
      originalPrice: 55.00,
      discount: 18,
      image: '/images/products/parti%20konfeti.jpg',
      href: '/product/parti-konfeti',
      isNew: true,
    },
    {
      id: 22,
      name: 'Doğum Günü Parti Seti',
      price: 320.00,
      originalPrice: 350.00,
      discount: 9,
      image: '/images/products/dogum%20gunu%20parti%20seti.jpeg',
      href: '/product/dogum-gunu-parti-seti',
      isNew: true,
    },
    {
      id: 3,
      name: 'Büyük Boy Tavşan Peluş',
      price: 384.00,
      originalPrice: 420.00,
      discount: 9,
      image: '/images/products/buyuk_boy_pelus_tavsan.jpg',
      href: '/product/buyuk-boy-tavsan-pelus',
      isNew: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Yeni Sezon Ürünleri | MaviTicaret</title>
        <meta name="description" content="Bu sezonda yeni gelen özel tasarım ürünlerimizi keşfedin. En son trendlere uygun parçalar sizleri bekliyor." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        {/* Banner */}
        <div className="py-12 bg-indigo-600 text-white">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl font-bold mb-4">Yeni Sezon Ürünleri</h1>
              <p className="text-lg max-w-3xl">Bu sezonda yeni gelen özel tasarım ürünlerimizi keşfedin. En son trendlere uygun parçalar sizleri bekliyor. Her zevke ve tarza uygun seçeneklerimizi inceleyin.</p>
            </div>
          </div>
        </div>
        
        {/* Breadcrumb */}
        <div className="container py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600">
              Anasayfa
            </Link>
            <FiChevronRight className="mx-2" size={16} />
            <span className="font-medium text-gray-900">Yeni Sezon</span>
          </div>
        </div>
        
        {/* Products */}
        <section className="py-8">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {newArrivalsProducts.map((product) => (
                <div key={product.id} className="card group">
                  <div className="relative overflow-hidden">
                    <Link href={product.href}>
                      <div className="aspect-w-3 aspect-h-4 relative">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                      </div>
                    </Link>
                    
                    {/* Badges */}
                    <div className="absolute top-2 left-2 flex flex-col gap-2 z-10">
                      {product.isNew && (
                        <span className="bg-secondary-600 text-white text-xs font-bold px-2 py-1 rounded">
                          Yeni
                        </span>
                      )}
                      {product.discount > 0 && (
                        <span className="bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">
                          %{product.discount} İndirim
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <Link href={product.href} className="block">
                      <h3 className="text-gray-800 font-medium mb-2 group-hover:text-primary-600 transition-colors duration-300">
                        {product.name}
                      </h3>
                    </Link>
                    
                    <div className="flex items-center">
                      {product.discount > 0 ? (
                        <>
                          <span className="text-primary-600 font-bold text-lg">{product.price.toFixed(2)} TL</span>
                          <span className="text-gray-400 text-sm line-through ml-2">{product.originalPrice.toFixed(2)} TL</span>
                        </>
                      ) : (
                        <span className="text-primary-600 font-bold text-lg">{product.price.toFixed(2)} TL</span>
                      )}
                    </div>
                    
                    <button className="mt-3 w-full btn btn-primary">
                      Sepete Ekle
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-gray-100">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Yeni Sezon Özellikleri</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-indigo-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Yenilikçi Tasarımlar</h3>
                <p className="text-gray-600">Bu sezon tamamen yenilikçi tasarımlarla karşınızdayız. Modern çizgiler ve özgün detaylar ile fark yaratın.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-indigo-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Premium Kalite</h3>
                <p className="text-gray-600">Tüm ürünlerimiz yüksek kalite standartlarında üretilmiştir. Dayanıklılık ve estetiği bir arada sunuyoruz.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-indigo-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Uygun Fiyatlar</h3>
                <p className="text-gray-600">Yeni sezon ürünlerimiz uygun fiyatlarla sizlerle buluşuyor. Kaliteyi uygun fiyata alın.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 bg-indigo-50">
          <div className="container">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Yeni Ürünlerden İlk Siz Haberdar Olun</h2>
              <p className="text-gray-600 mb-6">E-bültenimize kaydolun, yeni gelen ürünleri ve özel teklifleri kaçırmayın.</p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="input flex-grow text-gray-800"
                />
                <button className="btn bg-indigo-600 text-white hover:bg-indigo-700 font-semibold whitespace-nowrap">
                  Abone Ol
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 