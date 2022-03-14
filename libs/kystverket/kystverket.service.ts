import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Aisdata } from 'libs/aisdata/schemas/aisdata.schema';

@Injectable()
export class KystverketService {
  constructor(private httpService: HttpService) {}
  async findAll(): Promise<Aisdata[]> {
    const data = await this.httpService.get('http://https://ais.rs.no/aktive_pos.json').toPromise()
    
    return data;
  }
}
