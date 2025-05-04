import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiHeart, FiShoppingCart, FiChevronRight } from 'react-icons/fi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useLanguage } from '../../context/LanguageContext';

// Ürün tipi tanımlama
type Product = {
  id: number;
  nameKey: string;
  name?: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  href: string;
  isNew: boolean;
};

// Kategori detayları tipi tanımlama
type CategoryDetail = {
  titleKey: string;
  descriptionKey: string;
  color: string;
};

// Type-safe kategori detayları
type CategorySlugs = 'yeni-urunler' | 'indirimli-urunler' | 'taki-aksesuar' | 'susleme-hobi' | 'ambalaj-sunum' | 'parti-etkinlik' | 'ev-yasam' | 'plus-oyuncak';

// Kategori ürünleri
const categoryProducts: Partial<Record<CategorySlugs, Product[]>> = {
  'yeni-urunler': [
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
      id: 9,
      nameKey: 'products.altinRengiYildizSus.name',
      price: 120.00,
      originalPrice: 150.00,
      discount: 20,
      image: '/images/products/altin rengi yildiz süs.jpg',
      href: '/product/altin-rengi-yildiz-sus',
      isNew: true,
    },
  ],
  'indirimli-urunler': [
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
      id: 10,
      nameKey: 'products.renkliIpYumagi.name',
      price: 175.00,
      originalPrice: 250.00,
      discount: 30,
      image: '/images/products/renkli ip yumağı 5li set.jpg',
      href: '/product/renkli-ip-yumagi-5li-set',
      isNew: false,
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
  ],
  'taki-aksesuar': [
    {
      id: 11,
      nameKey: 'products.gumusKaplamaKolye.name',
      price: 450.00,
      originalPrice: 500.00,
      discount: 10,
      image: '/images/products/gumus%20kaplama%20kolye.jpg',
      href: '/product/gumus-kaplama-kolye',
      isNew: false,
    },
    {
      id: 12,
      nameKey: 'products.inciBileklik.name',
      price: 280.00,
      originalPrice: 320.00,
      discount: 12,
      image: '/images/products/inci%20bileklik.jpeg',
      href: '/product/inci-bileklik',
      isNew: true,
    },
    {
      id: 13,
      nameKey: 'products.dogalTasYuzuk.name',
      price: 175.00,
      originalPrice: 200.00,
      discount: 12.5,
      image: '/images/products/dogal%20tas%20yuzuk.jpg',
      href: '/product/dogal-tas-yuzuk',
      isNew: false,
    },
    {
      id: 14,
      nameKey: 'products.altinKaplamaKupe.name',
      price: 220.00,
      originalPrice: 250.00,
      discount: 12,
      image: '/images/products/altin%20kaplama%20kupe.jpeg',
      href: '/product/altin-kaplama-kupe',
      isNew: true,
    },
  ],
  'susleme-hobi': [
    {
      id: 10,
      nameKey: 'products.renkliIpYumagi.name',
      price: 175.00,
      originalPrice: 250.00,
      discount: 30,
      image: '/images/products/renkli ip yumağı 5li set.jpg',
      href: '/product/renkli-ip-yumagi-5li-set',
      isNew: false,
    },
    {
      id: 9,
      nameKey: 'products.altinRengiYildizSus.name',
      price: 120.00,
      originalPrice: 150.00,
      discount: 20,
      image: '/images/products/altin rengi yildiz süs.jpg',
      href: '/product/altin-rengi-yildiz-sus',
      isNew: true,
    },
    {
      id: 15,
      nameKey: 'products.elYapimiAhsapCerceve.name',
      price: 145.00,
      originalPrice: 165.00,
      discount: 12,
      image: '/images/products/el%20yapimi%20ahsap%20cerceve.jpg',
      href: '/product/el-yapimi-ahsap-cerceve',
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
  ],
  'ambalaj-sunum': [
    {
      id: 16,
      nameKey: 'products.kraftHediyeKutusu.name',
      price: 95.00,
      originalPrice: 120.00,
      discount: 21,
      image: '/images/products/kraft%20hediye%20kutusu%203lu%20set.jpg',
      href: '/product/kraft-hediye-kutusu-3lu-set',
      isNew: false,
    },
    {
      id: 17,
      nameKey: 'products.renkliKagitPoset.name',
      price: 65.00,
      originalPrice: 80.00,
      discount: 19,
      image: '/images/products/renkli%20kagit%20poset%2010lu.jpg',
      href: '/product/renkli-kagit-poset-10lu',
      isNew: true,
    },
    {
      id: 18,
      nameKey: 'products.susluSeffafKutu.name',
      price: 48.00,
      originalPrice: 60.00,
      discount: 20,
      image: '/images/products/suslu%20seffaf%20kutu.jpg',
      href: '/product/suslu-seffaf-kutu',
      isNew: false,
    },
    {
      id: 19,
      nameKey: 'products.dekoratifSepet.name',
      price: 180.00,
      originalPrice: 200.00,
      discount: 10,
      image: '/images/products/dekoratif%20sepet%20orta%20boy.jpg',
      href: '/product/dekoratif-sepet-orta-boy',
      isNew: false,
    },
  ],
  'parti-etkinlik': [
    {
      id: 20,
      nameKey: 'products.renkliBalonSeti.name',
      price: 85.00,
      originalPrice: 100.00,
      discount: 15,
      image: '/images/products/renkli%20balon%20seti%2050li.jpg',
      href: '/product/renkli-balon-seti-50li',
      isNew: false,
    },
    {
      id: 21,
      nameKey: 'products.partiKonfeti.name',
      price: 45.00,
      originalPrice: 55.00,
      discount: 18,
      image: '/images/products/parti%20konfeti.jpg',
      href: '/product/parti-konfeti',
      isNew: true,
    },
    {
      id: 22,
      nameKey: 'products.dogumGunuPartiSeti.name',
      price: 320.00,
      originalPrice: 350.00,
      discount: 9,
      image: '/images/products/dogum%20gunu%20parti%20seti.jpeg',
      href: '/product/dogum-gunu-parti-seti',
      isNew: true,
    },
  ],
  'ev-yasam': [
    {
      id: 23,
      nameKey: 'products.dekoratifYastik.name',
      price: 165.00,
      originalPrice: 195.00,
      discount: 15,
      image: '/images/products/dekoratif yastık kılıfı.jpeg',
      href: '/product/dekoratif-yastik',
      isNew: true,
    },
    {
      id: 24,
      nameKey: 'products.ahsapMumEvi.name',
      price: 240.00,
      originalPrice: 280.00,
      discount: 14,
      image: '/images/products/dekoratif_mum_seti.png',
      href: '/product/ahsap-mum-evi',
      isNew: false,
    },
    {
      id: 25,
      nameKey: 'products.seramikVazo.name',
      price: 190.00,
      originalPrice: 220.00,
      discount: 14,
      image: '/images/products/el yapımı seramik kase.jpeg',
      href: '/product/seramik-vazo',
      isNew: false,
    },
    {
      id: 26,
      nameKey: 'products.duvarSaati.name',
      price: 210.00,
      originalPrice: 250.00,
      discount: 16,
      image: '/images/products/dekoratif sepet orta boy.jpg',
      href: '/product/duvar-saati',
      isNew: true,
    },
  ],
  'plus-oyuncak': [
    {
      id: 27,
      nameKey: 'products.pelusAyicikAnahtarlik.name',
      price: 336.00,
      originalPrice: 356.00,
      discount: 6,
      image: '/images/products/pelus_ayicik_anahtarlik.jpeg',
      href: '/product/pelus-ayicik-anahtarlik',
      isNew: true,
    },
    {
      id: 28,
      nameKey: 'products.fiyonkPelusAyicik.name',
      price: 312.00,
      originalPrice: 336.00,
      discount: 7,
      image: '/images/products/fiyonk_pelus_ayicik.jpg',
      href: '/product/fiyonk-pelus-ayicik',
      isNew: false,
    },
    {
      id: 29,
      nameKey: 'products.buyukBoyTavsanPelus.name',
      price: 384.00,
      originalPrice: 420.00,
      discount: 9,
      image: '/images/products/buyuk_boy_pelus_tavsan.jpg',
      href: '/product/buyuk-boy-tavsan-pelus',
      isNew: true,
    },
    {
      id: 30,
      nameKey: 'products.plastikAsker12li.name',
      price: 36.00,
      originalPrice: 60.00,
      discount: 40,
      image: '/images/products/plastik_asker_12li.jpg',
      href: '/product/plastik-asker-12li-paket',
      isNew: false,
    },
    {
      id: 31,
      nameKey: 'products.iLoveUPelusAyi.name',
      price: 295.00,
      originalPrice: 350.00,
      discount: 16,
      image: '/images/products/I_love_u_pelus_ayi.jpg',
      href: '/product/i-love-u-pelus-ayi',
      isNew: true,
    },
    {
      id: 32,
      nameKey: 'products.maviPelusAyicik.name',
      price: 275.00,
      originalPrice: 320.00,
      discount: 14,
      image: '/images/products/mavi_pelus_ayicik.jpeg',
      href: '/product/mavi-pelus-ayicik',
      isNew: false,
    }
  ],
};

// Kategori başlıklarını ve açıklamalarını tanımla
const categoryDetails: Record<CategorySlugs, CategoryDetail> = {
  'yeni-urunler': {
    titleKey: 'categories.newArrivals.title',
    descriptionKey: 'categories.newArrivals.description',
    color: 'bg-blue-600',
  },
  'indirimli-urunler': {
    titleKey: 'categories.discounted.title',
    descriptionKey: 'categories.discounted.description',
    color: 'bg-red-600',
  },
  'taki-aksesuar': {
    titleKey: 'categories.jewelry.title',
    descriptionKey: 'categories.jewelry.description',
    color: 'bg-purple-600',
  },
  'susleme-hobi': {
    titleKey: 'categories.decoration.title',
    descriptionKey: 'categories.decoration.description',
    color: 'bg-green-600',
  },
  'ambalaj-sunum': {
    titleKey: 'categories.packaging.title',
    descriptionKey: 'categories.packaging.description',
    color: 'bg-yellow-600',
  },
  'parti-etkinlik': {
    titleKey: 'categories.party.title',
    descriptionKey: 'categories.party.description',
    color: 'bg-pink-600',
  },
  'ev-yasam': {
    titleKey: 'categories.homeLife.title',
    descriptionKey: 'categories.homeLife.description',
    color: 'bg-indigo-600',
  },
  'plus-oyuncak': {
    titleKey: 'categories.plush.title',
    descriptionKey: 'categories.plush.description',
    color: 'bg-orange-600',
  },
};

export default function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query;
  const { t } = useLanguage();
  
  // Slug string tipine dönüştür
  const categorySlug = typeof slug === 'string' ? slug : '';
  
  // Kategori bilgisini al
  const categoryData = categorySlug in categoryDetails 
    ? categoryDetails[categorySlug as CategorySlugs] 
    : null;
  
  const category = categoryData ? {
    title: t(categoryData.titleKey),
    description: t(categoryData.descriptionKey),
    color: categoryData.color,
  } : {
    title: t('categories.notFound.title'),
    description: t('categories.notFound.description'),
    color: 'bg-gray-600',
  };
  
  // Kategori ürünlerini al
  const productsData = categorySlug in categoryProducts 
    ? categoryProducts[categorySlug as CategorySlugs] || []
    : [];
  
  // Ürün adlarını çeviri sistemi üzerinden geçir
  const products = productsData.map(product => ({
    ...product,
    name: t(product.nameKey),
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{category.title} | MaviTicaret</title>
        <meta name="description" content={category.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        {/* Kategori Banner */}
        <div className={`py-12 ${category.color} text-white`}>
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl font-bold mb-4">{category.title}</h1>
              <p className="text-lg max-w-3xl">{category.description}</p>
            </div>
          </div>
        </div>
        
        {/* Breadcrumb */}
        <div className="container py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600">
              {t('general.home')}
            </Link>
            <FiChevronRight className="mx-2" size={16} />
            <span className="font-medium text-gray-900">{category.title}</span>
          </div>
        </div>
        
        {/* Products */}
        <section className="py-8">
          <div className="container">
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
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
                        {t('products.addToCart')}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-2xl font-medium text-gray-700 mb-4">{t('categories.noProducts.title')}</h3>
                <p className="text-gray-500 mb-6">{t('categories.noProducts.description')}</p>
                <Link href="/" className="btn btn-primary inline-block">
                  {t('general.backToHome')}
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 