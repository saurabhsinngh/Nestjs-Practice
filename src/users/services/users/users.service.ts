import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
    private fakeData = [
        { 'username': 'Saurabh Singh', 'email': 'saurabh.singh.tma@gmail.com' },
        { 'useruser': 'Vijay Singh', 'email': 'vijay.singh.tma@gmail.com' },
        { 'useruser': 'Shubham Singh', 'email': 'shubham.singh.tma@gmail.com' },
        { 'useruser': 'Sukesh Singh', 'email': 'sukesh.singh.tma@gmail.com' }
    ]
    getUser(){
        return this.fakeData;
    }

    createUser(userDetails: CreateUserType){
        this.fakeData.push(userDetails)
        return;
    }

    fetchUserById(id: number){
        // return null; // In case of null data found from create user
        return {id, username: 'saurabh singh', email: 'saurabh28720@gmail.com'}
    }
}