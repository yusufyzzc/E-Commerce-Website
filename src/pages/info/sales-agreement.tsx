import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function SalesAgreement() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Satış Sözleşmesi | MaviTicaret</title>
        <meta name="description" content="MaviTicaret.com mesafeli satış sözleşmesi. Alışveriş yapmadan önce lütfen satış sözleşmemizi okuyunuz." />
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
              <span className="font-medium text-gray-900">Satış Sözleşmesi</span>
            </div>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold mb-6">Mesafeli Satış Sözleşmesi</h1>
            
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                İşbu Mesafeli Satış Sözleşmesi (bundan sonra "Sözleşme" olarak anılacaktır), maviticaret.com (bundan sonra "SATICI" olarak anılacaktır) ile web sitesi üzerinden alışveriş yapan kişi (bundan sonra "ALICI" olarak anılacaktır) arasındaki hak ve yükümlülükleri düzenlemektedir.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">1. Taraflar</h2>
              <p className="mb-4">
                <strong>SATICI:</strong><br />
                Unvan: MaviTicaret Elektronik Ticaret Limited Şirketi<br />
                Adres: Atatürk Mah. E-Ticaret Cad. No:123 Kat:4 Daire:15 Ataşehir/İstanbul<br />
                Telefon: 0850 123 4567<br />
                E-posta: info@maviticaret.com<br />
                Mersis No: 0123456789012345
              </p>
              <p className="mb-4">
                <strong>ALICI:</strong><br />
                Ad-Soyad/Unvan: (Sipariş formunda belirtilen)<br />
                Adres: (Sipariş formunda belirtilen)<br />
                Telefon: (Sipariş formunda belirtilen)<br />
                E-posta: (Sipariş formunda belirtilen)
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">2. Sözleşmenin Konusu</h2>
              <p className="mb-4">
                İşbu Sözleşme'nin konusu, ALICI'nın SATICI'ya ait internet sitesinden elektronik ortamda siparişini verdiği, sözleşmede belirtilen niteliklere sahip mal/hizmetin satışı ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri gereğince tarafların hak ve yükümlülüklerinin belirlenmesidir.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">3. Mal/Hizmet Bilgileri</h2>
              <p className="mb-4">
                Mal/hizmetin; türü, miktarı, marka/modeli, rengi, satış bedeli, ödeme şekli ve teslimata ilişkin bilgiler sipariş formunda belirtildiği gibidir. SATICI sipariş konusu mal/hizmetin kalitesini onaylamaktadır.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">4. Genel Hükümler</h2>
              <p className="mb-4">
                4.1. ALICI, maviticaret.com internet sitesinde sipariş verdiği ürünlerin/hizmetlerin işbu sözleşmede yazılı olan ve sitede ilan edilen satış fiyatını, ödeme şeklini, teslim koşullarını ve tüm ön bilgileri okuyup bilgi sahibi olduğunu ve elektronik ortamda gerekli teyidi verdiğini kabul ve beyan eder.
              </p>
              <p className="mb-4">
                4.2. İşbu Sözleşme, ALICI tarafından elektronik ortamda onaylanması anında kurulmuş sayılır ve ALICI'nın sipariş verdiği ürünlerin/hizmetlerin bedeli ödendikten sonra SATICI tarafından yürürlüğe konulur.
              </p>
              <p className="mb-4">
                4.3. ALICI, sipariş formunu doldurup elektronik ortamda onayladığı takdirde, işbu Sözleşme'nin tüm hükümlerini kabul etmiş sayılır.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">5. Satış Fiyatı</h2>
              <p className="mb-4">
                Ürünün satış fiyatı, sipariş formunda belirtilen ve ALICI tarafından onaylanan fiyattır. SATICI, internet sitesinde ilan ettiği fiyatları ve kampanyaları önceden haber vermeksizin değiştirme hakkını saklı tutar.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">6. Ödeme ve Teslimat</h2>
              <p className="mb-4">
                6.1. Sipariş onaylandıktan sonra, ALICI tarafından seçilen ödeme yöntemiyle ödeme gerçekleştirilir. Ödemenin onaylanmasını takiben, ürün/hizmet sipariş formunda belirtilen teslimat adresine gönderilir.
              </p>
              <p className="mb-4">
                6.2. Teslimat süresi, ürünün stok durumuna ve teslimat adresine göre değişkenlik gösterebilir. Ortalama teslimat süresi 1-3 iş günüdür. Ancak, mücbir sebepler veya nakliye firmasından kaynaklanan gecikmelerden SATICI sorumlu değildir.
              </p>
              <p className="mb-4">
                6.3. Teslimat, kargo firması tarafından ALICI'nın sipariş formunda belirttiği adrese yapılır. ALICI'nın adresinde bulunmaması durumunda, kargo firması tarafından bırakılan bildirim notu ile ürün kargo şubesinden teslim alınabilir.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">7. Cayma Hakkı</h2>
              <p className="mb-4">
                7.1. ALICI, hiçbir hukuki ve cezai sorumluluk üstlenmeksizin ve hiçbir gerekçe göstermeksizin, malı teslim aldığı veya sözleşmenin imzalandığı tarihten itibaren 14 (on dört) gün içerisinde malı veya hizmeti reddederek sözleşmeden cayma hakkına sahiptir.
              </p>
              <p className="mb-4">
                7.2. Cayma hakkının kullanıldığına dair bildirim, cayma hakkı süresi içinde yazılı olarak veya elektronik ortamda SATICI'ya iletilmelidir.
              </p>
              <p className="mb-4">
                7.3. Cayma hakkının kullanılması halinde:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>SATICI, cayma bildiriminin kendisine ulaşmasından itibaren en geç 14 (on dört) gün içerisinde toplam bedeli ve ALICI'yı borç altına sokan belgeleri ALICI'ya iade etmekle ve 20 (yirmi) gün içerisinde malı geri almakla yükümlüdür.</li>
                <li>ALICI, cayma süresi içinde malı, işleyişine, teknik özelliklerine ve kullanım talimatlarına uygun bir şekilde kullandığı takdirde meydana gelen değişiklik ve bozulmalardan sorumlu değildir.</li>
                <li>İade edilen ürünün SATICI'ya ulaşmasını takiben, ürün incelenir ve herhangi bir sorun tespit edilmezse, ürün bedeli ALICI'nın ödeme yaptığı şekilde (kredi kartı, havale, kapıda ödeme vb.) iade edilir.</li>
              </ul>
              <p className="mb-4">
                7.4. Aşağıdaki ürünlerde cayma hakkı kullanılamaz:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Fiyatı finansal piyasalardaki dalgalanmalara bağlı olarak değişen ve SATICI'nın kontrolünde olmayan mal veya hizmetler.</li>
                <li>ALICI'nın istekleri veya açıkça kişisel ihtiyaçları doğrultusunda hazırlanan mallar.</li>
                <li>Çabuk bozulabilen veya son kullanma tarihi geçebilecek mallar.</li>
                <li>Ambalajı açıldığı takdirde iadesi sağlık ve hijyen açısından uygun olmayan mallar.</li>
                <li>Tesliminden sonra başka ürünlerle karışan ve doğası gereği ayrılması mümkün olmayan mallar.</li>
                <li>Malın tesliminden sonra ambalajın açılmış olması halinde, maddi ortamda sunulan kitap, dijital içerik ve bilgisayar sarf malzemeleri.</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">8. Sözleşmenin Feshi</h2>
              <p className="mb-4">
                SATICI, ALICI tarafından sipariş formunda belirtilen bilgilerin gerçeğe aykırı olduğunu tespit etmesi halinde sözleşmeyi feshetme hakkına sahiptir. Ayrıca, mücbir sebepler nedeniyle ürünün tedarik edilememesi veya teslimatın yapılamaması halinde, SATICI sipariş edilen ürün veya hizmetin bedelini iade ederek sözleşmeyi feshedebilir.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">9. Uyuşmazlıkların Çözümü</h2>
              <p className="mb-4">
                İşbu Sözleşme'den doğan uyuşmazlıklarda, Türkiye Cumhuriyeti kanunları uygulanacak olup, uyuşmazlıkların çözümünde Tüketici Hakem Heyetleri ve Tüketici Mahkemeleri yetkilidir.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">10. Yürürlük</h2>
              <p className="mb-4">
                İşbu Sözleşme, ALICI tarafından elektronik ortamda onaylanması ile yürürlüğe girer. Sözleşme'nin bir nüshası ALICI'nın sipariş formunda belirttiği e-posta adresine gönderilir ve ALICI tarafından sipariş tarihinden itibaren 1 (bir) yıl içerisinde istenildiği takdirde yazılı olarak da gönderilebilir.
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