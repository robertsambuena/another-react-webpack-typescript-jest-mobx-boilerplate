import find from 'lodash-es/find';
import { action, computed, observable, reaction } from 'mobx';

export interface IInvite {
  id: string;
  url: string;
}

class InviteStore {
  public getNewInviteUrl(): IInvite {
    const randomString = this.getRandomString();
    return {
      id: randomString,
      url: this.getGeneratedUrl(randomString),
    };
  }

  private getGeneratedUrl(str: string): string {
    return `/invite/${str}`;
  }

  private getRandomString(): string {
    /* https://gist.github.com/6174/6062387 */
    return Math
      .random()
      .toString(36)
      .substring(2, 15) + Math.random()
      .toString(36)
      .substring(2, 15);
  }
}

export const inviteStore = new InviteStore();
