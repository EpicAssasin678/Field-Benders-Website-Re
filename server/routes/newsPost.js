import express from 'express';

import { getNewsPosts, getNewsPost, createNewsPost } from '../controllers/newsPost.js';

const router = express.Router();

//router.get('/admin', getNewsPost);
router.get('/', getNewsPosts);
router.get('/:id', getNewsPost);

router.post('/', createNewsPost);
//router.patch('/:id', updateNewsPost);


export default router;