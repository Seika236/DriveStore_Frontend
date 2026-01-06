import { z } from "zod";

export const CreateListingFormSchema = z.object({
  name: z
    .string({ message: "в поле должны присутствовать буквы" })
    .min(3, { message: "минимум 3 символов" })
    .max(25, "максимум 25 символов"),
  description: z.string(),
  type: z.string(),
  price: z.string(),
  brand: z.string(),
  telephone: z.string(),
  city: z.string(),
});

export type CreateListingFormSchema = z.infer<typeof CreateListingFormSchema>;
