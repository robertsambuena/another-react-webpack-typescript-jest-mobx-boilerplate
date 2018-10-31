import * as React from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import './MainContent.scss';

import { Bowl } from '../../components/cores/mainContents/Bowl';
import { Events } from '../../components/cores/mainContents/Events';

interface IMainContent {
  className: string;
}

export class MainContent extends React.Component<IMainContent> {
  public render() {
    console.log('rendering main content la');
    return (
      <div className={`${this.props.className} main-content`}>
        <BrowserRouter basename="/">
          <Switch>
            <Route path="/bowl/:id" component={Bowl} exact={true}/>
            <Route path="/bowl" component={Bowl} exact={true}/>
            <Route path="/" component={Events} exact={true}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
