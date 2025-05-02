import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const PromotionBanner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-primary-600">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('promotionBanner.title')}</h2>
            <p className="text-xl mb-8 text-primary-100">
              {t('promotionBanner.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder={t('footer.subscribePlaceholder')}
                className="input flex-grow text-gray-800"
              />
              <button className="btn bg-white text-primary-600 hover:bg-primary-50 font-semibold whitespace-nowrap">
                {t('footer.subscribe')}
              </button>
            </div>
            
            <p className="mt-4 text-sm text-primary-200">
              {t('promotionBanner.privacyNote')}
            </p>
          </div>
          
          <div className="bg-primary-700 rounded-lg p-6 text-white">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="block text-lg font-medium text-primary-200">{t('promotionBanner.limitedTime')}</span>
                <h3 className="text-2xl md:text-3xl font-bold">{t('promotionBanner.discount')}</h3>
              </div>
              <div className="bg-primary-500 rounded-full w-16 h-16 flex items-center justify-center text-center">
                <span className="font-bold text-lg">%15</span>
              </div>
            </div>
            
            <p className="mb-6 text-primary-100">
              {t('promotionBanner.discountDescription')}
            </p>
            
            <div className="bg-primary-800 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{t('promotionBanner.couponCode')}:</span>
                <span className="font-mono font-bold text-lg tracking-wider bg-primary-900 py-1 px-3 rounded">MAVI15</span>
              </div>
            </div>
            
            <Link href="/discount-products" className="btn btn-primary w-full justify-center bg-white text-primary-600 hover:bg-primary-50 font-semibold">
              {t('promotionBanner.discoverDiscounts')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionBanner; 