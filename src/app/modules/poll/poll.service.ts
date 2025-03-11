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
        const newReactions = poll.reactions.filter((reaction) => reaction.userId !== payload.userId);
        poll.reactions = newReactions;
    }
    poll.reactions.push(payload);
    await poll.save();
    return poll;
}

const getPollFromDB = async (pollId: string) => {
    const poll = await Poll.findById(pollId);
    if (!poll) {
        throw new Error("Poll not found");
    }
    return poll;
}
const getAllPollsFromDB = async () => {
    const poll = await Poll.find({
        private: false,
    }).sort({ createdAt: -1 }).exec();
    return poll;
}
const getMyPollsFromDB = async (userId: string) => {
    const poll = await Poll.find({
        createdBy: userId
    }).exec();
    return poll;
}

export const PollServices = {
    createPollIntoDB,
    createVoteIntoDB,
    createReactionIntoDB,
    getPollFromDB,
    getAllPollsFromDB,
    getMyPollsFromDB

}