import { z } from "zod";

export const AddRoleFormSchema = z.object({
  id: z.string().regex(/^\d+$/, {
    message: "поле должно содержать только цифры",
  }),
  role: z.string({ message: "в поле должны присутствовать буквы" }),
});

export type AddRoleFormSchema = z.infer<typeof AddRoleFormSchema>;
