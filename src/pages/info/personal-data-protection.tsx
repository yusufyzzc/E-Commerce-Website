import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FiChevronRight, FiShield } from 'react-icons/fi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PersonalDataProtection() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Kişisel Verilerin Korunması | MaviTicaret</title>
        <meta name="description" content="MaviTicaret kişisel verilerin korunması hakkında bilgilendirme. KVKK uyarınca kişisel verilerinizin işlenmesi hakkında bilgi alın." />
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
              <span className="font-medium text-gray-900">Kişisel Verilerin Korunması</span>
            </div>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-6">
              <FiShield className="text-primary-600 mr-3" size={28} />
              <h1 className="text-3xl font-bold">Kişisel Verilerin Korunması</h1>
            </div>
            
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                MaviTicaret olarak kişisel verilerinizin güvenliği konusunda azami hassasiyet göstermekteyiz. 6698 Sayılı Kişisel Verilerin Korunması Kanunu kapsamında "Veri Sorumlusu" sıfatıyla, kişisel verilerinizi aşağıda açıklanan amaçlar doğrultusunda ve mevzuatın öngördüğü sınırlar çerçevesinde işlemekteyiz.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">1. Kişisel Verilerin İşlenme Amaçları</h2>
              <p className="mb-4">
                Kişisel verileriniz, MaviTicaret tarafından aşağıdaki amaçlarla işlenmektedir:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Üyelik kaydınızın oluşturulması ve yönetilmesi</li>
                <li>Sipariş süreçlerinin yönetilmesi ve siparişlerinizin size ulaştırılması</li>
                <li>Müşteri hizmetleri süreçlerinin yürütülmesi</li>
                <li>Ürün ve hizmetlerimizin geliştirilmesi ve iyileştirilmesi</li>
                <li>Yasal yükümlülüklerimizin yerine getirilmesi</li>
                <li>Bilgi güvenliği süreçlerinin yürütülmesi</li>
                <li>İletişim faaliyetlerinin yürütülmesi</li>
                <li>Müşteri memnuniyeti ölçümleri ve anket çalışmaları</li>
                <li>İzniniz olması halinde, pazarlama ve tanıtım faaliyetlerinin yürütülmesi</li>
                <li>Hukuki süreçlerin takibi ve yürütülmesi</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">2. İşlenen Kişisel Veriler</h2>
              <p className="mb-4">
                Yukarıda belirtilen amaçlar doğrultusunda işlenen kişisel verileriniz aşağıdaki gibidir:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, doğum tarihi, TC kimlik numarası vb.</li>
                <li><strong>İletişim Bilgileri:</strong> Telefon numarası, e-posta adresi, adres vb.</li>
                <li><strong>Müşteri İşlem Bilgileri:</strong> Sipariş bilgileri, fatura bilgileri, kargo takip bilgileri vb.</li>
                <li><strong>Finansal Bilgiler:</strong> Ödeme yöntemi, banka hesap bilgileri (sadece havale ile ödemelerde) vb.</li>
                <li><strong>Pazarlama Bilgileri:</strong> Alışveriş geçmişi, ürün tercihleri, ilgi alanları vb.</li>
                <li><strong>Elektronik İz Bilgileri:</strong> IP adresi, çerezler, site kullanım bilgileri vb.</li>
                <li><strong>Müşteri Memnuniyeti Bilgileri:</strong> Anket yanıtları, şikayet ve talepler vb.</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">3. Kişisel Verilerin Aktarılması</h2>
              <p className="mb-4">
                Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi için gerekli olduğu ölçüde ve ilgili mevzuat hükümleri çerçevesinde aşağıdaki kişi ve kurumlara aktarılabilir:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Siparişlerinizin teslim edilmesini sağlamak amacıyla kargo ve lojistik şirketleri</li>
                <li>Ödeme işlemlerinin gerçekleştirilmesi amacıyla bankalar ve ödeme kuruluşları</li>
                <li>Yasal yükümlülüklerimiz kapsamında yetkili kamu kurum ve kuruluşları</li>
                <li>Hukuki süreçlerin takibi amacıyla danışmanlar ve avukatlar</li>
                <li>Bilgi teknolojileri hizmetleri aldığımız tedarikçiler</li>
                <li>Müşteri hizmetleri süreçlerinin yürütülmesi amacıyla hizmet sağlayıcılar</li>
              </ul>
              <p className="mb-4">
                Kişisel verileriniz, açık rızanız olmaksızın yurt dışına aktarılmamaktadır.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">4. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h2>
              <p className="mb-4">
                Kişisel verileriniz, aşağıdaki kanallar üzerinden ve belirtilen hukuki sebeplere dayanılarak toplanmaktadır:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Web sitemiz üzerinden üyelik ve sipariş formlarının doldurulması</li>
                <li>Müşteri hizmetlerimiz ile gerçekleştirilen telefon görüşmeleri</li>
                <li>E-posta, sosyal medya ve diğer elektronik kanallar üzerinden iletilen mesajlar</li>
                <li>Çerezler (cookies) ve benzer teknolojiler aracılığıyla otomatik olarak toplanan veriler</li>
              </ul>
              <p className="mb-4">
                Kişisel verileriniz, KVKK'nın 5. ve 6. maddelerinde belirtilen aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Açık rızanızın bulunması</li>
                <li>Kanunlarda açıkça öngörülmesi</li>
                <li>Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması</li>
                <li>Hukuki yükümlülüğümüzün yerine getirilmesi</li>
                <li>Temel hak ve özgürlüklerinize zarar vermemek kaydıyla, meşru menfaatlerimiz için veri işlenmesinin zorunlu olması</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">5. Kişisel Verilerin Saklama Süresi</h2>
              <p className="mb-4">
                Kişisel verileriniz, işlenme amaçlarının gerektirdiği süreler boyunca ve yasal saklama sürelerince muhafaza edilmektedir. Saklama süreleri aşağıdaki kriterlere göre belirlenmektedir:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>İlgili mevzuatta öngörülen süreler</li>
                <li>İlgili zamanaşımı süreleri</li>
                <li>Olası hukuki uyuşmazlıklarda delil teşkil edebilecek niteliği</li>
                <li>Veri işleme amacının gerektirdiği süre</li>
              </ul>
              <p className="mb-4">
                Saklama süresinin sona ermesi halinde kişisel verileriniz silinmekte, yok edilmekte veya anonim hale getirilmektedir.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">6. Veri Sahibi Olarak Haklarınız</h2>
              <p className="mb-4">
                KVKK'nın 11. maddesi uyarınca veri sahibi olarak aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
                <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
                <li>Yukarıdaki düzeltme, silme veya yok etme işlemlerinin, kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
                <li>İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
                <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">7. Başvuru Yöntemi</h2>
              <p className="mb-4">
                Yukarıda belirtilen haklarınızı kullanmak için, kimliğinizi tevsik edici belgeler ve talebinizi içeren dilekçenizle veya <a href="https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6698-20160407.pdf" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ</a>'e göre aşağıdaki yöntemlerle başvurabilirsiniz:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li><strong>Yazılı Olarak:</strong> "Atatürk Mah. E-Ticaret Cad. No:123 Kat:4 Daire:15 Ataşehir/İstanbul" adresine ıslak imzalı dilekçe ile</li>
                <li><strong>KEP Adresi İle:</strong> maviticaret@hs01.kep.tr adresine güvenli elektronik imza veya mobil imza ile</li>
                <li><strong>E-posta İle:</strong> kvkk@maviticaret.com adresine, sistemimizde kayıtlı e-posta adresinizden</li>
              </ul>
              <p className="mb-4">
                Başvurunuzda; adınız, soyadınız, başvuru yazılı ise imzanız, T.C. kimlik numaranız (veya pasaport numarası), tebligata esas yerleşim yeri veya iş adresi, varsa bildirime esas e-posta adresi, telefon numarası ve talep konunuzun bulunması zorunludur.
              </p>
              <p className="mb-4">
                Başvurunuz üzerine talebinizin niteliğine göre en kısa sürede ve en geç 30 gün içinde ücretsiz olarak sonuçlandırılacaktır. Ancak, işlemin ayrıca bir maliyeti gerektirmesi hâlinde, Kişisel Verileri Koruma Kurulunca belirlenen tarifedeki ücret alınabilir.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">8. Güvenlik Önlemleri</h2>
              <p className="mb-4">
                MaviTicaret olarak, kişisel verilerinizin güvenliğini sağlamak için teknik ve idari tedbirler almaktayız. Bu kapsamda:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Kişisel verilerin hukuka aykırı olarak işlenmesini önleme</li>
                <li>Kişisel verilere hukuka aykırı olarak erişilmesini önleme</li>
                <li>Kişisel verilerin muhafazasını sağlama</li>
              </ul>
              <p className="mb-4">
                amaçlarına uygun güvenlik düzeyini temin etmeye yönelik gerekli her türlü teknik ve idari tedbirler alınmaktadır.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">9. Değişiklikler</h2>
              <p className="mb-4">
                MaviTicaret, işbu Kişisel Verilerin Korunması Politikası'nı güncelleyebilir. Yapılan değişiklikler, web sitemizde yayınlandığı tarihte yürürlüğe girer. Politikada önemli değişiklikler yapılması halinde, e-posta yoluyla bildirim yapılabilir.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">10. İletişim</h2>
              <p className="mb-4">
                Kişisel verilerinizin işlenmesine ilişkin sorularınız için:
              </p>
              <p className="mb-4">
                <strong>MaviTicaret Elektronik Ticaret Limited Şirketi</strong><br />
                Adres: Atatürk Mah. E-Ticaret Cad. No:123 Kat:4 Daire:15 Ataşehir/İstanbul<br />
                Telefon: 0850 123 4567<br />
                E-posta: kvkk@maviticaret.com<br />
                KEP: maviticaret@hs01.kep.tr
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