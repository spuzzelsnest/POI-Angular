import express from 'express';
import path from 'path';

import LogicController from '../controllers/logic';
const router = new express.Router();

router.get(express.static('../public'));
router.get('/api/m/', LogicController.getMediaType);
router.get('/api/m/:id', LogicController.getFootage);

export default router;