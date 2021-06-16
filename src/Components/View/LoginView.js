import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as authOperations from '../../redux/Auth/auth-operations';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const onLogin =(data) =>dispatch(authOperations.login(data));


const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`Поле ${name} не обрабатывается`);
    }
};
  
  const handleSubmit = e => {
    e.preventDefault();

    onLogin({ email, password })
    setEmail('');
    setPassword('')
  };



  return ( 
      <div>
        <h1>Login</h1>

        <form
          onSubmit={handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <label style={styles.label}>
            Email
            <input
              
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>

          <label style={styles.label}>
           Password
            <input
              
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <Button type="submit" variant="primary">Login</Button>
        </form>
      </div> );
}
 
export default LoginView;
// class LoginView extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onLogin(this.state);

//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { email, password } = this.state;

//     return (
//       <div>
//         <h1>Login</h1>

//         <form
//           onSubmit={this.handleSubmit}
//           style={styles.form}
//           autoComplete="off"
//         >
//           <label style={styles.label}>
//             Email
//             <input
              
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </label>

//           <label style={styles.label}>
//            Password
//             <input
              
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             />
//           </label>
//           <Button type="submit" variant="primary">Login</Button>
//         </form>
//       </div>
      
//     );
//   }
// }
// const mapDispatchToProps = {
//   onLogin: authOperations.login,
// };


// export default connect(null,mapDispatchToProps)(LoginView);