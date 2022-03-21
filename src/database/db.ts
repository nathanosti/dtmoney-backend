import mongoose from "mongoose";

export const connectToDb = () => {
  mongoose
    .connect("mongodb://localhost:27017/dtmoney")
    .then(() =>
      console.log("Conexão com o Banco De Dados realizada com SUCESSO!")
    )
    .catch((err) =>
      console.log(`Erro ao se conectar ao Banco De Dados: ${err}`)
    );
};
