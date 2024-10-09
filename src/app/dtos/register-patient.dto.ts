import { IsString, IsEmail, IsDate, IsBoolean, Length, Matches } from 'class-validator';

export class RegisterPatientDTO {
    @IsString()
    @Length(4, 20)
    username: string;

    @IsString()
    @Length(6, 20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    password: string;

    @IsEmail()
    email: string;

    @IsString()
    name: string;

    @IsString()
    address: string;

    @IsString()
    @Matches(/^[0-9]{12}$/, {message: 'phone number must be 12 digits'})
    phoneNumber: string;

    @IsDate()
    dateOfBirth: Date;

    @IsBoolean()
    gender: boolean;

    constructor() {
        this.username = '';
        this.password = '';
        this.email = '';
        this.name = '';
        this.address = '';
        this.phoneNumber = '';
        this.dateOfBirth = new Date();
        this.gender = false;
    }
}