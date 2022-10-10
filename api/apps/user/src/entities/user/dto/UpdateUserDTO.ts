import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';

export default class CreateUserDTO {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  firstname?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  birthdate: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsOptional()
  @IsString()
  @Matches('')
  password: string;

  constructor(
    firstname: string,
    lastname: string,
    birthdate: string,
    email: string,
    password: string
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthdate = birthdate;
    this.email = email;
    this.password = password;
  }
}
