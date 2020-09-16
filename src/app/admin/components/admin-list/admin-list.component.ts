import { Component, OnInit } from '@angular/core';

import { UsuariosService } from './../../services/usuarios.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  adminusr = [];

  constructor(
    private usuarioservice: UsuariosService
  ) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(){
    this.usuarioservice.getAllUsers()
    .subscribe(usuarios => {
      this.adminusr = usuarios;
    });
  }

}
