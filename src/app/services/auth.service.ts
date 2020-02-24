import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  AUTH_SVC_URL: any = environment.authServiceUrl;

  login(username: string, password: string) {
    return this.http.post<any>(`${this.AUTH_SVC_URL}api/login`, { username: username, password: password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          //localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
  }

  // public login(formVars) {
  //   let headers = new HttpHeaders();
  //   headers.append('Authorization', 'Basic ' + btoa(formVars.username + ':' + formVars.password));
  //   headers.append("Content-Type", "application/json");
  //   return this.http.post(`${this.AUTH_SVC_URL}api/login`, null, { headers: headers }).map(res => res.data)
  //     .subscribe(res => console.log(res));
  //     .map((response) => {
  //       console.log(response);
  //       let respObj = response.json();
  //       if (!respObj.access_token) {
  //         //return respObj;
  //       } else {
  //         // let token = respObj.access_token;
  //         // if (token) {
  //         //   let user = this.getUserFromJWT(token);
  //         //   let me = { user: user };
  //         //   me['admin'] = this.isAdmin(user);
  //         //   me['authMode'] = respObj['auth-mode'];
  //         //   localStorage.setItem('currentUser', JSON.stringify(me));
  //         //   localStorage.setItem(TOKEN_NAME, token);
  //         //   this.getLoggedInUser.emit(user);
  //         //   //window.location.href = "/";
  //         //   return user;
  //         // }
  //       }

  //     })
  //     .catch();
  // }
}
