import { z } from "zod"

export const SignUpValidation = z.object({ // in this file we're going to keep many different form of schema so we have to define which one is it
    name : z.string().min(2, {"message": "Name must be at least 2 characters"}),
    username: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8, {"message": "Password must be at least 8 characters"}),
})
