import { z } from "zod";

export const productFormScheme = z.object({
  name: z.string().min(1, "Name is required"),
  brand: z.string().min(1, "Brand is required"),
  stock: z.string().min(1, "Stock is required"),
  image: z.any(),
});

export type ProductFormSchemeType = z.infer<typeof productFormScheme>;
