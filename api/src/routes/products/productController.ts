import { Request, Response } from "express";

export function listProducts(req: Request, res: Response) {
  res.send(`list of products`);
}
export function getproductById(req: Request, res: Response) {
  res.send(`getproductbyid`);
}
export function createProduct(req: Request, res: Response) {
  console.log(req.body);
  res.send(`createproduct`);
}
export function updateProduct(req: Request, res: Response) {
  res.send(`updateproduct`);
}
export function deleteProduct(req: Request, res: Response) {
  res.send(`updateproduct`);
}
