import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private state;

  constructor() {
    this.init();
  }

  init() {
    this.getState();
  }

  isLogin() {
    this.saveStateToLocalStorage('login');
  }

  isPlayGround() {
    this.saveStateToLocalStorage('playground');
  }

  isResults() {
    this.saveStateToLocalStorage('results');
  }

  getStateFromLocalStorage(){
    if (localStorage.getItem('cickerState')){
      this.updateStateFromLocalStorage();
    } else {
      this.updateStateFromDefult();
    }
  }

  updateStateFromLocalStorage(){
    this.state = localStorage.getItem('cickerState');
  }

  updateStateFromDefult(){
    this.saveStateToLocalStorage('login');
  }

  getState() {
    this.getStateFromLocalStorage();
    return this.state;
  }

  saveStateToLocalStorage(state){
    localStorage.setItem('cickerState', state);
  }

}
