import PropTypes from 'prop-types';
import {Link, Outlet} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';
import {useEffect} from 'react';

const Layout = () => {
  const {user, handleAutoLogin} = useUserContext();
  useEffect(() => {
    handleAutoLogin();
  }, []);
  return (
    <div>
      <nav>
        <ul className="flex justify-end overflow-hidden bg-fuchsia-900">
          <li>
            <Link
              className="block p-4 text-center text-fuchsia-50 hover:bg-fuchsia-600"
              to="/"
            >
              Home
            </Link>
          </li>

          {user ? (
            <>
              <li>
                <Link
                  className="block p-4 text-center text-fuchsia-50 hover:bg-fuchsia-600"
                  to="/profile"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  className="block p-4 text-center text-fuchsia-50 hover:bg-fuchsia-600"
                  to="/upload"
                >
                  Upload
                </Link>
              </li>
              <li>
                <Link
                  className="block p-4 text-center text-fuchsia-50 hover:bg-fuchsia-600"
                  to="/logout"
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  className="block p-4 text-center text-fuchsia-50 hover:bg-fuchsia-600"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
