import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TasksService } from './../../../core/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  form: FormGroup;

  newTask: string;
  allTask = [];
  taskDetail: any;
  descriptionTask: string;

  constructor(
    private taskService: TasksService,
    private formBuilder: FormBuilder,
  ) {
    this.newTask = '';
    this.descriptionTask = '';
    this.allTask = [];
    this.buildForm();
  }

  ngOnInit(): void {
    this.fetchTasks();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name_task: ['', [Validators.required, Validators.max(60)]],
      description_task: ['', [Validators.max(350)]]
    });
  }

  public fetchTasks() {
    this.taskService.getAllTasks()
    .subscribe(tasks => {
      this.allTask = tasks;
    });
  }

  public addtask() {
    this.taskDetail = {
      id_user: '75',
      name_task: this.form.get('name_task').value,
      description_task: this.form.get('description_task').value
    };



    this.taskService.newTask(this.taskDetail)
    .subscribe(newTask => {
      this.taskService.addToDo(newTask);
      this.taskDetail.id_task = newTask.id_task;
      this.allTask.push(this.taskDetail);
      this.newTask = '';
      this.descriptionTask = '';
    });
  }

  public deletetask(index, idTask: string) {
    this.allTask.splice(index, 1);
    this.taskService.deteleTask(idTask)
    .subscribe(task => {
      console.log(task);
    });
  }

}
