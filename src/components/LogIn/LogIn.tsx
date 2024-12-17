import { makeAutoObservable } from "mobx";

class Login {
  isLoggedIn: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}

export default new Login();