import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormArray,FormControl ,FormGroup} from '@angular/forms';

import { Validators,ValidatorFn } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit {
  
  

  // form
  newEmployeeForm : FormGroup;
  initForm(){
    this.newEmployeeForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      role: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }
  
  
  onSubmit() {
    
    console.info("Submit");
    
    console.info(this.newEmployeeForm.value);
    this._api.createEmployee(this.newEmployeeForm.value)
              .subscribe(
                data => {
                  console.log('success', data);
                  
                  this.initForm();

                  
                },

                error => {
                  console.log('oops', error)
                  

                  
                });
  }

  onReset() { 
    
    console.info("Reset");
    this.initForm();    
    console.info(this.newEmployeeForm.value);
        
       
  }
  
  roles = [{"value":"1","string":"Nurse"},
            {"value":"2","string":"Supervisor"}  ];

  constructor(private fb: FormBuilder,private _api : ApiService) { 
    
    

    this.initForm();
  }

  ngOnInit() { }

}
