import { Controller } from '@nestjs/common';
import { Get, Param} from '@nestjs/common/decorators'
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
    constructor(private accountsService : AccountsService){}

    @Get(':id')
    anyAccounts(@Param('id') identifier : string) {
        return this.accountsService.findAccount(identifier);
    }
}
