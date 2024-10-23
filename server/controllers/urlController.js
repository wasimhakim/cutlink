import { generateShortUrl, getOriginalUrl } from '../services/urlService.js'

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