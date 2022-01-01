import { sendErrorResponse, sendJsonResponse, transformQuery } from './../apiGateway';
import { Request } from 'lambda-api';
import HelloRequest from './requests/HelloRequest';

export const helloFunction = async (req: Request) => {
  // validate request body
  const query: HelloRequest = transformQuery(req, new HelloRequest());

  if (!query.isValidRequest()) {
    return sendErrorResponse('Please query params', query.getRequestErrors());
  }

  try {
    return sendJsonResponse(`Hello ${query.name}`);
  } catch (error) {
    return sendErrorResponse('Something went wrong!');
  }
};
