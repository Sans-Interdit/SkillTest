import { Injectable } from '@nestjs/common';
import { AccountsDto } from './dto/accounts.dto';

@Injectable()
export class AccountsService {
    public accounts : AccountsDto[] = [{'username' : "0000"},{'username' : "mdp123"}]

    getAccounts(id : string): boolean{
        return this.accounts.some((account) => account.username==id)
    }
}
