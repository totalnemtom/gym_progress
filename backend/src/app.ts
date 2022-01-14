import express, { Application } from "express";
import { api } from "./routes";

const app: Application = express();

app.use("/api", api);

export default app;
