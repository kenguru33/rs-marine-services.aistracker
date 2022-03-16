import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { KystverketService } from 'libs/kystverket';

@Injectable()
export class AppService {
  constructor(private kystverket: KystverketService) {}

  @Interval(5000)
  async addKS() {
    const aisData = await this.kystverket.findAll();
    console.log(aisData);
  }
}
