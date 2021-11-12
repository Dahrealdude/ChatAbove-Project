import './App.css';
import Contacts from './Components/Contacts';
import LandingPage from './Components/LandingPage';
import SignIn from './Components/SignIn';
import Dashboard from './Components/Dashboard';
import PageNotFound from './Components/PageNotFound';
import Home from './Components/Home';
import Messages from './Components/Messages'
import NewContact from './Components/NewContact'
import NewGroup from './Components/NewGroup'

import {
  Link,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom';

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, doc } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBhkcx5GC4kOl9JN7_s4ucOuqm9C88mJwo",
  authDomain: "chat-above.firebaseapp.com",
  projectId: "chat-above",
  storageBucket: "chat-above.appspot.com",
  messagingSenderId: "354920370304",
  appId: "1:354920370304:web:79770d9d79f0528b459665",
  measurementId: "G-FF5XFCRT58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

// function addData(){
//   setDoc(doc(DB, "contacts", "number"), {
//     name: "Ashley Peart",
//     number: 6784998803,
//     groups: ["Group1"]
//   });
// }



function App() {
  return (
    <div className="App">
      {/* <button onClick={addData}>Add Data</button> */}
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
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

            <li>
              <Link to="/messages">Messages</Link>
            </li>
            <li>
              <Link to="/newcontact">New Contact</Link>
            </li>
            <li>
              <Link to="/newgroup">New Group</Link>
            </li>
          </ul>
        </nav>
        <Outlet/>
      
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/newcontact" element={<NewContact DB={DB}/>} />
          <Route path="/newgroup" element={<NewGroup DB={DB}/>} />
          <Route path="/*" element={<PageNotFound />} />
          
        </Routes>
  </div>
  
  );
}

export default App;