import {
    Request,
    Response,
    NextFunction
} from "express";

import jwt from "jsonwebtoken";

export default function authenticate(

    req: Request,

    res: Response,

    next: NextFunction

) {

    const auth = req.headers.authorization;

    if (!auth) {

        return res.sendStatus(401);

    }

    const token = auth.replace(
        "Bearer ",
        ""
    );

    try {

        req.user = jwt.verify(
            token,
            process.env.JWT_SECRET!
        );

        next();

    } catch {

        return res.sendStatus(401);

    }

}
