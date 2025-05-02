import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import trTranslations from '../translations/tr';
import enTranslations from '../translations/en';

// Types
interface Translation {
  [key: string]: any;
}

interface Language {
  code: string;
  name: string;
  translations: Translation;
  flag: string;
}

interface LanguageContextType {
  language: string;
  translations: Translation;
  changeLanguage: (langCode: string) => void;
  t: (key: string) => string;
  getLanguages: () => Language[];
  getCurrentLanguage: () => Language;
}

interface LanguageProviderProps {
  children: ReactNode;
}

// Available languages
const languages: Record<string, Language> = {
  tr: {
    code: 'tr',
    name: 'Türkçe',
    translations: trTranslations,
    flag: '🇹🇷'
  },
  en: {
    code: 'en',
    name: 'English',
    translations: enTranslations,
    flag: '🇬🇧'
  }
};

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Language provider component
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Default language is Turkish, but check localStorage
  const [language, setLanguage] = useState<string>('tr');
  const [translations, setTranslations] = useState<Translation>(languages.tr.translations);

  // Initialize language from localStorage if available
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && languages[savedLanguage]) {
      setLanguage(savedLanguage);
      setTranslations(languages[savedLanguage].translations);
    }
  }, []);

  // Change language function
  const changeLanguage = (langCode: string) => {
    if (languages[langCode]) {
      setLanguage(langCode);
      setTranslations(languages[langCode].translations);
      localStorage.setItem('language', langCode);
    }
  };

  // Translation function
  const t = (key: string): string => {
    // Split the key path (e.g., "cart.title" -> ["cart", "title"])
    const keys = key.split('.');
    
    // Navigate through the translations object
    let result: any = translations;
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        // Key not found, return the key itself
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return result;
  };

  // Get all available languages
  const getLanguages = (): Language[] => {
    return Object.values(languages);
  };

  // Get current language object
  const getCurrentLanguage = (): Language => {
    return languages[language];
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      translations, 
      changeLanguage, 
      t, 
      getLanguages,
      getCurrentLanguage 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext; 