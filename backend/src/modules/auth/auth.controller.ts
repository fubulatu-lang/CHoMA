import { Request, Response } from "express";

import * as service from "./auth.service";

export async function register(
  req: Request,
  res: Response
) {
  try {
    const result = await service.register(req.body);

    return res.status(201).json(result);
  } catch (error: any) {
    return res.status(400).json({
      message: error.message,
    });
  }
}

export async function login(
  req: Request,
  res: Response
) {
  try {
    const result = await service.login(
      req.body.email,
      req.body.password
    );

    return res.json(result);
  } catch (error: any) {
    return res.status(401).json({
      message: error.message,
    });
  }
}