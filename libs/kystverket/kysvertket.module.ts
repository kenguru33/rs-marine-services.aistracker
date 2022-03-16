import { Module } from '@nestjs/common';
import { KystverketService } from './kystverket.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [KystverketService],
  exports: [KystverketService, HttpModule],
})
export class KystverketModule {}
