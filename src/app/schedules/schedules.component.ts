import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {

  schedules = [
    { id: 11,  weeks:"3" ,employees:"4" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
