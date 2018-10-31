import isFunction from 'lodash-es/isFunction';

/* this is just a recursive function that makes HOC(Higher Order Function) standard */
/* syntax should be Wrapper(component)(hoc)(hoc)(hoc)() */
/* the last () is necessary for the Wrapper to return proper React.Component */
export const Wrapper: any = (component: any) => {
  let wrappedComponent: any = component;

  return (wrapper?: any) => {
    if (isFunction(wrapper)) {
      wrappedComponent = wrapper(wrappedComponent);
      return Wrapper(wrappedComponent);
    }

    return component;
  };
};
