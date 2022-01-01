import RequestError from '@libs/common/errors/RequestError';

export default class BaseRequest {
  getRequestErrors(): RequestError[] {
    return [];
  }

  isValidRequest(): boolean {
    return this.getRequestErrors().length == 0;
  }
}
