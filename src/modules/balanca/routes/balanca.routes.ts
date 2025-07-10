import { Router } from "express";
import { PedidoController } from "../controllers/pedido.controller";
import { PesagemController } from "../controllers/pesagem.controller";
import { AdicionalController } from "../controllers/adicional.controller";

const router = Router();

// Pedido
router.post("/pedidos", PedidoController.criarPedido);
router.patch("/pedidos/status", PedidoController.atualizarStatus);
router.get(
  "/pedidos/aberto/:numero_comanda",
  PedidoController.buscarPedidoAberto
);
router.get("/pedidos", PedidoController.listarTodos);
router.get("/pedidos/abertos", (req, res) => PedidoController.listarPorStatus(req, res, "aberto"));
router.get("/pedidos/fechados", (req, res) => PedidoController.listarPorStatus(req, res, "fechado"));


// Pesagem
router.post("/pesagens", PesagemController.criarPesagem);

// Adicional
router.post("/adicionais", AdicionalController.criarAdicional);

export default router;
