import PropTypes from 'prop-types';
import {useUser} from '../hooks/apiHooks';
import {useState, useEffect} from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);

  const {getUserByToken} = useUser();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const userResult = await getUserByToken(token);
        setUser(userResult.user);
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <h2>Profile</h2>
      {user && (
        <>
          <p>Username: {user.username}</p>
          <p>email: {user.email}</p>
          <p>
            register date: {new Date(user.created_at).toLocaleString('fi-FI')}
          </p>
        </>
      )}
    </>
  );
};

Profile.propTypes = {};

export default Profile;
