import { action, observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import './Invite.scss';

import { IUser, userStore } from '../stores/user.store';

interface IItem {
  item: IUser;
}

export class Item extends React.Component<IItem> {
  public render() {
    return (
      <li onClick={this.disableItem}>{this.props.item.name}</li>
    );
  }

  private disableItem = () => {
    userStore.disableUser(this.props.item);
  }
}
