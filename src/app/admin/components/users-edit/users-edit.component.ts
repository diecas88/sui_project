import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UsuariosService } from './../../services/usuarios.service';
import { MyValidators } from './../../../utils/validators';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private activeRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.usuariosService.getUser(this.id).
      subscribe( usuario => {
        this.form.patchValue(usuario[0]);
      });
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required, MyValidators.isPhoneValid]],
      gender: ['M', [Validators.required]],
      user_role: ['usuario', [Validators.required]],
      born_date: ['', [Validators.required]],
    });
  }

  updateUser(event: Event) {
    event.preventDefault();
    if (this.form.valid) {

      const mydata = this.form.value;
      const year = mydata.born_date.getFullYear();
      let month = mydata.born_date.getMonth() + 1;
      month = month.toString().padStart(2, '0');
      const day = mydata.born_date.getDate().toString().padStart(2, '0');
      mydata.born_date = `${year}${month}${day}`;

      this.usuariosService.updateUser(this.id, mydata)
        .subscribe(updatedUser => {
          console.log(updatedUser);
          this.router.navigate(['./admin/userslist']);
        });
    }
  }

  get phoneField() {
    return this.form.get('phone');
  }
}
