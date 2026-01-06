import { z } from "zod";

export const ResendEmailFormSchema = z.object({
  email: z.email({ message: "неверный формат поля" }),
});

export type ResendEmailFormSchema = z.infer<typeof ResendEmailFormSchema>;
