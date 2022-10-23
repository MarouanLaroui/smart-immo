import { Request, Response, NextFunction } from 'express';

const currateUrlMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const url: string = req.body.url;

  if (!url || url.length <= 0) {
    return res.status(400).send('URL missing in request body.');
  }

  let curratedUrl = url;
  if (url.startsWith('https')) {
    curratedUrl = url.split('https://')[1];
  }

  req.body.url = curratedUrl;
  next();
};

export default currateUrlMiddleware;
