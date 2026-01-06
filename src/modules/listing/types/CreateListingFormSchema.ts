import { z } from "zod";

export const CreateListingFormSchema = z.object({
  name: z.string().min(1, { message: "поле не может быть пустым" }),
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

export type CreateListingFormSchema = z.infer<typeof CreateListingFormSchema>;
