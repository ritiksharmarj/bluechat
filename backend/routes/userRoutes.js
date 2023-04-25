import express from 'express';
import { registerUser } from '../controllers/userControllers.js';

const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', authUser);

export default router;
