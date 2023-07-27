import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IBlogs } from '../component/Login';
import { Observable, of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'https://sa-east-1.cdn.hygraph.com/content/clkjrhprf18qq01uqbpj72nl6/master'
  private query: string = '';
  public blogs: IBlogs[] = []
  constructor(private httpClient: HttpClient, private router: Router) { }


  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer ' + localStorage.getItem('token')
  });


  getBlogs(): Observable<any> {
    this.query = `
    query {
      blogs {
        id
        title
        description
        author
        date,
        imageAuthor {
          id,
          url
        },
        image {
          id,
          url
        }
      }
    }`;
    const res = this.httpClient.post<any>(this.apiUrl, JSON.stringify({ query: this.query })).pipe(
      tap((resposta) => {
        return this.blogs = resposta['data']['blogs']
      }))
    return res
  }

}
