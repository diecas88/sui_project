import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  newTask: string;
  allTask = [];
  taskDetail: any;
  descriptionTask: string;

  constructor() {
    this.newTask = '';
    this.descriptionTask = '';
    this.allTask = [];
   }

  ngOnInit(): void {
  }

  public addtask() {
    this.taskDetail = {
      nametask: this.newTask,
      desctask: this.descriptionTask
    };

    this.allTask.push(this.taskDetail);
    this.newTask = '';
    this.descriptionTask = '';
    console.log(this.taskDetail);
  }

  public deletetask(index) {
    this.allTask.splice(index, 1);
  }

}
