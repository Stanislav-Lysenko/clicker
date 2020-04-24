import { Component, OnInit, Input } from '@angular/core';
import { User, Config } from '../app.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @Input() user: User;
  @Input() config: Config;

  disabled = true;

  constructor() { }

  ngOnInit(): void {

  }

  changeName({ target }) {
    this.user.name = target.value;
    this.checkName();
  }

  checkName() {
    if (this.user.name.length > 3) {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }

  showPlayGround() {
    this.config.play = true;
    console.log('start click');
    // this.startEvent.emit(null);
  }
}
