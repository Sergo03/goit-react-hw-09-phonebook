import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as  authSelectors from '../redux/Auth/auth-selectors';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */

const PrivateRoute = ({
  children,
  redirectTo,
  ...routeProps
}) => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated)
  return (
    <Route {...routeProps}>
      {isAuthenticated ? children : <Redirect to={redirectTo} />}
    </Route>
  )
};


export default PrivateRoute;
