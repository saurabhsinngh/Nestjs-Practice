import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("Auth Middleware");
    console.log(req.headers.authorization)
    if(!req.headers.authorization){
      throw new HttpException('Auth token is required in headers', HttpStatus.FORBIDDEN);
    }
    if(req.headers.authorization === 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVC') {
      next();
    }else{
      throw new HttpException('Token is Invalid', HttpStatus.FORBIDDEN);
    }
  }
}
