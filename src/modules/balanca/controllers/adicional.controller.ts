import { Request, Response } from "express";
import { createAdicionalSchema } from "../dto/createAdicional.dto";
import { AdicionalService } from "../services/adicional.service";

export class AdicionalController {
  static async criarAdicional(req: Request, res: Response) {
    try {
      const data = createAdicionalSchema.parse(req.body);
      const adicional = await AdicionalService.create(data);
      res.status(201).json(adicional);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
