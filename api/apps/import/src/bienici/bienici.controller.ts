import { Request, Response } from 'express';
const importRealEstate = (req: Request, res: Response) => {
  const url = req.params['url'];

  if (!url || url.length <= 0) {
    res.status(400).send('invalid url');
  }

  const metadata = url.split('/');

  if (!metadata || metadata.length < 7) {
    res.status(400).send('invalid url');
  }

  const id = metadata[7].split('?')[0];
};
