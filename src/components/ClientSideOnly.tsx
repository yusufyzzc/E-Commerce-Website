import React, { useState, useEffect } from 'react';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

type Product = {
  id: number;
  nameKey: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  href: string;
  inStock: boolean;
  isNew: boolean;
};

interface ClientSideOnlyProps {
  product: Product;
}

const ClientSideOnly: React.FC<ClientSideOnlyProps> = ({ product }) => {
  const { t } = useLanguage();
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [notification, setNotification] = useState<{
    message: string;
    type: 'success' | 'error' | null;
  }>({ message: '', type: null });

  // Load favorites from localStorage on component mount
  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem('favorites');
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    } catch (error) {
      console.error('Error loading favorites from localStorage:', error);
    }
  }, []);

  // Check if a product is in favorites
  const isInFavorites = (productId: number): boolean => {
    return favorites.some(item => item.id === productId);
  };

  // Add to favorites
  const handleAddToFavorites = (product: Product) => {
    if (isInFavorites(product.id)) {
      // Remove from favorites if already added
      const updatedFavorites = favorites.filter(item => item.id !== product.id);
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      
      setNotification({
        message: t('products.removedFromFavorites'),
        type: 'success'
      });
    } else {
      // Add to favorites
      const updatedFavorites = [...favorites, product];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      
      setNotification({
        message: t('products.addedToFavorites'),
        type: 'success'
      });
    }
    
    // Clear notification after 3 seconds
    setTimeout(() => {
      setNotification({ message: '', type: null });
    }, 3000);
  };

  // Add to cart
  const handleAddToCart = (product: Product) => {
    // Here you would actually add the product to the cart
    // For demo purposes, just show notification
    setNotification({
      message: t('products.addedToCart'),
      type: 'success'
    });
    
    // Clear notification after 3 seconds
    setTimeout(() => {
      setNotification({ message: '', type: null });
    }, 3000);
  };

  return (
    <>
      {/* Notification */}
      {notification.type && (
        <div className={`fixed top-20 right-4 z-50 p-4 rounded-md shadow-md ${
          notification.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          <div className="flex items-center">
            <span>{notification.message}</span>
            <button 
              className="ml-3"
              onClick={() => setNotification({ message: '', type: null })}
            >
              <span className="transform rotate-45 block">×</span>
            </button>
          </div>
        </div>
      )}
      
      {/* Favorite button */}
      <div className="flex items-center justify-between">
        <button 
          className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${
            isInFavorites(product.id) ? 'text-red-600' : 'text-gray-600 hover:text-red-600'
          }`}
          onClick={() => handleAddToFavorites(product)}
          aria-label={isInFavorites(product.id) ? t('products.removeFromFavorites') : t('products.addToFavorites')}
        >
          <FiHeart size={20} className={isInFavorites(product.id) ? "fill-current" : ""} />
        </button>
        
        {/* Add to cart button */}
        <button
          className={`flex items-center justify-center px-4 py-2 rounded ${
            product.inStock 
              ? 'bg-primary-600 hover:bg-primary-700 text-white' 
              : 'bg-gray-300 cursor-not-allowed text-gray-500'
          }`}
          disabled={!product.inStock}
          onClick={() => handleAddToCart(product)}
        >
          <FiShoppingCart className="mr-2" size={16} />
          {t('products.addToCart')}
        </button>
      </div>
    </>
  );
};

export default ClientSideOnly; 