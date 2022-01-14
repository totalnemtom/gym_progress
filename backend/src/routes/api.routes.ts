import express, { Response } from "express";
import { isRegularExpressionLiteral } from "typescript";

const router = express.Router();

router.use(express.json());

router.get("/", (_, res: Response) => {
  res.status(200).json({ message: "hello" });
});

export default router;
