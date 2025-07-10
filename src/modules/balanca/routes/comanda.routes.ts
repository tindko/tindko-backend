import { Router } from "express";
import { ComandaController } from "../controllers/comanda.controller";

const router = Router();

router.post("/comandas", ComandaController.criarComanda);

export default router;
