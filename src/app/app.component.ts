import { Component } from '@angular/core';
// import { StateService } from './services/state.service';

export interface User {
  name: string;
  score: number;
}

export interface Config {
  play: boolean;
  duration: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clicker';

  user: User = {
    name: 'dear player',
    score: 0
  };

  config: Config = {
    play: false,
    duration: 10
  };
  constructor() {

  }

}
