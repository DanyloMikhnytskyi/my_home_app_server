import express, { Request, Response } from 'express';
import products from '../data/products.json' with { type: 'json' };

export const productsRouter = express.Router();

productsRouter.get('/products', (_req: Request, res: Response) => {
  res.json(products);
});
