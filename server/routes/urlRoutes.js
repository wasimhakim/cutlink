import { Router } from "express";
import { shortenUrl, redirectUrl, urlList } from '../controllers/urlController.js';

const router = Router();

router.get('/', urlList);

router.post('/shorten', shortenUrl);

router.get('/*', redirectUrl)

export default router;