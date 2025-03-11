import express from 'express';
import { PollControllers } from './poll.controller';
import validateRequest from '../../../middlewares/validateRequest';
import { createPollValidationSchema, createReactionSchema, createVoteSchema } from './poll.validation';


const router = express.Router();

router.post("/create", validateRequest(createPollValidationSchema), PollControllers.createPoll)
router.post("/create/vote/:pollId", validateRequest(createVoteSchema), PollControllers.createVote)
router.post("/create/reaction/:pollId", validateRequest(createReactionSchema), PollControllers.createReaction)
router.get("/all", PollControllers.getAllPolls)
router.get("/my/:userId", PollControllers.getMyPolls)
router.get("/:pollId", PollControllers.getPoll)

export const PollRoutes = router;