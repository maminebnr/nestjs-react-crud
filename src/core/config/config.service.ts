import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
@Injectable()
export class ConfigService {
    private readonly envConfig: Record<string, string>;

    constructor(filePath: string) {
        this.envConfig = dotenv.parse(fs.readFileSync(filePath))
    }

    get(key: string): string {
        // console.log('this.envConfig ', this.envConfig)
        return this.envConfig[key];
    }
}