import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { FiChevronRight, FiArrowLeft, FiDownload, FiPackage, FiPhone, FiMail, FiHome, FiCreditCard } from 'react-icons/fi';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

// Define types for order data
type OrderStatus = 'delivered' | 'processing' | 'shipped' | 'cancelled';

type OrderItem = {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
  sku: string;
};

type Order = {
  id: string | string[];
  date: string;
  time: string;
  total: number;
  status: OrderStatus;
  statusText: string;
  paymentMethod: string;
  trackingNumber: string;
  shippingCarrier: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  shippingAddress: {
    fullName: string;
    address: string;
    city: string;
    district: string;
    zipCode: string;
    phone: string;
  };
  billingAddress: {
    fullName: string;
    address: string;
    city: string;
    district: string;
    zipCode: string;
    phone: string;
  };
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  timeline: Array<{
    status: string;
    date: string;
    time: string;
    description: string;
    completed: boolean;
  }>;
};

export default function OrderDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  // This would typically be fetched from an API based on the ID
  // For demo purposes, we'll hardcode a sample order
  const order: Order = {
    id: id || 'MV12345678',
    date: '20.05.2023',
    time: '14:30',
    total: 539.60,
    status: 'delivered',
    statusText: 'Teslim Edildi',
    paymentMethod: 'Kredi Kartı',
    trackingNumber: '1234567890',
    shippingCarrier: 'Yurtiçi Kargo',
    customer: {
      name: 'Ahmet Yılmaz',
      email: 'ahmet.yilmaz@example.com',
      phone: '0532 123 4567',
    },
    shippingAddress: {
      fullName: 'Ahmet Yılmaz',
      address: 'Bahçelievler Mah. Papatya Sk. No:15 Daire: 7',
      city: 'İstanbul',
      district: 'Bahçelievler',
      zipCode: '34188',
      phone: '0532 123 4567'
    },
    billingAddress: {
      fullName: 'Ahmet Yılmaz',
      address: 'Bahçelievler Mah. Papatya Sk. No:15 Daire: 7',
      city: 'İstanbul',
      district: 'Bahçelievler',
      zipCode: '34188',
      phone: '0532 123 4567'
    },
    items: [
      { 
        id: 1,
        name: 'Gümüş Kolye',
        image: '/images/products/product1.jpg',
        quantity: 1,
        price: 249.90,
        sku: 'GK001'
      },
      { 
        id: 2,
        name: 'Dekoratif Mumluk',
        image: '/images/products/product2.jpg',
        quantity: 2,
        price: 129.90,
        sku: 'DM002'
      }
    ],
    subtotal: 509.70,
    shipping: 29.90,
    discount: 0,
    timeline: [
      {
        status: 'Sipariş Alındı',
        date: '15.06.2023',
        time: '14:30',
        description: 'Siparişiniz başarıyla oluşturuldu.',
        completed: true
      },
      {
        status: 'Ödeme Onaylandı',
        date: '15.06.2023',
        time: '14:32',
        description: 'Ödemeniz başarıyla alındı.',
        completed: true
      },
      {
        status: 'Hazırlanıyor',
        date: '15.06.2023',
        time: '16:45',
        description: 'Siparişiniz hazırlanmaya başlandı.',
        completed: true
      },
      {
        status: 'Kargoya Verildi',
        date: '16.06.2023',
        time: '10:15',
        description: 'Siparişiniz kargoya verildi.',
        completed: true
      },
      {
        status: 'Teslim Edildi',
        date: '17.06.2023',
        time: '14:20',
        description: 'Siparişiniz teslim edildi.',
        completed: true
      }
    ]
  };

  // Status badge styles
  const statusStyles: Record<OrderStatus, string> = {
    delivered: 'bg-green-100 text-green-800',
    processing: 'bg-blue-100 text-blue-800',
    shipped: 'bg-purple-100 text-purple-800',
    cancelled: 'bg-red-100 text-red-800'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Sipariş #{order.id} | MaviTicaret</title>
        <meta name="description" content={`MaviTicaret sipariş detayları. Sipariş ${order.id} bilgilerini görüntüleyin.`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className="py-8">
        <div className="container">
          {/* Breadcrumb */}
          <div className="py-4 mb-2">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-primary-600">
                Anasayfa
              </Link>
              <FiChevronRight className="mx-2" size={16} />
              <Link href="/account" className="hover:text-primary-600">
                Hesabım
              </Link>
              <FiChevronRight className="mx-2" size={16} />
              <Link href="/account/orders" className="hover:text-primary-600">
                Siparişlerim
              </Link>
              <FiChevronRight className="mx-2" size={16} />
              <span className="font-medium text-gray-900">Sipariş #{order.id}</span>
            </div>
          </div>
          
          {/* Back to Orders */}
          <div className="mb-6">
            <Link href="/account/orders" className="inline-flex items-center text-primary-600 hover:text-primary-700">
              <FiArrowLeft size={16} className="mr-1" />
              <span>Siparişlere Dön</span>
            </Link>
          </div>
          
          {/* Order Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold">Sipariş #{order.id}</h1>
                <p className="text-gray-600 mt-1">
                  Sipariş Tarihi: {order.date} {order.time}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[order.status]}`}>
                  {order.statusText}
                </span>
                <button className="flex items-center text-primary-600 hover:text-primary-700 font-medium">
                  <FiDownload size={16} className="mr-1" />
                  <span>Fatura İndir</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Order Timeline */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-bold mb-4">Sipariş Durumu</h2>
                
                <div className="relative">
                  {/* Progress Line */}
                  <div className="absolute left-5 top-0 ml-px border-l-2 border-gray-200 h-full"></div>
                  
                  {/* Steps */}
                  <ul className="space-y-6">
                    {order.timeline.map((step, index) => (
                      <li key={index} className="relative">
                        <div className="flex items-start group">
                          <span className={`flex items-center justify-center w-10 h-10 rounded-full ${
                            step.completed ? 'bg-primary-600 text-white' : 'bg-gray-300 text-gray-500'
                          }`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </span>
                          <div className="ml-4">
                            <h4 className="text-base font-semibold">{step.status}</h4>
                            <p className="text-sm text-gray-500">{step.date} - {step.time}</p>
                            <p className="text-gray-600 mt-1">{step.description}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tracking Information */}
                {order.trackingNumber && (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="font-medium mb-3">Kargo Takip Bilgileri</h3>
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">Kargo Firması:</span> {order.shippingCarrier}
                    </p>
                    <p className="text-gray-600 mb-4">
                      <span className="font-medium">Takip Numarası:</span> {order.trackingNumber}
                    </p>
                    <a 
                      href={`https://www.yurticikargo.com/tr/online-servisler/gonderi-sorgula?code=${order.trackingNumber}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium inline-flex items-center"
                    >
                      <FiPackage className="mr-2" size={16} />
                      Kargo Takip Et
                    </a>
                  </div>
                )}
              </div>
              
              {/* Customer Information */}
              <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
                <h2 className="text-lg font-bold mb-4">Müşteri Bilgileri</h2>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <FiUser className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <h3 className="font-medium text-gray-900">{order.customer.name}</h3>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FiMail className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <a href={`mailto:${order.customer.email}`} className="text-gray-600 hover:text-primary-600">
                        {order.customer.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FiPhone className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <a href={`tel:${order.customer.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-primary-600">
                        {order.customer.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Order Details */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              {/* Order Items */}
              <div className="bg-white rounded-lg shadow-sm mb-6">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-bold">Sipariş Ürünleri</h2>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {order.items.map((item) => (
                    <div key={item.id} className="p-6">
                      <div className="flex flex-col sm:flex-row items-start">
                        {/* Product Image */}
                        <div className="w-full sm:w-20 h-20 bg-gray-100 rounded-md overflow-hidden mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-center object-cover" />
                        </div>
                        
                        {/* Product Details */}
                        <div className="flex-grow">
                          <div className="flex flex-col sm:flex-row justify-between">
                            <div>
                              <h3 className="text-base font-medium text-gray-900">
                                <Link href={`/product/${item.id}`} className="hover:text-primary-600">
                                  {item.name}
                                </Link>
                              </h3>
                              <p className="text-sm text-gray-500 mt-1">SKU: {item.sku}</p>
                            </div>
                            
                            <div className="mt-2 sm:mt-0 flex items-center">
                              <span className="text-gray-600 mr-4">Adet: {item.quantity}</span>
                              <span className="font-medium">{item.price.toFixed(2)} ₺</span>
                            </div>
                          </div>
                          
                          <div className="mt-2 flex justify-between items-center border-t border-gray-100 pt-2">
                            <Link 
                              href={`/product/${item.id}`} 
                              className="text-sm text-primary-600 hover:text-primary-700"
                            >
                              Ürüne Git
                            </Link>
                            <span className="font-medium">{(item.price * item.quantity).toFixed(2)} ₺</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Order Summary */}
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <div className="flex justify-end">
                    <div className="w-full sm:w-64">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Ara Toplam:</span>
                        <span className="font-medium">{order.subtotal.toFixed(2)} ₺</span>
                      </div>
                      
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Kargo:</span>
                        <span className="font-medium">{order.shipping.toFixed(2)} ₺</span>
                      </div>
                      
                      {order.discount > 0 && (
                        <div className="flex justify-between mb-2 text-green-600">
                          <span>İndirim:</span>
                          <span>-{order.discount.toFixed(2)} ₺</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                        <span className="font-bold">Toplam:</span>
                        <span className="font-bold">{order.total.toFixed(2)} ₺</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Shipping & Payment Details */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-bold">Teslimat ve Ödeme Bilgileri</h2>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Shipping Address */}
                    <div>
                      <div className="flex items-center mb-3">
                        <FiHome className="text-primary-600 mr-2" size={18} />
                        <h3 className="font-medium">Teslimat Adresi</h3>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <address className="not-italic">
                          <p className="font-medium">{order.shippingAddress.fullName}</p>
                          <p className="text-gray-600 mt-1">{order.shippingAddress.address}</p>
                          <p className="text-gray-600">{order.shippingAddress.district} / {order.shippingAddress.city}</p>
                          <p className="text-gray-600">{order.shippingAddress.zipCode}</p>
                          <p className="text-gray-600 mt-1">{order.shippingAddress.phone}</p>
                        </address>
                      </div>
                    </div>
                    
                    {/* Billing Address */}
                    <div>
                      <div className="flex items-center mb-3">
                        <FiCreditCard className="text-primary-600 mr-2" size={18} />
                        <h3 className="font-medium">Fatura Bilgileri</h3>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <p className="font-medium mb-2">Fatura Adresi</p>
                        <address className="not-italic text-gray-600">
                          <p>{order.billingAddress.fullName}</p>
                          <p>{order.billingAddress.address}</p>
                          <p>{order.billingAddress.district} / {order.billingAddress.city}</p>
                          <p>{order.billingAddress.zipCode}</p>
                          <p>{order.billingAddress.phone}</p>
                        </address>
                        
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <p className="font-medium mb-2">Ödeme Yöntemi</p>
                          <p className="text-gray-600">{order.paymentMethod}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Need Help */}
          <div className="bg-primary-50 p-6 rounded-lg shadow-sm mt-8 text-center">
            <h2 className="text-xl font-bold mb-2">Yardıma mı ihtiyacınız var?</h2>
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
              Siparişinizle ilgili herhangi bir sorunuz veya sorununuz varsa, müşteri hizmetlerimizle iletişime geçmekten çekinmeyin.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:08501234567" 
                className="btn bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-md font-medium inline-flex items-center justify-center"
              >
                <FiPhone className="mr-2" size={16} />
                0850 123 4567
              </a>
              <Link 
                href="/customer-service" 
                className="btn bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-md font-medium inline-flex items-center justify-center"
              >
                Müşteri Hizmetleri
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Bu sayfanın özel ikonları için bileşenler
type IconProps = {
  className?: string;
  size: number | string;
};

const FiUser = ({ className, size }: IconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
); 