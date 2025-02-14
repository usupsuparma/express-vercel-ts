import express, { Request, Response } from "express";

const app = express();

const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello World!",
    status: "success",
    data: {},
  });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
