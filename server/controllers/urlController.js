import { generateShortUrl, getAllUrls, getOriginalUrl } from '../services/urlService.js'

export const shortenUrl = (req, res, next) => {
  const { originalUrl } = req.body;

  try {
    if (originalUrl == "" || originalUrl == undefined) {
      throw new Error('Invalid URL')
    }

    const { firstShortUrl, secondShortUrl } = generateShortUrl(originalUrl)

    res.status(200).json({firstShortUrl, secondShortUrl})
  } catch(error) {
    next(error);
  }
}

export const urlList = (req, res, next) => {
  res.status(200).json(getAllUrls())
}

export const redirectUrl = (req, res, next) => {
  const shortCode = req.params.shortCode;

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