import { Request, Response, NextFunction } from "express";

import { verifyToken } from "../lib/jwt";

export function auth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization?.replace(
    "Bearer ",
    ""
  );

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }

  try {
    const payload = verifyToken(token);

    (req as any).user = payload;

    next();
  } catch {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
}