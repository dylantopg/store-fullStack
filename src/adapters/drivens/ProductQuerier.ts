import { ForProductQuerying } from "../../ports/drivens/ForProductQuerying";
import { Product } from "../../schemas/Product";
import { productsArray } from "../../../resources/products";

//Implement the connection and methods to search
export class ProductQuerier implements ForProductQuerying {
  private productsArray: Product[] = productsArray;

  search(query: string): Promise<Product[]> {
    //Search products by keyword or query and return them
    const products = this.productsArray.filter((product) => {
      return (
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
    });
    return Promise.resolve(products);
  }

  getById(productId: Product["id"]): Promise<Product> {
    //Search a product by id and return it
    const product = this.productsArray.find((product) => {
      return product.id === productId;
    });
    if (product) {
      return Promise.resolve(product);
    } else {
      return Promise.reject(new Error("Product not found"));
    }
  }
}
