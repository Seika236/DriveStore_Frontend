import { z } from "zod";

export const CommentSchema = z.object({
  comment: z.string().min(10, { message: "не менее 10 символов" }),
});

export type CommentSchema = z.infer<typeof CommentSchema>;
