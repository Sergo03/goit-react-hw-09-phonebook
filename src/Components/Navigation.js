import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as  authSelectors from '../redux/Auth/auth-selectors';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => {
const isAuthenticated=useSelector(authSelectors.getIsAuthenticated)
  return (
     <nav>
    <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
      Home
    </NavLink>

    {isAuthenticated&&<NavLink
      to="/contacts"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
     Contacts
    </NavLink>} 
  </nav>
  )
}
 


// const mapStateToProps = (state) => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// })

export default Navigation;