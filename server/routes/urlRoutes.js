import { Router } from "express";
import { shortenUrl, urlList, deleteUrl } from '../controllers/urlController.js';

const router = Router();

router.get('/', urlList);

router.post('/shorten', shortenUrl);

router.delete('/*', deleteUrl)

export default router;