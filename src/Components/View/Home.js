import React from 'react';
import { useSelector } from 'react-redux';
import * as authSelectors from '../../redux/Auth/auth-selectors'


const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomeView = () => {
  const name = useSelector(authSelectors.getUserName);
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated)

  return (
    <div style={styles.container}>
    
      {isAuthenticated ? <h1 style={styles.title}>
        Hello, {name}!
      
    </h1> : <h1 style={styles.title}>If you want use our service, please login!</h1>}
    
    </div>
  )
};

export default HomeView;