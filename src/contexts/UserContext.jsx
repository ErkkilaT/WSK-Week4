import {createContext, useState} from 'react';
import {useAuthentication, useUser} from '../hooks/apiHooks';
import {useNavigate, useLocation} from 'react-router';

const UserContext = createContext(null);

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const {postLogin} = useAuthentication();
  const {getUserByToken} = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  // login, logout and autologin functions are here instead of components
  const handleLogin = async (credentials) => {
    const loginResult = await postLogin(credentials);
    window.localStorage.setItem('token', loginResult.token);
    setUser(getUserByToken(loginResult.token));
    navigate('/');
  };

  const handleLogout = () => {
    window.localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  // handleAutoLogin is used when the app is loaded to check if there is a valid token in local storage
  const handleAutoLogin = async () => {
    try {
      const token = window.localStorage.getItem('token');
      if (token) {
        const user = await getUserByToken(token);
        setUser(user.user);
        navigate(location.pathname);
      }
    } catch (e) {
      //handleLogout();
      console.log(e.message);
    }
  };

  return (
    <UserContext.Provider
      value={{user, handleLogin, handleLogout, handleAutoLogin}}
    >
      {children}
    </UserContext.Provider>
  );
};
export {UserProvider, UserContext};
