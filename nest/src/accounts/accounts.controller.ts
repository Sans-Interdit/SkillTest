import { Controller } from '@nestjs/common';
import { Header, Get, Param} from '@nestjs/common/decorators'
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
    constructor(private accountsService : AccountsService){}

    @Header('Access-Control-Allow-Origin', '*')
    @Header('Access-Control-Allow-Headers', 'Content-Type')
    @Header('Access-Control-Allow-Methods', 'GET')
    @Get(':id')
    anyAccounts(@Param('id') id : string): boolean {
        return this.accountsService.getAccounts(id);
    }
}
