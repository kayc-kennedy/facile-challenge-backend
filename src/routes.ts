import { Router } from "express";

// controllers
import EncrypterController from "./controllers/EncrypterController";
import DecrypterController from "./controllers/DecrypterController";
const router = Router();

// routes
router.post('/encrypts', EncrypterController.encrypter);
router.get('/encrypts/:id', DecrypterController.decrypter);

export { router }