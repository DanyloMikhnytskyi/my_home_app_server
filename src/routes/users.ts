import express, { Request, Response } from 'express';

export const usersRouter = express.Router();

/* GET users listing. */
usersRouter.get('/users', (_req: Request, res: Response) => {
  res.send('...345...123. 34  .');
});
