import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    
    let request = context.switchToHttp().getRequest() as Request
    console.log(request.headers);

    return true; // If Fails to validate user authenticate & authorize not access certain end point use guards. From here return false gives in postman forbidden (403)
  }
}
