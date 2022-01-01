import RequestError from '@libs/common/errors/RequestError';
import BaseRequest from '@libs/common/requests/BaseRequest';

export default class HelloRequest extends BaseRequest {
  name: string | null = null;

  constructor() {
    super();
  }

  getRequestErrors(): RequestError[] {
    const requestErrors: RequestError[] = [];
    if (this.name === null) {
      requestErrors.push(new RequestError('name', 'Name cannot be empty'));
    }

    return requestErrors;
  }
}
