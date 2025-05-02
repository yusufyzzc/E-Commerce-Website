import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FiChevronRight, FiRefreshCw, FiCheck, FiAlertTriangle } from 'react-icons/fi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function GuaranteeAndReturn() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Garanti ve İade Koşulları | MaviTicaret</title>
        <meta name="description" content="MaviTicaret garanti ve iade koşulları. Ürünlerimizin garanti bilgileri ve iade süreçleri hakkında bilgi edinin." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className="py-8">
        <div className="container">
          {/* Breadcrumb */}
          <div className="py-4 mb-6">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-primary-600">
                Anasayfa
              </Link>
              <FiChevronRight className="mx-2" size={16} />
              <span className="font-medium text-gray-900">Garanti ve İade Koşulları</span>
            </div>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold mb-6">Garanti ve İade Koşulları</h1>
            
            <div className="prose max-w-none text-gray-700">
              <p className="mb-6">
                MaviTicaret olarak müşteri memnuniyetine büyük önem veriyoruz. Bu nedenle, satın aldığınız ürünler için sektör standartlarının üzerinde garanti ve iade koşulları sunmaktayız. Aşağıda ürünlerimizin garanti süreleri ve iade koşulları hakkında detaylı bilgiler bulabilirsiniz.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 mb-8 mt-8">
                <div className="bg-primary-50 p-6 rounded-lg flex-1 flex flex-col items-center text-center">
                  <FiRefreshCw className="text-primary-600 mb-3" size={40} />
                  <h3 className="text-xl font-semibold mb-2">14 Gün İade Hakkı</h3>
                  <p className="text-gray-600">Tüm ürünlerimizde 14 gün koşulsuz iade garantisi sunuyoruz.</p>
                </div>
                
                <div className="bg-primary-50 p-6 rounded-lg flex-1 flex flex-col items-center text-center">
                  <FiCheck className="text-primary-600 mb-3" size={40} />
                  <h3 className="text-xl font-semibold mb-2">2 Yıl Garanti</h3>
                  <p className="text-gray-600">Elektronik ürünlerimizde 2 yıl garantili hizmet sağlıyoruz.</p>
                </div>
                
                <div className="bg-primary-50 p-6 rounded-lg flex-1 flex flex-col items-center text-center">
                  <FiAlertTriangle className="text-primary-600 mb-3" size={40} />
                  <h3 className="text-xl font-semibold mb-2">Hasarlı Ürün Bildirimi</h3>
                  <p className="text-gray-600">Hasarlı ürünleri 24 saat içinde bildirmeniz gerekmektedir.</p>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">1. Garanti Koşulları</h2>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">1.1. Garanti Süresi</h3>
              <p className="mb-4">
                Ürün gruplarına göre garanti süreleri şu şekildedir:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Elektronik ürünler: 2 yıl</li>
                <li>Ev tekstil ürünleri: 1 yıl</li>
                <li>Aksesuar ve dekorasyon ürünleri: 6 ay</li>
                <li>Kozmetik ve kişisel bakım ürünleri: Açılmamış ambalajda olmak kaydıyla 30 gün</li>
              </ul>
              <p className="mb-4">
                Garanti süresi, ürünün tarafınıza teslim edildiği tarihten itibaren başlar.
              </p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">1.2. Garanti Kapsamı</h3>
              <p className="mb-4">
                Satın aldığınız ürünler, garanti süresi içerisinde malzeme ve işçilik hatalarına karşı garantilidir. Bu garanti, ürünün normal kullanım koşulları altında ve kullanım talimatlarına uygun şekilde kullanılması durumunda geçerlidir.
              </p>
              <p className="mb-4">
                Aşağıdaki durumlar garanti kapsamında değildir:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Kullanıcı hatası veya yanlış kullanımdan kaynaklanan arızalar</li>
                <li>Ürünün düşürülmesi, çarpması veya darbe alması sonucu oluşan hasarlar</li>
                <li>Yetkisiz kişilerce tamir, bakım veya modifikasyon yapılması</li>
                <li>Doğal afetler, yangın, su baskını gibi mücbir sebepler</li>
                <li>Normal aşınma ve yıpranma</li>
                <li>Seri numarası değiştirilmiş veya silinmiş ürünler</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">1.3. Garanti Hizmeti</h3>
              <p className="mb-4">
                Garanti süresi içerisinde arızalanan ürünler için aşağıdaki hizmetlerden biri sağlanacaktır:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Ürünün tamiri</li>
                <li>Ürünün aynısı ile değiştirilmesi (aynı ürün mevcut değilse, muadil bir ürünle değişim)</li>
                <li>Ürün bedelinin iadesi</li>
              </ul>
              <p className="mb-4">
                Garanti kapsamındaki ürün onarımlarında, parça değişimi ve işçilik ücretsizdir. Garanti kapsamındaki ürünlerin kargo bedeli MaviTicaret tarafından karşılanır.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">2. İade Koşulları</h2>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">2.1. Cayma Hakkı</h3>
              <p className="mb-4">
                6502 sayılı Tüketicinin Korunması Hakkında Kanun uyarınca, ürünü teslim aldığınız tarihten itibaren 14 gün içerisinde, herhangi bir gerekçe belirtmeksizin ve cezai şart ödemeksizin ürünü iade etme hakkına sahipsiniz.
              </p>
              <p className="mb-4">
                Cayma hakkınızı kullanmak için, bu süre içinde bize yazılı bildirimde bulunmanız yeterlidir. Cayma bildirimini, <Link href="/contact" className="text-primary-600 hover:underline">iletişim sayfamızdaki</Link> formu doldurarak veya info@maviticaret.com adresine e-posta göndererek yapabilirsiniz.
              </p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">2.2. İade Koşulları</h3>
              <p className="mb-4">
                İade edilecek ürünler için aşağıdaki koşullar geçerlidir:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Ürün kullanılmamış, denenmemiş ve orijinal ambalajında olmalıdır.</li>
                <li>Ürünün tüm parçaları, aksesuarları, kullanım kılavuzları, garanti belgeleri ve faturası eksiksiz olarak iade edilmelidir.</li>
                <li>Hediyelik paketleme ve kişiye özel hazırlanan ürünler iade edilemez.</li>
                <li>Kozmetik ve kişisel bakım ürünleri, hijyenik sebepler nedeniyle ambalajı açıldıktan sonra iade edilemez.</li>
                <li>İndirimsiz bedeli 100 TL'nin altında olan ürünler için iade kargo bedeli müşteri tarafından karşılanır.</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">2.3. İade Süreci</h3>
              <p className="mb-4">
                İade sürecinde aşağıdaki adımları takip edebilirsiniz:
              </p>
              <ol className="list-decimal pl-5 mb-4">
                <li>İletişim sayfamızdaki iade formunu doldurun veya müşteri hizmetlerimizi arayarak iade talebinde bulunun.</li>
                <li>İade onayı ve kargo gönderim bilgileri e-posta adresinize iletilecektir.</li>
                <li>Ürünü orijinal ambalajında ve tüm ekleriyle birlikte belirtilen kargo firması ile gönderiniz.</li>
                <li>İade ettiğiniz ürünün tarafımıza ulaşmasını takiben, ürün kontrolü yapılacaktır.</li>
                <li>Ürünün onaylanmasının ardından, ödeme yaptığınız kanaldan (kredi kartı, havale, kapıda ödeme vb.) iade işleminiz gerçekleştirilecektir.</li>
              </ol>
              <p className="mb-4">
                İade işlemlerinin tamamlanması, bankanızın çalışma koşullarına bağlı olarak 7-14 iş günü sürebilir.
              </p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">2.4. Hasarlı Ürün İadesi</h3>
              <p className="mb-4">
                Kargo ile gelen ürünü teslim alırken, paket üzerinde herhangi bir hasar olup olmadığını kontrol etmenizi öneririz. Hasar tespit etmeniz durumunda, kargo görevlisi ile birlikte tutanak tutulmalı ve durum 24 saat içinde müşteri hizmetlerimize bildirilmelidir.
              </p>
              <p className="mb-4">
                Paketi açtığınızda ürünün hasarlı olduğunu fark ederseniz, yine 24 saat içinde durumu fotoğraflarla birlikte bize bildirmeniz gerekmektedir. Hasarlı ürünlerin iade kargo bedeli tarafımızca karşılanacaktır.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">3. İletişim</h2>
              <p className="mb-4">
                Garanti ve iade işlemleri hakkında sorularınız için aşağıdaki iletişim kanallarından bize ulaşabilirsiniz:
              </p>
              <p className="mb-4">
                Müşteri Hizmetleri: 0850 123 4567<br />
                E-posta: info@maviticaret.com<br />
                <Link href="/contact" className="text-primary-600 hover:underline">İletişim Formu</Link>
              </p>
              
              <p className="mt-8 text-sm text-gray-500">
                Son Güncelleme Tarihi: 01.06.2023
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 