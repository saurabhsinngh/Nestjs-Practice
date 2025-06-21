import { IsEmail, IsNotEmpty } from "class-validator";

export class createUserDto {
    @IsNotEmpty() // validations added
    username:string;

    @IsNotEmpty()
    @IsEmail()
    email:string;
}