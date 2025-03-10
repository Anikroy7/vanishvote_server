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


export const PollControllers = {
    createPoll  
}