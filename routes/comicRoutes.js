import express from 'express';
import {
  createComic,
  updateComic,
  deleteComic,
  getComics,
  getComicById,
} from '../controllers/comicController.js';
import { upload } from '../middleware/multer.js';

const router = express.Router();

router.post('/comics', upload.single("coverPhoto"),createComic);
router.put('/comics/:id', updateComic);
router.delete('/comics/:id', deleteComic);
router.get('/comics', getComics);
router.get('/comics/:id', getComicById);

export default router;
