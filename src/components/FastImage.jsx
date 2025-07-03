import { useState, useEffect, useRef, useCallback } from 'react';
import { getOptimizedImageUrl, createBlurPlaceholder } from '../utils/imageOptimizer';

const FastImage = ({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc,
  loading = 'lazy',
  priority = false,
  sizes,
  width,
  height,
  quality = 80,
  onLoad,
  onError,
  placeholder = true,
  ...props 
}) => {
  const [imageState, setImageState] = useState({
    loading: true,
    error: false,
    loaded: false,
    retryCount: 0
  });
  
  const imgRef = useRef(null);
  const timeoutRef = useRef(null);
  const maxRetries = 2;
  const retryDelay = 1000;

  // Generate optimized image URL
  const optimizedSrc = getOptimizedImageUrl(src, { width, height, quality });
  
  // Create placeholder
  const placeholderSrc = placeholder 
    ? createBlurPlaceholder(width || 400, height || 300)
    : null;

  // Enhanced fallback with multiple options
  const getFallbackSrc = useCallback(() => {
    if (fallbackSrc) return fallbackSrc;
    
    // Try different image extensions
    if (src && src.includes('.jpeg')) {
      return src.replace('.jpeg', '.jpg');
    }
    if (src && src.includes('.jpg')) {
      return src.replace('.jpg', '.jpeg');
    }
    
    // Default SVG fallback
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width || 400}' height='${height || 300}' viewBox='0 0 ${width || 400} ${height || 300}'%3E%3Crect width='100%25' height='100%25' fill='%23f8fafc'/%3E%3Cg transform='translate(${(width || 400)/2},${(height || 300)/2})'%3E%3Ccircle cx='0' cy='-20' r='20' fill='%23e2e8f0'/%3E%3Cpath d='M-12,-5 L12,-5 L8,8 L-8,8 Z' fill='%23e2e8f0'/%3E%3C/g%3E%3Ctext x='50%25' y='75%25' text-anchor='middle' font-family='system-ui' font-size='14' fill='%23a0aec0'%3E${encodeURIComponent(alt || 'Image')}%3C/text%3E%3C/svg%3E`;
  }, [src, fallbackSrc, width, height, alt]);

  // Reset state when src changes
  useEffect(() => {
    setImageState({
      loading: true,
      error: false,
      loaded: false,
      retryCount: 0
    });
  }, [src]);

  // Preload critical images
  useEffect(() => {
    if (priority && optimizedSrc) {
      const img = new Image();
      img.onload = () => handleImageLoad();
      img.onerror = () => handleImageError();
      img.src = optimizedSrc;
    }
  }, [optimizedSrc, priority]);

  const handleImageLoad = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    setImageState(prev => ({
      ...prev,
      loading: false,
      error: false,
      loaded: true
    }));
    
    // Add loaded class for CSS animations
    if (imgRef.current) {
      imgRef.current.classList.add('image-loaded');
    }
    
    onLoad?.();
  }, [onLoad]);

  const handleImageError = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    setImageState(prev => {
      if (prev.retryCount < maxRetries) {
        // Retry with exponential backoff
        timeoutRef.current = setTimeout(() => {
          if (imgRef.current) {
            imgRef.current.src = optimizedSrc;
          }
        }, retryDelay * Math.pow(2, prev.retryCount));
        
        return {
          ...prev,
          retryCount: prev.retryCount + 1
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
  }, [optimizedSrc, onError]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const currentSrc = imageState.error ? getFallbackSrc() : optimizedSrc;

  return (
    <div className="relative overflow-hidden">
      {/* Placeholder/Loading State */}
      {imageState.loading && placeholderSrc && (
        <img
          src={placeholderSrc}
          alt=""
          className={`${className} absolute inset-0 z-10 image-loading`}
          aria-hidden="true"
        />
      )}
      
      {/* Loading Spinner */}
      {imageState.loading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-neutral-50/80">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 border-2 border-brand-200 border-t-brand-600 rounded-full animate-spin"></div>
            {imageState.retryCount > 0 && (
              <p className="text-xs text-neutral-500 mt-2">
                Retrying... ({imageState.retryCount}/{maxRetries})
              </p>
            )}
          </div>
        </div>
      )}

      {/* Error State */}
      {imageState.error && (
        <div className={`${className} image-error`}>
          <div className="text-center p-4">
            <svg className="w-8 h-8 mx-auto mb-2 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-xs text-neutral-600">Failed to load</p>
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
        } transition-opacity duration-300 ease-out`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading={priority ? 'eager' : loading}
        sizes={sizes}
        width={width}
        height={height}
        decoding="async"
        style={{
          aspectRatio: width && height ? `${width} / ${height}` : undefined
        }}
        {...props}
      />
    </div>
  );
};

export default FastImage;
