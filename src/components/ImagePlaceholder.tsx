import React from 'react';
import { FiPackage, FiShoppingBag, FiGift, FiHome, FiHeart, FiStar, FiBox, FiAward, FiCamera, FiCoffee, FiLayers } from 'react-icons/fi';

interface ImagePlaceholderProps {
  text: string;
  width?: number;
  height?: number;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  text,
  width = 300,
  height = 300,
  bgColor = '#0066cc',
  textColor = '#ffffff',
  className = '',
}) => {
  // Function to get a deterministic color based on the text
  const getColorFromText = (text: string): string => {
    const colors = [
      '#0066cc', // blue
      '#cc0066', // pink
      '#00cc66', // green
      '#cc6600', // orange
      '#6600cc', // purple
      '#66cc00', // lime
      '#0099cc', // light blue
      '#cc0099', // magenta
      '#cc9900', // gold
      '#9900cc', // violet
    ];
    
    // Sum the character codes in the text
    let sum = 0;
    for (let i = 0; i < text.length; i++) {
      sum += text.charCodeAt(i);
    }
    
    // Use the sum to select a color
    return colors[sum % colors.length];
  };

  // Get an icon based on the text
  const getIcon = (text: string) => {
    const lowercaseText = text.toLowerCase();
    if (lowercaseText.includes('peluş') || lowercaseText.includes('ayıcık') || lowercaseText.includes('pelus')) return FiHeart;
    if (lowercaseText.includes('takı') || lowercaseText.includes('aksesuar')) return FiAward;
    if (lowercaseText.includes('parti') || lowercaseText.includes('etkinlik')) return FiGift;
    if (lowercaseText.includes('ev') || lowercaseText.includes('yaşam')) return FiHome;
    if (lowercaseText.includes('ambalaj') || lowercaseText.includes('sunum')) return FiBox;
    if (lowercaseText.includes('süsleme') || lowercaseText.includes('hobi')) return FiStar;
    if (lowercaseText.includes('tavşan') || lowercaseText.includes('oyuncak')) return FiGift;
    if (lowercaseText.includes('mum') || lowercaseText.includes('dekoratif')) return FiCamera;
    if (lowercaseText.includes('asker') || lowercaseText.includes('paket')) return FiPackage;
    if (lowercaseText.includes('kurdele') || lowercaseText.includes('kırmızı')) return FiLayers;
    return FiShoppingBag; // Default icon
  };

  // Get an icon component
  const IconComponent = getIcon(text);

  // Use the text to determine a background color if not specified
  const backgroundColor = bgColor === '#0066cc' ? getColorFromText(text) : bgColor;

  // Create a pattern of small dots
  const createDotPattern = () => {
    const dotSize = 4;
    const dotSpacing = 16;
    const rows = Math.ceil(height / dotSpacing);
    const cols = Math.ceil(width / dotSpacing);
    const dots = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        dots.push(
          <div
            key={`dot-${r}-${c}`}
            style={{
              position: 'absolute',
              top: r * dotSpacing,
              left: c * dotSpacing,
              width: dotSize,
              height: dotSize,
              borderRadius: '50%',
              backgroundColor: `${textColor}20`, // 20% opacity
            }}
          />
        );
      }
    }
    return dots;
  };

  return (
    <div 
      className={`flex items-center justify-center overflow-hidden relative ${className}`}
      style={{ 
        width: width, 
        height: height, 
        backgroundColor,
        color: textColor,
      }}
    >
      {/* Background pattern */}
      {createDotPattern()}
      
      {/* Central Icon */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <IconComponent size={Math.min(width, height) * 0.3} color={textColor} />
        <div className="mt-4 text-center text-xs font-medium">
          {text.length > 20 ? text.substring(0, 18) + '...' : text}
        </div>
      </div>
    </div>
  );
};

export default ImagePlaceholder; 