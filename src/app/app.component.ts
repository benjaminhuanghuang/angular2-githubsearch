import { Component } from '@angular/core';
import { GithubServcies } from './services/github.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubServcies]
})
export class AppComponent {
  title = 'app works!';
}
