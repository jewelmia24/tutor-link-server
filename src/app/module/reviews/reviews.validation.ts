import { z } from "zod"

const reviewsValidationSchema = z.object({
    tutorId: z.string({required_error: "Tutor ID is required"}),
    studentId: z.string({required_error: "Student ID is required"}),
    rating: z.number({
        required_error: "Rating is required",
        invalid_type_error: "Rating must be a number"
    }).min(1, "Rating must be at least 1").max(5, "Rating must be at most 5"),
    comment: z.string().optional()

})


export const ReviewsValidation = {
    reviewsValidationSchema,
}