import { Module, } from '@nestjs/common';

import { ConfigModule } from './config/config.module';
import { LoggerModule } from './../core/logger/logger.module';
import { AppLogger } from './logger/logger.service';

@Module({
    imports: [
        ConfigModule,
        LoggerModule
    ],
    providers: [AppLogger],
    exports: [AppLogger]
})
export class CoreModule {

}

