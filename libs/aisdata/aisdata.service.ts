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

  async add(createAisDto: createAisdataDto): Promise<Aisdata> {
    
    const aisdata = await this.aisdataModel.create({
      ...createAisDto,
    });
    try {
      const result = await aisdata.save();
      return result;
    } catch (err) {
      if (err === '11000') {
        console.log('dups');
      }
      throw err;
    }
  }
}
