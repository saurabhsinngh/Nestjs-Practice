import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('user')
export class UserController {
    @Get()
    getUsers(){
        return { 'user': 'Saurabh Singh', 'email': 'saurabh.singh.tma@gmail.com' };
    }

    @Post('create')
    createUser(@Req() request:Request, @Res() response:Response){
        console.log(request.body);
        response.send('Created');
    }
}
