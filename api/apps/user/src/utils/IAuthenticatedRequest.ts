import * as core from 'express-serve-static-core';
import IToken from '../entities/user/interfaces/IToken';
import { Request } from 'express';

interface IIndexable {
  // Keys can be strings, numbers, or symbols.
  // If you know it to be strings only, you can also restrict it to that.
  // For the value you can use any or unknown,
  // with unknown being the more defensive approach.
  [x: string | number | symbol]: unknown;
}

export default interface IAuthenticatedRequest
  extends Request<{}, {}, IToken & IIndexable> {}
