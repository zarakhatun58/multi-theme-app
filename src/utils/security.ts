// Security utilities for safe data handling

export const sanitizeInput = (input: string): string => {
  // Remove potential XSS characters
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateTheme = (theme: string): boolean => {
  const validThemes = ['theme1', 'theme2', 'theme3'];
  return validThemes.includes(theme);
};

export const sanitizeUrl = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url);
    // Only allow https and http protocols
    return ['https:', 'http:'].includes(parsedUrl.protocol);
  } catch {
    return false;
  }
};

// Content Security Policy headers (for reference)
export const CSP_DIRECTIVES = {
  'default-src': "'self'",
  'script-src': "'self' 'unsafe-inline'",
  'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com",
  'font-src': "'self' https://fonts.gstatic.com",
  'img-src': "'self' https: data:",
  'connect-src': "'self' https://fakestoreapi.com",
};