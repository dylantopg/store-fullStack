import { Product } from "../../schemas/Product";

//This port will be used by a data base adapter
export interface ForProductQuerying {
  //Search products by keyword or query and return them
  search(query: string): Promise<Product[]>;

  //Search a product by id and return it
  getById(productId: Product["id"]): Promise<Product>;
}
