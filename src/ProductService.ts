import { ForProduct } from "./ports/drivers/ForProduct";
import { Product } from "./schemas/Product";
import { ForProductQuerying } from "./ports/drivens/ForProductQuerying";

export class ProductService implements ForProduct {
  //This Product service its kinda a use case and should work with the entries of the driver side and should bring data from de driven side
  //Inject the driven port
  private forProductQuerying: ForProductQuerying;

  constructor(forProductQuerying: ForProductQuerying) {
    this.forProductQuerying = forProductQuerying;
  }

  getById(productId: Product["id"]): Promise<Product> {
    return this.forProductQuerying.getById(productId);
  }
  getByQuery(query: string): Promise<Product[]> {
    return this.forProductQuerying.search(query);
  }
  post(product: Product): void {
    console.error("ProductService.post() not implemented");
  }
  update(product: Product): void {
    console.error("ProductService.update() not implemented");
  }
  delete(productId: Product["id"]): void {
    console.error("ProductService.delete() not implemented");
  }
}
