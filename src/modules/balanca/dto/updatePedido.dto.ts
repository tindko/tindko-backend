import { z } from "zod";

export const updatePedidoSchema = z.object({
  id: z.string().uuid(),
  status: z.enum(["aberto", "fechado"]),
  fechado_em: z.string().datetime().optional(),
});

export type UpdatePedidoInput = z.infer<typeof updatePedidoSchema>;
