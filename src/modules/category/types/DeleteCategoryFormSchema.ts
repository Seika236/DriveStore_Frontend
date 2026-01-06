import { z } from "zod";

export const DeleteCategoryFormSchema = z.object({
  id: z.string().regex(/^\d+$/, {
    message: "поле должно содержать только цифры",
  }),
});

export type DeleteCategoryFormSchema = z.infer<typeof DeleteCategoryFormSchema>;
