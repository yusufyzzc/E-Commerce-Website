import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FiChevronRight, FiShoppingBag, FiSearch, FiAlertCircle } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Orders() {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      
      // For demo purposes, show error if order number doesn't start with "MV"
      if (!orderNumber.startsWith('MV')) {
        setError('Girdiğiniz sipariş numarası bulunamadı. Lütfen doğru sipariş numarasını giriniz.');
      } else {
        setSearched(true);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Sipariş Sorgulama | MaviTicaret</title>
        <meta name="description" content="MaviTicaret sipariş takibi. Sipariş numaranızla siparişinizin durumunu sorgulayabilirsiniz." />
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
              <span className="font-medium text-gray-900">Sipariş Sorgulama</span>
            </div>
          </div>
          
          {/* Header */}
          <div className="bg-primary-600 text-white rounded-lg p-8 mb-8">
            <div className="flex items-center mb-4">
              <FiShoppingBag className="mr-3" size={28} />
              <h1 className="text-3xl font-bold">Sipariş Sorgulama</h1>
            </div>
            <p className="text-xl text-primary-100 max-w-3xl">
              Siparişinizin durumunu öğrenmek için sipariş numaranızı ve e-posta adresinizi giriniz. Üye iseniz, hesabınıza giriş yaparak tüm siparişlerinizi görüntüleyebilirsiniz.
            </p>
          </div>
          
          {/* Order Lookup Form */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Sipariş Sorgula</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="orderNumber" className="block text-gray-700 font-medium mb-2">Sipariş Numarası</label>
                  <input
                    type="text"
                    id="orderNumber"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="Örnek: MV12345678"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">Sipariş numaranız e-posta ile gönderilmiştir.</p>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-posta Adresi</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="ornek@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">Siparişinizi verirken kullandığınız e-posta adresi.</p>
                </div>
              </div>
              
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                  <div className="flex items-start">
                    <FiAlertCircle className="text-red-500 mr-3 mt-0.5" size={18} />
                    <p className="text-red-700">{error}</p>
                  </div>
                </div>
              )}
              
              <button 
                type="submit" 
                className="btn bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-md font-medium transition-colors flex items-center"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sorgulanıyor...
                  </>
                ) : (
                  <>
                    <FiSearch className="mr-2" size={18} /> 
                    Sipariş Sorgula
                  </>
                )}
              </button>
            </form>
            
            {/* Member Login CTA */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Üye misiniz?</h3>
              <p className="text-gray-600 mb-4">
                Hesabınıza giriş yaparak tüm siparişlerinizi görüntüleyebilir, sipariş detaylarını inceleyebilir ve sipariş durumunuzu takip edebilirsiniz.
              </p>
              <Link href="/account/login" className="btn bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-md font-medium transition-colors inline-block">
                Giriş Yap
              </Link>
            </div>
          </div>
          
          {/* Order Result - Show only if searched */}
          {searched && (
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Sipariş Detayları</h2>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Kargoya Verildi
                </span>
              </div>
              
              <div className="border-b border-gray-200 pb-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 mb-1">Sipariş Numarası</h3>
                    <p className="font-medium">{orderNumber}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 mb-1">Sipariş Tarihi</h3>
                    <p className="font-medium">15.06.2023</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 mb-1">Ödeme Yöntemi</h3>
                    <p className="font-medium">Kredi Kartı</p>
                  </div>
                </div>
              </div>
              
              {/* Order Timeline */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Sipariş Durumu</h3>
                
                <div className="relative">
                  {/* Progress Line */}
                  <div className="absolute left-5 top-0 ml-px border-l-2 border-gray-200 h-full"></div>
                  
                  {/* Steps */}
                  <ul className="space-y-6">
                    <li className="relative">
                      <div className="flex items-start group">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </span>
                        <div className="ml-4">
                          <h4 className="text-base font-semibold">Sipariş Alındı</h4>
                          <p className="text-sm text-gray-500">15.06.2023 - 14:30</p>
                          <p className="text-gray-600 mt-1">Siparişiniz başarıyla oluşturuldu.</p>
                        </div>
                      </div>
                    </li>
                    
                    <li className="relative">
                      <div className="flex items-start group">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </span>
                        <div className="ml-4">
                          <h4 className="text-base font-semibold">Ödeme Onaylandı</h4>
                          <p className="text-sm text-gray-500">15.06.2023 - 14:32</p>
                          <p className="text-gray-600 mt-1">Ödemeniz başarıyla alındı.</p>
                        </div>
                      </div>
                    </li>
                    
                    <li className="relative">
                      <div className="flex items-start group">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </span>
                        <div className="ml-4">
                          <h4 className="text-base font-semibold">Hazırlanıyor</h4>
                          <p className="text-sm text-gray-500">15.06.2023 - 16:45</p>
                          <p className="text-gray-600 mt-1">Siparişiniz hazırlanmaya başlandı.</p>
                        </div>
                      </div>
                    </li>
                    
                    <li className="relative">
                      <div className="flex items-start group">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </span>
                        <div className="ml-4">
                          <h4 className="text-base font-semibold">Kargoya Verildi</h4>
                          <p className="text-sm text-gray-500">16.06.2023 - 10:15</p>
                          <p className="text-gray-600 mt-1">Siparişiniz kargoya verildi.</p>
                          <p className="text-primary-600 font-medium mt-1">
                            Kargo Takip No: 1234567890
                          </p>
                        </div>
                      </div>
                    </li>
                    
                    <li className="relative">
                      <div className="flex items-start group opacity-50">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 text-gray-500">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </span>
                        <div className="ml-4">
                          <h4 className="text-base font-semibold">Teslim Edildi</h4>
                          <p className="text-sm text-gray-500">Bekleniyor</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Order Items */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Sipariş Ürünleri</h3>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Ürün
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Adet
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Birim Fiyat
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Toplam
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-16 w-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                              <img src="/images/products/product1.jpg" alt="Ürün" className="h-full w-full object-center object-cover" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">Gümüş Kolye</div>
                              <div className="text-sm text-gray-500">SKU: GK001</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">1</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">249,90 ₺</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">249,90 ₺</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-16 w-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                              <img src="/images/products/product2.jpg" alt="Ürün" className="h-full w-full object-center object-cover" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">Dekoratif Mumluk</div>
                              <div className="text-sm text-gray-500">SKU: DM002</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">2</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">129,90 ₺</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">259,80 ₺</div>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={3} className="px-6 py-4 text-right text-sm font-medium text-gray-900">
                          Ara Toplam:
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          509,70 ₺
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={3} className="px-6 py-4 text-right text-sm font-medium text-gray-900">
                          Kargo:
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          29,90 ₺
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td colSpan={3} className="px-6 py-4 text-right text-base font-bold text-gray-900">
                          Genel Toplam:
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-base font-bold text-gray-900">
                          539,60 ₺
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              
              {/* Shipping & Billing Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Teslimat Bilgileri</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Ahmet Yılmaz</h4>
                    <p className="text-gray-700">
                      Bahçelievler Mah. Papatya Sk. No:15 <br />
                      Daire: 7 <br />
                      Bahçelievler / İstanbul <br />
                      34188 <br />
                      Telefon: 0532 123 4567
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Fatura Bilgileri</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Ahmet Yılmaz</h4>
                    <p className="text-gray-700">
                      Bahçelievler Mah. Papatya Sk. No:15 <br />
                      Daire: 7 <br />
                      Bahçelievler / İstanbul <br />
                      34188 <br />
                      Telefon: 0532 123 4567
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Sıkça Sorulan Sorular</h2>
            
            <div className="space-y-4">
              <details className="group border border-gray-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer">
                  <h3 className="text-lg font-medium">Sipariş numaramı nereden bulabilirim?</h3>
                  <span className="ml-2 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="p-4 text-gray-600">
                  <p>Sipariş numaranız, siparişiniz onaylandıktan sonra size gönderilen e-postada yer almaktadır. Ayrıca, üye girişi yaptıktan sonra "Siparişlerim" sayfasından tüm siparişlerinize ait sipariş numaralarını görebilirsiniz.</p>
                </div>
              </details>
              
              <details className="group border border-gray-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer">
                  <h3 className="text-lg font-medium">Siparişim ne zaman kargolanacak?</h3>
                  <span className="ml-2 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="p-4 text-gray-600">
                  <p>Siparişleriniz, ödeme onayından sonra genellikle 24-48 saat içinde kargoya verilmektedir. Hafta sonları ve resmi tatil günlerinde siparişler bir sonraki iş gününde işleme alınır.</p>
                </div>
              </details>
              
              <details className="group border border-gray-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer">
                  <h3 className="text-lg font-medium">Siparişimi iptal edebilir miyim?</h3>
                  <span className="ml-2 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="p-4 text-gray-600">
                  <p>Siparişiniz kargoya verilmediği sürece iptal edebilirsiniz. İptal talebinizi müşteri hizmetlerimize telefon veya e-posta yoluyla iletebilirsiniz. Siparişiniz kargoya verildikten sonra, ürünü teslim alıp iade sürecini başlatmanız gerekecektir.</p>
                </div>
              </details>
            </div>
            
            <div className="mt-6">
              <p className="text-gray-600">
                Diğer sorularınız için <Link href="/customer-service" className="text-primary-600 hover:underline">Müşteri Hizmetleri</Link> sayfamızı ziyaret edebilir veya 0850 123 4567 numaralı telefondan bizimle iletişime geçebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 