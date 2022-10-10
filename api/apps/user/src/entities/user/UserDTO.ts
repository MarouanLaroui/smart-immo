import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';

export default class UserDTO {
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsString()
  @IsNotEmpty()
  @IsDateString()
  birthdate: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsOptional()
  @IsString()
  @Matches('')
  password?: string;

  constructor(
    firstname: string,
    lastname: string,
    birthdate: string,
    email: string,
    password?: string
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthdate = birthdate;
    (this.email = email), (this.password = password);
  }
}
