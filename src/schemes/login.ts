import { z } from "zod";

export const loginFormScheme = z.object({
  email: z.string().min(1, "Email is required").email("Email must use format"),
  password: z.string().min(6, "Password must contain 6 character"),
});

export type LoginFormSchemeType = z.infer<typeof loginFormScheme>;
