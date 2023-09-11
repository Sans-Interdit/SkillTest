import { IsString } from "class-validator";

export class AccountsDto {
    @IsString()
    username : string;
}