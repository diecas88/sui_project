import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/share.module';
import { MaterialModule } from './../material/material.module';

import { AccessRoutingModule } from './access-routing.module';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AccessRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class AccessModule { }
