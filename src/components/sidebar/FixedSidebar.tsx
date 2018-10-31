import * as React from 'react';
import './FixedSidebar.scss';

import { assetStore } from '../../stores/asset.store';
import { Logo } from '../general/Logo';
import { FixedSidebarLink } from './FixedSidebarLink';

interface IFixedSidebar {
  className?: string;
}

export class FixedSidebar extends React.Component<IFixedSidebar> {
  private constructor(props: any) {
    super(props);
    assetStore.loadLogo();
  }

  public render() {
    return (
      <div className={`fixed-sidebar ${this.props.className || ''}`}>
        <ul className="fixed-sidebar--top">
          <li className="fixed-sidebar--primary"><Logo to={'/'}/></li>
          <li><FixedSidebarLink to={'/events'} icon={'list'}/></li>
          <li><FixedSidebarLink to={'/bowl'} icon={'comments'}/></li>
          <li><FixedSidebarLink to={'/play'} icon={'play'}/></li>
        </ul>
        <ul className="fixed-sidebar--bottom">
          <li><FixedSidebarLink to={'/events'} icon={'user-alt'}/></li>
          <li><FixedSidebarLink to={'/invite'} icon={'tasks'}/></li>
          <li><FixedSidebarLink to={'/play'} icon={'cog'}/></li>
        </ul>
      </div>
    );
  }
}
