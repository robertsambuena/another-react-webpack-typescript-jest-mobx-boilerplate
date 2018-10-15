
import * as React from 'react';
import './App.less';
import { Invite } from './Invite';

declare var hasPresence: boolean;

export class App extends React.Component {
  public render() {
    const entry = hasPresence ? 'Room view la' : <Invite/>;
    return (
      <div className="App">
        {entry}
      </div>
    );
  }
}
