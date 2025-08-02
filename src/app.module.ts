import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OiService } from './oi/oi.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, OiService],
})
export class AppModule {}
