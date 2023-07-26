import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { IUsuario } from '../component/Login';

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

  login(usuario: IUsuario): Observable<boolean> {
    const res = this.httpClient.post<any>(this.apiUrl + "/login", usuario).pipe(
      tap((resposta) => {
        console.log(resposta, resposta['status'])
        if(!resposta['status']){
          this.isLoggedIn = false;
        } else {
          localStorage.setItem('usuario', JSON.stringify(resposta));
          this.isLoggedIn = true;
        }

      }))

      return res
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
