import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, Post, Put, Query, Req, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { createUserDto } from 'src/users/dto/crateUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ValidationCreateUserPipe } from 'src/users/pipes/validation-create-user/validation-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('user')
export class UserController {
    constructor(private userService: UsersService){}

    @Get() // Decorators
    @UseGuards(AuthGuard) // Guards are used when suppose any user fails to authenticate & authorize not allow rach end point for prevent that use access to end point use guard.
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

    @Post('createNewUser')
    createUserData(@Req() request:Request, @Res() response:Response){
        console.log(request.body);
        console.log(isNaN(request.body.age));
        console.log(typeof(request.body.age));
        response.send({status: true, message:'User Created Successfully'});
    }

    @Post('createUserData') // Here createUserDto is the function name
    @UsePipes(new ValidationPipe()) // Payload validations are added.
    createUserInfo(@Body(ValidationCreateUserPipe) payload: createUserDto){
        console.log(payload);
        return { 'user': 'Saurabh Singh', 'email': 'saurabh.singh.tma@gmail.com' };
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
    @UsePipes(new ValidationPipe()) // Payload validations are added.
    createUser(@Body(ValidationCreateUserPipe) usercreate: createUserDto){
        console.log(usercreate);
        return {usercreate};
    }

    @Put('update/:id')
    updateUser(@Body() payload: createUserDto, @Param('id', ParseIntPipe) id:number){
        console.log(payload);
        return {status: true, yieldmessage: 'User data updated successfully'};
    }
}
