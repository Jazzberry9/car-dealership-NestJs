import { IsString } from "class-validator";


export class CreateCarDto {

    // Valida que sea un string y que este escrito igual que aca.
    @IsString({ message: 'brand should be a string -- key must be brand'})
    readonly brand: string;
    
    @IsString({ message: 'model should be a string -- key must be model'})
    readonly model: string;

}