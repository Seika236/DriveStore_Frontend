import { z } from "zod";

export const DeleteUserFormSchema = z.object({
  id: z.string().regex(/^\d+$/, {
    message: "поле должно содержать только цифры",
  }),
});

export type DeleteUserFormSchema = z.infer<typeof DeleteUserFormSchema>;
