import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UserService } from "../user/user.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(public userService: UserService, public router: Router) { 
    this.email= "";
    this.password=""
  }

  ngOnInit(): void {
  }

  login() {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe( data => {
      console.log(data);
      this.userService.setToken(data.token);
      });
    }
    };