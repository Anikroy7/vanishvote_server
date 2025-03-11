import mongoose, { Schema } from "mongoose";
import { TOption, TPoll } from "./poll.interface";

export enum ReactionType {
    LIKE = "like",
    FIRE = "trending"
}


export type TReaction = {
    userId: string;
    reactionType: ReactionType;
};

const optionSchema = new Schema<TOption>({
    text: {
        type: String,
        required: true,
    },
    vote: {
        type: [String],
        required: true,

    },
})

const reactionSchema = new Schema<TReaction>({
    userId: {
        type: String,
        required: true
    },
    reactionType: {
        type: String,
        enum: Object.values(ReactionType),
        required: true
    }
})

const pollSchema = new Schema<TPoll>({

    pollType: {
        type: String,
        enum: ["yes_no", "multiple_choice"],
        required: true
    },
    options: {
        type: [optionSchema],
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    expiresAt: {
        type: Date,
        required: true
    },
    resultsHidden: {
        type: Boolean,
        default: true
    },
    private: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
})


const Poll = mongoose.model("Poll", pollSchema);

export default Poll;