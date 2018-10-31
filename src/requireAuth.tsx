import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { authStore } from './stores/auth.store';

export const requireAuth = (WrappedComponent: any) => {
  return class extends React.Component {
    public render() {
      return authStore.isAuthenticated
        ? <WrappedComponent {...this.props} />
        : <Redirect to="/login"/>;
    }
  };
};
