import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  id: string;
  Employee : any ;
  constructor(private route : ActivatedRoute, private _api : ApiService) { 
    this.id = route.snapshot.params['id'];
  }

  role_string(id){
    // iterate over each element in the array
    for (var i = 0; i < this.roles.length; i++){
      // look for the entry with a matching `code` value
      if (this.roles[i].value == id){
        // we found it
        return this.roles[i].string;
      }
    }
  }
 


  roles = [{"value":"1","string":"Nurse"}, {"value":"2","string":"Supervisor"}];

  ngOnInit() {
    this._api.getEmployee(this.id)
    .subscribe(data => {
      this.Employee = data
      console.info(this.Employee);
    });
    
  }

}
