import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './components/admin/admin.component';
import { UsersComponent } from './components/users/users.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { NavComponent } from './components/nav/nav.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersEditComponent } from './components/users-edit/users-edit.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'adminlist',
        component: AdminListComponent
      },
      {
        path: 'admin/:id',
        component: AdminComponent
      },
      {
        path: 'user-edit/:id',
        component: UsersEditComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'userslist',
        component: UsersListComponent
      },
      {
        path: '',
        component: UsersComponent
      },
      {
        path: '**',
        component: UsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
