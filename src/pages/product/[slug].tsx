import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { FiHeart, FiShoppingCart, FiChevronRight, FiMinus, FiPlus, FiShare2 } from 'react-icons/fi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Define product type for type safety
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  category: string;
  categorySlug: string;
  description: string;
  features: string[];
  isNew: boolean;
}

interface ProductMap {
  [key: string]: Product;
}

// Örnek ürün veritabanı
const products: ProductMap = {
  'pelus-ayicik-anahtarlik': {
    id: 1,
    name: 'Peluş Ayıcık Anahtarlık',
    price: 336.00,
    originalPrice: 356.00,
    discount: 6,
    image: '/images/products/pelus_ayicik_anahtarlik.jpeg',
    category: 'Peluş & Oyuncak',
    categorySlug: 'plus-oyuncak',
    description: 'Sevimli peluş ayıcık anahtarlık, çantanızın veya anahtarlarınızın şık bir aksesuarı olacak. Yumuşak dokusu ve kaliteli işçiliğiyle uzun ömürlü kullanım sağlar.',
    features: [
      'Yüksek kaliteli peluş malzeme',
      'Dayanıklı metal anahtarlık halkası',
      'Kompakt boyut: 8 cm',
      'Yumuşak doku',
      'Çantaya veya anahtarlara kolayca takılabilir'
    ],
    isNew: true,
  },
  'i-love-you-pelus-ayicik': {
    id: 2,
    name: 'I Love You Peluş Ayıcık',
    price: 330.00,
    originalPrice: 360.00,
    discount: 8,
    image: '/images/products/I_love_u_pelus_ayi.jpg',
    category: 'Peluş & Oyuncak',
    categorySlug: 'plus-oyuncak',
    description: '"I Love You" yazılı sevimli peluş ayıcık, sevdiklerinize duygularınızı ifade etmenin en tatlı yolu. Özel günler, sevgililer günü veya doğum günleri için mükemmel bir hediye.',
    features: [
      'Kalpli "I Love You" detayı',
      'Yumuşak ve sevimli tasarım',
      'Boy: 25 cm',
      'Kaliteli peluş malzeme',
      'Hediye olarak ideal'
    ],
    isNew: false,
  },
  'buyuk-boy-tavsan-pelus': {
    id: 3,
    name: 'Büyük Boy Tavşan Peluş',
    price: 384.00,
    originalPrice: 420.00,
    discount: 9,
    image: '/images/products/buyuk_boy_pelus_tavsan.jpg',
    category: 'Peluş & Oyuncak',
    categorySlug: 'plus-oyuncak',
    description: 'Büyük boy sevimli tavşan peluş, çocukların veya peluş severlerinin vazgeçilmezi olacak. Uzun kulakları ve yumuşak dokusuyla kucaklamak için ideal.',
    features: [
      'Büyük boy: 45 cm',
      'Yumuşak ve dayanıklı malzeme',
      'Uzun kulaklar ve sevimli detaylar',
      'Çocuklar için güvenli malzeme',
      'Dekoratif aksesuar olarak da kullanılabilir'
    ],
    isNew: true,
  },
  'dekoratif-mum-seti': {
    id: 4,
    name: 'Dekoratif Mum Seti',
    price: 250.00,
    originalPrice: 280.00,
    discount: 11,
    image: '/images/products/dekoratif_mum_seti.png',
    category: 'Ev & Yaşam',
    categorySlug: 'ev-yasam',
    description: 'Şık tasarımlı dekoratif mum seti, evinize hem ışık hem de dekoratif bir dokunuş katacak. Farklı boyut ve renklerdeki mumlarla ortamınıza sıcaklık katın.',
    features: [
      '5 farklı boyutta mum içerir',
      'Uzun yanma süresi',
      'Dökülmeyen kaliteli mum',
      'Çeşitli renk seçenekleri',
      'Ev dekorasyonu için ideal'
    ],
    isNew: false,
  },
  'keten-kurdele-kirmizi': {
    id: 5,
    name: 'Keten Kurdele Kırmızı',
    price: 80.00,
    originalPrice: 100.00,
    discount: 20,
    image: '/images/products/keten_kirmizi_kurdele.jpeg',
    category: 'Süsleme & Hobi',
    categorySlug: 'susleme-hobi',
    description: 'Doğal keten kumaştan üretilmiş kırmızı kurdele, hediye paketleri ve el işi projeleri için mükemmel. Doğal dokusu ve canlı rengiyle projelerinize farklı bir dokunuş katacak.',
    features: [
      'Doğal keten malzeme',
      'Canlı kırmızı renk',
      'Genişlik: 2.5 cm',
      'Uzunluk: 10 metre',
      'Hediye paketleme, süsleme ve dekorasyon için uygun'
    ],
    isNew: false,
  },
  'plastik-asker-12li-paket': {
    id: 6,
    name: 'Plastik Asker 12li Paket',
    price: 36.00,
    originalPrice: 60.00,
    discount: 40,
    image: '/images/products/plastik_asker_12li.jpg',
    category: 'Peluş & Oyuncak',
    categorySlug: 'plus-oyuncak',
    description: '12 adet plastik asker figürü içeren set, çocukların hayal gücünü geliştiren klasik bir oyuncak. Dayanıklı plastik malzemeden üretilmiştir.',
    features: [
      '12 adet farklı pozisyonda asker figürü',
      'Dayanıklı plastik malzeme',
      'Yükseklik: yaklaşık 5 cm',
      'Eğitici ve eğlenceli',
      '3 yaş üzeri çocuklar için uygundur'
    ],
    isNew: false,
  },
  'fiyonk-pelus-ayicik': {
    id: 7,
    name: 'Fiyonk Peluş Ayıcık',
    price: 312.00,
    originalPrice: 336.00,
    discount: 7,
    image: '/images/products/fiyonk_pelus_ayicik.jpg',
    category: 'Peluş & Oyuncak',
    categorySlug: 'plus-oyuncak',
    description: 'Boynunda şık bir fiyonk bulunan peluş ayıcık, sevimli görünümüyle kalpleri fethedecek. Çocuklarınız veya sevdikleriniz için ideal bir hediye.',
    features: [
      'Şık fiyonk detayı',
      'Yumuşak ve kaliteli peluş malzeme',
      'Boy: 30 cm',
      'Alerjik olmayan malzeme',
      'Çocuk odaları için dekoratif'
    ],
    isNew: true,
  },
  'desenli-pelus-ayicik-mavi': {
    id: 8,
    name: 'Desenli Peluş Ayıcık Mavi',
    price: 336.00,
    originalPrice: 356.00,
    discount: 6,
    image: '/images/products/mavi_pelus_ayicik.jpeg',
    category: 'Peluş & Oyuncak',
    categorySlug: 'plus-oyuncak',
    description: 'Mavi desenli şık peluş ayıcık, hem dekoratif hem de sevimli bir oyuncak. Çocuklar için güvenli malzemeden üretilmiştir.',
    features: [
      'Mavi renk ve özel desen',
      'Yumuşak dokulu peluş',
      'Boy: 35 cm',
      'Silinebilir yüzey',
      'Dekoratif amaçlı veya oyuncak olarak kullanılabilir'
    ],
    isNew: false,
  },
  'altin-rengi-yildiz-sus': {
    id: 9,
    name: 'Altın Rengi Yıldız Süs',
    price: 120.00,
    originalPrice: 150.00,
    discount: 20,
    image: '/images/products/altin%20rengi%20yildiz%20süs.jpg',
    category: 'Süsleme & Hobi',
    categorySlug: 'susleme-hobi',
    description: 'Altın rengi yıldız şeklindeki süsleme, özel günlerinize şıklık katacak. Parti, kutlama, dekorasyon ve vitrin süslemelerinde kullanılabilir.',
    features: [
      'Parlak altın rengi',
      'Yıldız şeklinde tasarım',
      'Çap: 20 cm',
      'Hafif ve dayanıklı malzeme',
      'Asılabilir ipli'
    ],
    isNew: true,
  },
  'renkli-ip-yumagi-5li-set': {
    id: 10,
    name: 'Renkli İp Yumağı 5li Set',
    price: 175.00,
    originalPrice: 250.00,
    discount: 30,
    image: '/images/products/renkli%20ip%20yumağı%205li%20set.jpg',
    category: 'Süsleme & Hobi',
    categorySlug: 'susleme-hobi',
    description: 'Beş farklı renkte kaliteli ip yumağı içeren set, el işi ve örgü projeleriniz için ideal. Canlı renkler ve yumuşak dokusuyla el işlerinizde fark yaratın.',
    features: [
      '5 farklı renk',
      'Yumuşak ve dayanıklı yapı',
      'Her yumak 50 gr',
      'Amigurumi ve örgü projeleri için uygun',
      'Solmaya karşı dayanıklı boyalar'
    ],
    isNew: false,
  },
  'gumus-kaplama-kolye': {
    id: 11,
    name: 'Gümüş Kaplama Kolye',
    price: 450.00,
    originalPrice: 500.00,
    discount: 10,
    image: '/images/products/gumus%20kaplama%20kolye.jpg',
    category: 'Takı & Aksesuar',
    categorySlug: 'taki-aksesuar',
    description: 'Şık ve zarif tasarımıyla dikkat çeken gümüş kaplama kolye, her kombininizi tamamlayacak modern bir aksesuar. Dayanıklı ve alerjik reaksiyonlara neden olmayan malzemeden üretilmiştir.',
    features: [
      'Premium gümüş kaplama',
      'Ayarlanabilir zincir uzunluğu',
      'Paslanma yapmaz',
      'Alerjik reaksiyonlara neden olmaz',
      'Şık hediye kutusu ile birlikte'
    ],
    isNew: false,
  },
  'inci-bileklik': {
    id: 12,
    name: 'İnci Bileklik',
    price: 280.00,
    originalPrice: 320.00,
    discount: 12,
    image: '/images/products/inci%20bileklik.jpeg',
    category: 'Takı & Aksesuar',
    categorySlug: 'taki-aksesuar',
    description: 'Zarif ve şık inci bileklik, özel günlerinizde ve günlük kullanımda bileğinizi süsleyecek. Yüksek kaliteli incilerle üretilmiş bu bileklik, dayanıklı yapısıyla uzun süre kullanım sağlar.',
    features: [
      'Yüksek kaliteli inci',
      'Dayanıklı tasarım',
      'Ayarlanabilir boyut',
      'Gümüş kaplama klips',
      'Özel tasarım'
    ],
    isNew: true,
  },
  'dogal-tas-yuzuk': {
    id: 13,
    name: 'Doğal Taş Yüzük',
    price: 175.00,
    originalPrice: 200.00,
    discount: 12.5,
    image: '/images/products/dogal%20tas%20yuzuk.jpg',
    category: 'Takı & Aksesuar',
    categorySlug: 'taki-aksesuar',
    description: 'Doğal taşlarla hazırlanan bu özel yüzük, her parmağa uyum sağlayan ayarlanabilir yapısı ile dikkat çekiyor. El işçiliği ile üretilen bu yüzük, her biri benzersiz desenlere sahip doğal taşları içerir.',
    features: [
      'Doğal taş',
      'Ayarlanabilir boyut',
      'El işçiliği',
      'Paslanmaz çelik',
      'Hipo-alerjenik'
    ],
    isNew: false,
  },
  'altin-kaplama-kupe': {
    id: 14,
    name: 'Altın Kaplama Küpe',
    price: 220.00,
    originalPrice: 250.00,
    discount: 12,
    image: '/images/products/altin%20kaplama%20kupe.jpeg',
    category: 'Takı & Aksesuar',
    categorySlug: 'taki-aksesuar',
    description: 'Zarif altın kaplama küpeler, şık tasarımıyla her türlü kombininize uyum sağlar. Hafif yapısı ile rahat bir kullanım sunan bu küpeler, özel günleriniz için mükemmel bir seçim.',
    features: [
      '18 ayar altın kaplama',
      'Hafif ve konforlu',
      'Alerjik reaksiyonlara karşı koruma',
      'Modern tasarım',
      'Özel kutuda'
    ],
    isNew: true,
  },
  'el-yapimi-ahsap-cerceve': {
    id: 15,
    name: 'El Yapımı Ahşap Çerçeve',
    price: 145.00,
    originalPrice: 165.00,
    discount: 12,
    image: '/images/products/el%20yapimi%20ahsap%20cerceve.jpg',
    category: 'Süsleme & Hobi',
    categorySlug: 'susleme-hobi',
    description: 'El yapımı ahşap çerçeve, evinize sıcak bir dokunuş katacak. Doğal ahşap dokusu ve özenli işçiliğiyle özel anılarınızı çerçevelemek için ideal.',
    features: [
      'Doğal ahşap malzeme',
      'El işçiliği ile üretilmiştir',
      'Boyut: 20x25 cm',
      'Duvar askısı ile birlikte',
      'Masa üstü olarak da kullanılabilir'
    ],
    isNew: false,
  },
  'kraft-hediye-kutusu-3lu-set': {
    id: 16,
    name: 'Kraft Hediye Kutusu 3lü Set',
    price: 95.00,
    originalPrice: 120.00,
    discount: 21,
    image: '/images/products/kraft%20hediye%20kutusu%203lu%20set.jpg',
    category: 'Ambalaj & Sunum',
    categorySlug: 'ambalaj-sunum',
    description: 'Üç farklı boyutta kraft hediye kutusu içeren set, hediyelerinizi şık bir şekilde sunmanızı sağlar. Doğal ve şık görünümüyle hediyelerinize değer katar.',
    features: [
      '3 farklı boyutta kutu içerir',
      'Dayanıklı kraft kağıt malzeme',
      'Çevre dostu tasarım',
      'Şık ve sade görünüm',
      'Kolay montaj'
    ],
    isNew: false,
  },
  'renkli-kagit-poset-10lu': {
    id: 17,
    name: 'Renkli Kağıt Poşet 10lu',
    price: 65.00,
    originalPrice: 80.00,
    discount: 19,
    image: '/images/products/renkli%20kagit%20poset%2010lu.jpg',
    category: 'Ambalaj & Sunum',
    categorySlug: 'ambalaj-sunum',
    description: 'On adet renkli kağıt poşet içeren set, küçük hediyeleri sunmanın en şık yolu. Farklı renklerde canlı tasarımlarla hediyelerinize neşe katın.',
    features: [
      '10 farklı renk ve desen',
      'Kaliteli kağıt malzeme',
      'Boyut: 15x25 cm',
      'Güçlendirilmiş tutma yerleri',
      'Hediye paketleme için ideal'
    ],
    isNew: true,
  },
  'suslu-seffaf-kutu': {
    id: 18,
    name: 'Süslü Şeffaf Kutu',
    price: 48.00,
    originalPrice: 60.00,
    discount: 20,
    image: '/images/products/suslu%20seffaf%20kutu.jpg',
    category: 'Ambalaj & Sunum',
    categorySlug: 'ambalaj-sunum',
    description: 'Şeffaf plastikten üretilmiş süslü kutu, özel hediyelerinizi sunmanın en zarif yolu. İçindeki hediyeyi göstererek merak uyandırın.',
    features: [
      'Şeffaf plastik malzeme',
      'Desenli süsleme detayları',
      'Kolay açılıp kapanma',
      'Boyut: 10x10x10 cm',
      'Yeniden kullanılabilir'
    ],
    isNew: false,
  },
  'dekoratif-sepet-orta-boy': {
    id: 19,
    name: 'Dekoratif Sepet Orta Boy',
    price: 180.00,
    originalPrice: 200.00,
    discount: 10,
    image: '/images/products/dekoratif%20sepet%20orta%20boy.jpg',
    category: 'Ambalaj & Sunum',
    categorySlug: 'ambalaj-sunum',
    description: 'Orta boy dekoratif sepet, hediyelerinizi sunmanın yanı sıra ev dekorasyonunda da kullanabileceğiniz çok amaçlı bir ürün. El işi dokuması ve dayanıklı yapısıyla uzun süre kullanabilirsiniz.',
    features: [
      'Doğal hasır malzeme',
      'El işi dokuma',
      'Boyut: 30x20x15 cm',
      'Sağlam tutma sapları',
      'Çok amaçlı kullanım'
    ],
    isNew: false,
  },
  'renkli-balon-seti-50li': {
    id: 20,
    name: 'Renkli Balon Seti 50li',
    price: 85.00,
    originalPrice: 100.00,
    discount: 15,
    image: '/images/products/renkli%20balon%20seti%2050li.jpg',
    category: 'Parti & Etkinlik',
    categorySlug: 'parti-etkinlik',
    description: 'Elli adet renkli balon içeren set, parti ve kutlamalarınız için ideal. Canlı renkler ve kaliteli malzemesiyle partinize neşe katın.',
    features: [
      '10 farklı renkte toplam 50 balon',
      'Yüksek kaliteli lateks malzeme',
      'Kolay şişirilebilir',
      'Parlak ve canlı renkler',
      'Parti süslemesi için ideal'
    ],
    isNew: false,
  },
  'parti-konfeti': {
    id: 21,
    name: 'Parti Konfeti',
    price: 45.00,
    originalPrice: 55.00,
    discount: 18,
    image: '/images/products/parti%20konfeti.jpg',
    category: 'Parti & Etkinlik',
    categorySlug: 'parti-etkinlik',
    description: 'Renkli parti konfetileri, her türlü kutlama ve etkinliğinize eğlence katacak. Masa süslemesi veya anı fotoğrafları için mükemmel bir aksesuar.',
    features: [
      'Metalik ve parlak renkler',
      'Farklı şekil ve boyutlar',
      '50 gr paket içeriği',
      'Masa süslemesi için ideal',
      'Çevreye duyarlı malzeme'
    ],
    isNew: true,
  },
  'dogum-gunu-parti-seti': {
    id: 22,
    name: 'Doğum Günü Parti Seti',
    price: 320.00,
    originalPrice: 350.00,
    discount: 9,
    image: '/images/products/dogum%20gunu%20parti%20seti.jpeg',
    category: 'Parti & Etkinlik',
    categorySlug: 'parti-etkinlik',
    description: 'Komple doğum günü parti seti, kutlamanız için gereken tüm malzemeleri içerir. Tek bir paketle doğum günü partinizi hazırlayın.',
    features: [
      '10 kişilik servis malzemesi',
      'Masa örtüsü ve peçeteler',
      'Balonlar ve flama',
      '"Mutlu Yıllar" yazılı pankart',
      'Parti şapkaları ve düdükleri'
    ],
    isNew: true,
  },
  'kagit-tabak-bardak-seti': {
    id: 23,
    name: 'Kağıt Tabak ve Bardak Seti',
    price: 75.00,
    originalPrice: 90.00,
    discount: 17,
    image: '/images/products/kagıt%20tabak%20ve%20bardak%20seti.jpg',
    category: 'Parti & Etkinlik',
    categorySlug: 'parti-etkinlik',
    description: 'Parti ve etkinlikleriniz için tasarlanmış kağıt tabak ve bardak seti. Desenli ve renkli tasarımıyla partinize şıklık katacak.',
    features: [
      '20 adet kağıt tabak',
      '20 adet kağıt bardak',
      'Şık desenleri',
      'Suya ve yağa dayanıklı',
      'Kolay temizlik'
    ],
    isNew: false,
  },
  'dekoratif-yastik-kilifi': {
    id: 24,
    name: 'Dekoratif Yastık Kılıfı',
    price: 120.00,
    originalPrice: 150.00,
    discount: 20,
    image: '/images/products/dekoratif%20yastık%20kılıfı.jpeg',
    category: 'Ev & Yaşam',
    categorySlug: 'ev-yasam',
    description: 'Şık desenli dekoratif yastık kılıfı, evinize modern bir dokunuş katacak. Yumuşak dokusu ve kaliteli malzemesiyle konfor sunar.',
    features: [
      'Yumuşak ve dayanıklı kumaş',
      'Fermuarlı tasarım',
      'Boyut: 45x45 cm',
      'Makinede yıkanabilir',
      'Solmaya karşı dayanıklı renkler'
    ],
    isNew: true,
  },
  'el-yapimi-seramik-kase': {
    id: 25,
    name: 'El Yapımı Seramik Kase',
    price: 85.00,
    originalPrice: 100.00,
    discount: 15,
    image: '/images/products/el%20yapımı%20seramik%20kase.jpeg',
    category: 'Ev & Yaşam',
    categorySlug: 'ev-yasam',
    description: 'El yapımı seramik kase, sofranıza şıklık katacak. Her biri benzersiz desenlere sahip bu kaseler, yemeklerinizi sunmanın en zarif yolu.',
    features: [
      'El yapımı seramik',
      'Her biri benzersiz desen',
      'Bulaşık makinesinde yıkanabilir',
      'Çap: 15 cm',
      'Mikrodalga fırında kullanılabilir'
    ],
    isNew: false,
  },
  'pamuklu-battaniye': {
    id: 26,
    name: 'Pamuklu Battaniye',
    price: 280.00,
    originalPrice: 320.00,
    discount: 12.5,
    image: '/images/products/pamuklu%20battaniye.jpeg',
    category: 'Ev & Yaşam',
    categorySlug: 'ev-yasam',
    description: 'Yumuşak dokulu pamuklu battaniye, soğuk günlerde sıcaklık ve konfor sağlar. Hafif yapısı ve şık deseniyle yatak odanızın veya salonunuzun dekorasyonunu tamamlar.',
    features: [
      '%100 pamuk malzeme',
      'Boyut: 150x200 cm',
      'Makinede yıkanabilir',
      'Solmaya karşı dayanıklı',
      'Nefes alan kumaş yapısı'
    ],
    isNew: true,
  },
  // Diğer ürünler eklenebilir
};

// İlgili ürünleri filtreleme fonksiyonu
const getRelatedProducts = (currentSlug: string, categorySlug: string) => {
  // Aynı kategorideki diğer ürünleri filtrele (mevcut ürün hariç)
  return Object.entries(products)
    .filter(([slug, product]) => slug !== currentSlug && product.categorySlug === categorySlug)
    .map(([slug, product]) => ({
      ...product,
      slug
    }))
    .slice(0, 4); // Maksimum 4 benzer ürün göster
};

export default function ProductDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const [quantity, setQuantity] = useState(1);

  // Güvenlik için string olduğundan emin ol
  const productSlug = typeof slug === 'string' ? slug : '';
  
  // Ürün bilgilerini al
  const product = products[productSlug];
  
  // Eğer ürün bulunamadıysa veya veri henüz yüklenmediyse
  if (!product && typeof slug === 'string') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Ürün Bulunamadı</h1>
            <p className="text-gray-600 mb-8">Aradığınız ürün bulunamadı veya kaldırılmış olabilir.</p>
            <Link href="/" className="btn btn-primary">
              Ana Sayfaya Dön
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Sayfa henüz yüklenme aşamasındaysa
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  // Benzer ürünleri al
  const relatedProducts = getRelatedProducts(productSlug, product.categorySlug);

  // Miktar arttırma/azaltma işlemleri
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    // Maksimum 10 ürün siparişi verilebilir
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{product.name} | MaviTicaret</title>
        <meta name="description" content={product.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        {/* Breadcrumb */}
        <div className="container py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600">
              Anasayfa
            </Link>
            <FiChevronRight className="mx-2" size={16} />
            <Link href={`/category/${product.categorySlug}`} className="hover:text-primary-600">
              {product.category}
            </Link>
            <FiChevronRight className="mx-2" size={16} />
            <span className="font-medium text-gray-900">{product.name}</span>
          </div>
        </div>
        
        {/* Ürün Detayı */}
        <section className="py-8">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Ürün Görseli */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-auto object-cover"
                  />
                  {/* Rozetler */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-secondary-600 text-white text-xs font-bold px-3 py-1 rounded">
                        Yeni
                      </span>
                    )}
                    {product.discount > 0 && (
                      <span className="bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded">
                        %{product.discount} İndirim
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Ürün Bilgileri */}
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
                
                <div className="flex items-center mb-6">
                  {product.discount > 0 ? (
                    <>
                      <span className="text-primary-600 font-bold text-3xl">{product.price.toFixed(2)} TL</span>
                      <span className="text-gray-400 text-lg line-through ml-3">{product.originalPrice.toFixed(2)} TL</span>
                    </>
                  ) : (
                    <span className="text-primary-600 font-bold text-3xl">{product.price.toFixed(2)} TL</span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                {/* Ürün Özellikleri */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Ürün Özellikleri</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {product.features.map((feature: string, index: number) => (
                      <li key={index} className="text-gray-600">{feature}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Stok Durumu */}
                <div className="mb-6">
                  <div className="inline-flex items-center px-3 py-1 rounded bg-green-100 text-green-800">
                    <span className="font-medium">Stokta Mevcut</span>
                  </div>
                </div>
                
                {/* Miktar Seçimi */}
                <div className="flex items-center mb-6">
                  <span className="text-gray-700 mr-4">Miktar:</span>
                  <div className="flex items-center border border-gray-300 rounded">
                    <button 
                      onClick={decreaseQuantity}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                      disabled={quantity <= 1}
                    >
                      <FiMinus size={16} />
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                    <button 
                      onClick={increaseQuantity}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                      disabled={quantity >= 10}
                    >
                      <FiPlus size={16} />
                    </button>
                  </div>
                </div>
                
                {/* Sepete Ekle ve Favori */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <button className="flex-1 btn btn-primary text-base py-3">
                    <FiShoppingCart className="mr-2" />
                    Sepete Ekle
                  </button>
                  <button className="btn border border-gray-300 hover:bg-gray-100 py-3">
                    <FiHeart className="mr-2" />
                    Favorilere Ekle
                  </button>
                  <button className="btn border border-gray-300 hover:bg-gray-100 py-3">
                    <FiShare2 className="mr-2" />
                    Paylaş
                  </button>
                </div>
                
                {/* Kategori */}
                <div className="mt-6">
                  <span className="text-gray-600">Kategori: </span>
                  <Link href={`/category/${product.categorySlug}`} className="text-primary-600 hover:underline">
                    {product.category}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benzer Ürünler */}
        {relatedProducts.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Benzer Ürünler</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct, index) => (
                  <div key={index} className="card group">
                    <div className="relative overflow-hidden">
                      <Link href={`/product/${relatedProduct.slug}`}>
                        <div className="aspect-w-3 aspect-h-4 relative">
                          <img 
                            src={relatedProduct.image} 
                            alt={relatedProduct.name} 
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
                          />
                        </div>
                      </Link>
                      
                      {/* Badges */}
                      <div className="absolute top-2 left-2 flex flex-col gap-2 z-10">
                        {relatedProduct.isNew && (
                          <span className="bg-secondary-600 text-white text-xs font-bold px-2 py-1 rounded">
                            Yeni
                          </span>
                        )}
                        {relatedProduct.discount > 0 && (
                          <span className="bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">
                            %{relatedProduct.discount} İndirim
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
                      <Link href={`/product/${relatedProduct.slug}`} className="block">
                        <h3 className="text-gray-800 font-medium mb-2 group-hover:text-primary-600 transition-colors duration-300">
                          {relatedProduct.name}
                        </h3>
                      </Link>
                      
                      <div className="flex items-center">
                        {relatedProduct.discount > 0 ? (
                          <>
                            <span className="text-primary-600 font-bold text-lg">{relatedProduct.price.toFixed(2)} TL</span>
                            <span className="text-gray-400 text-sm line-through ml-2">{relatedProduct.originalPrice.toFixed(2)} TL</span>
                          </>
                        ) : (
                          <span className="text-primary-600 font-bold text-lg">{relatedProduct.price.toFixed(2)} TL</span>
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
        )}
      </main>

      <Footer />
    </div>
  );
} 