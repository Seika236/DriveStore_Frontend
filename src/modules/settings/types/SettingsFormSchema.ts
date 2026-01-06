import { z } from "zod";

export const SettingsFormSchema = z.object({
  email: z.email(),
  nickname: z
    .string({ message: "в поле должны присутствовать буквы" })
    .min(3, { message: "минимум 3 символов" })
    .max(25, "максимум 25 символов"),
  name: z
    .string({ message: "в поле должны присутствовать буквы" })
    .min(0, { message: "в поле должны присутствовать буквы" })
    .max(25, "максимум 25 символов"),
  age: z.string(),
  city: z
    .string({ message: "в поле должны присутствовать буквы" })
    .min(0, { message: "в поле должны присутствовать буквы" }),
  about: z.string().optional(),
});

export type SettingsFormSchema = z.infer<typeof SettingsFormSchema>;
