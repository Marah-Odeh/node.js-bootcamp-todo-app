import express from "express";
import { createUserController, getUserController, loginController } from "./controllers.js";

// create router instance
const router = express.Router();

router.post('', createUserController)
router.post('/login', loginController)
router.get('/:id', getUserController)

export default router;
