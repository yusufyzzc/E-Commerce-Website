import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function SummerCollection() {
  // Yaz koleksiyonu ürünleri
  const summerProducts = [
    {
      id: 11,
      name: 'Gümüş Kaplama Kolye',
      price: 450.00,
      originalPrice: 500.00,
      discount: 10,
      image: '/images/products/gumus%20kaplama%20kolye.jpg',
      href: '/product/gumus-kaplama-kolye',
      isNew: false,
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
      id: 22,
      name: 'Doğum Günü Parti Seti',
      price: 320.00,
      originalPrice: 350.00,
      discount: 9,
      image: '/images/products/dogum%20gunu%20parti%20seti.jpeg',
      href: '/product/dogum-gunu-parti-seti',
      isNew: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Yaz Koleksiyonu | MaviTicaret</title>
        <meta name="description" content="Yaz mevsiminin enerjisini yansıtan en yeni ürünlerimizi keşfedin." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        {/* Banner */}
        <div className="py-12 bg-sky-600 text-white">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl font-bold mb-4">Yaz Koleksiyonu</h1>
              <p className="text-lg max-w-3xl">Yaz mevsiminin enerjisini yansıtan en yeni ürünlerimizi keşfedin. Sıcak havalarda tarzınızı tamamlayacak özel parçalar sizleri bekliyor.</p>
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
            <span className="font-medium text-gray-900">Yaz Koleksiyonu</span>
          </div>
        </div>
        
        {/* Products */}
        <section className="py-8">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {summerProducts.map((product) => (
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

        {/* Summer Collection Highlights */}
        <section className="py-12 bg-gray-100">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-8">Yaz Koleksiyonu Öne Çıkanlar</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Yaz Renkleri</h3>
                <p className="text-gray-600 mb-4">Bu sezon canlı renkler ve pastel tonlar ön planda. Yaz enerjisini yansıtan renkli parçalarla tarzınızı yansıtın.</p>
                <Link href="/category/taki-aksesuar" className="text-primary-600 font-medium hover:underline">Daha Fazla Keşfet</Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Doğal Malzemeler</h3>
                <p className="text-gray-600 mb-4">Doğadan ilham alan ürünlerimiz, sıcak yaz günlerinde ferahlık ve konfor sağlar. Dayanıklı ve şık tasarımlar keşfedin.</p>
                <Link href="/category/ev-yasam" className="text-primary-600 font-medium hover:underline">Daha Fazla Keşfet</Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Parti Zamanı</h3>
                <p className="text-gray-600 mb-4">Yaz partileri için ihtiyacınız olan tüm ürünler burada. Açık hava etkinlikleri ve kutlamalar için özel fırsatları kaçırmayın.</p>
                <Link href="/category/parti-etkinlik" className="text-primary-600 font-medium hover:underline">Daha Fazla Keşfet</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 