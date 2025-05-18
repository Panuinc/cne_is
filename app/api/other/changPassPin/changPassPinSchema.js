import { z } from "zod";

export const userPasswordUpdateSchema = z.object({
  userId: z.coerce.number({ invalid_type_error: "User ID must be a number" }),
  newPassword: z
    .string()
    .min(8, "New password must be at least 8 characters")
    .regex(/[A-Z]/, "New password must contain at least one uppercase letter")
    .regex(/[a-z]/, "New password must contain at least one lowercase letter")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "New password must contain at least one special character"
    ),
  pin: z.string().min(1, "Please enter PIN"),
});
