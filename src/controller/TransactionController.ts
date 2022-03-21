import { Request, Response } from "express";
import Transaction from "../models/Transaction";

const getAllTransactions = async (req: Request, res: Response) => {
  const transactions = await Transaction.find();

  if (transactions.length > 0) {
    return res.status(200).json(transactions);
  }

  return res
    .status(204)
    .json({ message: "Nenhuma transação localizada em nosso banco de dados!" });
};

const createNewTransaction = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const newTransaction = new Transaction(data);

    await newTransaction.save();

    return res
      .status(200)
      .json({ status: "ok", message: "Transação cadastrada com sucesso" });
  } catch (err) {
    return res.status(400).json({ err });
  }
};

export default { createNewTransaction, getAllTransactions };
