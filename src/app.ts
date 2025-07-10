import express from "express";
import balancaRoutes from "./modules/balanca/routes/balanca.routes";
import comandaRoutes from "./modules/balanca/routes/comanda.routes";

const app = express();

app.use(express.json());
app.use("/api/balanca", balancaRoutes);
app.use("/api/balanca", comandaRoutes);

export default app;
