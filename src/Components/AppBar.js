import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav';
import * as authSelectors from '../redux/Auth/auth-selectors'


const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid red',
  },
};

const AppBar = () => {
const isAuthenticated=useSelector(authSelectors.getIsAuthenticated)

  return (<header style={styles.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
  )
};
 


// const mapStateToProps = (state) => ({
//     isAuthenticated:authSelectors.getIsAuthenticated(state)
// })

export default AppBar;