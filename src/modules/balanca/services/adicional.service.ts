import { PrismaClient } from '@prisma/client';
import { CreateAdicionalInput } from '../dto/createAdicional.dto';

const prisma = new PrismaClient();

export class AdicionalService {
  static async create(data: CreateAdicionalInput) {
    const valor_total = data.quantidade * data.valor_unitario;

    return prisma.adicional.create({
      data: {
        pedido_id: data.pedido_id,
        produto_id: data.produto_id,
        nome_produto: data.nome_produto,
        quantidade: data.quantidade,
        valor_unitario: data.valor_unitario,
        valor_total,
        origem: data.origem,
        responsavel_id: data.responsavel_id,
        responsavel_nome: data.responsavel_nome,
      },
    });
  }
}
