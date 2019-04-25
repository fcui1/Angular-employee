import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class LogService {

  entries: string[] = [];
  public getLog;

  constructor() { 
    this.getLog = new Subject();
  }

  writeLog(entry:string){
    let now = new Date();
    this.entries.push(now + ": " + entry);  // add "entry" to the "entries" array  
    this.getLog.next(this.entries); // broadcast the whole "entries" array to the "getLog" subscribers
  }
}
