import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { createUserDto } from 'src/users/dto/crateUser.dto';

@Injectable()
export class ValidationCreateUserPipe implements PipeTransform {
  transform(value: createUserDto, metadata: ArgumentMetadata) {
    console.log("Inside the validation create user pipe")
    console.log(value)
    console.log(metadata)

    const parseAgeToInt = parseInt(value.age.toString())
    if(isNaN(parseAgeToInt)){
      console.log("Provided age is not a number");
      throw new HttpException(`${value.age} age is not a valid type it must be number`, HttpStatus.BAD_REQUEST);
    }
    else{
      console.log("Age is basically a number value");
      return { ...value, age: parseAgeToInt};
    }
  }
}
