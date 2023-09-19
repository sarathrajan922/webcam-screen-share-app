import express, { Application, Request, Response } from "express";
import http from "http";
import ConfigKey from "./config";
import morgan from "morgan";
import connectDB from "./database/connection";
import authRouter from "./controllers/authController";
const app: Application = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
  console.log(req.url);
  console.log("Got to this api");
  res.send("Hooryeee got the response");
});

const sever = http.createServer(app);

const PORT = ConfigKey.PORT;
sever.listen(PORT, () => {
  console.log(`Server listening at PORT: ${PORT}`);
});

app.use("/auth", authRouter);
connectDB();
