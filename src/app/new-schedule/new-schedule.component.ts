import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormArray,FormControl ,FormGroup} from '@angular/forms';

import { Validators,ValidatorFn } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-new-schedule',
  templateUrl: './new-schedule.component.html',
  styleUrls: ['./new-schedule.component.scss']
})
export class NewScheduleComponent implements OnInit {
  
  free_employees = [];
  suggested_schedule : any = [];

  // json alert functionality
  jsonButton = true;
  toggleJsonView() { this.jsonButton = !this.jsonButton; }
  get diagnostic() { return JSON.stringify(this.newScheduleForm.value); }


  employee_name(id)
  {
    let index = 0;
    // iterate over each element in the array
    for (var i = 0; i < this.free_employees.length; i++){
      // look for the entry with a matching `code` value
      if (this.free_employees[i].id == id ){
        // we found it
        index = i;
        // obj[i].name is the matched result
      }
    }
    return this.free_employees[index].name;
  }
  
  // form
  newScheduleForm : FormGroup;

  get employees() {
    return this.newScheduleForm.get('employees') as FormArray;
  }
    onSubmit() {
    // TODO: show loading
    const selectedOrderIds = this.newScheduleForm.value.employees
      .map((v, i) => v ? this.free_employees[i].id : null)
      .filter(v => v !== null);
    this.newScheduleForm.value.employees = selectedOrderIds;
    this._api.createSchedule(this.newScheduleForm.value)
      .subscribe(
        data => {
          // TODO: hide loading
          this.suggested_schedule = data;

        }
      );
  }

  onReset() { 
    this.initForm(); 
  }

  

  
  constructor(private _api : ApiService,private fb: FormBuilder) { 
    
        
      }

  ngOnInit() {
    this.readEmployees();   
    
  }

  initForm(){
    const controls = this.free_employees.map(c => new FormControl(false));
    this.newScheduleForm = this.fb.group({
      weeks: ['1', Validators.required ],
      employees: new FormArray(controls, this.minSelectedCheckboxes(1))
    });

  }

  readEmployees(){
    this._api.getEmployees()
    .subscribe(data => {
      data.forEach(element => {
        this.free_employees.push({"name":element.name,"id":element._id.$oid})
      });

      this.initForm();
    });

  }


  minSelectedCheckboxes(min = 1) {
    const validator: ValidatorFn = (formArray: FormArray) => {
      const totalSelected = formArray.controls
        // get a list of checkbox values (boolean)
        .map(control => control.value)
        // total up the number of checked checkboxes
        .reduce((prev, next) => next ? prev + next : prev, 0);
  
      // if the total is not greater than the minimum, return the error message
      return totalSelected >= min ? null : { required: true };
    };
  
    return validator;
  }
  
}
