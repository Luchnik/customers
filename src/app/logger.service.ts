import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  log(str: string) {
    console.log(str);
  }
}