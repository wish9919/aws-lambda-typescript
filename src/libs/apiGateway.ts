import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from "aws-lambda";
import type { FromSchema } from "json-schema-to-ts";
import { Request } from "lambda-api";
import RequestError from "./common/errors/RequestError";
import ResponseData from "./common/responses/ResponseData";

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, "body"> & {
  body: FromSchema<S>;
};
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<
  ValidatedAPIGatewayProxyEvent<S>,
  APIGatewayProxyResult
>;

export const sendJsonResponse = (message: string, data?: any): ResponseData => {
  return {
    success: true,
    message: message,
    data: data,
  };
};

export const sendErrorResponse = (message: string, errors?: RequestError[]) => {
  return {
    success: false,
    message: message,
    data: errors,
  };
};

export const transformQuery = <T>(req: Request, obj: T): T => {
  const body = req.query;
  const jsonObj = JSON.parse(JSON.stringify(body));

  if (typeof obj["fromJSON"] === "function") {
    obj["fromJSON"](jsonObj);
  } else {
    for (const propName in jsonObj) {
      if (
        typeof obj["hasOwnProperty"] === "function" &&
        Object.prototype.hasOwnProperty.call(obj, propName)
      ) {
        obj[propName] = jsonObj[propName];
      }
    }
  }
  return obj;
};

export const transformBody = <T>(req: Request, obj: T): T => {
  const body = req.body;
  const jsonObj = JSON.parse(JSON.stringify(body));

  if (typeof obj["fromJSON"] === "function") {
    obj["fromJSON"](jsonObj);
  } else {
    for (const propName in jsonObj) {
      if (
        typeof obj["hasOwnProperty"] === "function" &&
        Object.prototype.hasOwnProperty.call(obj, propName)
      ) {
        obj[propName] = jsonObj[propName];
      }
    }
  }
  return obj;
};
