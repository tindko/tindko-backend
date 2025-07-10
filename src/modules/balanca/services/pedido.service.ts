import { PrismaClient } from '@prisma/client';
import { createPedidoInput } from '../dto/createPedido.dto';
import { UpdatePedidoInput } from '../dto/updatePedido.dto';

const prisma = new PrismaClient();

export class PedidoService {
  static async create(data: createPedidoInput) {
    return prisma.pedido.create({
      data: {
        numero_comanda: data.numero_comanda,
        responsavel_id: data.responsavel_id,
        responsavel_nome: data.responsavel_nome,
        status: 'aberto',
        aberto_em: new Date(),
      },
    });
  }

  static async findByStatus(status: 'aberto' | 'fechado') {
    return prisma.pedido.findMany({
      where: {
        status,
      },
      include: {
        pesagens: true,
        adicionais: true,
      },
      orderBy: {
        aberto_em: 'desc',
      },
    })
  }

  static async findAll() {
    return prisma.pedido.findMany({
      include: {
        pesagens: true,
        adicionais: true,
      },
      orderBy: {
        aberto_em: 'desc',
      },
    });
  }

  static async updateStatus(data: UpdatePedidoInput) {
    return prisma.pedido.update({
      where: { id: data.id },
      data: {
        status: data.status,
        fechado_em: data.fechado_em ? new Date(data.fechado_em) : null,
      },
    });
  }

  static async findOpenByNumeroComanda(numero_comanda: number) {
    return prisma.pedido.findFirst({
      where: {
        numero_comanda,
        status: 'aberto',
      },
      include: {
        pesagens: true,
        adicionais: true,
      },
    });
  }
}
