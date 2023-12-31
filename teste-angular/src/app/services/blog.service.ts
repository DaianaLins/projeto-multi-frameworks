import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data, Router } from '@angular/router';
import { IBlogReturn, IBlogs } from '../component/Blog';
import { Observable, of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'https://sa-east-1.cdn.hygraph.com/content/clkjrhprf18qq01uqbpj72nl6/master'
  private query: string = '';
  public blogs: IBlogs[] = []
  public loading: boolean = false;
  constructor(private httpClient: HttpClient, private router: Router) { }


  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer ' + localStorage.getItem('token')
  });


  getBlogs(search?: string): Observable<IBlogReturn> {
    if (!!search) {
      this.query = `
      query {
      blogs (orderBy: createdAt_DESC, where: {_search: "${search}"}) {
        id
        title
        description {
          html
        }
        url
        urlArtigo
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
    } else {
      this.query = `
      query {
        blogs (orderBy: createdAt_DESC) {
          id
          title
          description {
            html
          }
          url
          urlArtigo
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
    }
    this.loading = true
    const res = this.httpClient.post<IBlogReturn>(this.apiUrl, JSON.stringify({ query: this.query })).pipe(
      tap((resposta) => {
        return this.blogs = resposta.data.blogs
      }))
      this.loading = false
    return res
  }

}
