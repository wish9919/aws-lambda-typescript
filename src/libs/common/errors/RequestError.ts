/**
 * Represents an error in the request
 */
export default class RequestError {
  field: string;
  message: string;

  constructor(field: string, message: string) {
    this.field = field;
    this.message = message;
  }
}
