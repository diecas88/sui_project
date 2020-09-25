import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/share.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { UsersComponent } from './components/users/users.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { MaterialModule } from './../material/material.module';
import { NavComponent } from './components/nav/nav.component';

import { UsersListComponent } from './components/users-list/users-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent, UsersComponent, AdminListComponent, NavComponent, UsersListComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
