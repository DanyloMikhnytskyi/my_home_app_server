import express, { Request, Response } from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/users', (_req: Request, res: Response) => {
  res.send('...345...123. 34  .');
});

export const usersRouter = router;
