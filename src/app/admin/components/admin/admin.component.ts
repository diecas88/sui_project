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

}
