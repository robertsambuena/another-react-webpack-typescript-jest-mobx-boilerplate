import * as React from 'react';
import './Bowl.scss';

import { RoomSelector } from './RoomSelector';

interface IBowl {
  className?: string;
}

export class Bowl extends React.Component<IBowl> {
  public render() {
    console.log('rendering bowl');
    return (
      <div className={`${this.props.className} bowl`}>
        <div className="bowl--container">
          <div className="bowl--info">
            <div className="bowl--info-room-selector">
              <RoomSelector/>
            </div>
          </div>
          <div className="bowl--interactions">CHAT CALL</div>
        </div>
      </div>
    );
  }
}
