import find from 'lodash-es/find';
import { action, computed, observable, reaction } from 'mobx';
import { RouteComponentProps } from 'react-router-dom';
import { compileFunction } from 'vm';

export interface IUrlParams {
  section: string;
}

class RouteStore {
  @observable private r: RouteComponentProps<IUrlParams> = {
    history: null,
    location: null,
    match: null,
    staticContext: {},
  };

  @action
  public set(location: any, match: any, history: any) {
    this.r.location = location;
    this.r.match = match;
    this.r.history = history;
  }

  @computed
  public get history() {
    return this.r.history;
  }

  @computed
  public get location() {
    return this.r.location;
  }

  @computed
  public get match() {
    return this.r.match;
  }

  @computed
  public get staticContext() {
    return this.r.staticContext;
  }

  @computed
  public get params() {
    return this.r.match.params;
  }

  public historyReplace(to: any) {
    this.r.history.replace(to);
  }

  public historyPush(to: any) {
    this.r.history.push(to);
  }
}

export const routeStore = new RouteStore();
