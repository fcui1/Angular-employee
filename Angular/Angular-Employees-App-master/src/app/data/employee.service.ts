import { Observable } from "rxjs/Observable";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from "./employee";
import { EmployeeRaw } from "./employeeRaw";
@Injectable()
export class EmployeeService {

  private url = "https://glacial-cove-51366.herokuapp.com" ;

  constructor(private http:HttpClient) { }

  getEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}/employees`);
  }

  getEmployee(id: string) : Observable<EmployeeRaw[]> {
    return this.http.get<EmployeeRaw[]>('https://glacial-cove-51366.herokuapp.com/employee/' + id );
  }

  saveEmployee(employee: EmployeeRaw) : Observable<any>{
    return this.http.put<any>(this.url + '/employee/' + employee._id, employee);
  }

}
