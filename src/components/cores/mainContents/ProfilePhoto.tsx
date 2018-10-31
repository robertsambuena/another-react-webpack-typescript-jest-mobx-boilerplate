import * as React from 'react';
import './ProfilePhoto.scss';

interface IProfilePhoto {
  className?: string;
}

export class ProfilePhoto extends React.Component<IProfilePhoto> {
  public render() {
    console.log('rendering ProfilePhoto');
    const selectedProfileId = 1;
    return (
      <div className={`${this.props.className} profile-photo`}>
        <div className="profile-photo--img">
          <img src={`./public/assets/profileImages/${selectedProfileId}.jpg`}/>
        </div>
      </div>
    );
  }
}
