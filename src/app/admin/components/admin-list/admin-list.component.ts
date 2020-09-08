import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  adminusr = [
    {
      name: 'diego',
      phone: 3168232891,
      type: 'human',
      city: 'lebrija'
    },
    {
      name: 'saturno',
      phone: 0,
      type: 'cat',
      city: 'lebrija'

    },
    {
      name: 'lulu',
      phone: 0,
      type: 'dog',
      city: 'lebrija'
    },
    {
      name: 'capucho',
      phone: 0,
      type: 'cat',
      city: 'lebrija'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
