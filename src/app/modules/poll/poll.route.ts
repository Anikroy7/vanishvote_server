import express from 'express';
import { PollControllers } from './poll.controller';
import validateRequest from '../../../middlewares/validateRequest';
import { createPollValidationSchema, createVoteSchema } from './poll.validation';


const router = express.Router();

router.post("/create", validateRequest(createPollValidationSchema), PollControllers.createPoll)
router.post("/create/vote/:pollId", validateRequest(createVoteSchema), PollControllers.createVote)

export const PollRoutes = router;