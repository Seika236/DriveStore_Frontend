import { z } from "zod";

export const DeleteBrandFormSchema = z.object({
  id: z.string().regex(/^\d+$/, {
    message: "поле должно содержать только цифры",
  }),
});

export type DeleteBrandFormSchema = z.infer<typeof DeleteBrandFormSchema>;
