import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {IEmployee} from './interfaces/employee';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  private _url = "http://83.212.99.105:8000/employee";

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
   
  }
  
  getEmployee(id): Observable<IEmployee>{
    return this.http.get<IEmployee>(this._url+"/"+id);
  }
  

  createEmployee(newEmployee){
    return this.http.post("http://83.212.99.105:8000/create_employee", newEmployee);
  }

  deleteEmployee(id){
    return this.http.delete("http://83.212.99.105:8000/employee/"+id);

  }

  
  createSchedule(options){
    return this.http.post("http://83.212.99.105:8000/schedule", options);
  }


}
