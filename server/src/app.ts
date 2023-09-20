import express, { Application } from "express";
import http from "http";
import ConfigKey from "./config";
import morgan from "morgan";
import cors from 'cors'
import connectDB from "./database/connection";
import router from "./routes";
import errorHandleMiddleware from "./middleware/errorHandleMiddleware";
const app: Application = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors())

const sever = http.createServer(app);

const PORT = ConfigKey.PORT;
sever.listen(PORT, () => {
  console.log(`Server listening at PORT: ${PORT}`);
});

router(app);

connectDB();
app.use(errorHandleMiddleware);
