/**
 * Utility functions for handling image paths and loading
 */

/**
 * Properly encode image path for URL usage
 * @param {string} basePath - The base path for the image
 * @param {string} filename - The filename of the image
 * @returns {string} - Properly encoded URL
 */
export const getImagePath = (basePath, filename) => {
  // Construct the full path
  const fullPath = `${basePath}/${filename}`;

  // Encode the path properly for URLs
  // Split by '/' and encode each segment, then rejoin
  const segments = fullPath.split('/');
  const encodedSegments = segments.map(segment => {
    if (segment === '') return '';
    // Use encodeURIComponent for proper encoding
    return encodeURIComponent(segment);
  });

  const encodedPath = encodedSegments.join('/');

  console.log('Image path generation:', {
    basePath,
    filename,
    fullPath,
    encodedPath
  });

  return encodedPath;
};

/**
 * Preload an image and return a promise
 * @param {string} src - Image source URL
 * @returns {Promise} - Promise that resolves when image loads
 */
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Check if an image exists and can be loaded
 * @param {string} src - Image source URL
 * @returns {Promise<boolean>} - Promise that resolves to true if image exists
 */
export const imageExists = async (src) => {
  try {
    await preloadImage(src);
    return true;
  } catch {
    return false;
  }
};

/**
 * Format image name for display
 * @param {string} filename - Original filename
 * @returns {string} - Formatted display name
 */
export const formatImageName = (filename) => {
  return filename
    .replace('.jpeg', '')
    .replace('.jpg', '')
    .replace('.png', '')
    .replace(/selaed/i, 'sealed') // Fix common typo
    .replace(/([0-9]+)([a-z]+)/i, '$1 $2') // Add space between numbers and letters
    .split(/(?=[A-Z])/).join(' ') // Add space before capital letters
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim();
};

/**
 * Generate a unique ID from filename
 * @param {string} filename - Original filename
 * @returns {string} - Unique ID
 */
export const generateImageId = (filename) => {
  return filename
    .replace(/\.(jpeg|jpg|png)$/i, '')
    .replace(/[^a-zA-Z0-9]/g, '-')
    .toLowerCase()
    .replace(/-+/g, '-') // Replace multiple dashes with single dash
    .replace(/^-|-$/g, ''); // Remove leading/trailing dashes
};

/**
 * Create image object with all necessary properties
 * @param {string} basePath - Base path for images
 * @param {string} filename - Image filename
 * @returns {Object} - Image object with path, name, and id
 */
export const createImageObject = (basePath, filename) => {
  // Create alternative path using symlink for better compatibility
  const alternativePath = basePath.replace('/GBPICS/Washing Machine spare pic', '/gbpics-test');

  return {
    path: getImagePath(basePath, filename),
    alternativePath: getImagePath(alternativePath, filename),
    name: formatImageName(filename),
    id: generateImageId(filename),
    filename: filename
  };
};
