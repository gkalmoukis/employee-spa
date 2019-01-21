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

  ngOnInit() {
    this._api.getEmployee(this.id)
    .subscribe(data => {
      this.Employee = data
      console.info(this.Employee);
    });
    
  }

}
