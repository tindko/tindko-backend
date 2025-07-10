import { PrismaClient } from '@prisma/client';
import { CreatePesagemInput } from '../dto/createPesagem.dto';

const prisma = new PrismaClient();

export class PesagemService {
  static async create(data: CreatePesagemInput) {
    const valor_total = (data.peso_gramas / 1000) * data.preco_por_kg;

    return prisma.pesagem.create({
      data: {
        pedido_id: data.pedido_id,
        categoria_id: data.categoria_id,
        peso_gramas: data.peso_gramas,
        preco_por_kg: data.preco_por_kg,
        valor_total,
        responsavel_id: data.responsavel_id,
        responsavel_nome: data.responsavel_nome,
      },
    });
  }
}
