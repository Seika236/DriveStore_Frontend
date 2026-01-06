import { z } from "zod";

export const RemoveRoleFormSchema = z.object({
  id: z.string().regex(/^\d+$/, {
    message: "поле должно содержать только цифры",
  }),
  role: z.string({ message: "в поле должны присутствовать буквы" }),
});

export type RemoveRoleFormSchema = z.infer<typeof RemoveRoleFormSchema>;
