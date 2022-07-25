import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { UsersService } from "../users/users.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  
})

export class RegisterComponent {
  email: string;
  password: string;
  confirmPassword: string;
  

  constructor(public userService: UsersService, public router: Router) {
    this.email="";
    this.password="";
    this.confirmPassword="";
    
  }

  register() {
    const user = { email: this.email, password: this.password };
    this.userService.register(user).subscribe(data => {
      this.userService.setToken(data.token);
    });
  }
}
