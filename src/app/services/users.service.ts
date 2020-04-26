import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users;
  user: User = {name: '', scores: []};
  results;

  constructor() {
    this.init();
  }

  init(){
    this.getUsersFromLocalStorage();
    this.getUserFromLocalStorage();
  }

  createUser(name: string) {
    this.user.name = name;
    this.user.scores = [];
    this.saveUserToLocalStorage();
    this.findExistUser();
  }

  addUser(){
    this.users.push(this.user);
    this.saveUserToLocalStorage();
    this.saveUsersToLocalStorage(this.users);
  }

  getUsers(){
    this.getUsersFromLocalStorage();
  }


  findExistUser(){
    this.getUsersFromLocalStorage();
    if (this.users.find(user => user.name === this.user.name)) {
      this.user = this.users.find(user => user.name === this.user.name);
    } else {
      this.addUser();
    }
  }

  addScoreToUser(currentScore){
    this.user.scores.push(currentScore);
    this.saveUserToLocalStorage();
    this.users.find(user => user.name === this.user.name).scores.push(currentScore);
    this.saveUsersToLocalStorage(this.users);

  }

  getUserFromLocalStorage() {
    if (localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  getUsersFromLocalStorage(){
    if (localStorage.getItem('users')) {
      this.updateUsersFromLocalStorage();
    } else {
      this.updateUsersFromDefault();
    }
  }

  updateUsersFromLocalStorage(){
    this.users = JSON.parse(localStorage.getItem('users'));
  }

  updateUsersFromDefault(){
    this.users = [];
    this.saveUsersToLocalStorage([]);
  }

  updateUserFromLocalStorage(){
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  saveUsersToLocalStorage(users){
    localStorage.setItem('users', JSON.stringify(users));
  }

  saveUserToLocalStorage(){
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  getMaxResultsOfUser(){
    this.results = this.users.map(user => {
      const userObj = {name: '', maxscore: 0};
      userObj.name = user.name;
      userObj.maxscore = Math.max(...user.scores);
      return userObj;
    });
  }

}
