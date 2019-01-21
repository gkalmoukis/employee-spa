import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees = [];
 

  del(id)
  {
    this._api.deleteEmployee(id)
              .subscribe(
                data => {
                  console.log(data);
                  this.readEmployees();
                },
                error => console.log(error) 
              );
  }

  constructor(private _api : ApiService ) { }

  ngOnInit() {
    this.readEmployees();
    
  }
  
  readEmployees(){
    this._api.getEmployees()
    .subscribe(data => this.employees = data);

  }

}
