import { action, observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import './Invite.scss';

import { Link, Redirect } from 'react-router-dom';
import { authStore } from '../stores/auth.store';
import { LinkButton } from './LinkButton';

@observer
export class Login extends React.Component {
  public render() {
    if (authStore.isAuthenticated) {
      return <Redirect to={'/'}/>;
    }

    return (
      <div className="center-box--wrapper">
        <div className="login center-box--content">
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input className="input" type="email" placeholder="Email"/>
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"/>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"/>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input className="input" type="password" placeholder="Password"/>
              <span className="icon is-small is-left">
                <i className="fas fa-lock"/>
              </span>
            </p>
          </div>
          <div className="level">
            <p className="control level-left">
              <LinkButton to={'/invite'} className="button is-danger level-item">
                Get invite
              </LinkButton>
            </p>
            <p className="control level-right">
              <button className="button is-success level-item">
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
