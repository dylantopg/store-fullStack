import { Product } from "../../schemas/Product";

//This port is implemented by the adapter of the http handles, POST,GET,PUT,DELETE
export interface ForProduct {
  getById(productId: Product["id"]): Promise<Product>;

  getByQuery(query: string): Promise<Product[]>;

  post(product: Product): void;

  update(product: Product): void;

  delete(productId: Product["id"]): void;
}
