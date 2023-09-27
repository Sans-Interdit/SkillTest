import { Controller } from '@nestjs/common';
import { Body, Param, Post, Put} from '@nestjs/common/decorators'
import { AccountsService } from './accounts.service';
import { Account } from './accounts.entity';

@Controller('accounts')
export class AccountsController {
    constructor(private accountsService : AccountsService){}

    @Post()
    anyAccounts(@Body() acc : Account) {
        return this.accountsService.findAccount(acc);
    }

    @Put()
    findAll(@Body() acc : Account) {
        return this.accountsService.createToken(acc);
    }
}
