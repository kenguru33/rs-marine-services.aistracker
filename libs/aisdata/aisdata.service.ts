import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Aisdata, AisDataDocument } from './schemas/aisdata.schema';
import { Model } from 'mongoose';
import { createAisdataDto } from './dto/create-aisdata.dto';
@Injectable()
export class AisdataService {
  constructor(
    @InjectModel(Aisdata.name) private aisdataModel: Model<AisDataDocument>,
  ) {}

  async create(createAisDto: createAisdataDto): Promise<Aisdata> {
    return 
  }
}
