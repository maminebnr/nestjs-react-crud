import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { SeedDBService } from './seedDB.service';

@Injectable()
export class SeedCommand {

    constructor(private readonly seedDBService: SeedDBService) { }

    @Command({ command: 'create:dataBase', describe: 'init Data Base', autoExit: true })
    async initDataBase() {
        console.log('Start...');
        const now = Date.now();
        // await this.seedDBService.initDataBase;
        console.log(`...End ${Date.now() - now}ms`)
    }

}