import { Request, Response } from 'express';

export default {
  async signIn(req: Request, res: Response) {
    const {
      email,
      password
    } = req.body;

    console.log(`\nUser email: ${email}\nUser password: ${password}`);
  }
}
