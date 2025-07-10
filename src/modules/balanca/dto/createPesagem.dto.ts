import { z } from "zod";

export const createPesagemSchema = z.object({
  pedido_id: z.string().uuid(),
  categoria_id: z.string().min(1),
  peso_gramas: z.number().int().positive(),
  preco_por_kg: z.number().positive(),
  responsavel_id: z.string().uuid(),
  responsavel_nome: z.string().min(2),
});

export type CreatePesagemInput = z.infer<typeof createPesagemSchema>;
