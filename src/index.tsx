import { configure } from 'mobx';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.less';

import { App } from './components/App';
import { Debug } from './Debug';

// configure mobx to always use action to change observable
configure({
  enforceActions: 'always',
});

// Debug, comment this out when commiting codes
Debug.enableFakeUser();

// extends window property
declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    dataLayer: any;
    user: any;
  }
}

ReactDOM.render(<App />, document.getElementById('appRoot'));
