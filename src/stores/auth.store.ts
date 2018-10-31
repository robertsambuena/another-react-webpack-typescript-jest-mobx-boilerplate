import { action, computed, observable } from 'mobx';

interface IAuthentication {
  token: string;
}

class AuthStore {
  @observable private authentication: IAuthentication;

  @action
  public initAuth() {
    this.authentication = window.user;
  }

  @computed
  public get isAuthenticated() {
    return this.authentication && !!this.authentication.token;
  }
}

export const authStore = new AuthStore();
