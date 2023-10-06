import { Request, Response } from "express";

const userService = require("../service/user");

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const id = await userService.createUser(req.body);
      res.status(201).json({ id });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new UserController();
