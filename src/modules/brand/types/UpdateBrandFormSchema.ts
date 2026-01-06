import { z } from "zod";

export const UpdateBrandFormSchema = z.object({
  id: z.string().regex(/^\d+$/, {
    message: "поле должно содержать только цифры",
  }),
  name: z
    .string({ message: "в поле должны присутствовать буквы" })
    .min(3, { message: "минимум 3 символов" })
    .max(25, "максимум 25 символов"),
});

export type UpdateBrandFormSchema = z.infer<typeof UpdateBrandFormSchema>;
