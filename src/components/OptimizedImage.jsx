import { useState, useEffect, useRef, useCallback } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc,
  loading = 'lazy',
  priority = false,
  sizes,
  quality = 80,
  placeholder = 'blur',
  onLoad,
  onError,
  ...props 
}) => {
  const [imageState, setImageState] = useState({
    loading: true,
    error: false,
    retryCount: 0,
    currentSrc: src
  });
  
  const imgRef = useRef(null);
  const observerRef = useRef(null);
  const maxRetries = 3;

  // Generate optimized image URLs for different formats
  const generateOptimizedSrc = useCallback((originalSrc, format = 'webp') => {
    if (!originalSrc || originalSrc.startsWith('data:') || originalSrc.startsWith('http')) {
      return originalSrc;
    }
    
    // For local images, we'll try to serve them as-is first
    // In a real production environment, you'd implement image optimization here
    return originalSrc;
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (loading === 'lazy' && !priority && imgRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageState(prev => ({ ...prev, loading: true }));
              observerRef.current?.unobserve(entry.target);
            }
          });
        },
        { 
          rootMargin: '50px',
          threshold: 0.1
        }
      );

      observerRef.current.observe(imgRef.current);
      
      return () => {
        observerRef.current?.disconnect();
      };
    }
  }, [loading, priority]);

  // Preload critical images
  useEffect(() => {
    if (priority && src) {
      const img = new Image();
      img.onload = () => {
        setImageState(prev => ({ ...prev, loading: false, error: false }));
      };
      img.onerror = () => {
        handleImageError();
      };
      img.src = src;
    }
  }, [src, priority]);

  // Reset state when src changes
  useEffect(() => {
    setImageState({
      loading: true,
      error: false,
      retryCount: 0,
      currentSrc: src
    });
  }, [src]);

  const handleImageError = useCallback(() => {
    setImageState(prev => {
      console.log('OptimizedImage error:', {
        src: prev.currentSrc,
        retryCount: prev.retryCount,
        fallbackSrc
      });

      if (prev.retryCount === 0 && fallbackSrc && prev.currentSrc !== fallbackSrc) {
        // Try fallback path first
        console.log('Trying fallback path:', fallbackSrc);
        return {
          ...prev,
          currentSrc: fallbackSrc,
          retryCount: 1
        };
      } else if (prev.retryCount < maxRetries) {
        // Try with different format or retry
        const newRetryCount = prev.retryCount + 1;
        setTimeout(() => {
          if (imgRef.current) {
            imgRef.current.src = prev.currentSrc;
          }
        }, 1000 * newRetryCount);

        return {
          ...prev,
          retryCount: newRetryCount
        };
      } else {
        onError?.();
        return {
          ...prev,
          loading: false,
          error: true
        };
      }
    });
  }, [onError, fallbackSrc]);

  const handleImageLoad = useCallback(() => {
    setImageState(prev => ({
      ...prev,
      loading: false,
      error: false
    }));
    onLoad?.();
  }, [onLoad]);

  // Enhanced fallback with proper aspect ratio
  const defaultFallback = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f8fafc;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f1f5f9;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23grad)'/%3E%3Cg transform='translate(200,150)'%3E%3Ccircle cx='0' cy='-25' r='20' fill='%23cbd5e1' opacity='0.6'/%3E%3Cpath d='M-12,-8 L12,-8 L8,8 L-8,8 Z' fill='%23cbd5e1' opacity='0.6'/%3E%3C/g%3E%3Ctext x='50%25' y='80%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui, sans-serif' font-size='12' fill='%2394a3b8'%3E${encodeURIComponent(alt || 'Image')}%3C/text%3E%3C/svg%3E`;

  // Blur placeholder for loading state
  const blurPlaceholder = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cfilter id='blur'%3E%3CfeGaussianBlur stdDeviation='10'/%3E%3C/filter%3E%3Crect width='400' height='300' fill='%23f1f5f9' filter='url(%23blur)'/%3E%3C/svg%3E`;

  const currentSrc = imageState.error 
    ? (fallbackSrc || defaultFallback)
    : imageState.currentSrc;

  return (
    <div className="relative overflow-hidden">
      {/* Loading State */}
      {imageState.loading && (
        <div className={`absolute inset-0 bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center z-10 ${className}`}>
          {placeholder === 'blur' && (
            <img
              src={blurPlaceholder}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-50"
              aria-hidden="true"
            />
          )}
          <div className="relative z-10 text-center">
            <div className="w-6 h-6 lg:w-8 lg:h-8 border-2 border-brand-200 border-t-brand-600 rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-xs text-neutral-500 font-medium">
              {imageState.retryCount > 0 
                ? `Retrying... (${imageState.retryCount}/${maxRetries})` 
                : 'Loading image...'}
            </p>
          </div>
        </div>
      )}

      {/* Error State */}
      {imageState.error && (
        <div className={`bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center ${className}`}>
          <div className="text-center p-4">
            <div className="w-12 h-12 mx-auto mb-3 bg-neutral-300 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xs text-neutral-600 font-medium">Image unavailable</p>
            <p className="text-xs text-neutral-500 mt-1">{alt}</p>
          </div>
        </div>
      )}

      {/* Main Image */}
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        className={`${className} ${
          imageState.loading ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-500 ease-out`}
        onError={handleImageError}
        onLoad={handleImageLoad}
        loading={priority ? 'eager' : loading}
        sizes={sizes}
        decoding="async"
        style={{
          filter: imageState.loading ? 'blur(5px)' : 'none',
          transition: 'filter 0.3s ease-out, opacity 0.5s ease-out'
        }}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
