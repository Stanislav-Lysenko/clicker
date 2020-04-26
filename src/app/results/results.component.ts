import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../services/state.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  currentResult: number = this.userService.user.scores[this.userService.user.scores.length - 1];
  results;
  constructor(
    private router: Router,
    private stateService: StateService,
    private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getMaxResultsOfUser();
    this.results = this.userService.results;
  }

  exit() {
    this.stateService.isLogin();
    this.router.navigate([`/${this.stateService.getState()}`]);
  }

}
