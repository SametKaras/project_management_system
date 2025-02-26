import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Gerekli"),
});

export const registerSchema = z.object({
  name: z.string().trim().min(1, "Gerekli"),
  email: z.string().email(),
  password: z.string().min(8, "Minimum 8 Karakter Gerekli"),
});
