import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent } from './employees/employees.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { NewScheduleComponent } from './new-schedule/new-schedule.component';

const routes: Routes = [
  {path:"employees", component : EmployeesComponent},
  {path:"insert_employee", component : NewEmployeeComponent },
  {path:"employee_details/:id", component : EmployeeDetailsComponent },
  {path:"schedules", component: SchedulesComponent},
  {path:"new_schedule", component: NewScheduleComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
