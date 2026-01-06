import { z } from "zod";

export const FormShema = z.object({
  email: z.email({ message: "неверный формат поля" }),
  password: z
    .string({ message: "в поле должны присутствовать буквы" })
    .min(6, { message: "минимум 8 символов" })
    .max(25, "максимум 25 символов")
    .regex(/[A-Z]/, {
      message: "Должна быть ровно одна заглавная латинская буква",
    }),
});

export type FormShema = z.infer<typeof FormShema>;
