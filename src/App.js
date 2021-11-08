import './App.css';
import Contacts from './Components/Contacts';
import LandingPage from './Components/LandingPage';
import SignIn from './Components/SignIn';
import Dashboard from './Components/Dashboard';
import PageNotFound from './Components/PageNotFound';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router> 
        <nav>
          <ul>
            <li>
              <Link to="/" exact>Home</Link>
            </li>

            <li>
              <Link to="/contacts" exact>Contacts</Link>
            </li>
            <li>
              <Link to="/dashboard" exact>Dashboard</Link>
            </li>

            <li>
              <Link to="/signin" exact>Sign-In</Link>
            </li>

            <li>
              <Link to="/landingpage" exact>Index</Link>
            </li>
          </ul>
        </nav>
      
        <Routes>

            <Route path='/signin' component={SignIn} />
            
            <Route path='/contacts' component={Contacts} />

            <Route path='/dashboard' component={Dashboard} />
      
            <Route path='/landingpage' component={LandingPage} />
            
            <Route path='/*' component={PageNotFound} />
            
        </Routes>
        </Router> 
  </div>
  
  );
}

export default App;
