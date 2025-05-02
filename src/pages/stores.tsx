import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FiChevronRight, FiMapPin, FiPhone, FiClock, FiMail } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Stores() {
  const stores = [
    {
      id: 1,
      name: 'MaviTicaret Ataşehir',
      address: 'Atatürk Mah. E-Ticaret Cad. No:123 Kat:4 Daire:15, Ataşehir/İstanbul',
      phone: '0850 123 4567',
      email: 'atasehir@maviticaret.com',
      hours: 'Hafta içi: 10:00 - 20:00, Hafta sonu: 11:00 - 19:00',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48173.72774963606!2d29.083134499999998!3d40.9878477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac790b17f1223%3A0xb50956d9f9755317!2zQXRhxZ9laGlyL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1651823254587!5m2!1str!2str'
    },
    {
      id: 2,
      name: 'MaviTicaret Kadıköy',
      address: 'Caferağa Mah. Moda Cad. No:45/A, Kadıköy/İstanbul',
      phone: '0850 123 4568',
      email: 'kadikoy@maviticaret.com',
      hours: 'Hafta içi: 10:00 - 20:00, Hafta sonu: 11:00 - 19:00',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12041.638302923309!2d29.02252745!3d40.9911841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab85dea718a5d%3A0x195c7c805f72687a!2zS2FkxLFrw7Z5L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1651823396842!5m2!1str!2str'
    },
    {
      id: 3,
      name: 'MaviTicaret Ankara',
      address: 'Kızılay Mah. Atatürk Bulvarı No:67/B, Çankaya/Ankara',
      phone: '0850 123 4569',
      email: 'ankara@maviticaret.com',
      hours: 'Hafta içi: 09:00 - 19:00, Hafta sonu: 10:00 - 18:00',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24479.049115358125!2d32.8513293!3d39.9133286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f190a9cea8f%3A0xd3862ea8248d2d16!2zw4dhbmtheWEvQW5rYXJh!5e0!3m2!1str!2str!4v1651823489957!5m2!1str!2str'
    },
    {
      id: 4,
      name: 'MaviTicaret İzmir',
      address: 'Alsancak Mah. Cumhuriyet Bulvarı No:154/C, Konak/İzmir',
      phone: '0850 123 4570',
      email: 'izmir@maviticaret.com',
      hours: 'Hafta içi: 10:00 - 20:00, Hafta sonu: 11:00 - 19:00',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12595.031511816384!2d27.1380383!3d38.4175227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8e3a252eb7b%3A0x2c38c5247c7d867a!2zQWxzYW5jYWssIEtvbmFrL8Swem1pcg!5e0!3m2!1str!2str!4v1651823586339!5m2!1str!2str'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Mağazalarımız | MaviTicaret</title>
        <meta name="description" content="MaviTicaret mağaza konumları. Şehirlerdeki mağaza adreslerimizi ve iletişim bilgilerini bulabilirsiniz." />
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
              <span className="font-medium text-gray-900">Mağazalarımız</span>
            </div>
          </div>
          
          {/* Header */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm mb-8">
            <h1 className="text-3xl font-bold mb-4">Mağazalarımız</h1>
            <p className="text-gray-600 max-w-3xl">
              Ülke genelindeki mağazalarımızda sizi ağırlamaktan mutluluk duyarız. Aşağıda mağazalarımızın adres, iletişim bilgileri ve çalışma saatlerini bulabilirsiniz. 
              Her mağazamızda uzman ekibimiz size en iyi hizmeti sunmak için hazır bekliyor.
            </p>
          </div>
          
          {/* Store List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {stores.map((store) => (
              <div key={store.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src={store.mapUrl} 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title={store.name}
                  ></iframe>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4">{store.name}</h2>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <FiMapPin className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={18} />
                      <div>
                        <h3 className="font-semibold text-sm text-gray-700 mb-1">Adres</h3>
                        <p className="text-gray-600">{store.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FiPhone className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={18} />
                      <div>
                        <h3 className="font-semibold text-sm text-gray-700 mb-1">Telefon</h3>
                        <p className="text-gray-600">
                          <a href={`tel:${store.phone.replace(/\s/g, '')}`} className="hover:text-primary-600">
                            {store.phone}
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FiMail className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={18} />
                      <div>
                        <h3 className="font-semibold text-sm text-gray-700 mb-1">E-posta</h3>
                        <p className="text-gray-600">
                          <a href={`mailto:${store.email}`} className="hover:text-primary-600">
                            {store.email}
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FiClock className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={18} />
                      <div>
                        <h3 className="font-semibold text-sm text-gray-700 mb-1">Çalışma Saatleri</h3>
                        <p className="text-gray-600">{store.hours}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      <span>Yol Tarifi Al</span>
                      <FiChevronRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Store Info */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl font-bold mb-4">Mağazalarımızda Sunulan Hizmetler</h2>
            <div className="prose max-w-none text-gray-700">
              <ul>
                <li>Ürünleri yerinde inceleme ve deneme imkanı</li>
                <li>Uzman personellerimizden ürünler hakkında detaylı bilgi alma</li>
                <li>Online siparişlerinizi mağazadan teslim alma</li>
                <li>Online siparişlerinizi mağazaya iade etme</li>
                <li>Hediye paketleme hizmeti</li>
                <li>Mağazaya özel kampanya ve indirimlerden yararlanma</li>
                <li>Ürün montaj ve kurulum desteği</li>
              </ul>
              
              <h3 className="mt-6">Çalışma Saatleri Hakkında Bilgilendirme</h3>
              <p>
                Mağazalarımızın çalışma saatleri, bulunduğu alışveriş merkezi veya caddenin genel çalışma saatlerine 
                göre değişiklik gösterebilir. Resmi tatillerde farklı çalışma saatleri uygulanabilir. 
                Güncel çalışma saatleri için lütfen ziyaret etmek istediğiniz mağazamızı telefonla arayınız.
              </p>
            </div>
          </div>
          
          {/* Contact CTA */}
          <div className="bg-primary-50 p-6 md:p-8 rounded-lg shadow-sm text-center">
            <h2 className="text-2xl font-bold mb-4">Mağazalarımız Hakkında Daha Fazla Bilgi Mi Arıyorsunuz?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Mağazalarımız, çalışma saatleri veya sunulan hizmetler hakkında daha fazla bilgi almak için 
              müşteri hizmetlerimiz ile iletişime geçebilirsiniz.
            </p>
            <Link href="/customer-service" className="btn bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-md inline-flex items-center font-medium">
              Müşteri Hizmetlerine Git
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 