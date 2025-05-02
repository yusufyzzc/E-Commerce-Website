import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import CategorySection from '../components/CategorySection';
import PromotionBanner from '../components/PromotionBanner';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{t('home.title')}</title>
        <meta name="description" content={t('home.description')} />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      
      <main>
        <Hero />
        <CategorySection />
        <FeaturedProducts />
        <PromotionBanner />
      </main>

      <Footer />
    </div>
  );
} 