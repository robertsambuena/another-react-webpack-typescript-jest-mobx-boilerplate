import { observer } from 'mobx-react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

import { assetStore } from '../../stores/asset.store';

interface ILogo {
  to: string;
}

@observer
export class Logo extends React.Component<ILogo> {
  public render() {
    const logoSVG = assetStore.logo;

    return (
      <div className="logo">
        <Link to={this.props.to}>
          <div className="logo--img" dangerouslySetInnerHTML={{ __html: logoSVG }}/>
        </Link>
      </div>
    );
  }
}
