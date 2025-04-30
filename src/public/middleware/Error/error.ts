export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode: number, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    Object.setPrototypeOf(this, AppError.prototype);
  }
}

export class DataBaseError extends AppError {
  constructor(message: string) {
    super(message, 500);
  }
}
export class NotFoundError extends AppError {
  constructor(message: string) {
    super(message, 404);
  }
}
export class BadRequestError extends AppError {
  constructor(message: string) {
    super(message, 400);
  }
}
export class UnauthorizedError extends AppError {
  constructor(message: string) {
    super(message, 401);
  }
}
export class validateError extends AppError {
  constructor(message: string) {
    super(message, 400);
  }
}
export class ForbiddenError extends AppError {
  constructor(message: string) {
    super(message, 403);
  }
}
export class ConflictError extends AppError {
  constructor(message: string) {
    super(message, 409);
  }
}
export class InternalServerError extends AppError {
  constructor(message: string) {
    super(message, 500);
  }
}
export class NotImplemented extends AppError {
  constructor(message: string) {
    super(message, 501);
  }
}
export class BadGateway extends AppError {
  constructor(message: string) {
    super(message, 502);
  }
}
export class ServiceUnavailable extends AppError {
  constructor(message: string) {
    super(message, 503);
  }
}
export class GatewayTimeout extends AppError {
  constructor(message: string) {
    super(message, 504);
  }
}
export class axiosError extends AppError {
  [x: string]: any;
  constructor(message: string) {
    super(message, 500);
  }
}
export class roleError extends AppError {
  constructor(message: string) {
    super(message, 500);
  }
}
export class permissionError extends AppError {
  constructor(message: string) {
    super(message, 500);
  }
}
