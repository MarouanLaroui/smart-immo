import { Request, Response } from 'express';
import UserService from '../entities/user/User.service';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import IToken from '../entities/user/interfaces/IToken';

const login = async (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email) {
    return res.status(400).send('No email found');
  }

  if (!password) {
    return res.status(400).send('No password found');
  }

  const user = await UserService.getOneUserByEmail(email);

  if (!user) {
    return res
      .status(404)
      .send('No user found with this email/password combination');
  }

  const doesPasswordMatch = await bcrypt.compare(password, user.password);

  if (!doesPasswordMatch) {
    return res
      .status(404)
      .send('No user found with this email/password combination');
  }

  const secret = process.env.JWT_SECRET;

  if (!secret) {
    return res.status(500).send('There was a problem while loging in');
  }
  const tokenBody: IToken = {
    user: {
      userId: user._id,
      email: user.email,
    },
  };

  const token = jwt.sign(tokenBody, secret!, {
    expiresIn: 900,
  });

  return res.send({ token: token });
};

export { login };
