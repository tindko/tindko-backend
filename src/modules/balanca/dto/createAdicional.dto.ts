import { z } from "zod";

export const createAdicionalSchema = z.object({
  pedido_id: z.string().uuid(),
  produto_id: z.string().min(1),
  nome_produto: z.string().min(2),
  quantidade: z.number().int().positive(),
  valor_unitario: z.number().positive(),
  origem: z.enum(["balcao", "garcom"]),
  responsavel_id: z.string().uuid().optional(),
  responsavel_nome: z.string().min(2).optional(),
});

export type CreateAdicionalInput = z.infer<typeof createAdicionalSchema>;
