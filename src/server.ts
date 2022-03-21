import express from "express";
import { routes } from "./routes";
import { connectToDb } from "./database/db";
import cors from "cors";

const app = express();

connectToDb();

app.use(express.json());

app.use(cors());

app.use(routes);

app.listen(3333, () => console.log("server is running on port 3333"));
