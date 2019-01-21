import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SideComponent } from './side/side.component';
import { EmployeesComponent } from './employees/employees.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { FooterComponent } from './footer/footer.component';
import { NewScheduleComponent } from './new-schedule/new-schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideComponent,
    EmployeesComponent,
    NewEmployeeComponent,
    EmployeeDetailsComponent,
    SchedulesComponent,
    FooterComponent,
    NewScheduleComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
