import { IsNotEmpty, IsOptional } from 'class-validator'
import { Program } from "../../programs/entities";

export class CreateMessageDto {
    
    @IsNotEmpty()
    phone: string;

    @IsOptional()
    address: string;

    @IsNotEmpty()
    subject: string;

    

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    email: string;

    
    
    @IsNotEmpty()
    message: string;

   

    @IsOptional()
    program: Program

}
