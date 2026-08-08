import React from 'react';

/**
 * Resolves image paths with the correct base URL for GitHub Pages deployment vs dev preview.
 * Handles external URLs (http/https), imported modules, and public static paths.
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  
  // If it's an external URL (http/https) or data URI or blob, return as-is
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:') || path.startsWith('blob:')) {
    return path;
  }

  // Clean up relative or leading slashes
  const cleanPath = path.replace(/^\.\//, '').replace(/^\//, '');
  
  // Return root-relative path for custom domain and dev server
  return `/${cleanPath}`;
}

/**
 * Image error handler to ensure images ALWAYS display properly with unique category fallbacks.
 */
export function handleImageError(
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackCategory?: string | string[]
) {
  const img = event.currentTarget;

  // Prevent infinite error loops
  if (img.dataset.failed === 'true') {
    return;
  }

  img.dataset.failed = 'true';

  // Category specific distinct fallback URLs
  const categoryFallbacks: Record<string, string> = {
    'Architectural Modeling': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    'Point Cloud to BIM': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    'Custom Revit Families': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    'MEP Systems': 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    'Clash Detection': 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80',
    'Documentation': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
  };

  const primaryCategory = Array.isArray(fallbackCategory) ? fallbackCategory[0] : fallbackCategory;

  if (primaryCategory && categoryFallbacks[primaryCategory]) {
    img.src = categoryFallbacks[primaryCategory];
  } else {
    img.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80';
  }
}


