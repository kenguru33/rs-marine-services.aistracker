import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AisdataService } from './aisdata.service';
import { Aisdata, AisdataSchema } from './schemas/aisdata.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Aisdata.name, schema: AisdataSchema }]),
  ],
  providers: [AisdataService, ],
})
export class AppModule {}
