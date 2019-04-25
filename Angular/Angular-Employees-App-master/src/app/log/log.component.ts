import { Component, OnInit } from '@angular/core';
import {LogService} from '../data/log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  entries: string[];
  getLogSub: any;
  empty = true;

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.getLogSub = this.logService.getLog.subscribe((data)=>{
      this.entries = data;
      this.empty = false;
    });
  }

  ngOnDestroy(){
    if(this.getLogSub){this.getLogSub.unsubscribe();}
  }
  
}
