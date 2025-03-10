import mongoose, { Schema } from "mongoose";

const optionSchema = new Schema({
    question: {
        type: String,
        required: true,
    },
    vote: {
        type: Number,
        required: true,

    },
})

const pollSchema = new Schema({

    pollType: {
        enum: ["yes_no", "multiple_choice"],
        type: String,
        required: true,
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
        default: false
    },
    private: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: String,
        required: true
    },
})


const Poll = mongoose.model("Poll", pollSchema);

export default Poll;