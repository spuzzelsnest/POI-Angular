import express from 'express';
import path from 'path';

import LogicController from '../controllers/logic.js';
const router = new express.Router();

router.get(express.static('../public'));
router.get('/api/c', LogicController.getCategories);
router.get('/api/m', LogicController.getFootage);
router.get('/api/:id/m', LogicController.getMediaSelection);

export default router;