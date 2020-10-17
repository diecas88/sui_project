import { Component, OnInit } from '@angular/core';

import { TasksService } from './../../../core/services/tasks.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  allTask = 0;

  constructor(
    private taskService: TasksService
  ) {
    this.taskService.todo$.subscribe(tasks => {
      this.allTask = tasks.length;
    });
  }

  ngOnInit(): void {
  }

}
