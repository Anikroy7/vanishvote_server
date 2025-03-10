import { z } from "zod";

const optionValicationSchema = z.object({
    text: z.string({
        required_error: "Option text is required",
    }),
    vote: z.number({
        required_error: "Option vote is required",
    })
})
export const createPollValidationSchema = z.object({
    body: z.object({
        pollType: z.enum(["yes_no", "multiple_choice"], {
            required_error: "Poll type is required",
        }),
        options: z.array(
            optionValicationSchema
        ),
        question: z.string({
            required_error: "Question is required",
        }).min(5, "Question must be at least 5 characters long"),
        createdBy: z.string({
            required_error: "Creator ID is required",
        }).min(1, "Creator ID is required"),
        expiresAt: z.preprocess(
            (arg) => (typeof arg === "string" ? new Date(arg) : arg),
            z.date().refine((date) => date > new Date(), {
                message: "Expiration date must be in the future",
            })
        ),
    }),
});
