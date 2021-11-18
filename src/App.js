import './Achatabove.css';
import LandingPage from './Components/LandingPage';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Messages from './Components/Messages';
import Contacts from './Components/Contacts';
import Groups from './Components/Groups';
import NewContact from './Components/NewContact';
import NewGroup from './Components/NewGroup';
import PageNotFound from './Components/PageNotFound';


import {
  Route,
  Routes
} from 'react-router-dom';

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import NewMessage from './Components/NewMessage';

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


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/landingpage" element={<LandingPage DB={DB}/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/messages" element={<Messages DB={DB}/>}/>
        <Route path="/groups" element={<Groups DB={DB}/>} />
        <Route path="/newmessage" element={<NewMessage DB={DB}/>} />
        <Route path="/newcontact" element={<NewContact DB={DB}/>} />
        <Route path="/newgroup" element={<NewGroup DB={DB}/>} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>

    </div>
  
  );
}

export default App;