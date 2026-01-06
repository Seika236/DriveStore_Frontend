import { z } from "zod";

export const UpdateTypeFormSchema = z.object({
  id: z.string().regex(/^\d+$/, {
    message: "поле должно содержать только цифры",
  }),
  name: z.string({ message: "в поле должны присутствовать буквы" }).optional(),
  categoryId: z.string().refine((val) => val === "" || /^\d+$/.test(val), {
    message: "поле должно быть пустым или содержать только цифры",
  }),
});

export type UpdateTypeFormSchema = z.infer<typeof UpdateTypeFormSchema>;
