import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from "./employees/employees.component";
import { EmployeeComponent } from "./employee/employee.component";
import { PositionsComponent } from "./positions/positions.component";
import { PositionComponent } from "./position/position.component";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";


const routes: Routes = [
  { path: 'employees', component: EmployeesComponent },
  { path: 'employee/:_id', component: EmployeeComponent },
  { path: 'positions', component: PositionsComponent },
  { path: 'position/:_id', component: PositionComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
