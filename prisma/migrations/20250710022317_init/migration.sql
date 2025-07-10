-- CreateTable
CREATE TABLE "comanda_fisica" (
    "numero" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'livre',

    CONSTRAINT "comanda_fisica_pkey" PRIMARY KEY ("numero")
);

-- CreateTable
CREATE TABLE "pedido" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "numero_comanda" INTEGER,
    "aberto_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechado_em" TIMESTAMP(3),
    "responsavel_id" TEXT NOT NULL,
    "responsavel_nome" TEXT NOT NULL,
    "mesa_id" TEXT,

    CONSTRAINT "pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pesagem" (
    "id" TEXT NOT NULL,
    "pedido_id" TEXT NOT NULL,
    "categoria_id" TEXT NOT NULL,
    "peso_gramas" INTEGER NOT NULL,
    "preco_por_kg" DECIMAL(65,30) NOT NULL,
    "valor_total" DECIMAL(65,30) NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "responsavel_id" TEXT NOT NULL,
    "responsavel_nome" TEXT NOT NULL,

    CONSTRAINT "pesagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adicional" (
    "id" TEXT NOT NULL,
    "pedido_id" TEXT NOT NULL,
    "produto_id" TEXT NOT NULL,
    "nome_produto" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "valor_unitario" DECIMAL(65,30) NOT NULL,
    "valor_total" DECIMAL(65,30) NOT NULL,
    "origem" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "responsavel_id" TEXT,
    "responsavel_nome" TEXT,

    CONSTRAINT "adicional_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pedido_numero_comanda_key" ON "pedido"("numero_comanda");

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_numero_comanda_fkey" FOREIGN KEY ("numero_comanda") REFERENCES "comanda_fisica"("numero") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pesagem" ADD CONSTRAINT "pesagem_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adicional" ADD CONSTRAINT "adicional_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
