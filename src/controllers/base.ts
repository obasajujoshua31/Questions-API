import { Request, Response, RequestHandler, NextFunction } from "express";

interface httpInterface {
  res: Response;
  code: number;
  data: any;
}

interface IHandler {
  handler: RequestHandler;
}

class Base {
  public httpResponse(response: httpInterface) {
    return response.res.status(response.code).json({
      success: response.code < 300,
      data: response.data,
    });
  }

  public asyncFunction(handler: IHandler) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        handler.handler(req, res, next);
      } catch (error) {
        console.error("Error: ", error);
      }
    };
  }
}

export default Base;
