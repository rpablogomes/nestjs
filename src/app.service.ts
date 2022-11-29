import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPost(teste: any): string {
    console.log(teste);
    return teste;
  }
}
