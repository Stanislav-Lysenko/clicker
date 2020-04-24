import { Component, OnInit, Input } from '@angular/core';
import { User, Config } from '../app.component';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  @Input() user: User;
  @Input() config: Config;

  statusText = 'Start Game';
  seconds = 10;
  run = false;

  constructor() {
   }

  ngOnInit(): void {
  }

  startTimer() {
    this.renderTime(this.seconds);
  }

  renderTime(seconds) {
    if (seconds > 0) {
      setTimeout( () => {
        this.seconds -= 1;
        this.renderTime(this.seconds);
      }, 1000);
    } else {
      this.stopGame();
    }
  }

  stopGame() {
    this.run = false;
  }

  clickHandler() {
    if (this.run && this.seconds) {
      this.user.score += 1;
    } else {
      this.startTimer();
      this.changeStatusText();
      this.run = true;
    }
  }

  changeStatusText() {
    this.statusText = 'Click';
  }
}
