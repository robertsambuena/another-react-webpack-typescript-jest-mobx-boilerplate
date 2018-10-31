
import * as React from 'react';
import { Link } from 'react-router-dom';
import './FixedSidebarLink.scss';

interface IFixedSidebarLink {
  icon: string;
  to: string;
}

export class FixedSidebarLink extends React.Component<IFixedSidebarLink> {
  public render() {
    return (
      <div className="fixed-sidebar-link">
        <Link to={this.props.to}>
          <span className="icon">
            <i className={`fas fa-${this.props.icon}`}/>
          </span>
        </Link>
      </div>
    );
  }
}
