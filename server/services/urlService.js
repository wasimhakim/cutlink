import crypto from 'crypto'

let urlMap = new Map(); // In-memory store for URL mappings
let baseUrl = process.env.BASE_URL || 'http://test.com'

const generateShortCode = () => {
  return crypto.randomBytes(3).toString('hex');
}

export const generateShortUrl = (originalUrl) => {
  const urlPath = new URL(originalUrl).pathname;

  const firstShortUrl = `${baseUrl}${urlPath}`
  urlMap.set(urlPath, originalUrl)

  let shortcode;
  do {
    shortcode = generateShortCode();
  } while (urlMap.has(shortcode)); // this will ensure unique short code

  const secondShortUrl = `${baseUrl}/${shortcode}`
  urlMap.set(shortcode, originalUrl);

  return { firstShortUrl, secondShortUrl }
}

export const getOriginalUrl = (shortCode) => {
  return urlMap.get(shortCode);
}

export const getAllUrls = () => {
  return Array.from(urlMap.entries()).map(([shortCode, originalUrl]) => ({
      shortCode,
      originalUrl
  }));
};