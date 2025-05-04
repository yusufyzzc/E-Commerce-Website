import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiChevronRight, FiSearch, FiX } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

// Tip tanımlamaları
type Language = 'tr' | 'en';

type ProductDescription = {
  tr: string;
  en: string;
};

type ProductFeature = {
  tr: string[];
  en: string[];
};

type Product = {
  id: number;
  nameKey: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  href: string;
  isNew: boolean;
  inStock: boolean;
  category: string;
  categoryEn: string;
  description: ProductDescription;
  features: ProductFeature;
};

// Demo data for search results
const allProducts: Product[] = [
  {
    id: 1,
    nameKey: 'products.pelusAyicikAnahtarlik.name',
    price: 336.00,
    originalPrice: 356.00,
    discount: 6,
    image: '/images/products/pelus_ayicik_anahtarlik.jpeg',
    href: '/product/pelus-ayicik-anahtarlik',
    isNew: true,
    inStock: true,
    category: 'Peluş & Oyuncak',
    categoryEn: 'Plush & Toys',
    description: {
      tr: 'Boynunda şık bir fiyonk bulunan peluş ayıcık, sevimli görünümüyle kalpleri fethedecek. Çocuklarınız veya sevdikleriniz için ideal bir hediye.',
      en: 'A plush teddy bear with an elegant bow on its neck, capturing hearts with its adorable appearance. Perfect gift for your children or loved ones.'
    },
    features: {
      tr: [
        'Şık fiyonk detayı',
        'Yumuşak ve kaliteli peluş malzeme',
        'Boy: 30 cm',
        'Alerjik olmayan malzeme',
        'Çocuk odaları için dekoratif'
      ],
      en: [
        'Elegant bow detail',
        'Soft and quality plush material',
        'Height: 30 cm',
        'Non-allergenic material',
        'Decorative for children\'s rooms'
      ]
    }
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
    inStock: true,
    category: 'Peluş & Oyuncak',
    categoryEn: 'Plush & Toys',
    description: {
      tr: 'Büyük boy peluş tavşan, uzun kulakları ve sevimli görünümüyle çocukların en sevdiği oyuncak olacak. Yumuşacık dokusu ile sarılmak için ideal.',
      en: 'Large plush rabbit with long ears and a cute appearance will be children\'s favorite toy. With its soft texture, it\'s perfect for cuddling.'
    },
    features: {
      tr: [
        'Uzun kulak detayı',
        'Extra yumuşak dokulu peluş',
        'Boy: 50 cm',
        'Çocuklar için güvenli malzeme',
        'Kucaklamalık boyut'
      ],
      en: [
        'Long ear detail',
        'Extra soft textured plush',
        'Height: 50 cm',
        'Safe material for children',
        'Huggable size'
      ]
    }
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
    inStock: true,
    category: 'Süsleme & Hobi',
    categoryEn: 'Decoration & Hobby',
    description: {
      tr: 'Altın rengi yıldız süs, evinize veya ofis dekorasyonuna şık bir dokunuş katacak. Özel günlerde dekorasyon için idealdir.',
      en: 'Golden star decoration will add an elegant touch to your home or office decoration. Ideal for decoration on special occasions.'
    },
    features: {
      tr: [
        'Parlak altın kaplama',
        'Dayanıklı metal malzeme',
        'Boyut: 15x15 cm',
        'Asılabilir tasarım',
        'Modern dekoratif görünüm'
      ],
      en: [
        'Shiny gold plating',
        'Durable metal material',
        'Size: 15x15 cm',
        'Hangable design',
        'Modern decorative look'
      ]
    }
  },
  {
    id: 12,
    nameKey: 'products.inciBileklik.name',
    price: 280.00,
    originalPrice: 320.00,
    discount: 12,
    image: '/images/products/inci_bileklik.jpeg',
    href: '/product/inci-bileklik',
    isNew: true,
    inStock: false,
    category: 'Takı & Aksesuar',
    categoryEn: 'Jewelry & Accessories',
    description: {
      tr: 'Zarif inci bileklik, her kombininize şıklık katacak. Özel günlerde veya günlük kullanımda mükemmel bir aksesuar.',
      en: 'Elegant pearl bracelet will add elegance to any of your outfits. A perfect accessory for special occasions or daily use.'
    },
    features: {
      tr: [
        'Doğal inci taneleri',
        'Ayarlanabilir boyut',
        'Gümüş kilit detayı',
        'Şık hediye kutusu ile',
        'Her yaşa uygun tasarım'
      ],
      en: [
        'Natural pearl beads',
        'Adjustable size',
        'Silver clasp detail',
        'With elegant gift box',
        'Design suitable for all ages'
      ]
    }
  },
  {
    id: 14,
    nameKey: 'products.altinKaplamaKupe.name',
    price: 220.00,
    originalPrice: 250.00,
    discount: 12,
    image: '/images/products/altin_kaplama_kupe.jpeg',
    href: '/product/altin-kaplama-kupe',
    isNew: true,
    inStock: true,
    category: 'Takı & Aksesuar',
    categoryEn: 'Jewelry & Accessories',
    description: {
      tr: 'Altın kaplama küpe, minimalist tasarımıyla hem günlük hem de özel günlerde kullanılabilir. Zarif görünümüyle dikkat çeker.',
      en: 'Gold plated earrings can be used for both daily and special occasions with their minimalist design. Attracts attention with its elegant appearance.'
    },
    features: {
      tr: [
        '18K altın kaplama',
        'Hipoalerjenik malzeme',
        'Hafif ve konforlu tasarım',
        'Modern geometrik şekil',
        'Şık hediye kutusu içinde'
      ],
      en: [
        '18K gold plating',
        'Hypoallergenic material',
        'Lightweight and comfortable design',
        'Modern geometric shape',
        'In an elegant gift box'
      ]
    }
  },
  {
    id: 24,
    nameKey: 'products.ahsapMumEvi.name',
    price: 240.00,
    originalPrice: 280.00,
    discount: 14,
    image: '/images/products/ahsap_mum_evi.jpg',
    href: '/product/ahsap-mum-evi',
    isNew: false,
    inStock: true,
    category: 'Ev & Yaşam',
    categoryEn: 'Home & Living',
    description: {
      tr: 'Ahşap mum evi, sıcak bir atmosfer yaratmak için ideal bir dekoratif üründür. İçine yerleştirilen mumla birlikte evinize romantik bir hava katar.',
      en: 'Wooden candle house is an ideal decorative product to create a warm atmosphere. It adds a romantic ambiance to your home with the candle placed inside.'
    },
    features: {
      tr: [
        'Doğal ahşap malzeme',
        'El yapımı detaylar',
        'Boyutlar: 15x15x20 cm',
        'Tea light mum ile kullanıma uygun',
        'Rustik dekorasyon için ideal'
      ],
      en: [
        'Natural wooden material',
        'Handmade details',
        'Dimensions: 15x15x20 cm',
        'Suitable for use with tea light candles',
        'Ideal for rustic decoration'
      ]
    }
  },
];

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  const { t, language } = useLanguage();
  const searchQuery = typeof q === 'string' ? q : '';
  
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newSearch, setNewSearch] = useState(searchQuery);

  // Perform search
  useEffect(() => {
    if (searchQuery) {
      setIsLoading(true);
      
      // Simulate API delay
      setTimeout(() => {
        // Filter products based on search query
        const results = allProducts.filter(product => {
          const name = t(product.nameKey).toLowerCase();
          const category = (language === 'en' ? product.categoryEn : product.category).toLowerCase();
          const description = product.description[language as Language].toLowerCase();
          const query = searchQuery.toLowerCase();
          
          return name.includes(query) || 
                 category.includes(query) || 
                 description.includes(query);
        });
        
        setSearchResults(results);
        setIsLoading(false);
      }, 500);
    } else {
      setSearchResults([]);
      setIsLoading(false);
    }
  }, [searchQuery, t, language]);

  // Handle new search submission
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newSearch.trim()) {
      router.push(`/search?q=${encodeURIComponent(newSearch)}`);
    }
  };

  // Handle search input change
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewSearch(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>
          {searchQuery
            ? `${searchQuery} - ${t('general.search')} | MaviTicaret`
            : `${t('general.search')} | MaviTicaret`}
        </title>
        <meta name="description" content={`MaviTicaret search results for ${searchQuery}`} />
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
          <span className="font-medium text-gray-900">{t('general.search')}</span>
        </div>

        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {searchQuery ? t('general.search') : t('general.search')}
          </h1>
          {searchQuery && (
            <p className="text-gray-600">
              {t('general.search')} "{searchQuery}"
            </p>
          )}
        </div>

        {/* Search Form */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex max-w-xl gap-2">
            <div className="relative flex-grow">
              <input
                type="text"
                className="input pr-10 w-full"
                placeholder={t('general.searchPlaceholder')}
                value={newSearch}
                onChange={handleSearchChange}
              />
              {newSearch && (
                <button
                  type="button"
                  className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setNewSearch('')}
                >
                  <FiX size={18} />
                </button>
              )}
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <FiSearch className="text-gray-400" />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              {t('general.search')}
            </button>
          </form>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
          </div>
        ) : (
          <>
            {/* Search Results */}
            {searchQuery ? (
              <>
                {searchResults.length > 0 ? (
                  <div>
                    <p className="mb-6 text-gray-700">
                      {searchResults.length} {searchResults.length === 1 ? 
                        (language === 'en' ? 'product' : 'ürün') : 
                        (language === 'en' ? 'products' : 'ürün')} 
                      {language === 'en' ? 'found' : 'bulundu'}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {searchResults.map((product) => (
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
                          </div>
                          
                          <div className="p-4">
                            <div className="text-xs text-gray-500 mb-1">
                              {language === 'en' ? product.categoryEn : product.category}
                            </div>
                            <Link href={product.href} className="block">
                              <h3 className="text-gray-800 font-medium mb-2 group-hover:text-primary-600 transition-colors duration-300">
                                {t(product.nameKey)}
                              </h3>
                            </Link>
                            
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                              {product.description[language as Language]}
                            </p>
                            
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
                              disabled={!product.inStock}
                            >
                              {t('products.addToCart')}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                    <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-gray-100 rounded-full">
                      <FiSearch className="text-gray-400" size={32} />
                    </div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">
                      {language === 'en' ? 'No results found' : 'Sonuç bulunamadı'}
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      {language === 'en' 
                        ? `No products found for "${searchQuery}". Please try a different search term or browse our categories.`
                        : `"${searchQuery}" için ürün bulunamadı. Lütfen farklı bir arama terimi deneyin veya kategorilere göz atın.`
                      }
                    </p>
                    <Link href="/" className="btn btn-primary">
                      {t('general.backToHome')}
                    </Link>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-gray-100 rounded-full">
                  <FiSearch className="text-gray-400" size={32} />
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  {language === 'en' 
                    ? 'Please enter a search term to start searching'
                    : 'Arama yapmak için lütfen bir arama terimi girin'
                  }
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  {language === 'en'
                    ? 'You can search for our products using the search box above.'
                    : 'Yukarıdaki arama çubuğunu kullanarak ürünlerimizi arayabilirsiniz.'
                  }
                </p>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
} 