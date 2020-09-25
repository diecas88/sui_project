import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from './../models/usuario.model';

import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers() {
    return this.http.get<Usuario[]>(`${environment.url_api}users`);
  }

  getUser(id: string) {
    return this.http.get<Usuario>(`${environment.url_api}user/${id}`);
  }

  createUser(usuario: Usuario) {
    return this.http.post<Usuario>(`${environment.url_api}add`, usuario);
  }

  updateUser(id: string, changes: Partial<Usuario> ) {
    return this.http.put(`${environment.url_api}update/${id}`, changes);
  }

  deleteUser(id: string) {
    return this.http.delete(`${environment.url_api}delete/${id}`);
  }

}
