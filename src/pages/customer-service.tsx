import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FiChevronRight, FiPhone, FiMail, FiMessageSquare, FiHelpCircle, FiClock, FiFileText } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CustomerService() {
  const faqs = [
    {
      question: "Siparişim ne zaman kargolanacak?",
      answer: "Siparişleriniz, ödeme onayından sonra genellikle 24-48 saat içerisinde kargoya verilmektedir. Hafta sonları ve resmi tatillerde siparişler bir sonraki iş gününde işleme alınır."
    },
    {
      question: "Kargo takibini nasıl yapabilirim?",
      answer: "Siparişiniz kargoya verildikten sonra, size e-posta ve SMS yoluyla kargo takip numarası gönderilecektir. Bu numara ile ilgili kargo firmasının web sitesinden kargo durumunu takip edebilirsiniz. Ayrıca, hesabım sayfasından da siparişlerinizin durumunu görüntüleyebilirsiniz."
    },
    {
      question: "Siparişimi iptal edebilir miyim?",
      answer: "Siparişiniz kargoya verilmediği sürece iptal edebilirsiniz. İptal talebinizi müşteri hizmetlerimize telefon veya e-posta yoluyla iletebilirsiniz. Siparişiniz kargoya verildikten sonra, ürünü teslim alıp iade sürecini başlatmanız gerekecektir."
    },
    {
      question: "Ürün iadesi nasıl yapılır?",
      answer: "Ürün iadesi için, ürünü teslim aldığınız tarihten itibaren 14 gün içerisinde müşteri hizmetlerimize başvurmanız gerekmektedir. İade talebiniz onaylandıktan sonra, ürünü orijinal ambalajında ve tüm aksesuarlarıyla birlikte belirtilen adrese göndermeniz gerekir. İade süreci ve detaylı bilgi için 'Garanti ve İade Koşulları' sayfamızı inceleyebilirsiniz."
    },
    {
      question: "Ödeme seçenekleri nelerdir?",
      answer: "Sitemizde kredi kartı, banka kartı, havale/EFT ve kapıda ödeme seçenekleri bulunmaktadır. Kredi kartı ile yapılan ödemelerde taksit imkanı da sunulmaktadır. Güncel taksit seçenekleri için ödeme sayfasını ziyaret edebilirsiniz."
    },
    {
      question: "Şifremi unuttum, ne yapmalıyım?",
      answer: "Giriş sayfasında bulunan 'Şifremi Unuttum' bağlantısına tıklayarak, kayıtlı e-posta adresinize şifre sıfırlama bağlantısı gönderilmesini sağlayabilirsiniz. E-postayı alamadıysanız, spam klasörünü kontrol etmeyi unutmayın veya müşteri hizmetlerimizle iletişime geçin."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Müşteri Hizmetleri | MaviTicaret</title>
        <meta name="description" content="MaviTicaret müşteri hizmetleri. Sorularınız, sipariş takibi, iade ve değişim işlemleri için bizimle iletişime geçin." />
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
              <span className="font-medium text-gray-900">Müşteri Hizmetleri</span>
            </div>
          </div>
          
          {/* Header */}
          <div className="bg-primary-600 text-white rounded-lg p-8 mb-8">
            <h1 className="text-3xl font-bold mb-4">Müşteri Hizmetleri</h1>
            <p className="text-xl text-primary-100 max-w-3xl">
              Sorularınız ve talepleriniz için müşteri hizmetleri ekibimiz size yardımcı olmak için hazır. Aşağıdaki iletişim kanallarından bize ulaşabilirsiniz.
            </p>
          </div>
          
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiPhone className="text-primary-600" size={24} />
              </div>
              <h2 className="text-xl font-semibold mb-2">Telefon ile Ulaşın</h2>
              <p className="text-gray-600 mb-4">Hafta içi 09:00 - 18:00 saatleri arasında</p>
              <a href="tel:08501234567" className="text-lg font-bold text-primary-600 hover:underline">0850 123 4567</a>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMail className="text-primary-600" size={24} />
              </div>
              <h2 className="text-xl font-semibold mb-2">E-posta Gönderin</h2>
              <p className="text-gray-600 mb-4">24 saat içinde yanıt vermeyi hedefliyoruz</p>
              <a href="mailto:info@maviticaret.com" className="text-lg font-bold text-primary-600 hover:underline">info@maviticaret.com</a>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMessageSquare className="text-primary-600" size={24} />
              </div>
              <h2 className="text-xl font-semibold mb-2">Canlı Destek</h2>
              <p className="text-gray-600 mb-4">Hafta içi 09:00 - 22:00, haftasonu 10:00 - 18:00</p>
              <button className="text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-md px-4 py-2 transition-colors">Şimdi Başlat</button>
            </div>
          </div>
          
          {/* Services */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Hizmetlerimiz</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <FiHelpCircle className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Sipariş Desteği</h3>
                  <p className="text-gray-600">Siparişlerinizle ilgili her türlü soru ve sorun için destek sağlıyoruz.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <FiClock className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Hızlı İade ve Değişim</h3>
                  <p className="text-gray-600">İade ve değişim süreçlerinizi hızlı ve kolay bir şekilde tamamlıyoruz.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <FiFileText className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Fatura ve Belge Talepleri</h3>
                  <p className="text-gray-600">Fatura ve diğer belge taleplerinizi hızlıca karşılıyoruz.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Sıkça Sorulan Sorular</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer">
                      <h3 className="text-lg font-medium">{faq.question}</h3>
                      <span className="ml-2 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <div className="p-4 text-gray-600">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-3">Burada yanıtını bulamadığınız bir sorunuz mu var?</p>
              <Link href="/contact" className="text-primary-600 font-medium hover:underline">
                İletişim formumuzu kullanarak bize ulaşın
              </Link>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Bize Yazın</h2>
            
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Adınız Soyadınız</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="Adınızı ve soyadınızı giriniz"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-posta Adresiniz</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="E-posta adresinizi giriniz"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Konu</label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                >
                  <option value="">Konu Seçiniz</option>
                  <option value="order">Sipariş Hakkında</option>
                  <option value="return">İade ve Değişim</option>
                  <option value="payment">Ödeme İşlemleri</option>
                  <option value="account">Hesap İşlemleri</option>
                  <option value="other">Diğer</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mesajınız</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="Mesajınızı giriniz"
                ></textarea>
              </div>
              
              <div className="flex items-center mb-6">
                <input type="checkbox" id="consent" className="mr-2" />
                <label htmlFor="consent" className="text-gray-600 text-sm">
                  Kişisel verilerimin işlenmesine ilişkin <Link href="/info/privacy-and-security" className="text-primary-600 hover:underline">Gizlilik Politikası</Link>'nı okudum ve kabul ediyorum.
                </label>
              </div>
              
              <button type="submit" className="btn btn-primary px-8 py-3 text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-md transition-colors">
                Gönder
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 