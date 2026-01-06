import { z } from "zod";

export const CreateCategoryFormSchema = z.object({
  name: z
    .string({ message: "в поле должны присутствовать буквы" })
    .min(3, { message: "минимум 3 символов" })
    .max(25, "максимум 25 символов"),
});

export type CreateCategoryFormSchema = z.infer<typeof CreateCategoryFormSchema>;
