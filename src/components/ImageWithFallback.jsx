import { useState } from 'react';

export default function ImageWithFallback({ src, alt, className, fallbackSrc }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  // Default fallback image (a simple SVG placeholder)
  const defaultFallback = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='16' fill='%236b7280'%3E${alt || 'Image not available'}%3C/text%3E%3C/svg%3E`;

  return (
    <div className={`relative ${className}`}>
      {imageLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-400 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      )}
      
      <img
        src={imageError ? (fallbackSrc || defaultFallback) : src}
        alt={alt}
        className={`${className} ${imageLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
    </div>
  );
}
