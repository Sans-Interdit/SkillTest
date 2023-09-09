import {IsNumber, IsString, IsBoolean} from "class-validator"

export class ProjectsDto {
    @IsNumber()
    id : number;

    @IsString()
    description : string;
}
