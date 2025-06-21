import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { createUserDto } from 'src/users/dto/crateUser.dto';

@Controller('user')
export class UserController {
    @Get() // Decorators
    getUsers(){
        return { 'user': 'Saurabh Singh', 'email': 'saurabh.singh.tma@gmail.com' };
    }

    @Post('create')
    createUserData(@Req() request:Request, @Res() response:Response){
        console.log(request.body);
        response.send('User Created Successfully');
    }

    @Post('create') // Here createUserDto is the function name
    createUserInfo(@Body() payload: createUserDto){
        console.log(payload);
        return { 'User': 'Saurabh Singh'}
    }

    @Get(':id')
    getUser(@Req() request: Request, @Res() response: Response){
        console.log(request.params)
        response.send('')
    }

    @Get(':id/:userId') // Here also add the params validator
    getData(@Param('id', ParseIntPipe) id:number, @Param('userId', ParseIntPipe) userId:number){
        console.log("Hi this is your params Id", id, userId);
        return {id, userId}
    }

    @Get('info')
    getUserInfo(@Query('id', ParseIntPipe) id: number){
        console.log("Hi this is your query Id", id);
        return {id}
    }
    
    @Get('sort')
    getUserData(@Query('sortBy') sortData: string){
        console.log(sortData);
        return {sortData}
    }

    @Post('create')
    @UsePipes(new ValidationPipe) // Payload validations are added.
    createUser(@Body() usercreate: createUserDto){
        console.log(usercreate);
        return {usercreate};
    }
}
