import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './accounts.entity';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AccountsService {
    private readonly secretKey = 'clé_pas_très_secrète';
    constructor(
        @InjectRepository(Account)
        private readonly accountRepository: Repository<Account>
    ){}

    async findAccount(acc : Account) {
        return await this.accountRepository.findOne({where : {
            username : acc.username,
            password : acc.password
        }});
    }

    async createToken(acc : Account){
        const token = jwt.sign({ acc }, this.secretKey, { expiresIn: '1h' });
        return {token};
    }
}