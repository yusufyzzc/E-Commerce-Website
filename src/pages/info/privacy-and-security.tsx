import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PrivacyAndSecurity() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Gizlilik ve Güvenlik | MaviTicaret</title>
        <meta name="description" content="MaviTicaret gizlilik ve güvenlik politikası. Kişisel verilerinizin nasıl korunduğunu öğrenin." />
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
              <span className="font-medium text-gray-900">Gizlilik ve Güvenlik</span>
            </div>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold mb-6">Gizlilik ve Güvenlik Politikası</h1>
            
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                MaviTicaret olarak, müşterilerimizin gizliliğine saygı duyuyor ve kişisel verilerinizin güvenliğini önemsiyoruz. Bu Gizlilik ve Güvenlik Politikası, sitemiz üzerinden toplanan bilgilerin nasıl kullanıldığını ve korunduğunu açıklamaktadır.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">1. Toplanan Bilgiler</h2>
              <p className="mb-4">
                1.1. MaviTicaret, aşağıdaki kişisel verileri toplayabilir:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Ad, soyad, e-posta adresi, telefon numarası gibi iletişim bilgileri</li>
                <li>Teslimat ve fatura adresi</li>
                <li>Sipariş bilgileri ve satın alma geçmişi</li>
                <li>Ödeme bilgileri (kredi kartı bilgileri saklanmaz)</li>
                <li>Site kullanım alışkanlıkları ve tercihler</li>
                <li>IP adresi, cihaz bilgileri ve konum verileri</li>
              </ul>
              <p className="mb-4">
                1.2. Bilgiler, doğrudan sizin tarafınızdan sağlanabileceği gibi, sitemizi kullanmanız sırasında çerezler ve benzer teknolojiler aracılığıyla da toplanabilir.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">2. Bilgilerin Kullanım Amacı</h2>
              <p className="mb-4">
                2.1. Toplanan kişisel veriler aşağıdaki amaçlarla kullanılabilir:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Siparişlerinizi işleme koymak ve yönetmek</li>
                <li>Size ürün ve hizmetlerimizi sunmak</li>
                <li>Müşteri hizmetleri sağlamak</li>
                <li>Sizinle iletişim kurmak</li>
                <li>Yasal yükümlülüklerimizi yerine getirmek</li>
                <li>Ürün ve hizmetlerimizi geliştirmek</li>
                <li>Kişiselleştirilmiş pazarlama ve reklam faaliyetleri yürütmek (izin vermeniz halinde)</li>
                <li>Dolandırıcılık ve diğer yasadışı faaliyetleri önlemek ve tespit etmek</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">3. Bilgilerin Paylaşılması</h2>
              <p className="mb-4">
                3.1. MaviTicaret, kişisel verilerinizi aşağıdaki durumlar dışında üçüncü kişilerle paylaşmaz:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Siparişinizin işlenmesi ve teslimatı için gerekli olması halinde (kargo şirketleri, tedarikçiler vb.)</li>
                <li>Yasal bir yükümlülüğümüzün olması halinde (mahkeme kararı, yasal talep vb.)</li>
                <li>İş ortaklarımız ve hizmet sağlayıcılarımızla (ödeme hizmetleri, müşteri hizmetleri vb.)</li>
                <li>Açık rızanızın bulunması halinde</li>
              </ul>
              <p className="mb-4">
                3.2. Üçüncü taraflarla paylaşılan kişisel verileriniz, sadece belirtilen amaçlar için kullanılacak ve bu üçüncü tarafların uygun güvenlik önlemlerine sahip olmaları sağlanacaktır.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">4. Veri Güvenliği</h2>
              <p className="mb-4">
                4.1. MaviTicaret, kişisel verilerinizin güvenliğini sağlamak için endüstri standardı güvenlik önlemlerini uygulamaktadır.
              </p>
              <p className="mb-4">
                4.2. Web sitemizde SSL (Secure Socket Layer) şifreleme teknolojisi kullanılmaktadır. Bu teknoloji, iletilen tüm bilgilerin şifrelenmesini sağlayarak, bilgilerinizin güvenliğini korur.
              </p>
              <p className="mb-4">
                4.3. Ödeme işlemleri sırasında paylaşılan kredi kartı bilgileri tarafımızca saklanmaz ve doğrudan güvenli ödeme hizmet sağlayıcılarına aktarılır.
              </p>
              <p className="mb-4">
                4.4. Kişisel verilerinize erişim, sadece işlerini yapmaları için bu bilgilere ihtiyaç duyan yetkilendirilmiş personel ile sınırlıdır.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">5. Çerezler (Cookies)</h2>
              <p className="mb-4">
                5.1. Web sitemiz, kullanıcı deneyimini geliştirmek, tercihlerinizi hatırlamak ve site kullanımını analiz etmek için çerezler kullanmaktadır.
              </p>
              <p className="mb-4">
                5.2. Çerezleri kabul etmek zorunda değilsiniz. Tarayıcı ayarlarınızı değiştirerek çerezleri reddedebilir veya çerez gönderildiğinde uyarı verilmesini sağlayabilirsiniz. Ancak, çerezleri reddetmeniz durumunda sitemizin bazı özelliklerinin düzgün çalışmayabileceğini unutmayın.
              </p>
              <p className="mb-4">
                5.3. Çerezler hakkında daha detaylı bilgi için <Link href="/info/cookie-policy" className="text-primary-600 hover:underline">Çerez Politikamıza</Link> bakabilirsiniz.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">6. Haklarınız</h2>
              <p className="mb-4">
                6.1. Kişisel Verilerin Korunması Kanunu kapsamında aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
                <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                <li>Kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
                <li>İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
                <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme</li>
              </ul>
              <p className="mb-4">
                6.2. Bu haklarınızı kullanmak için bizimle <Link href="/contact" className="text-primary-600 hover:underline">iletişim sayfamız</Link> üzerinden veya info@maviticaret.com e-posta adresi üzerinden iletişime geçebilirsiniz.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">7. Değişiklikler</h2>
              <p className="mb-4">
                7.1. MaviTicaret, bu Gizlilik ve Güvenlik Politikası'nı dilediği zaman değiştirebilir. Değişiklikler, sitede yayınlandığı tarihte yürürlüğe girer.
              </p>
              <p className="mb-4">
                7.2. Önemli değişiklikler olması durumunda, sitemizde bir bildirim yayınlayacağız ve kayıtlı e-posta adresiniz varsa size e-posta göndereceğiz.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">8. İletişim</h2>
              <p className="mb-4">
                8.1. Bu Gizlilik ve Güvenlik Politikası hakkında sorularınız veya talepleriniz için aşağıdaki iletişim bilgilerini kullanabilirsiniz:
              </p>
              <p className="mb-4">
                E-posta: info@maviticaret.com<br />
                Telefon: 0850 123 4567<br />
                Adres: Atatürk Mah. E-Ticaret Cad. No:123 Kat:4 Daire:15 Ataşehir/İstanbul
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