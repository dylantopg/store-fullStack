import { Request, Response } from "express";
import { ForProduct } from "../../ports/drivers/ForProduct";
import { Product } from "../../schemas/Product";

export class ProductAdapter {

  //For Manual Dependency injection
  forProduct: ForProduct;
  constructor(forProduct: ForProduct) {
    this.forProduct = forProduct;
  }

  //To handle the endpoints or http entries

  //This handle the get by id
  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const product = await this.forProduct.getById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json(product);
  }

  //This handle get by a keyword or query
  async getByQuery(req: Request, res: Response) {
    const { search } = req.query;
    const products = await this.forProduct.getByQuery(String(search));
    return res.status(200).json(products);
  }

  //This should handle the posts but it's not implemented yet

  async post(req: Request, res: Response) {
    const newProduct: Product = req.body;
    if (!newProduct) {
      return res
        .status(400)
        .json({ message: "Error during creation of product" });
    }
    await this.forProduct.post(newProduct);
    return res.status(201).json({ message: "Succesfull creation" });
  }

  //TODO: Implement update and delete
}
