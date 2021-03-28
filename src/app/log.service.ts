import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  log(msg: any) { console.log('LogService : ' + msg) }
  error(msg: any) { console.error('LogService : ' + msg) }
  warning(msg: any) { console.warn('LogService : ' + msg) }

}
