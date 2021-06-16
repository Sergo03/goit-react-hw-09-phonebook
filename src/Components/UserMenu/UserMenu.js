import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import * as authSelectors from '../../redux/Auth/auth-selectors'
import * as authOperations from '../../redux/Auth/auth-operations'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = () => {
  
  const dispatch = useDispatch();
  const onLogout =()=> dispatch(authOperations.logout());
  const name = useSelector(authSelectors.getUserName);
  
  return (
    <div style={styles.container}>
      <span style={styles.name}>Welcome, {name}</span>
      <Button type="button" variant="dark" onClick={onLogout}>
        Logout
    </Button>
    </div>
  )
}

export default UserMenu;