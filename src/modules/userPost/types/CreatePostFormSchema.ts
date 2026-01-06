import { z } from "zod";

export const CreatePostFormSchema = z.object({
  transport: z.string().min(1, { message: "поле не может быть пустым" }),
  header: z.string().min(1, { message: "поле не может быть пустым" }),
  isPublic: z.string().min(1, { message: "поле не может быть пустым" }),
  title: z
    .string()
    .min(1, { message: "поле не может быть пустым" })
    .max(120, { message: "поле не должно превышать 120 символов" }),
  description: z
    .string()
    .min(1, { message: "поле не может быть пустым" })
    .max(1200),
});

export type CreatePostFormSchema = z.infer<typeof CreatePostFormSchema>;
