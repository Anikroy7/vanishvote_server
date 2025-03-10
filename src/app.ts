import express, { Application, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./middlewares/globalErrorhandler";
import notFound from "./middlewares/notFound";
import router from "./routes";
const app: Application = express();


app.use(express.json());

app.use(cors());

// Routes
app.use(
  cors({
      credentials: true,
  }),
)

app.use("/api/", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the VanishVote Server");
});



//Global middleware
app.use(globalErrorHandler);

//Not Found
app.use(notFound);


export default app;
