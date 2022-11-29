import express from 'express';


const router = express.Router();

router.get('/admin', getNewsPost);
router.get('/', getNewsPosts);

router.post('/', createNewsPost);
//router.patch('/:id', updateNewsPost);

