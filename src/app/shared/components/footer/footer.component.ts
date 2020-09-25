import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // este campo es tipo form control
  emailField: FormControl;

  constructor() {
    this.emailField = new FormControl('admin@mail.com',[
      Validators.minLength(4),
      Validators.email,
      Validators.required
    ]);

    /*
    this.emailField.valueChanges
    .subscribe(value => {
      console.log(value);
    });
    */
   }

  ngOnInit(): void {
  }

  public sendMail() {
    if (this.emailField.valid){
      console.log('your information was sent succefull!');
    }
  }

}
