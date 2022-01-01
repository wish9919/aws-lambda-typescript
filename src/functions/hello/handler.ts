import { helloFunction } from '@libs/hello/services';
import { middyfy } from '@libs/lambda';
import createAPI, { Request } from 'lambda-api';
import { APIGatewayEvent, Context } from 'aws-lambda';

const baseUrl = '/hello';
const api = createAPI({ base: baseUrl });

// simeple get request
api.get('/', async (req: Request) => await helloFunction(req));

export const main = middyfy((event: APIGatewayEvent, context: Context) => api.run(event, context));
