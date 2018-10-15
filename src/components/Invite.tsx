import { action, observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import './Invite.less';

import { Item } from '../components/Item';
import { IInvite, inviteStore } from '../stores/invite.store';

@observer
export class Invite extends React.Component {
  @observable private newInvite: IInvite;

  constructor(props: any) {
    super(props);
    this.init();
  }

  public render() {
    return (
      <div className="Invite">
        {this.newInvite.url}
      </div>
    );
  }

  @action
  private init() {
    this.newInvite = inviteStore.getNewInviteUrl();
  }
}
