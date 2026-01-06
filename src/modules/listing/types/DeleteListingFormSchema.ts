import { z } from "zod";

export const DeleteListingFormSchema = z.object({
  id: z.string().regex(/^\d+$/, {
    message: "поле должно содержать только цифры",
  }),
});

export type DeleteListingFormSchema = z.infer<typeof DeleteListingFormSchema>;
