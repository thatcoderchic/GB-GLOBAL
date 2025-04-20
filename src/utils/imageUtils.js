// Utility function to get image paths for navbar items

// Function to get the image path for a specific category and item
export function getItemImagePath(category, itemId) {
  // Base path to the GBPICS folder
  const basePath = '/GBPICS';

  // Default image to use if no specific image is found
  const defaultImage = null;

  // Mapping for Washing Machine category
  if (category.toLowerCase() === 'washing machine') {
    switch (itemId) {
      case 'spin-motor':
        return `${basePath}/Washing Machine spare pic/Motor/Spin Motor/Motor spin 01 sealed.jpeg`;
      case 'wash-motor':
        return `${basePath}/Washing Machine spare pic/Motor/Wash Motor/Motor wash 06 sealed.jpeg`;
      case 'drain-motor':
        return `${basePath}/Washing Machine spare pic/Motor/Spin Motor/Motor spin 01 copper.jpeg`; // Placeholder
      case 'motor':
        return `${basePath}/Washing Machine spare pic/Motor/Spin Motor/Motor spin 01 copper.jpeg`;
      case 'gear-box':
        return `${basePath}/Washing Machine spare pic/Motor/Spin Motor/Motor spin G11 alu.jpeg`;
      case 'gear-box-raja':
        return `${basePath}/Washing Machine spare pic/Motor/Spin Motor/Motor spin G11 alu.jpeg`; // Placeholder
      case 'gear-box-xindi':
        return `${basePath}/Washing Machine spare pic/Motor/Wash Motor/Motor wash G16 alu.jpeg`; // Placeholder
      case 'timer':
        return `${basePath}/Washing Machine spare pic/Motor/Wash Motor/Motor wash 07 copper.jpeg`; // Placeholder
      case 'clutch':
        return `${basePath}/Washing Machine spare pic/Motor/Wash Motor/Motor wash 08 copper.jpeg`; // Placeholder
      case 'spin-bellow':
        return `${basePath}/Washing Machine spare pic/Motor/Wash Motor/Motor wash G19 alu.jpeg`; // Placeholder
      case 'inlet-valve':
        return `${basePath}/Washing Machine spare pic/Motor/Wash Motor/Motor wash 08 selaed.jpeg`; // Placeholder
      case 'pressure-switch':
        return `${basePath}/Washing Machine spare pic/Motor/Wash Motor/Motor wash G20 alu.jpeg`; // Placeholder
      default:
        return defaultImage;
    }
  }

  return defaultImage;
}

// Function to get a thumbnail image for a category
export function getCategoryThumbnail(category) {
  const basePath = '/GBPICS';

  switch (category.toLowerCase()) {
    case 'washing machine':
      return `${basePath}/Washing Machine spare pic/Motor/Spin Motor/Motor spin 01 sealed.jpeg`;
    case 'microwave':
      return `${basePath}/Microwave/Magnatron/Magnatron 01.jpeg`;
    case 'car washer':
      return `${basePath}/Car Washer/Washer/Washer 01.jpeg`;
    default:
      return null;
  }
}
