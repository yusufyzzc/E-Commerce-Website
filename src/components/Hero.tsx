import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(2);

  const slides = [
    {
      id: 1,
      titleKey: 'hero.slide1.title',
      descriptionKey: 'hero.slide1.description',
      ctaKey: 'hero.slide1.cta',
      image: "/images/slide_pictures/summer.jpg",
      href: "/collection/summer",
      color: "from-primary-600 to-primary-900",
    },
    {
      id: 2,
      titleKey: 'hero.slide2.title',
      descriptionKey: 'hero.slide2.description',
      ctaKey: 'hero.slide2.cta',
      image: "/images/slide_pictures/discount.jpg",
      href: "/promotions",
      color: "from-secondary-600 to-secondary-900",
    },
    {
      id: 3,
      titleKey: 'hero.slide3.title',
      descriptionKey: 'hero.slide3.description',
      ctaKey: 'hero.slide3.cta',
      image: "/images/slide_pictures/new_season.jpeg",
      href: "/new-arrivals",
      color: "from-blue-400 to-blue-600",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform ${
            index === currentSlide ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-80`}></div>
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
          <div className="relative h-full container flex items-center">
            <div className="max-w-xl text-white p-4 md:p-0">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{t(slide.titleKey)}</h1>
              <p className="text-lg md:text-xl mb-8">{t(slide.descriptionKey)}</p>
              <Link href={slide.href} className="btn btn-primary bg-white text-primary-600 hover:bg-gray-100">
                {t(slide.ctaKey)}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 text-white hover:bg-white/50 focus:outline-none"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 text-white hover:bg-white/50 focus:outline-none"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero; 