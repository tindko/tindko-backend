import { Request, Response } from "express";
import { createPedidoSchema } from "../dto/createPedido.dto";
import { UpdatePedidoInput, updatePedidoSchema } from "../dto/updatePedido.dto";
import { PedidoService } from "../services/pedido.service";

export class PedidoController {
  static async criarPedido(req: Request, res: Response) {
    try {
      const data = createPedidoSchema.parse(req.body);
      const pedido = await PedidoService.create(data);
      res.status(201).json(pedido);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async listarTodos(req: Request, res: Response) {
    try{
      const pedidos = await PedidoService.findAll();
      res.status(200).json(pedidos);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    	}
  }


  static async listarPorStatus(req: Request, res: Response, statusParam?: "aberto" | "fechado") {
    try {
      const status = statusParam ?? (req.params.status as "aberto" | "fechado");
      if (!["aberto", "fechado"].includes(status)) {
        return res.status(400).json({ error: "Status inválido" });
      }
      const pedidos = await PedidoService.findByStatus(status);
      res.status(200).json(pedidos);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
  
  




  static async atualizarStatus(req: Request, res: Response) {
    try {
      const data = updatePedidoSchema.parse(req.body);
      const pedido = await PedidoService.updateStatus(data);
      res.status(200).json(pedido);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async buscarPedidoAberto(req: Request, res: Response) {
    try {
      const numero_comanda = Number(req.params.numero_comanda);
      if (isNaN(numero_comanda)) {
        return res.status(400).json({ error: "Número da comanda inválido" });
      }
      const pedido = await PedidoService.findOpenByNumeroComanda(numero_comanda);
      if (!pedido) {
        return res.status(404).json({ error: "Pedido aberto não encontrado" });
      }
      res.status(200).json(pedido);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
