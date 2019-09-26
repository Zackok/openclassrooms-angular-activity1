import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OpenClassRooms - Angular - Activity 1';

  posts: Post[] = [
    new Post(
      "Mon premier post",
      "Occaecat labore sit nostrud sit id anim duis. Consequat fugiat deserunt esse enim cupidatat. Velit deserunt exercitation est est eiusmod anim excepteur.", 
      3
    ), 
    new Post(
      "Mon deuxième post",
      "Esse voluptate fugiat occaecat esse. Fugiat velit tempor aliquip id excepteur eiusmod anim esse. Irure sit fugiat ullamco esse eiusmod officia reprehenderit cillum esse ea. Ex anim reprehenderit tempor esse amet mollit aute ex eu velit aliquip id. Cupidatat occaecat reprehenderit ullamco laboris consequat. Laborum deserunt quis sunt excepteur commodo exercitation.", 
      0
    ), 
    new Post(
      "Encore un post",
      "Ipsum occaecat aliqua tempor qui magna minim officia mollit qui velit aute velit. Incididunt id Lorem magna est veniam exercitation ex mollit ea qui nostrud adipisicing. Ea consectetur esse id qui. Laboris irure deserunt mollit qui irure velit enim aute.", 
      -3
    )
  ];
}

export class Post {
  private title: string;
  private content: string;
  private loveIts: number;
  private created_at: Date;

  constructor(title:string, content:string, loveIts:number) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.created_at = new Date();
  }

  public get Title() : string {
    return this.title;
  }
  public set Title(v : string) {
    this.title = v;
  }
  
  public get Content() : string {
    return this.content;
  }
  public set Content(v : string) {
    this.content = v;
  }
  
  public get LoveIts() : number {
    return this.loveIts;
  }
  public set LoveIts(v : number) {
    this.loveIts = v;
  }
  
  public get Created_at() : Date {
    return this.created_at;
  }
  public set Created_at(v : Date) {
    this.created_at = v;
  }
}
