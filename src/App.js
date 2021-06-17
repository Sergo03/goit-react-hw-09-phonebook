import React, { Suspense,lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
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
          <PublickRoute exact path="/"><HomeView /></PublickRoute>
          <PublickRoute path="/register" restricted redirectTo="/contacts" ><RegisterView /></PublickRoute>
          <PublickRoute path="/login" restricted redirectTo="/contacts" ><LoginView /></PublickRoute>
          <PrivateRoute path="/contacts" redirectTo="/login" ><Contacts /></PrivateRoute>
        </Switch>
      </Suspense>
    </Container>
  )
}
 
export default App;
