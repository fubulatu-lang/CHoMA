export class AppError extends Error {

    constructor(

        public readonly status: number,

        message: string

    ) {

        super(message);

    }

}

export class NotFoundError extends AppError {

    constructor(message = "Resource not found") {

        super(404, message);

    }

}

export class UnauthorizedError extends AppError {

    constructor(message = "Unauthorized") {

        super(401, message);

    }

}

export class ValidationError extends AppError {

    constructor(message = "Validation failed") {

        super(400, message);

    }

}
