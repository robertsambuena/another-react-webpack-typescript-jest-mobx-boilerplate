import set from 'lodash-es/set';

// DO NOT INCLUDE THIS FILE IN ANY IMPORT STATEMENT
// SO THIS FILE WON'T BE INCLUDED IN THE RESULTING BUNDLE
export class Debug {
  public static enableFakeUser() {
    console.warn('Fake user is enabled, please turn this off before you push your changes');
    set(window, 'user', fakeUser);
    set(window, 'rooms', fakeRooms);
  }
}

const fakeUser: any = {
  id: 1,
  name: 'test',
  token: 'goodtoken',
};

const fakeRooms: any[] = [
  {
    roomId: 1,
    roomName: 'couple1',
    roomNick: 'wifey',
    roomUsers: [{
      userId: 1,
      userName: 'Ally',
    }],
  },
  {
    roomId: 2,
    roomName: 'family1',
    roomNick: 'sambuena family',
    roomUsers: [
      {
        userId: 1,
        userName: 'Chan',
      },
      {
        userId: 2,
        userName: 'RJ',
      },
      {
        userId: 3,
        userName: 'Jes',
      },
      {
        userId: 4,
        userName: 'Yssa',
      },
    ],
  },
];
