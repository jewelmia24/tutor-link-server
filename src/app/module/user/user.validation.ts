import { z } from "zod";

const userValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  role: z.enum(['student', 'teacher']),

  bio: z.string().optional(),

  subjects: z.array(z.string()).optional(),

  ratings: z.array(z.number().min(0).max(5)).optional(),

  availability: z
    .object({
      from: z.coerce.date(),
      to: z.coerce.date(),
    })
    .refine(data => data.from <= data.to, {
      message: 'Availability "from" date must be before "to" date',
    })
    .optional(),

  address: z.string().optional(),

  phone: z
    .string()
    .optional(),

  image: z.string().url('Invalid image URL').optional(),

  isDeleted: z.boolean().optional(),
  isBlocked: z.boolean().optional(),
});


export const userValidation = {
    userValidationSchema,
}