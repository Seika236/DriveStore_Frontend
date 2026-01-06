import { z } from "zod";

export const UpdateListingFormSchema = z.object({
  id: z.string().regex(/^\d+$/, {
    message: "поле должно содержать только цифры",
  }),
  categoryId: z.string().regex(/^\d+$/, {
    message: "поле должно содержать только цифры",
  }),
  typeId: z.string().regex(/^\d+$/, {
    message: "поле должно содержать только цифры",
  }),
  brandId: z.string().regex(/^\d+$/, {
    message: "поле должно содержать только цифры",
  }),
});

export type UpdateListingFormSchema = z.infer<typeof UpdateListingFormSchema>;
