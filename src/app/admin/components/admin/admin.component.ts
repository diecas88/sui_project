import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { UsuariosService } from './../../services/usuarios.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuariosService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchUsuario(id);
      // this.usuario = this.usuarioService.getUser(id);
    });
  }

  fetchUsuario(id: string) {
    this.usuarioService.getUser(id)
    .subscribe(usuario => {
      this.usuario = usuario[0];
    });
  }

  createUser() {
    const newUsuario: Usuario = {
      id_user: 90,
      name: 'henry',
      last_name: 'suarez',
      address: 'cra 44 # n11 - 1',
      phone: '3260001110',
      gender: 'M',
      user_role: 'admin',
      born_date: '20000519'
    };

    this.usuarioService.createUser(newUsuario)
      .subscribe(usuario => {
        console.log(usuario);
      });
  }

  updateUser() {
    const updateUser: Usuario = {
      id_user: 90,
      name: 'javier',
      last_name: 'ramirez',
      address: 'barrio las palmas',
      phone: '6566998',
      gender: 'M',
      user_role: 'admin',
      born_date: '20000519'
    };

    this.usuarioService.updateUser('2', updateUser)
    .subscribe(usuario => {
      console.log(usuario);
    });

  }

  deleteUser() {
    this.usuarioService.deleteUser('2')
      .subscribe(usuario => {
        console.log(usuario);
    });
  }

}
