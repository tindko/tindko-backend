import { Request, Response } from "express";
import { createComandaSchema } from "../dto/createComanda.dto";
import { ComandaService } from "../services/comanda.service";

export class ComandaController {
  static async criarComanda(req: Request, res: Response) {
    try {
      const data = createComandaSchema.parse(req.body);
      const comanda = await ComandaService.create(data);
      res.status(201).json(comanda);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
