import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const http = host.switchToHttp();
    const response = http.getResponse();
    const status = response.status;
    console.log(exception);
    
    return  response.json(exception);
  }
}
