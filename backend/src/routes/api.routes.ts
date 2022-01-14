import express, { Response } from "express";

const router = express.Router();

router.use(express.json());

router.get("/", (_, res: Response) => {
  res.status(200).json({ message: "hello" });
});

export default router;
