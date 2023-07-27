import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { IBlogs, IUsuario } from '../Login';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  body = "body";
  header = "header";
  container = "container";
  contentAut = "contentAut"
  artigo = "artigo";
  content = "content";
  imgAuthor = "imgAuthor"
  img = "img";
  sectionH = "sectionH";
  searchH = "searchH";

  listPost: IBlogs[] = [];
  user: string | IUsuario | null | never[] = [];
  search: string = '';

  constructor(public blogService: BlogService, public router: Router, public authService: AuthService) {
    this.blog();
    this.getUser();
  }
  blog(): void{
    this.blogService.getBlogs().subscribe((res) => (this.listPost = res['data']['blogs']))
  }

  searchBlogs(): void{
    this.blogService.getBlogs(this.search).subscribe((res) => (this.listPost = res['data']['blogs']))
  }

  getUser(): void{
    this.user = this.authService.getUser() as string | IUsuario | null
    console.log(this.authService.getUser())
  }

  openImage(url?: string): void{
    window.open(url);
  }

  logout() {
    this.authService.logout();
    localStorage.clear();
    this.router.navigate(['']);
  }
}
