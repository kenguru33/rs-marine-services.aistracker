import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class KystverketService {
  constructor(private httpService: HttpService) {}
  async findAll(): Promise<any> {
    const data = (
      await lastValueFrom(
        this.httpService.get('http://ais.rs.no/aktive_pos.json'),
      )
    ).data;
    return data;
  }
}
