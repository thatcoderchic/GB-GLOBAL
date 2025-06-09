import { useEffect } from 'react';

const MetaTags = ({ 
  title = "GB Global - Premium Spare Parts for Home Appliances",
  description = "Your trusted source for premium quality spare parts for washing machines, microwaves, and car washers. Find exactly what you need, when you need it.",
  keywords = "spare parts, washing machine parts, microwave parts, car washer parts, appliance repair, GB Global",
  image = "/images/og-image.jpg",
  url = window.location.href
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'GB Global');
    updateMetaTag('robots', 'index, follow');
    
    // Mobile optimization
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
    updateMetaTag('mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    updateMetaTag('apple-mobile-web-app-title', 'GB Global');
    updateMetaTag('theme-color', '#4f46e5');
    updateMetaTag('msapplication-TileColor', '#4f46e5');
    
    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', 'GB Global', true);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    
    // Additional SEO tags
    updateMetaTag('format-detection', 'telephone=no');
    updateMetaTag('referrer', 'origin-when-cross-origin');
    
    // Preconnect to external domains for performance
    const addPreconnect = (href) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = href;
        document.head.appendChild(link);
      }
    };
    
    addPreconnect('https://fonts.googleapis.com');
    addPreconnect('https://images.unsplash.com');
    
  }, [title, description, keywords, image, url]);

  return null; // This component doesn't render anything
};

export default MetaTags;
