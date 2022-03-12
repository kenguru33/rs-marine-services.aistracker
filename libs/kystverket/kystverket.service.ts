import { Injectable } from '@nestjs/common';

@Injectable()
export class KystverketService {
  getHello(): string {
    return 'Hello World!';
  }
}
