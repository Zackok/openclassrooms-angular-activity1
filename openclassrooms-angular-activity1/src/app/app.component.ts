import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OpenClassRooms - Angular - Activity 1';

  posts = [
    {
      title: "Mon premier post",
      content: "Occaecat labore sit nostrud sit id anim duis. Consequat fugiat deserunt esse enim cupidatat. Velit deserunt exercitation est est eiusmod anim excepteur.",
      loveIts: 2,
      created_at: new Date()
    },
    {
      title: "Mon deuxième post",
      content: "Excepteur exercitation aute cupidatat est reprehenderit esse et officia enim proident consectetur aliqua. Cupidatat consectetur quis esse occaecat eu ullamco enim et proident fugiat veniam laboris aliqua mollit. Nisi labore eiusmod do in. Anim deserunt sunt ullamco tempor tempor et aliqua mollit deserunt elit. Elit nostrud laboris enim nostrud cillum tempor in consectetur sit eiusmod eu reprehenderit magna irure. Lorem voluptate amet voluptate occaecat nulla reprehenderit laborum irure ea elit Lorem cillum.",
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: "Encore un post",
      content: "Id sunt exercitation elit ipsum velit eiusmod aliquip ut culpa magna consectetur dolore esse dolor. Sit amet fugiat labore cupidatat culpa consectetur do. Incididunt id laborum proident dolor proident. Labore sint consequat ex exercitation est sint ut fugiat pariatur qui dolore.",
      loveIts: 4,
      created_at: new Date()
    }
  ];

}
