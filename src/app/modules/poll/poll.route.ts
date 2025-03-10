import express from 'express';
import { PollControllers } from './poll.controller';
import validateRequest from '../../../middlewares/validateRequest';
import { createPollValidationSchema } from './poll.validation';


const router = express.Router();

router.post("/create", validateRequest(createPollValidationSchema), PollControllers.createPoll)

export const PollRoutes = router;