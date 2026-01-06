import { z } from "zod";

export const CreateBrandFormSchema = z.object({
  name: z
    .string({ message: "в поле должны присутствовать буквы" })
    .min(3, { message: "минимум 3 символов" })
    .max(25, "максимум 25 символов"),
});

export type CreateBrandFormSchema = z.infer<typeof CreateBrandFormSchema>;
