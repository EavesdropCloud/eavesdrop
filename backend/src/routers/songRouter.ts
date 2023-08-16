import express from 'express';
import { deleteSongById, getAllSongs, getSongById } from '../controllers/songController';

const router = express.Router();

router.get('/', getAllSongs);
router.get('/:id', getSongById);
router.delete('/:id', deleteSongById);

export default router;