import { Request, Response } from "express";
import { createPesagemSchema } from "../dto/createPesagem.dto";
import { PesagemService } from "../services/pesagem.service";

export class PesagemController {
  static async criarPesagem(req: Request, res: Response) {
    try {
      const data = createPesagemSchema.parse(req.body);
      const pesagem = await PesagemService.create(data);
      res.status(201).json(pesagem);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
