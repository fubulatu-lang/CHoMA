import { Request, Response, NextFunction } from "express";
import * as authService from "./auth.service";

export async function login(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const result = await authService.login(req.body);

        return res.status(200).json(result);

    } catch (error) {
        next(error);
    }
}

export async function register(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const result = await authService.register(req.body);

        return res.status(201).json(result);

    } catch (error) {
        next(error);
    }
}

export async function me(
    req: Request,
    res: Response
) {
    return res.json(req.user);
}
