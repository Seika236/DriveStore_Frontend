import { z } from "zod";

export const DeleteTypeFormSchema = z.object({
  id: z.string().regex(/^\d+$/, {
    message: "поле должно содержать только цифры",
  }),
});

export type DeleteTypeFormSchema = z.infer<typeof DeleteTypeFormSchema>;
