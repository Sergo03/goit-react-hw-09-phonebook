import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as  authSelectors from '../redux/Auth/auth-selectors';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */
const PrivateRoute = ({
  component: Component,
  redirectTo,
  ...routeProps
}) => {
  const isAuthenticated=useSelector(authSelectors.getIsAuthenticated)
  return (<Route
    {...routeProps}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
  )
};

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

export default PrivateRoute;