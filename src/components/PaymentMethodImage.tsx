import React from 'react';
import { FiCreditCard } from 'react-icons/fi';

interface PaymentMethodImageProps {
  name: string;
  width?: number;
  height?: number;
  className?: string;
}

const PaymentMethodImage: React.FC<PaymentMethodImageProps> = ({
  name,
  width = 80,
  height = 32,
  className = '',
}) => {
  // Generate credit card colors based on the payment method name
  const getCardColors = (name: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('visa')) return { bg: '#1a1f71', text: '#ffffff', accent: '#f7b600' };
    if (lowerName.includes('master')) return { bg: '#eb001b', text: '#ffffff', accent: '#f79e1b' };
    if (lowerName.includes('card')) return { bg: '#25367a', text: '#ffffff', accent: '#ec921e' };
    
    // Default colors
    return { bg: '#2c3e50', text: '#ffffff', accent: '#3498db' };
  };

  const { bg, text, accent } = getCardColors(name);

  return (
    <div 
      className={`rounded-lg overflow-hidden shadow flex items-center justify-center ${className}`}
      style={{ 
        width, 
        height,
        background: `linear-gradient(135deg, ${bg} 0%, ${bg} 70%, ${accent} 100%)`,
        color: text,
        position: 'relative'
      }}
    >
      {/* Card chip */}
      <div 
        style={{
          position: 'absolute',
          top: 5,
          left: 5,
          width: 8,
          height: 6,
          backgroundColor: accent,
          borderRadius: 2
        }}
      />
      
      {/* Card logo */}
      <div className="flex items-center">
        <FiCreditCard size={12} color={text} className="mr-1" />
        <div className="text-xs font-bold uppercase truncate">
          {name}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodImage; 