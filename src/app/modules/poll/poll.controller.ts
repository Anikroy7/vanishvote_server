import httpStatus from "http-status";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { PollServices } from "./poll.service";

const createPoll = catchAsync(async (req, res) => {
    const bodyData = req.body;
    const result = await PollServices.createPollIntoDB(bodyData);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Poll created successfully",
        data: result,
    });
});
const createVote = catchAsync(async (req, res) => {
    const bodyData = req.body;
    const { pollId } = req.params;
    const result = await PollServices.createVoteIntoDB(pollId, bodyData);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Vote created successfully",
        data: result,
    });
});
const createReaction = catchAsync(async (req, res) => {
    const bodyData = req.body;
    const { pollId } = req.params;
    const result = await PollServices.createReactionIntoDB(pollId, bodyData);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Reaction created successfully",
        data: result,
    });
});

const getPoll = catchAsync(async (req, res) => {
    const {pollId}= req.params;
    const result = await PollServices.getPollFromDB(pollId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Poll retrived successfully",
        data: result,
    });
});

const getAllPolls = catchAsync(async (req, res) => {
    const result = await PollServices.getAllPollsFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "All polls retrived successfully",
        data: result,
    });
});
const getMyPolls = catchAsync(async (req, res) => {
    const {userId} = req.params;
    const result = await PollServices.getMyPollsFromDB(userId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "My polls retrived successfully",
        data: result,
    });
});


export const PollControllers = {
    createPoll,
    createVote,
    createReaction,
    getPoll,
    getAllPolls,
    getMyPolls
}