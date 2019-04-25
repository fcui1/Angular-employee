import { Observable } from "rxjs/Observable";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Position } from "./position";
@Injectable()
export class PositionService {

  private url = "https://glacial-cove-51366.herokuapp.com" ;

  constructor(private http:HttpClient) { }

  getPositions() : Observable<Position[]> {
    return this.http.get<Position[]>(`${this.url}/positions`);
  }

  getPosition(id) : Observable<Position[]> {
    return this.http.get<Position[]>(`${this.url}/position/` + id);
  }

  savePosition(Position) : Observable<any>{
    return this.http.put<any>(this.url + '/position/' + Position._id, Position);
  }

}
