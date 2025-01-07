import { z } from "zod";
import { ProductSchema } from "./Product";
//This schema will be used to validate the cart but its not implemented yet
// Its made with zod
export const CartSchema = z.object({
  products: z.array(ProductSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});
export type Cart = z.infer<typeof CartSchema>;
