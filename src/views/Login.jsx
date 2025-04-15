import {useState} from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => {
  const [hasAccount, setHasAccount] = useState(true);
  return hasAccount ? (
    <>
      <LoginForm />
      <button onClick={() => setHasAccount(false)}>
        Don't have an account?
      </button>
    </>
  ) : (
    <>
      <RegisterForm />
      <button onClick={() => setHasAccount(true)}>
        Already have an account?
      </button>
    </>
  );
};

export default Login;
