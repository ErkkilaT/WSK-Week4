import {useState} from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => {
  const [hasAccount, setHasAccount] = useState(true);
  if (hasAccount) {
    return (
      <>
        <button onClick={() => setHasAccount(false)}>Register</button>
        <LoginForm />
      </>
    );
  } else {
    return (
      <>
        <button onClick={() => setHasAccount(true)}>Login</button>
        <RegisterForm />
      </>
    );
  }
};

export default Login;
