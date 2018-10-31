import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { routeStore } from './stores/route.store';

export interface IUrlParams {
  s1ection: string;
}

export const withRouterStore: any = (WrappedComponent: React.ComponentType) => {
  return class WithRouterComponent extends React.Component<RouteComponentProps<any>> {
    public componentWillMount() {
      routeStore.set(this.props.location, this.props.match, this.props.history);
    }

    public componentDidUpdate(prevProps: RouteComponentProps<IUrlParams>) {
      routeStore.set(this.props.location, this.props.match, this.props.history);
    }

    public render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
