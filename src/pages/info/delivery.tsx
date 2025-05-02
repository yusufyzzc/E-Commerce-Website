import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FiChevronRight, FiTruck, FiPackage, FiClock, FiMapPin, FiCreditCard, FiShield } from 'react-icons/fi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function DeliveryConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Teslimat Koşulları | MaviTicaret</title>
        <meta name="description" content="MaviTicaret teslimat koşulları. Siparişlerinizin teslimat süreçleri ve koşulları hakkında bilgi edinin." />
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
              <span className="font-medium text-gray-900">Teslimat Koşulları</span>
            </div>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold mb-6">Teslimat Koşulları</h1>
            
            <div className="prose max-w-none text-gray-700">
              <p className="mb-6">
                MaviTicaret olarak, müşterilerimize en hızlı ve güvenilir teslimat hizmetini sunmak için çalışıyoruz. Siparişlerinizin teslimat süreci ve koşulları hakkında aşağıdaki bilgileri paylaşmak isteriz.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-primary-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <FiTruck className="text-primary-600 mb-3" size={40} />
                  <h3 className="text-xl font-semibold mb-2">Hızlı Teslimat</h3>
                  <p className="text-gray-600">Siparişleriniz, ödeme onayından sonra ortalama 1-3 iş günü içerisinde kargoya verilir.</p>
                </div>
                
                <div className="bg-primary-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <FiPackage className="text-primary-600 mb-3" size={40} />
                  <h3 className="text-xl font-semibold mb-2">Güvenli Paketleme</h3>
                  <p className="text-gray-600">Tüm ürünlerimiz özenle paketlenir ve güvenli şekilde sevkiyata hazırlanır.</p>
                </div>
                
                <div className="bg-primary-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <FiMapPin className="text-primary-600 mb-3" size={40} />
                  <h3 className="text-xl font-semibold mb-2">Türkiye'nin Her Yerine</h3>
                  <p className="text-gray-600">Türkiye'nin tüm il ve ilçelerine teslimat yapılmaktadır.</p>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">1. Teslimat Süresi</h2>
              <p className="mb-4">
                1.1. Siparişleriniz, ödeme onayından sonra ortalama 1-3 iş günü içerisinde kargoya verilir.
              </p>
              <p className="mb-4">
                1.2. Kargoya verildikten sonra, bulunduğunuz bölgeye göre teslimat süresi 1-3 iş günü arasında değişebilir.
              </p>
              <p className="mb-4">
                1.3. Resmi tatil günlerinde ve hafta sonlarında kargo firmaları çalışmadığından, bu günlerde teslimat yapılmamaktadır.
              </p>
              <p className="mb-4">
                1.4. Stokta olmayan veya özel sipariş ürünleri için teslimat süresi farklılık gösterebilir. Bu durumlarda müşterilerimiz ayrıca bilgilendirilir.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">2. Teslimat Bölgeleri</h2>
              <p className="mb-4">
                2.1. MaviTicaret, Türkiye'nin tüm il ve ilçelerine teslimat yapmaktadır.
              </p>
              <p className="mb-4">
                2.2. Bazı uzak bölgelere veya kırsal alanlara teslimat süreleri daha uzun olabilir.
              </p>
              <p className="mb-4">
                2.3. Şu an için yurt dışına teslimat hizmetimiz bulunmamaktadır.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">3. Kargo Ücretleri</h2>
              <p className="mb-4">
                3.1. 300 TL ve üzeri siparişlerde kargo ücretsizdir.
              </p>
              <p className="mb-4">
                3.2. 300 TL altındaki siparişlerde, ürün adedi ve ağırlığına göre değişen kargo ücreti sipariş toplamına eklenir. Kargo ücreti, sipariş tamamlanmadan önce müşteriye bildirilir.
              </p>
              <p className="mb-4">
                3.3. Kampanyalı dönemlerde kargo ücretlerinde değişiklik olabilir. Bu değişiklikler, kampanya sayfalarında belirtilir.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">4. Teslimat Kontrolü</h2>
              <p className="mb-4">
                4.1. Kargo teslimatı sırasında, paketinizi teslim almadan önce dış ambalajda herhangi bir hasar olup olmadığını kontrol etmenizi öneririz.
              </p>
              <p className="mb-4">
                4.2. Herhangi bir hasar tespit etmeniz durumunda, kargo görevlisi ile birlikte tutanak tutulmalı ve durum hemen müşteri hizmetlerimize bildirilmelidir.
              </p>
              <p className="mb-4">
                4.3. Paketinizi açtıktan sonra içeriğini kontrol edin. Herhangi bir eksiklik veya hasar durumunda 24 saat içinde müşteri hizmetlerimize bilgi vermenizi rica ederiz.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">5. Teslimat Adresi</h2>
              <p className="mb-4">
                5.1. Siparişiniz, sipariş formunda belirttiğiniz teslimat adresine gönderilir.
              </p>
              <p className="mb-4">
                5.2. Adres bilgilerinizin doğru ve eksiksiz olduğundan emin olun. Yanlış veya eksik adres bilgisi nedeniyle gerçekleşemeyen teslimatlardan MaviTicaret sorumlu değildir.
              </p>
              <p className="mb-4">
                5.3. Sipariş verdikten sonra teslimat adresinizi değiştirmek isterseniz, en kısa sürede müşteri hizmetlerimizle iletişime geçmeniz gerekir. Kargoya verilmiş siparişlerin adres değişikliği yapılamaz.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">6. Teslimat Sırasında Bulunmama Durumu</h2>
              <p className="mb-4">
                6.1. Teslimat sırasında belirtilen adreste kimse bulunmazsa, kargo görevlisi bir bildirim bırakır ve genellikle ertesi iş günü tekrar teslimat denemesi yapılır.
              </p>
              <p className="mb-4">
                6.2. Üç başarısız teslimat denemesinden sonra, paket kargo firmasının şubesinde 7 gün boyunca bekletilir. Bu süre içinde teslim alınmayan siparişler MaviTicaret'e iade edilir.
              </p>
              <p className="mb-4">
                6.3. Müşteri kaynaklı iadeler için, sipariş tutarından kargo bedeli düşülerek iade işlemi gerçekleştirilir.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">7. Kargo Firmalarımız</h2>
              <p className="mb-4">
                7.1. Siparişleriniz, anlaşmalı olduğumuz kargo firmaları (Aras Kargo, Yurtiçi Kargo, MNG Kargo) aracılığıyla teslim edilmektedir.
              </p>
              <p className="mb-4">
                7.2. Teslimat için belirli bir kargo firması tercihiniz varsa, sipariş notu kısmına belirtmenizi rica ederiz. İmkanlar dahilinde tercih ettiğiniz kargo firması ile gönderim sağlanacaktır.
              </p>
              
              <div className="bg-gray-100 p-6 rounded-lg mt-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <FiShield className="mr-2 text-primary-600" />
                  Teslimat Garantimiz
                </h2>
                <p className="mb-4">
                  MaviTicaret olarak, siparişlerinizin zamanında ve güvenli bir şekilde teslim edilmesi için elimizden gelenin en iyisini yapıyoruz. Herhangi bir sorun yaşamanız durumunda, 7/24 müşteri hizmetlerimiz yardımcı olmak için hazırdır.
                </p>
                <p>
                  Müşteri Hizmetleri: <span className="font-semibold">0850 123 4567</span><br />
                  E-posta: <span className="font-semibold">info@maviticaret.com</span>
                </p>
              </div>
              
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