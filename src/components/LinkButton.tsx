import { observer } from 'mobx-react';
import * as React from 'react';

import { routeStore } from '../stores/route.store';

@observer
export class LinkButton extends React.Component<any, {}> {
  private onClick: any;
  private to: any;

  public render() {
    const { to, onClick, children, ...props } = this.props;
    this.onClick = onClick;
    this.to = to;

    return (
      <button
        onClick={this.handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }

  private handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (this.onClick) {
      this.onClick(event);
    }

    if (this.to) {
      routeStore.history.push(this.to);
    }
  }
}
