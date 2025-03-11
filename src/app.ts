import express, { Application, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./middlewares/globalErrorhandler";
import notFound from "./middlewares/notFound";
import router from "./routes";
import Poll from "./app/modules/poll/poll.model";
const app: Application = express();
import cron from "node-cron"

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

// Update resultsHidden to true for expired polls
cron.schedule('0 * * * *', async () => {
  await Poll.updateMany({ expiresAt: { $lt: new Date() } }, { $set: { resultsHidden: true } });
  console.log('Expired polls updated to hide results');
});


//Global middleware
app.use(globalErrorHandler);

//Not Found
app.use(notFound);


export default app;
