import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  user = {
    userName:'',
    password: '',
    email:''
  };
  // userName: string = '';
  // password ='';
  // email = '';
  ngOnInit(): void {
  }

  // submit() {
  //   console.log(this.userName);
  //   console.log(this.password);
  //   console.log(this.email);
  // }
  submit() {
    console.log(this.user);
    Swal.fire('swal alert', 'Popup message');
  }
}
