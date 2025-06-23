import { MiddlewareConsumer, Module, NestMiddleware, NestModule, RequestMethod } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { UsersService } from './services/users/users.service';
import { AuthMiddleware } from './middlewares/auth/auth.middleware';

@Module({
  controllers: [UserController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
    //consumer.apply(AuthMiddleware).forRoutes(UserController)     // For static routes: consumer.apply(AuthMiddleware).forRoutes('user')

    // Added the customise middlwware. Only middleware applies on these routes.
    consumer.apply(AuthMiddleware).forRoutes(
      {
      path: 'user',
      method: RequestMethod.GET
      },
      {
      path: 'user/data',
      method: RequestMethod.GET
      },
      {
      path: 'user/create',
      method: RequestMethod.POST
      }
    )
  }
}
