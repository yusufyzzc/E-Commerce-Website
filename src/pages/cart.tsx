import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FiChevronRight, FiShoppingCart, FiTrash2, FiPlus, FiMinus, FiShoppingBag, FiArrowRight } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Sepet öğesi için tip tanımı
type CartItem = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  sku: string;
  inStock: boolean;
};

export default function Cart() {
  // Initialize empty cart
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [couponCode, setCouponCode] = useState('');
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Check login status on component mount
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loginStatus);
    
    // Load cart from localStorage if available
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart data:', e);
        setCartItems([]);
      }
    }
  }, []);
  
  // Update quantity of an item
  const updateQuantity = (id: number, newQuantity: number): void => {
    if (newQuantity < 1) return;
    
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  
  // Remove an item from cart
  const removeItem = (id: number): void => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  
  // Apply coupon code
  const applyCoupon = (e: React.FormEvent): void => {
    e.preventDefault();
    
    setCouponError('');
    setCouponSuccess('');
    
    if (!couponCode) {
      setCouponError('Lütfen bir kupon kodu girin.');
      return;
    }
    
    // Here you would normally make an API call to verify the coupon
    // This is just for demonstration
    if (couponCode.toUpperCase() === 'INDIRIM20') {
      setCouponSuccess('Kupon kodu başarıyla uygulandı! %20 indirim kazandınız.');
    } else {
      setCouponError('Geçersiz kupon kodu. Lütfen tekrar deneyin.');
    }
  };
  
  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Calculate shipping cost (free if subtotal > 300)
  const shippingCost = subtotal > 300 ? 0 : 29.90;
  
  // Calculate discount amount (just for demo)
  const discountAmount = couponSuccess ? subtotal * 0.2 : 0;
  
  // Calculate total
  const total = subtotal + shippingCost - discountAmount;

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Sepetim | MaviTicaret</title>
        <meta name="description" content="MaviTicaret alışveriş sepetiniz. Seçtiğiniz ürünleri inceleyebilir ve siparişinizi tamamlayabilirsiniz." />
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
              <span className="font-medium text-gray-900">Sepetim</span>
            </div>
          </div>
          
          {/* Cart Header */}
          <div className="flex items-center mb-6">
            <FiShoppingCart className="text-primary-600 mr-3" size={26} />
            <h1 className="text-3xl font-bold">Sepetim</h1>
          </div>
          
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm mb-6">
                  <div className="p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold">Ürünler ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</h2>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-4 sm:p-6">
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
                                
                                {/* Price */}
                                <div className="mt-1 flex items-center">
                                  <span className="text-sm font-medium text-gray-900">{item.price.toFixed(2)} ₺</span>
                                  {item.originalPrice && item.originalPrice > item.price && (
                                    <span className="ml-2 text-sm text-gray-500 line-through">{item.originalPrice.toFixed(2)} ₺</span>
                                  )}
                                </div>
                                
                                {/* Stock Status */}
                                <p className={`text-sm mt-1 ${item.inStock ? 'text-green-600' : 'text-red-600'}`}>
                                  {item.inStock ? 'Stokta var' : 'Stokta yok'}
                                </p>
                              </div>
                              
                              {/* Quantity Controls */}
                              <div className="mt-4 sm:mt-0 flex items-center">
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="p-1 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                                  disabled={item.quantity <= 1}
                                >
                                  <FiMinus size={14} />
                                </button>
                                <span className="mx-2 w-10 text-center">{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="p-1 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                                >
                                  <FiPlus size={14} />
                                </button>
                                
                                <span className="ml-4 font-medium text-gray-900">
                                  {(item.price * item.quantity).toFixed(2)} ₺
                                </span>
                              </div>
                            </div>
                            
                            {/* Remove Button */}
                            <button
                              onClick={() => removeItem(item.id)}
                              className="mt-2 text-sm text-red-600 hover:text-red-800 flex items-center"
                            >
                              <FiTrash2 size={14} className="mr-1" /> Ürünü Kaldır
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Continue Shopping */}
                <div className="mb-6">
                  <Link href="/" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                    <FiChevronRight size={16} className="mr-1 transform rotate-180" />
                    <span>Alışverişe Devam Et</span>
                  </Link>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm mb-6">
                  <div className="p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold">Sipariş Özeti</h2>
                  </div>
                  
                  <div className="p-4">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Ara Toplam</span>
                        <span className="font-medium">{subtotal.toFixed(2)} ₺</span>
                      </div>
                      
                      {discountAmount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>İndirim</span>
                          <span>-{discountAmount.toFixed(2)} ₺</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Kargo</span>
                        <span className="font-medium">
                          {shippingCost === 0 ? 'Ücretsiz' : `${shippingCost.toFixed(2)} ₺`}
                        </span>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex justify-between">
                          <span className="font-semibold">Toplam</span>
                          <span className="font-bold text-lg">{total.toFixed(2)} ₺</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">KDV dahil</p>
                      </div>
                    </div>
                    
                    {/* Proceed to Checkout - check if logged in */}
                    {isLoggedIn ? (
                      <Link 
                        href="/checkout" 
                        className="btn bg-primary-600 hover:bg-primary-700 text-white w-full mt-6 py-3 flex items-center justify-center font-medium rounded-md"
                      >
                        <FiShoppingBag className="mr-2" size={18} />
                        Siparişi Tamamla
                      </Link>
                    ) : (
                      <div className="mt-6 space-y-3">
                        <Link 
                          href="/login" 
                          className="btn bg-primary-600 hover:bg-primary-700 text-white w-full py-3 flex items-center justify-center font-medium rounded-md"
                        >
                          Giriş Yap
                        </Link>
                        <p className="text-center text-sm text-gray-500">veya</p>
                        <Link 
                          href="/register" 
                          className="btn bg-gray-800 hover:bg-gray-900 text-white w-full py-3 flex items-center justify-center font-medium rounded-md"
                        >
                          Üye Ol
                        </Link>
                        <p className="text-xs text-gray-500 text-center mt-2">
                          Sipariş verebilmek için giriş yapmalı veya üye olmalısınız.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Coupon Code */}
                <div className="bg-white rounded-lg shadow-sm mb-6">
                  <div className="p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold">İndirim Kuponu</h2>
                  </div>
                  
                  <div className="p-4">
                    <form onSubmit={applyCoupon}>
                      <div className="flex">
                        <input
                          type="text"
                          placeholder="Kupon kodu"
                          className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent flex-grow"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                        />
                        <button
                          type="submit"
                          className="btn bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-r-md border-l-0"
                        >
                          Uygula
                        </button>
                      </div>
                      
                      {couponError && (
                        <p className="text-sm text-red-600 mt-2">{couponError}</p>
                      )}
                      
                      {couponSuccess && (
                        <p className="text-sm text-green-600 mt-2">{couponSuccess}</p>
                      )}
                      
                      <p className="text-sm text-gray-600 mt-2">
                        İndirim kuponunuz varsa, yukarıdaki alana girin ve "Uygula" butonuna tıklayın.
                      </p>
                    </form>
                  </div>
                </div>
                
                {/* Delivery Info */}
                <div className="bg-white rounded-lg shadow-sm p-4">
                  <h3 className="font-semibold mb-3">Teslimat Bilgileri</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>300 TL ve üzeri siparişlerde kargo ücretsizdir.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>Siparişiniz 24-48 saat içinde kargoya verilir.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>Tüm ürünlerde iade hakkınız bulunmaktadır.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            // Empty Cart
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="max-w-md mx-auto">
                <FiShoppingCart className="text-gray-400 mx-auto mb-4" size={64} />
                <h2 className="text-2xl font-bold mb-2">Sepetiniz Boş</h2>
                <p className="text-gray-600 mb-6">
                  Sepetinizde herhangi bir ürün bulunmamaktadır. Alışveriş yapmak için "Alışverişe Başla" butonuna tıklayabilirsiniz.
                </p>
                <Link 
                  href="/" 
                  className="btn bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-md inline-flex items-center font-medium"
                >
                  <FiArrowRight className="mr-2" size={18} />
                  Alışverişe Başla
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
} 