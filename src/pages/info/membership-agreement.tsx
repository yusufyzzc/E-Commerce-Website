import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function MembershipAgreement() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Üyelik Sözleşmesi | MaviTicaret</title>
        <meta name="description" content="MaviTicaret.com üyelik sözleşmesi. Lütfen sitemize üye olmadan önce okuyunuz." />
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
              <span className="font-medium text-gray-900">Üyelik Sözleşmesi</span>
            </div>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold mb-6">Üyelik Sözleşmesi</h1>
            
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Aşağıda yer alan şartlar, maviticaret.com web sitesinin kullanımını düzenleyen kuralları içermektedir. Siteye erişim sağlayan ve/veya kullanan her gerçek ve tüzel kişi aşağıdaki kullanım koşullarını kabul etmiş sayılır.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">1. Tanımlar</h2>
              <p className="mb-4">
                <strong>Site:</strong> maviticaret.com alan adından ve bu alan adına bağlı alt alan adlarından oluşan internet sitesini,<br />
                <strong>Kullanıcı:</strong> Siteye erişim sağlayan ve/veya kullanan her gerçek ve tüzel kişiyi,<br />
                <strong>Üye:</strong> Sitede sunulan hizmetlerden faydalanabilmek amacıyla Kullanım Koşulları'nı kabul ederek üyelik formunu dolduran ve Site tarafından üyelikleri onaylanan gerçek ve tüzel kişi Kullanıcı'yı,<br />
                <strong>MaviTicaret:</strong> maviticaret.com web sitesi ve mobil uygulamalarının sahibi tüzel kişiyi ifade eder.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">2. Üyelik</h2>
              <p className="mb-4">
                2.1. Üyelik, üyelik formunun doldurulması ve Site tarafından üyeliğin onaylanması ile tamamlanır.
              </p>
              <p className="mb-4">
                2.2. Üye olmak için 18 yaşını doldurmuş olmak gerekmektedir. 18 yaşını doldurmamış kişilerin üye olması yasaktır.
              </p>
              <p className="mb-4">
                2.3. Üye, üyelik formunda yer alan bilgilerin doğru, güncel ve eksiksiz olduğunu beyan ve taahhüt eder. Bilgilerin yanlış, güncel olmayan veya eksik olmasından doğacak her türlü zarardan Üye sorumludur.
              </p>
              <p className="mb-4">
                2.4. Üye, kullanıcı adı ve şifresini başkalarıyla paylaşmamayı, başkalarının erişimine kapalı tutmayı ve her türlü tedbiri almayı taahhüt eder. Bu bilgilerin herhangi bir nedenle üçüncü kişiler tarafından öğrenilmesinden ve kullanılmasından MaviTicaret sorumlu değildir.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">3. Hak ve Yükümlülükler</h2>
              <p className="mb-4">
                3.1. MaviTicaret, Site üzerinden sunduğu hizmetlerin kapsamını, niteliğini ve içeriğini dilediği zaman değiştirme hakkını saklı tutar.
              </p>
              <p className="mb-4">
                3.2. Üye, Site'yi kullanırken yürürlükteki mevzuata aykırı davranmayacağını, üçüncü kişilerin haklarını ihlal etmeyeceğini ve haksız rekabete yol açacak davranışlarda bulunmayacağını kabul ve taahhüt eder.
              </p>
              <p className="mb-4">
                3.3. Üye, Site'ye üye olurken ve/veya Site'yi kullanırken doğru, güncel ve eksiksiz bilgiler vermekle yükümlüdür.
              </p>
              <p className="mb-4">
                3.4. MaviTicaret, Üye'nin Site üzerindeki faaliyetlerini izleyebilir, kayıt altına alabilir ve gerektiğinde yetkili makamlara sunabilir.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">4. Üyeliğin Sona Ermesi</h2>
              <p className="mb-4">
                4.1. Üye, dilediği zaman herhangi bir gerekçe göstermeksizin üyelikten çıkma hakkına sahiptir.
              </p>
              <p className="mb-4">
                4.2. MaviTicaret, Üye'nin Kullanım Koşulları'na aykırı davranması halinde Üye'nin üyeliğini herhangi bir bildirimde bulunmaksızın sona erdirebilir.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">5. Fikri Mülkiyet Hakları</h2>
              <p className="mb-4">
                5.1. Site'de yer alan tüm içerik, tasarım, logo, amblem, yazılım, veri tabanı, ticari marka ve diğer fikri mülkiyet hakları MaviTicaret'e veya MaviTicaret'in anlaşmalı olduğu kişilere aittir ve telif hakkı kanunları ile korunmaktadır.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">6. Gizlilik</h2>
              <p className="mb-4">
                6.1. MaviTicaret, Üye'nin kişisel bilgilerini Gizlilik Politikası'nda belirtilen amaçlar ve koşullar dışında herhangi bir üçüncü kişiye açıklamayacaktır.
              </p>
              <p className="mb-4">
                6.2. Üye, MaviTicaret'in yürürlükteki mevzuat uyarınca yetkili makamlardan talep gelmesi halinde Üye'nin kişisel bilgilerini ilgili yetkili makamlara açıklayabileceğini kabul eder.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">7. Sözleşme Değişiklikleri</h2>
              <p className="mb-4">
                7.1. MaviTicaret, Kullanım Koşulları'nda dilediği zaman değişiklik yapma hakkını saklı tutar. Değişiklikler, Site üzerinden yayınlandığı tarihte yürürlüğe girer.
              </p>
              <p className="mb-4">
                7.2. Üye, Site'yi kullanmaya devam etmekle, değişiklikleri kabul etmiş sayılır.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">8. Uygulanacak Hukuk ve Yetkili Mahkeme</h2>
              <p className="mb-4">
                8.1. Bu Kullanım Koşulları'nın uygulanmasında ve yorumlanmasında Türk Hukuku geçerli olacaktır.
              </p>
              <p className="mb-4">
                8.2. Bu Kullanım Koşulları'ndan doğabilecek her türlü uyuşmazlığın çözümünde İstanbul Merkez Mahkemeleri ve İcra Daireleri yetkilidir.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">9. Yürürlük</h2>
              <p className="mb-4">
                9.1. Bu Kullanım Koşulları, Üye'nin üyelik formunu doldurması ve Site tarafından üyeliğin onaylanması ile yürürlüğe girer ve taraflar arasında süresiz olarak yürürlükte kalır.
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