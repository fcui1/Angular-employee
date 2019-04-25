import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Position} from '../data/position';
import { PositionService } from '../data/position.service';
import {LogService} from '../data/log.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

   paramSubscription: any;
   positionSubscription: any;
   savePositionSubscription: any;
   position: Position;

   successMessage = false;

  constructor(private positionService: PositionService,private route: ActivatedRoute, private logService: LogService) { }

  ngOnInit() {

    this.paramSubscription = this.route.params.subscribe((params) => {
      this.positionSubscription = this.positionService.getPosition(params['_id']).subscribe((pos) => {
        console.log(pos[0]);
        this.position = pos[0];
      });
    });
  }

  onSubmit(f: NgForm){
    this.savePositionSubscription = this.positionService.savePosition(this.position).subscribe(()=>{
      this.successMessage = true;
      this.logService.writeLog("updated position: " + this.position.PositionName);
      setTimeout(()=>{
        this.successMessage = false;
      },2500)
    });
  }

  ngOnDestroy(){
    if(this.paramSubscription){this.paramSubscription.unsubscribe();}
    if(this.positionSubscription){this.positionSubscription.unsubscribe();}
    if(this.savePositionSubscription){this.savePositionSubscription.unsubscribe();}
  }

}
