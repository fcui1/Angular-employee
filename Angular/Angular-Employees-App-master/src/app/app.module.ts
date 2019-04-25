import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LogComponent } from './log/log.component';

import { EmployeesComponent } from './employees/employees.component';
import { PositionsComponent } from './positions/positions.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {EmployeeService} from './data/employee.service';
import {PositionService} from './data/position.service';
import {LogService} from './data/log.service';



import { MomentModule } from 'angular2-moment';
import { FormsModule } from '@angular/forms';


// Used for AJAX Requests

import { HttpClientModule } from '@angular/common/http';
import { PositionComponent } from './position/position.component';

// used for routing




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    LogComponent,
    PageNotFoundComponent,
    EmployeesComponent,
    PositionsComponent,
    EmployeeComponent,
    PositionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Added HttpModule
    MomentModule,
    FormsModule
  ],
  providers: [EmployeeService, PositionService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
