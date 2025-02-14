import express, { Request, Response, Router } from "express";
const router = express.Router();

router.get("/login", (req: any, res: any) => {
  return res.json({ message: "Hello World!" });
});
export default router;
