import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from './../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(){
    return this.http.get<Usuario[]>('http://localhost:3050/users');
  }

  getUser(id: string){
    return this.http.get<Usuario>(`http://localhost:3050/user/${id}`);
  }
}
