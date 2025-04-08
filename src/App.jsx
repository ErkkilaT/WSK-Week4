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

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/upload" element={<Upload />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/single" element={<Single />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
