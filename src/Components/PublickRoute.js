import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as  authSelectors from '../redux/Auth/auth-selectors';

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /todos
 * - В противном случае рендерит компонент
 */
const PublicRoute = ({
  // component: Component,
  children,
  redirectTo,
  ...routeProps
}) => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Route {...routeProps}>
      {isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>)
};


// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

  export default PublicRoute;

