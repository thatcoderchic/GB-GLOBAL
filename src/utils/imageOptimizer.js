// Image optimization utilities
export const imageFormats = {
  WEBP: 'webp',
  AVIF: 'avif',
  JPEG: 'jpeg',
  PNG: 'png'
};

// Check browser support for modern image formats
export const getBrowserImageSupport = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  const support = {
    webp: canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0,
    avif: false // AVIF support check is more complex, defaulting to false for now
  };
  
  return support;
};

// Generate optimized image URL based on browser support
export const getOptimizedImageUrl = (originalUrl, options = {}) => {
  const {
    width,
    height,
    quality = 80,
    format = 'auto'
  } = options;
  
  // For local images, return as-is for now
  // In production, you'd implement server-side image optimization
  if (!originalUrl || originalUrl.startsWith('/') || originalUrl.includes(window.location.hostname)) {
    return originalUrl;
  }
  
  // For external images (like Unsplash), add optimization parameters
  if (originalUrl.includes('unsplash.com')) {
    const url = new URL(originalUrl);
    
    if (width) url.searchParams.set('w', width);
    if (height) url.searchParams.set('h', height);
    if (quality) url.searchParams.set('q', quality);
    if (format !== 'auto') url.searchParams.set('fm', format);
    
    return url.toString();
  }
  
  return originalUrl;
};

// Generate responsive image sources
export const generateResponsiveSources = (baseUrl, breakpoints = [320, 640, 768, 1024, 1280]) => {
  const support = getBrowserImageSupport();
  const sources = [];
  
  // Generate WebP sources if supported
  if (support.webp) {
    breakpoints.forEach(width => {
      sources.push({
        srcSet: getOptimizedImageUrl(baseUrl, { width, format: 'webp' }),
        media: `(max-width: ${width}px)`,
        type: 'image/webp'
      });
    });
  }
  
  // Generate fallback JPEG sources
  breakpoints.forEach(width => {
    sources.push({
      srcSet: getOptimizedImageUrl(baseUrl, { width, format: 'jpeg' }),
      media: `(max-width: ${width}px)`,
      type: 'image/jpeg'
    });
  });
  
  return sources;
};

// Create blur placeholder for images
export const createBlurPlaceholder = (width = 400, height = 300, color = '#f1f5f9') => {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'%3E%3Cfilter id='blur'%3E%3CfeGaussianBlur stdDeviation='10'/%3E%3C/filter%3E%3Crect width='${width}' height='${height}' fill='${color}' filter='url(%23blur)'/%3E%3C/svg%3E`;
};

// Create low-quality image placeholder (LQIP)
export const createLQIP = (originalUrl, quality = 10) => {
  return getOptimizedImageUrl(originalUrl, { width: 40, quality });
};

// Image compression utility (client-side)
export const compressImage = (file, options = {}) => {
  return new Promise((resolve, reject) => {
    const {
      maxWidth = 1920,
      maxHeight = 1080,
      quality = 0.8,
      format = 'image/jpeg'
    } = options;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      // Calculate new dimensions
      let { width, height } = img;
      
      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }
      
      if (height > maxHeight) {
        width = (width * maxHeight) / height;
        height = maxHeight;
      }
      
      canvas.width = width;
      canvas.height = height;
      
      // Draw and compress
      ctx.drawImage(img, 0, 0, width, height);
      
      canvas.toBlob(resolve, format, quality);
    };
    
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};

// Lazy loading intersection observer
export const createLazyLoadObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  };
  
  return new IntersectionObserver(callback, { ...defaultOptions, ...options });
};

// Image loading performance metrics
export const measureImageLoadTime = (imageUrl) => {
  return new Promise((resolve) => {
    const startTime = performance.now();
    const img = new Image();
    
    img.onload = () => {
      const loadTime = performance.now() - startTime;
      resolve({
        url: imageUrl,
        loadTime,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        fileSize: null // Would need server-side support to get actual file size
      });
    };
    
    img.onerror = () => {
      resolve({
        url: imageUrl,
        loadTime: -1,
        error: true
      });
    };
    
    img.src = imageUrl;
  });
};

// Batch image loading with progress tracking
export const loadImagesWithProgress = (imageUrls, onProgress) => {
  let loadedCount = 0;
  const total = imageUrls.length;
  const results = [];
  
  return Promise.all(
    imageUrls.map((url, index) => 
      measureImageLoadTime(url).then(result => {
        loadedCount++;
        results[index] = result;
        
        if (onProgress) {
          onProgress({
            loaded: loadedCount,
            total,
            percentage: Math.round((loadedCount / total) * 100),
            currentImage: result
          });
        }
        
        return result;
      })
    )
  );
};

// Image error recovery strategies
export const createImageErrorRecovery = (originalSrc, fallbackSrcs = []) => {
  let currentIndex = 0;
  
  return {
    getNextSrc: () => {
      if (currentIndex < fallbackSrcs.length) {
        return fallbackSrcs[currentIndex++];
      }
      return null;
    },
    reset: () => {
      currentIndex = 0;
    },
    hasMore: () => currentIndex < fallbackSrcs.length
  };
};

// Performance monitoring for images
export const monitorImagePerformance = () => {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.initiatorType === 'img') {
          console.log('Image Performance:', {
            name: entry.name,
            duration: entry.duration,
            transferSize: entry.transferSize,
            decodedBodySize: entry.decodedBodySize
          });
        }
      });
    });
    
    observer.observe({ entryTypes: ['resource'] });
    return observer;
  }
  
  return null;
};
