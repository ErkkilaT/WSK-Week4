import {useUserContext} from '../hooks/contextHooks';
import {Navigate} from 'react-router';

const ProtectedRoute = ({children}) => {
  const {user} = useUserContext();

  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
