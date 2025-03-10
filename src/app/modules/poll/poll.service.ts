import { TPoll, TReaction, TVote } from "./poll.interface";
import Poll from "./poll.model"

const createPollIntoDB = async (payload: TPoll) => {
    const result = await Poll.create(payload);
    return result;
}

const createVoteIntoDB = async (pollId: string, payload: TVote) => {
    const poll = await Poll.findById(pollId);
    if (!poll) {
        throw new Error("Poll not found");
    }
    const exists = poll.options[payload.optionIndex].vote.includes(payload.userId);
    if (exists) {
        throw new Error("Vote already given!");
    }
    poll.options[payload.optionIndex].vote.push(payload.userId);
    await poll.save();
    return poll;
}
const createReactionIntoDB = async (pollId: string, payload: TReaction) => {
    const poll = await Poll.findById(pollId);
    if (!poll) {
        throw new Error("Poll not found");
    }
    const exists = poll.reactions.find((reaction) => reaction.userId === payload.userId);
    if (exists) {
        throw new Error("Reaction already given!");
    }
    poll.reactions.push(payload);
    await poll.save();
    return poll;
}


export const PollServices = {
    createPollIntoDB,
    createVoteIntoDB,
    createReactionIntoDB
}