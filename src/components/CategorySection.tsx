import React from 'react';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';
import ImagePlaceholder from './ImagePlaceholder';
import { useLanguage } from '../context/LanguageContext';

const CategorySection: React.FC = () => {
  const { t } = useLanguage();
  
  // Function to generate SVG patterns for category backgrounds
  const getCategoryPatternSVG = (categoryKey: string) => {
    const patterns: Record<string, string> = {
      'categories.jewelry.title': `
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diamonds" patternUnits="userSpaceOnUse" width="50" height="50" patternTransform="rotate(45)">
              <rect width="10" height="10" fill="rgba(255,255,255,0.1)" x="0" y="0" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diamonds)" />
        </svg>
      `,
      'categories.decoration.title': `
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circles" patternUnits="userSpaceOnUse" width="60" height="60">
              <circle cx="30" cy="30" r="10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circles)" />
        </svg>
      `,
      'categories.packaging.title': `
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="squares" patternUnits="userSpaceOnUse" width="40" height="40">
              <rect width="20" height="20" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2" x="0" y="0" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#squares)" />
        </svg>
      `,
      'categories.party.title': `
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="triangles" patternUnits="userSpaceOnUse" width="60" height="60">
              <polygon points="30,10 50,50 10,50" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#triangles)" />
        </svg>
      `,
      'categories.homeLife.title': `
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="lines" patternUnits="userSpaceOnUse" width="40" height="40">
              <line x1="0" y1="20" x2="40" y2="20" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
              <line x1="20" y1="0" x2="20" y2="40" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lines)" />
        </svg>
      `,
      'categories.plush.title': `
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" patternUnits="userSpaceOnUse" width="20" height="20">
              <circle cx="10" cy="10" r="2" fill="rgba(255,255,255,0.1)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      `,
    };

    return patterns[categoryKey] || patterns['categories.jewelry.title'];
  };

  const categories = [
    {
      id: 1,
      nameKey: 'categories.jewelry.title',
      image: '/images/category-1.jpg',
      href: '/category/taki-aksesuar',
      color: 'bg-primary-600',
    },
    {
      id: 2,
      nameKey: 'categories.decoration.title',
      image: '/images/category-2.jpg',
      href: '/category/susleme-hobi',
      color: 'bg-primary-700',
    },
    {
      id: 3,
      nameKey: 'categories.packaging.title',
      image: '/images/category-3.jpg',
      href: '/category/ambalaj-sunum',
      color: 'bg-primary-800',
    },
    {
      id: 4,
      nameKey: 'categories.party.title',
      image: '/images/category-4.jpg',
      href: '/category/parti-etkinlik',
      color: 'bg-secondary-600',
    },
    {
      id: 5,
      nameKey: 'categories.homeLife.title',
      image: '/images/category-5.jpg',
      href: '/category/ev-yasam',
      color: 'bg-secondary-700',
    },
    {
      id: 6,
      nameKey: 'categories.plush.title',
      image: '/images/category-6.jpg',
      href: '/category/plus-oyuncak',
      color: 'bg-secondary-800',
    },
    {
      id: 7,
      nameKey: 'categories.newArrivals.title',
      image: '/images/category-7.jpg',
      href: '/category/yeni-urunler',
      color: 'bg-blue-600',
    },
    {
      id: 8,
      nameKey: 'categories.discounted.title',
      image: '/images/category-8.jpg',
      href: '/category/indirimli-urunler',
      color: 'bg-red-600',
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{t('home.categories')}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={category.href}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                {/* Enhanced visual backgrounds */}
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{ 
                    backgroundColor: category.color.includes('primary') 
                      ? '#0066cc' 
                      : (category.color.includes('secondary') ? '#cc6600' : '#3498db')
                  }}
                />
                
                {/* SVG pattern overlay */}
                <div 
                  className="absolute inset-0 w-full h-full z-0"
                  dangerouslySetInnerHTML={{ __html: getCategoryPatternSVG(category.nameKey) }}
                />

                {/* Icon placeholder */}
                <div className="absolute inset-0 flex items-center justify-center z-0 opacity-60">
                  <ImagePlaceholder 
                    text={t(category.nameKey)}
                    className="w-3/4 h-3/4"
                    bgColor="transparent"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              </div>
              
              <div className="absolute bottom-0 w-full p-4 flex justify-between items-center z-20">
                <h3 className="text-lg font-semibold text-white">{t(category.nameKey)}</h3>
                <div className={`${category.color} rounded-full p-2 text-white transition-transform duration-300 group-hover:translate-x-1`}>
                  <FiChevronRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection; 