import { Router } from "express";
import TransactionController from "./controller/TransactionController";
const routes = Router();

routes.get("/transactions", TransactionController.getAllTransactions);
routes.post("/transactions", TransactionController.createNewTransaction);

export { routes };
