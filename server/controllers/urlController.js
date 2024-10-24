import { generateShortUrl, getAllUrls, getOriginalUrl, deleteUrlByCode } from '../services/urlService.js'
import { isValidUrl, isUrlMissing } from '../utils/urlHelper.js';

export const shortenUrl = (req, res, next) => {
  const { originalUrl } = req.body;

  try {
    if (isUrlMissing(originalUrl)) {
      const error = new Error('URL is required and cannot be empty')
      error.statusCode = 400
      throw error
    }

    if (!isValidUrl(originalUrl)) {
      const error = new Error('Invalid URL format');
      error.statusCode = 400;
      throw error;
    }

    const { firstShortUrl, secondShortUrl } = generateShortUrl(originalUrl)

    res.status(200).json({firstShortUrl, secondShortUrl})
  } catch(error) {
    next(error);
  }
}

export const urlList = (req, res, next) => {
  try {
    const urls = getAllUrls()
    res.status(200).json(urls)
  } catch(error) {
    next(error)
  }
}

export const deleteUrl = (req, res, next) => {
  const shortCode = req.params[0];

  try {
    const deleted = deleteUrlByCode(shortCode); // Use service to delete the URL

    if (deleted) {
        res.status(200).json({ message: 'URL deleted successfully' });
    } else {
        res.status(404).json({ error: 'URL not found' });
    }
  } catch (error) {
      next(error);
  }
}

export const redirectUrl = (req, res, next) => {
  const shortCode = req.params[0];

  try {
    const originalUrl = getOriginalUrl(shortCode);

    if (originalUrl) {
      res.redirect(originalUrl);
    } else {
      throw new Error('URL not found')
    }
  } catch(error) {
    next(error);
  }
}