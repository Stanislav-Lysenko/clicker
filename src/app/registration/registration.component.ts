import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  name;
  disabledStartBtn = true;

  constructor(
    private router: Router,
    private usersService: UsersService,
    private stateService: StateService) { }

  ngOnInit(): void {

  }

  getFilledName({ target }) {
    this.name = target.value;
    this.checkName();
  }

  checkName() {
    if (this.name.length > 3) {
      this.disabledStartBtn = false;
    } else {
      this.disabledStartBtn = true;
    }
  }

  goToPlayPage() {
    this.usersService.createUser(this.name);
    this.stateService.isPlayGround();
    this.router.navigate([`/${this.stateService.getState()}`]);
  }
}
