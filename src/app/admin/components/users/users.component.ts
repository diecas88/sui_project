import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsuariosService } from './../../services/usuarios.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      gender: ['M', [Validators.required]],
      user_role: ['usuario', [Validators.required]],
      born_date: ['', [Validators.required]],
    });
  }

  saveUser(event: Event) {
    event.preventDefault();
    if (this.form.valid) {

      const mydata = this.form.value;
      const year = mydata.born_date.getFullYear();
      let month = mydata.born_date.getMonth() + 1;
      month = month.toString().padStart(2, '0');
      const day = mydata.born_date.getDate();
      mydata.born_date = `${year}${month}${day}`;

      this.usuariosService.createUser(mydata)
      .subscribe(newUsuario => {
        console.log(newUsuario);
      });
    }
  }


}
