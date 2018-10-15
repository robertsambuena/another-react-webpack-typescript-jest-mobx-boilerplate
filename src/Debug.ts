import set from 'lodash-es/set';

// DO NOT INCLUDE THIS FILE IN ANY IMPORT STATEMENT
// SO THIS FILE WON'T BE INCLUDED IN THE RESULTING BUNDLE
export class Debug {
  public static enableFakeUser() {
    console.warn('Fake user is enabled, please turn this off before you push your changes');
    set(window, 'user', fakeUser);
  }
}

const fakeUser: any = {
  id: 1,
  name: 'test',
};
