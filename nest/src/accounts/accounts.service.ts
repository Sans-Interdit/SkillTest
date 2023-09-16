import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './projects.entity';

@Injectable()
export class AccountsService {
    constructor(
        @InjectRepository(Account)
        private readonly accountRepository: Repository<Account>){}

    async findAccount(identifier : string) {
        return !! await this.accountRepository.findOneBy({username : identifier});
    }
}