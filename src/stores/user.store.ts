import find from 'lodash-es/find';
import { action, computed, observable, reaction } from 'mobx';

export interface IUser {
  name: string;
  isDisabled: boolean;
}

class UserStore {
  @observable public users: IUser[] = [];

  constructor() {
    reaction(
      () => this.users.filter((todo: IUser) => !todo.isDisabled),
      (incompletedTasks) => {
        if (incompletedTasks.length > 5) {
          alert("Dude. You've got too much on your plate.");
        }
      },
    );
  }

  public getEnabledUsers(): IUser[] {
    return this.users.filter((todo: IUser) => !todo.isDisabled);
  }

  @computed
  get disabledUsersCount(): number {
    return this.users.filter((todo: IUser) => todo.isDisabled).length;
  }

  @computed
  get enabledUsersCount(): number {
    return this.users.filter((todo: IUser) => !todo.isDisabled).length;
  }

  @action
  public addUser(name: string) {
    this.users.push({ name, isDisabled: false });
  }

  @action
  public disableUser(userToBeDisabled: IUser) {
    const userToBeChanged: IUser = find(this.users, ((user: IUser) => user === userToBeDisabled));
    userToBeChanged.isDisabled = true;
  }
}

export const userStore = new UserStore();
