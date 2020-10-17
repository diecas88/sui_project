import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

import { Task } from './../../basics/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks: Task[] = [];
  private todo = new BehaviorSubject<Task[]>([]);

  todo$ = this.todo.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getAllTasks() {
    return this.http.get<Task[]>(`${environment.url_api}tasks`);
  }

  newTask(task: Task) {
    return this.http.post<Task>(`${environment.url_api}tasks`, task);
  }

  deteleTask(id: string) {
    return this.http.delete(`${environment.url_api}tasks/${id}`);
  }

  addToDo(task: Task) {
    this.tasks = [...this.tasks, task];
    this.todo.next(this.tasks);
  }
}
