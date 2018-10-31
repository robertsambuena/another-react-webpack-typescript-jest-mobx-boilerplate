import { action, observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import './Invite.scss';

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
      <div className="Invite center-box--wrapper">
        <div className="Invite--Box center-box--content">
          <div>
            Please get your invite link <a>{this.newInvite.url}</a>.
          </div>
        </div>
      </div>
    );
  }

  @action
  private init() {
    this.newInvite = inviteStore.getNewInviteUrl();
  }
}
