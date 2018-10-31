import * as React from 'react';
import './Events.scss';

import { assetStore } from '../../../stores/asset.store';

interface IEvents {
  className?: string;
}

export class Events extends React.Component<IEvents> {
  public render() {
    return (
      <div className={`${this.props.className} events`}>
        <div className="columns">
          <div className="column">Events</div>
        </div>
      </div>
    );
  }
}
