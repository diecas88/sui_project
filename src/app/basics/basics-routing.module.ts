import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent} from './components/tasks/tasks.component';
import { SharedModule } from './../shared/share.module';
import { MaterialModule } from './../material/material.module';

const routes: Routes = [
  {
    path: 'mytasks',
    component: TasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule,
    SharedModule,
    MaterialModule
  ]
})
export class BasicsRoutingModule { }
