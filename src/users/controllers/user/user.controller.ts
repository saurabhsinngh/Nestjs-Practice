import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, Post, Put, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { createUserDto } from 'src/users/dto/crateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('user')
export class UserController {
    constructor(private userService: UsersService){}

    @Get() // Decorators
    getBasicUserInfo() {
        return { 'user': 'Saurabh Singh', 'email': 'saurabh.singh.tma@gmail.com' };
    }

    @Get('data') // Decorators
    getUserInfomation(){
        return this.userService.getUser();
    }

    @Post('createUser') // Here createUserDto is the function name
    createNewUser(@Body() payload: createUserDto){
        return this.userService.createUser(payload);
    }

    @Get(':userId')
    fetchUser(@Param('userId', ParseIntPipe) userId: number){
        // return this.userService.fetchUserById(userId);
        let user = this.userService.fetchUserById(userId);
        if(!user){
            throw new HttpException('User Data is not found', HttpStatus.BAD_REQUEST);
        }
        return user;
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

    @Get(':id/:userId/:dataId')
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

    @Put('update/:id')
    updateUser(@Body() payload: createUserDto, @Param('id', ParseIntPipe) id:number){
        console.log(payload);
        return {status: true, yieldmessage: 'User data updated successfully'};
    }
}
