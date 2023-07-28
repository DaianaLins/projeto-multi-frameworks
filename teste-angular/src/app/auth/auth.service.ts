import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data, Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { IUserReturn, IUsuario } from '../component/Login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth'
  constructor(private httpClient: HttpClient, private router: Router) { }

  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer ' + localStorage.getItem('token')
 });

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  login(usuario: IUsuario): Observable<IUserReturn> {
    const res = this.httpClient.post<IUserReturn>(this.apiUrl + "/login", usuario).pipe(
      tap((resposta) => {
        if(!resposta['status']){
          this.isLoggedIn = false;
        } else {
          localStorage.setItem('usuario', JSON.stringify(resposta));
          this.isLoggedIn = true;
        }

      }))

      return res
  }


  getUser(): string | IUsuario | null{
    return localStorage.getItem('usuario');
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
