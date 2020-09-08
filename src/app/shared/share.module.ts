
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    providers: [],
    bootstrap: []
})
export class SharedModule { }
