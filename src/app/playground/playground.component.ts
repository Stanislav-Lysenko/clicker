import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  statusText = 'Start Game';
  seconds = 10;
  run = false;
  score = 0;

  constructor(
    private stateService: StateService,
    private usersService: UsersService,
    private router: Router
  ) {}

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
    this.usersService.addScoreToUser(this.score);
    this.stateService.isResults();
    this.run = false;
    this.router.navigate([`/${this.stateService.getState()}`]);
  }

  clickHandler() {
    if (this.run && this.seconds) {
      this.score += 1;
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
