import express from 'express';
import path from 'path';

import LogicController from '../controllers/logic.js';
const router = new express.Router();

router.get(express.static('../public'));
router.get('/api/m', LogicController.getMedia);

export default router;