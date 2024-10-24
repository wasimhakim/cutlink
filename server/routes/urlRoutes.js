import { Router } from "express";
import { shortenUrl, urlList } from '../controllers/urlController.js';

const router = Router();

router.get('/', urlList);

router.post('/shorten', shortenUrl);

export default router;