import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Çerez Politikası | MaviTicaret</title>
        <meta name="description" content="MaviTicaret çerez politikası. Web sitemizde kullanılan çerezler hakkında bilgi edinin." />
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
              <span className="font-medium text-gray-900">Çerez Politikası</span>
            </div>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold mb-6">Çerez Politikası</h1>
            
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Bu Çerez Politikası, MaviTicaret ("biz", "bizim" veya "şirketimiz") tarafından yönetilen web sitesinde kullanılan çerezler hakkında bilgi vermek amacıyla hazırlanmıştır.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">1. Çerez Nedir?</h2>
              <p className="mb-4">
                Çerezler (cookies), kullanıcıların web sitelerini daha etkili ve verimli bir şekilde kullanabilmeleri için web sunucuları tarafından bilgisayarlara veya mobil cihazlara yerleştirilen küçük metin dosyalarıdır. Çerezler, web sitesi ziyaretçilerinin tercihlerini hatırlamaya, web sitesinin kullanımını kolaylaştırmaya ve ziyaretçilerin ilgi alanlarına göre içerik sunmaya yardımcı olur.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">2. Çerez Türleri</h2>
              <p className="mb-4">
                Sitemizde kullanılan çerezler, özellikleri ve amaçlarına göre aşağıdaki kategorilere ayrılabilir:
              </p>
              
              <h3 className="text-lg font-semibold mt-5 mb-3">2.1. Süre Bakımından Çerez Türleri</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>
                  <strong>Oturum Çerezleri (Session Cookies):</strong> Yalnızca web sitesini ziyaret ettiğiniz süre boyunca tarayıcınızda tutulan geçici çerezlerdir. Tarayıcınızı kapattığınızda bu çerezler otomatik olarak silinir.
                </li>
                <li>
                  <strong>Kalıcı Çerezler (Persistent Cookies):</strong> Tarayıcınız kapansa bile cihazınızda saklanan ve belirli bir süre boyunca veya siz manuel olarak silene kadar cihazınızda kalan çerezlerdir.
                </li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-5 mb-3">2.2. Kaynak Bakımından Çerez Türleri</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>
                  <strong>Birinci Taraf Çerezleri (First-Party Cookies):</strong> Doğrudan ziyaret ettiğiniz web sitesi (maviticaret.com) tarafından cihazınıza yerleştirilen çerezlerdir.
                </li>
                <li>
                  <strong>Üçüncü Taraf Çerezleri (Third-Party Cookies):</strong> Ziyaret ettiğiniz web sitesinden farklı bir alan adından gelen çerezlerdir. Genellikle reklam, analiz veya sosyal medya eklentileri için kullanılır.
                </li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-5 mb-3">2.3. Amaç Bakımından Çerez Türleri</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>
                  <strong>Zorunlu Çerezler (Necessary Cookies):</strong> Web sitesinin düzgün çalışması için kesinlikle gerekli olan çerezlerdir. Bu çerezler, web sitesinde gezinme ve özelliklerinden yararlanma gibi temel işlevleri sağlar.
                </li>
                <li>
                  <strong>Tercih Çerezleri (Preference Cookies):</strong> Web sitesi ziyaretçilerinin tercihlerini hatırlamak için kullanılan çerezlerdir. Bu çerezler sayesinde kullanıcılar, web sitesini her ziyaret ettiklerinde tercihlerini tekrar ayarlamak zorunda kalmazlar.
                </li>
                <li>
                  <strong>İstatistik Çerezleri (Statistics Cookies):</strong> Web sitesinin nasıl kullanıldığını anlamak ve analiz etmek için kullanılan çerezlerdir. Bu çerezler, ziyaretçi sayısı, sayfa görüntüleme sayısı, ziyaret süresi gibi istatistiksel verileri toplar.
                </li>
                <li>
                  <strong>Pazarlama Çerezleri (Marketing Cookies):</strong> Kullanıcılara ilgi alanlarına göre reklamlar sunmak için kullanılan çerezlerdir. Bu çerezler, kullanıcıların web sitesi üzerindeki davranışlarını takip ederek, ilgi alanlarına göre hedefli reklamlar sunar.
                </li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">3. Sitemizde Kullanılan Çerezler</h2>
              <p className="mb-4">
                Sitemizde aşağıdaki çerezleri kullanmaktayız:
              </p>
              
              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2 text-left">Çerez Adı</th>
                    <th className="border border-gray-300 p-2 text-left">Çerez Türü</th>
                    <th className="border border-gray-300 p-2 text-left">Amacı</th>
                    <th className="border border-gray-300 p-2 text-left">Saklama Süresi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">session_id</td>
                    <td className="border border-gray-300 p-2">Zorunlu</td>
                    <td className="border border-gray-300 p-2">Kullanıcı oturumunu yönetmek için</td>
                    <td className="border border-gray-300 p-2">Oturum süresi</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">user_preferences</td>
                    <td className="border border-gray-300 p-2">Tercih</td>
                    <td className="border border-gray-300 p-2">Kullanıcı dil tercihi, tema vb. bilgileri saklamak için</td>
                    <td className="border border-gray-300 p-2">1 yıl</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">_ga</td>
                    <td className="border border-gray-300 p-2">İstatistik</td>
                    <td className="border border-gray-300 p-2">Google Analytics tarafından kullanıcıları ayırt etmek için</td>
                    <td className="border border-gray-300 p-2">2 yıl</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">_gid</td>
                    <td className="border border-gray-300 p-2">İstatistik</td>
                    <td className="border border-gray-300 p-2">Google Analytics tarafından kullanıcıları ayırt etmek için</td>
                    <td className="border border-gray-300 p-2">24 saat</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">_fbp</td>
                    <td className="border border-gray-300 p-2">Pazarlama</td>
                    <td className="border border-gray-300 p-2">Facebook piksel takibi için</td>
                    <td className="border border-gray-300 p-2">3 ay</td>
                  </tr>
                </tbody>
              </table>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">4. Çerez Yönetimi</h2>
              <p className="mb-4">
                Çoğu web tarayıcısı, çerezleri otomatik olarak kabul eder. Ancak dilerseniz, tarayıcı ayarlarınızı değiştirerek çerezleri reddedebilir veya kısıtlayabilirsiniz. Çerezleri nasıl yönetebileceğinize dair bilgilere aşağıdaki tarayıcı bağlantılarından ulaşabilirsiniz:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/tr/kb/cerezleri-silme-web-sitelerinin-bilgilerini-kaldirma" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/tr-tr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/tr-tr/windows/microsoft-edge-g%C3%B6z-atma-verilerini-silme-8c213e32-18d1-656a-154a-d7a3977df563" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Microsoft Edge</a></li>
              </ul>
              <p className="mb-4">
                Çerezleri devre dışı bırakmanız durumunda, web sitemizin bazı özelliklerinin düzgün çalışmayabileceğini ve kullanıcı deneyiminizin olumsuz etkilenebileceğini lütfen unutmayın.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">5. Değişiklikler</h2>
              <p className="mb-4">
                MaviTicaret, Çerez Politikası'nı dilediği zaman değiştirebilir. Değişiklikler, sitede yayınlandığı tarihte yürürlüğe girer. Bu nedenle, politikada yapılan güncellemeleri düzenli olarak kontrol etmenizi öneririz.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">6. İletişim</h2>
              <p className="mb-4">
                Bu Çerez Politikası hakkında herhangi bir sorunuz varsa, lütfen aşağıdaki iletişim bilgilerini kullanarak bizimle iletişime geçin:
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