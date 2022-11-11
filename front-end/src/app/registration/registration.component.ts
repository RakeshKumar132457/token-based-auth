import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  regForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    mobileNo: new FormControl(''),
    password: new FormControl(''),
    address: new FormControl(''),
    verify: new FormControl(''),
  });

  onSubmit() {
    console.log(this.regForm);
  }

  constructor() {}

  ngOnInit(): void {}
}
