import express, { Request, Response, Router } from "express";

const app = express();

const PORT = 3000;
import api from "./api";

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello World!",
    status: "success",
    data: {},
  });
});

// group api prefix api
app.use("/api", api);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
