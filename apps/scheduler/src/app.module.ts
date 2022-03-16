import { Module } from '@nestjs/common';
import { KystverketModule, KystverketService } from 'libs/kystverket';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [KystverketModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, KystverketService],
})
export class AppModule {}
