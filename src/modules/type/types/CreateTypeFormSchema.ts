import { z } from "zod";

export const CreateTypeFormSchema = z.object({
  name: z
    .string({ message: "в поле должны присутствовать буквы" })
    .min(3, { message: "минимум 3 символов" })
    .max(25, "максимум 25 символов"),
  categoryId: z.string().regex(/^\d+$/, {
    message: "поле должно содержать только цифры",
  }),
});

export type CreateTypeFormSchema = z.infer<typeof CreateTypeFormSchema>;
