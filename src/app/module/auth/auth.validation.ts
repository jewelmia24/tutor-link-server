import { z } from "zod"

const authValidationSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const authValidation = {
    authValidationSchema,
}