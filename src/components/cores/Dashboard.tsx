
import * as React from 'react';
import './Dashboard.scss';

import { FixedSidebar } from '../sidebar/FixedSidebar';
import { MainContent } from './MainContent';

export class Dashboard extends React.Component {
  public render() {
    return (
      <div className="dashboard wrapper">
        <nav role="navigation">
          <FixedSidebar/>
        </nav>
        <section>
          <MainContent className="column"/>
        </section>
      </div>
    );
  }
}
