import { useState, useEffect } from 'react';

export default function ImageWithFallback({
  src,
  alt,
  className,
  fallbackSrc,
  loading = 'lazy',
  ...props
}) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    setImageError(false);
    setImageLoading(true);
  }, [src]);

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  // Enhanced fallback image with better styling
  const defaultFallback = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f3f4f6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23e5e7eb;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23grad)'/%3E%3Cg transform='translate(200,150)'%3E%3Ccircle cx='0' cy='-20' r='25' fill='%239ca3af' opacity='0.5'/%3E%3Cpath d='M-15,-5 L15,-5 L10,10 L-10,10 Z' fill='%239ca3af' opacity='0.5'/%3E%3C/g%3E%3Ctext x='50%25' y='75%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui, sans-serif' font-size='14' fill='%236b7280'%3E${encodeURIComponent(alt || 'Image not available')}%3C/text%3E%3C/svg%3E`;

  return (
    <div className="relative overflow-hidden">
      {imageLoading && (
        <div className={`absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center z-10 ${className}`}>
          <div className="skeleton w-full h-full absolute inset-0"></div>
          <div className="relative z-10 text-center">
            <div className="w-6 h-6 lg:w-8 lg:h-8 border-2 border-brand-200 border-t-brand-600 rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-xs text-neutral-500 font-medium">Loading...</p>
          </div>
        </div>
      )}

      <img
        src={imageError ? (fallbackSrc || defaultFallback) : src}
        alt={alt}
        className={`${className} ${imageLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onError={handleImageError}
        onLoad={handleImageLoad}
        loading={loading}
        {...props}
      />
    </div>
  );
}
