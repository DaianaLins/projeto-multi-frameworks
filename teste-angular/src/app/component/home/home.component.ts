import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { IBlogs } from '../Login';
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
  listPost: IBlogs[] = [];

  constructor(public blogService: BlogService, public router: Router, public authService: AuthService) {
    this.blog();
    this.getUser();
  }
  blog(): void{
    this.blogService.getBlogs().subscribe((res) => (this.listPost = res['data']['blogs']))
  }

  getUser(): void{
    console.log(this.authService.getUser())
  }

  logout() {
    this.authService.logout();
    localStorage.clear();
    this.router.navigate(['']);
  }
}
