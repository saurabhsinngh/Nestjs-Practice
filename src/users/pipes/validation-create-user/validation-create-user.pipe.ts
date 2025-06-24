import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidationCreateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("Inside the validation create user pipe")
    console.log(value)
    console.log(metadata)
    return value;
  }
}
