// Image preloader utility for better performance
class ImagePreloader {
  constructor() {
    this.cache = new Map();
    this.loadingPromises = new Map();
    this.maxCacheSize = 50; // Limit cache size to prevent memory issues
  }

  // Preload a single image
  preloadImage(src, priority = false) {
    if (!src || this.cache.has(src)) {
      return Promise.resolve(src);
    }

    if (this.loadingPromises.has(src)) {
      return this.loadingPromises.get(src);
    }

    const promise = new Promise((resolve, reject) => {
      const img = new Image();
      
      img.onload = () => {
        this.addToCache(src, img);
        this.loadingPromises.delete(src);
        resolve(src);
      };
      
      img.onerror = () => {
        this.loadingPromises.delete(src);
        reject(new Error(`Failed to load image: ${src}`));
      };
      
      // Set crossOrigin for external images
      if (src.startsWith('http') && !src.includes(window.location.hostname)) {
        img.crossOrigin = 'anonymous';
      }
      
      img.src = src;
    });

    this.loadingPromises.set(src, promise);
    return promise;
  }

  // Preload multiple images
  preloadImages(sources, priority = false) {
    const promises = sources.map(src => 
      this.preloadImage(src, priority).catch(error => {
        console.warn('Failed to preload image:', error.message);
        return null;
      })
    );
    
    return Promise.allSettled(promises);
  }

  // Add image to cache with size management
  addToCache(src, img) {
    if (this.cache.size >= this.maxCacheSize) {
      // Remove oldest entry
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    
    this.cache.set(src, {
      image: img,
      timestamp: Date.now(),
      width: img.naturalWidth,
      height: img.naturalHeight
    });
  }

  // Check if image is cached
  isCached(src) {
    return this.cache.has(src);
  }

  // Get cached image info
  getCachedImage(src) {
    return this.cache.get(src);
  }

  // Clear cache
  clearCache() {
    this.cache.clear();
    this.loadingPromises.clear();
  }

  // Get cache stats
  getCacheStats() {
    return {
      size: this.cache.size,
      maxSize: this.maxCacheSize,
      loadingCount: this.loadingPromises.size
    };
  }
}

// Create singleton instance
const imagePreloader = new ImagePreloader();

// Utility functions for common use cases
export const preloadCriticalImages = (imageSources) => {
  return imagePreloader.preloadImages(imageSources, true);
};

export const preloadImage = (src) => {
  return imagePreloader.preloadImage(src);
};

export const preloadImagesInViewport = () => {
  const images = document.querySelectorAll('img[data-src]');
  const imageSources = Array.from(images).map(img => img.dataset.src);
  return imagePreloader.preloadImages(imageSources);
};

// Preload images based on user interaction hints
export const preloadOnHover = (element, imageSrc) => {
  let timeoutId;
  
  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => {
      imagePreloader.preloadImage(imageSrc);
    }, 100); // Small delay to avoid unnecessary preloading
  };
  
  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };
  
  element.addEventListener('mouseenter', handleMouseEnter);
  element.addEventListener('mouseleave', handleMouseLeave);
  
  // Return cleanup function
  return () => {
    element.removeEventListener('mouseenter', handleMouseEnter);
    element.removeEventListener('mouseleave', handleMouseLeave);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };
};

// Preload images for a specific category
export const preloadCategoryImages = (category) => {
  const categoryImageMap = {
    'washing-machine': [
      '/GBPICS/Washing Machine spare pic/Motor/Spin Motor/Spin motor 100 watt.jpeg',
      '/GBPICS/Washing Machine spare pic/Motor/Wash Motor/Wash motor 200 watt.jpeg',
      '/GBPICS/Washing Machine spare pic/Gearbox-RAJA/Gear box RAJA.jpeg'
    ],
    'microwave': [
      '/GBPICS/Microwave spare pic/Magnetron/Magnetron 210 witol.jpeg',
      '/GBPICS/Microwave spare pic/Transformer/Micro Transformers.jpeg',
      '/GBPICS/Microwave spare pic/Glass Tray/Glass tray 12.5 inches.jpeg'
    ],
    'car-washer': [
      '/GBPICS/Car washer/Washer Gun/Washer gun.jpeg',
      '/GBPICS/Car washer/Pipe/Washers pipe 05 mtr.jpeg',
      '/GBPICS/Car washer/Adopter /Washers clear adopter.jpeg'
    ]
  };
  
  const images = categoryImageMap[category] || [];
  return imagePreloader.preloadImages(images);
};

// Progressive image loading with different qualities
export const loadProgressiveImage = (baseSrc, qualities = [20, 50, 80]) => {
  return qualities.reduce((promise, quality) => {
    return promise.then(() => {
      const progressiveSrc = `${baseSrc}?quality=${quality}`;
      return imagePreloader.preloadImage(progressiveSrc);
    });
  }, Promise.resolve());
};

// Cleanup function for memory management
export const cleanupImageCache = () => {
  imagePreloader.clearCache();
};

// Get cache statistics
export const getImageCacheStats = () => {
  return imagePreloader.getCacheStats();
};

export default imagePreloader;
