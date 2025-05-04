import React from 'react';
import Link from 'next/link';
import { FiInstagram, FiTwitter, FiFacebook, FiYoutube, FiSend } from 'react-icons/fi';
import PaymentMethodImage from './PaymentMethodImage';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  // Get the correct logo based on the current language
  const logoSrc = language === 'tr' ? '/images/logo/logo_tr.png' : '/images/logo/logo_en.png';
  
  const footerLinks = [
    {
      title: t('footer.termsAndConditions'),
      links: [
        { name: t('footer.deliveryConditions'), href: '/info/delivery' },
        { name: t('footer.termsAndConditions'), href: '/info/membership-agreement' },
        { name: t('footer.salesAgreement'), href: '/info/sales-agreement' },
        { name: t('footer.guaranteeAndReturn'), href: '/info/guarantee-and-return' },
        { name: t('footer.privacyPolicy'), href: '/info/privacy-and-security' },
        { name: t('footer.personalDataProtection'), href: '/info/personal-data-protection' },
        { name: t('footer.cookiePolicy'), href: '/info/cookie-policy' },
      ],
    },
    {
      title: t('nav.customerService'),
      links: [
        { name: t('nav.customerService'), href: '/customer-service' },
        { name: t('nav.stores'), href: '/stores' },
        { name: t('general.myOrders'), href: '/orders' },
        { name: t('general.myCart'), href: '/cart' },
        { name: t('nav.contact'), href: '/contact' },
      ],
    },
  ];

  const paymentMethods = [
    { name: 'Visa', image: '/images/payments/visa.png' },
    { name: 'MasterCard', image: '/images/payments/mastercard.png' },
    { name: 'PayPal', image: '/images/payments/paypal.png' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        {/* Newsletter */}
        <div className="bg-primary-700 rounded-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">{t('footer.newsletter')}</h3>
              <p className="text-primary-100">
                {t('footer.subscribePlaceholder')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder={t('footer.subscribePlaceholder')}
                className="input flex-grow min-w-0 text-gray-800"
              />
              <button className="btn bg-white text-primary-600 hover:bg-primary-50 font-semibold whitespace-nowrap">
                {t('footer.subscribe')}
              </button>
            </div>
          </div>
        </div>
        
        {/* Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="text-xl font-bold">{t('footer.followUs')}</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-400 transition-colors">
                <FiFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-400 transition-colors">
                <FiInstagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-400 transition-colors">
                <FiTwitter size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-400 transition-colors">
                <FiYoutube size={24} />
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm mb-2">
              {t('footer.newsletter')}
            </p>
          </div>
        </div>
        
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
          {/* Logo and Info */}
          <div>
            <Link href="/">
              <img src={logoSrc} alt="MaviTicaret" className="h-14" />
            </Link>
            <div className="mt-6">
              <h4 className="font-semibold mb-3">{t('footer.contactUs')}</h4>
              <address className="text-gray-400 not-italic mb-3">
                <p>Atatürk Mah. E-Ticaret Cad.</p>
                <p>No:123 Kat:4 Daire:15</p>
                <p>Ataşehir/İstanbul</p>
              </address>
              <p className="text-gray-400">
                <strong className="text-white">{t('stores.phone')}:</strong> 0850 123 4567
              </p>
              <p className="text-gray-400">
                <strong className="text-white">{t('stores.email')}:</strong> info@maviticaret.com
              </p>
            </div>
          </div>
          
          {/* Footer Links Columns */}
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h4 className="font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link href={link.href} className="text-gray-400 hover:text-primary-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Payment Methods */}
        <div className="border-t border-gray-700 pt-8 pb-4">
          <h4 className="font-semibold mb-4 text-center">{t('footer.paymentOptions')}</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {paymentMethods.map((method, idx) => (
              <div key={idx} className="bg-white p-2 rounded-lg">
                <img src={method.image} alt={method.name} className="h-8" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} MaviTicaret - {t('footer.allRightsReserved')}</p>
          <p className="mt-2">
            <a href="https://www.linkedin.com/in/yusufyazici/" target="_blank" rel="noopener noreferrer" className="text-primary-400">
              Made By Yusuf Yazici E-Trade systems
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 