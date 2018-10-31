
import { observer } from 'mobx-react';
import * as React from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';

import { requireAuth } from '../requireAuth';
import { authStore } from '../stores/auth.store';
import { withRouterStore } from '../withRouteStore';
import { Wrapper } from '../wrapperHOC';
import { Dashboard } from './cores/Dashboard';
import { Invite } from './Invite';
import { Login } from './Login';
import { NotFound } from './NotFound';

@observer
export class App extends React.Component {
  public componentWillMount() {
    authStore.initAuth();
  }

  public render() {
    // public routes
    const inviteJSX = Wrapper(Invite)(withRouterStore)();
    const loginJSX = Wrapper(Login)(withRouterStore)();
    const notFoundJSX = Wrapper(NotFound)(withRouterStore)();

    // protected routes
    const dashboardJSX = Wrapper(Dashboard)(requireAuth)(withRouterStore)();

    return (
      <BrowserRouter basename="/">
        <Switch>
          {/* The matcher will try to match the paths sequentially from top to bottom */}
          <Route path="/invite" component={inviteJSX} exact={true}/>
          <Route path="/login" component={loginJSX} exact={true}/>
          <Route path="/404" component={notFoundJSX} exact={true}/>
          <Route path="/" component={dashboardJSX} exact={false}/>
          <Redirect to="/404"/>
        </Switch>
      </BrowserRouter>
    );
  }
}
