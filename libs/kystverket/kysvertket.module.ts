import { Module } from '@nestjs/common';
import { KystverketService } from './kystverket.service';

@Module({
  imports: [],
  providers: [KystverketService],
})
export class AppModule {}
