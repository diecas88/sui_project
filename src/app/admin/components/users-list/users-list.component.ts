import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface Usuario {
  id_user: number;
  name: string;
  last_name: string;
  address: string;
  phone: string;
  gender: string;
  user_role: string;
  born_date: string;
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  ELEMENT_DATA: Usuario[];
  displayedColumns: string[] = ['id_user', 'name', 'last_name', 'address', 'phone', 'gender', 'user_role', 'born_date','acciones'];
  dataSource = new MatTableDataSource<Usuario>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllUsers();
  }

  public getAllUsers() {
    this.usuariosService.getAllUsers()
    .subscribe(report => this.dataSource.data = report as Usuario[]);
  }

  public deleteUser(id: string){
    this.usuariosService.deleteUser(id)
    .subscribe(rta => {
      const newx: number = +id;
      const index = this.dataSource.data.findIndex(x => x.id_user === newx);
      this.dataSource.data.splice(index, 1);
      this.dataSource.data = [...this.dataSource.data];
    });
  }

}
