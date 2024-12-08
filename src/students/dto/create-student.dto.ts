import { Type } from "class-transformer";
import { IsDate, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  dateOfBirth: Date;
}
