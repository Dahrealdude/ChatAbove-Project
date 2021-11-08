import './App.css';
import Contacts from './Components/Contacts';
import LandingPage from './Components/LandingPage';
import SignIn from './Components/SignIn';
import Dashboard from './Components/Dashboard';
import PageNotFound from './Components/PageNotFound';

import {
  Link,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>

            <li>
              <Link to="/signin">Sign-In</Link>
            </li>

            <li>
              <Link to="/landingpage">Index</Link>
            </li>
          </ul>
        </nav>
        <Outlet/>
      
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
  </div>
  
  );
}

export default App;