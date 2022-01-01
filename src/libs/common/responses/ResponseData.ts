import RequestError from '../errors/RequestError';

interface ResponseData {
  success: boolean;
  message: string;
  errors?: RequestError[];
  data?: any;
}

export default ResponseData;
