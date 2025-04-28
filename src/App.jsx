import './App.css';
import Home from './views/Home.jsx';
import Layout from './components/Layout.jsx';
import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router';
import Upload from './views/Upload.jsx';
import Profile from './views/Profile.jsx';
import Single from './views/Single.jsx';
import Login from './views/Login.jsx';
import Logout from './views/Logout.jsx';
import Modify from './views/Modify.jsx';
import {UserProvider} from './contexts/UserContext';
import ProtectedRoute from './components/ProtectedRoute.jsx';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <UserProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/upload"
              element={
                <ProtectedRoute>
                  <Upload />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/single" element={<Single />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/modify" element={<Modify />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
