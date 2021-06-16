import React, { Suspense,lazy, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './Components/Container/Container'
import AppBar from './Components/AppBar'
import * as authOperations from './redux/Auth/auth-operations'
import {  useDispatch } from 'react-redux';
import PrivateRoute from './Components/PrivateRoute'
import PublickRoute from './Components/PublickRoute'

const HomeView = lazy(() => import('./Components/View/Home'))
const RegisterView = lazy(() => import('./Components/View/RegisterView'))
const LoginView = lazy(() => import('./Components/View/LoginView'))
const Contacts = lazy(() => import('./Components/View/Contacts'))



const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser())
  }, [dispatch]);

  return ( 
      <Container>
        <AppBar />
        <Suspense fallback={<p>loading...</p>}>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <PublickRoute path="/register" restricted component={RegisterView} redirectTo="/contacts" />
            <PublickRoute path="/login" restricted component={LoginView} redirectTo="/contacts" />
            <PrivateRoute path="/contacts" component={Contacts} redirectTo="/login" />
          </Switch>
        </Suspense>
      </Container>
 );
}
 
export default App;
