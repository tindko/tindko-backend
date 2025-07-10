import { PrismaClient } from "@prisma/client";
import { createComandaInput } from "../dto/createComanda.dto";

const prisma = new PrismaClient();

export class ComandaService {
  static async create(data: createComandaInput) {
    return prisma.comanda_fisica.create({
      data,
    });
  }

  static async findByNumero(numero: number) {
    return prisma.comanda_fisica.findUnique({
      where: { numero },
    });
  }

  static async updateStatus(numero: number, status: "livre" | "ocupada") {
    return prisma.comanda_fisica.update({
      where: { numero },
      data: { status },
    });
  }
}
