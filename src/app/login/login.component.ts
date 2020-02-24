import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  
  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  onSubmit() {

    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log(response);
        //this.router.navigate(['/']);
      },
      (error) => {
        if (JSON.parse(error._body).errCode) {
          //this.error = JSON.parse(error._body).errMessage;
        } else {
          //this.error = "Login Error";
        }
      }
    );
  }

}
