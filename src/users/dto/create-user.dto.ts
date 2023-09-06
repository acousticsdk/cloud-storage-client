import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        default: 'admin@gmail.com'
    })
    email:string;
    @ApiProperty({ default: 'Max'})
    fullName: string;
    @ApiProperty({
        default: '123'
    })
    password: string;
}
