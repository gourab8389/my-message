import { z } from "zod";

export const usernameValidation = z
.string()
.min(2, "Username must be at least 2 characters")
.max(20, "Username must be no more than 20 characters")
.regex(/^[a-zA-Z0-9]/, "Username must not contain special charater")



export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Email is invalid"}),
    password: z.string().min(6,{message: "password must be atleast 6 characters"})

})
