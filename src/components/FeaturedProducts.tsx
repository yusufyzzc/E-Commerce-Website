import React from 'react';
import Link from 'next/link';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

const FeaturedProducts: React.FC = () => {
  const { t } = useLanguage();
  
  const products = [
    {
      id: 1,
      nameKey: 'products.pelusAyicikAnahtarlik.name',
      price: 336.00,
      originalPrice: 356.00,
      discount: 6,
      image: '/images/products/pelus_ayicik_anahtarlik.jpeg',
      href: '/product/pelus-ayicik-anahtarlik',
      isNew: true,
    },
    {
      id: 2,
      nameKey: 'products.iLovePelusAyi.name',
      price: 330.00,
      originalPrice: 360.00,
      discount: 8,
      image: '/images/products/I_love_u_pelus_ayi.jpg',
      href: '/product/i-love-you-pelus-ayicik',
      isNew: false,
    },
    {
      id: 3,
      nameKey: 'products.buyukBoyTavsanPelus.name',
      price: 384.00,
      originalPrice: 420.00,
      discount: 9,
      image: '/images/products/buyuk_boy_pelus_tavsan.jpg',
      href: '/product/buyuk-boy-tavsan-pelus',
      isNew: true,
    },
    {
      id: 4,
      nameKey: 'products.dekoratifMumSeti.name',
      price: 250.00,
      originalPrice: 280.00,
      discount: 11,
      image: '/images/products/dekoratif_mum_seti.png',
      href: '/product/dekoratif-mum-seti',
      isNew: false,
    },
    {
      id: 5,
      nameKey: 'products.ketenKurdeleKirmizi.name',
      price: 80.00,
      originalPrice: 100.00,
      discount: 20,
      image: '/images/products/keten_kirmizi_kurdele.jpeg',
      href: '/product/keten-kurdele-kirmizi',
      isNew: false,
    },
    {
      id: 6,
      nameKey: 'products.plastikAsker12li.name',
      price: 36.00,
      originalPrice: 60.00,
      discount: 40,
      image: '/images/products/plastik_asker_12li.jpg',
      href: '/product/plastik-asker-12li-paket',
      isNew: false,
    },
    {
      id: 7,
      nameKey: 'products.fiyonkPelusAyicik.name',
      price: 312.00,
      originalPrice: 336.00,
      discount: 7,
      image: '/images/products/fiyonk_pelus_ayicik.jpg',
      href: '/product/fiyonk-pelus-ayicik',
      isNew: true,
    },
    {
      id: 8,
      nameKey: 'products.desenliPelusAyicikMavi.name',
      price: 336.00,
      originalPrice: 356.00,
      discount: 6,
      image: '/images/products/mavi_pelus_ayicik.jpeg',
      href: '/product/desenli-pelus-ayicik-mavi',
      isNew: false,
    },
  ];

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">{t('home.featuredProducts')}</h2>
          <Link href="/featured-products" className="text-primary-600 hover:text-primary-800 font-medium flex items-center">
            {t('home.viewAll')}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="card group">
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
                </div>
                
                {/* Quick actions */}
                <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">
                  <button className="bg-white rounded-full p-2 shadow-md hover:bg-primary-50 transition-colors duration-300">
                    <FiHeart className="text-gray-600 hover:text-primary-600" size={18} />
                  </button>
                  <button className="bg-white rounded-full p-2 shadow-md hover:bg-primary-50 transition-colors duration-300">
                    <FiShoppingCart className="text-gray-600 hover:text-primary-600" size={18} />
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <Link href={product.href} className="block">
                  <h3 className="text-gray-800 font-medium mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {t(product.nameKey)}
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
                  {t('products.addToCart')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 