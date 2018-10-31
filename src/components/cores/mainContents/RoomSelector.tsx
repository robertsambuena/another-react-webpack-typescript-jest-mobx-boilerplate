import * as React from 'react';
import './RoomSelector.scss';

import { ProfilePhoto } from './ProfilePhoto';

interface IRoomSelector {
  className?: string;
}

export class RoomSelector extends React.Component<IRoomSelector> {
  public render() {
    console.log('rendering RoomSelector');
    return (
      <div className={`${this.props.className} room-selector`}>
        <div className="room-selector--head">
          <div className="room-selector--segment">
            <ProfilePhoto/>
            <ProfilePhoto/>
            <ProfilePhoto/>
          </div>
        </div>
        <div className="room-selector--options">Options</div>
      </div>
    );
  }
}
