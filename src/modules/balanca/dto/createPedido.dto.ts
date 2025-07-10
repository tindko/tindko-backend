import { z } from "zod";


export const createPedidoSchema = z.object({
  numero_comanda: z.number().int().positive(),
  responsavel_id: z.string().uuid(),
  responsavel_nome: z.string().min(2),
})


export type createPedidoInput = z.infer<typeof createPedidoSchema>