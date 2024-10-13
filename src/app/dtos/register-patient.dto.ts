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
    phone_number: string;

    @IsDate()
    date_of_birth: Date;

    @IsBoolean()
    gender: boolean;

    constructor(data : any) {
        this.username = data.username;
        this.password = data.password;
        this.email = data.email;
        this.name = data.name;
        this.address = data.address;
        this.phone_number = data.phoneNumber;
        this.date_of_birth = data.dateOfBirth;
        this.gender = data.gender;
    }
}