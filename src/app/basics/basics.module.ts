import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BasicsRoutingModule } from './basics-routing.module';
import { TasksComponent } from './components/tasks/tasks.component';


@NgModule({
  declarations: [TasksComponent],
  imports: [
    CommonModule,
    BasicsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BasicsModule { }
