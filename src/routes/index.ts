import { Router } from "express";
import { PollRoutes } from "../app/modules/poll/poll.route";



const router = Router();

const moduleRoutes = [
  {
    path: "/poll",
    route: PollRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
