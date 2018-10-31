import find from 'lodash-es/find';
import some from 'lodash-es/some';
import { action, computed, observable, runInAction } from 'mobx';

class RoomStore {
  @observable private rooms: any = [];

  @action
  public loadRooms() {
    setTimeout(
      () => {
        this.rooms = window.rooms;
      },
      500,
    );
  }

  @computed
  public get currentRooms() {
    return this.rooms.length ? this.rooms : [];
  }
}

export const assetStore = new RoomStore();
