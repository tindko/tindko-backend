import z from "zod";


export const createComandaSchema = z.object({
  numero: z.number().int().positive(),
  status: z.enum(["livre", "ocupada"]).default("livre"),
})

export type createComandaInput = z.infer<typeof createComandaSchema>