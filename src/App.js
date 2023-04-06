import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Major from './components/Major';
import Raj from './components/Raj';



import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import AppointmentList from './components/AppointmentList';
import Doctors from './components/Doctors';
import BookItem from './components/BookItem';


function App() {

  return (
    <div>
     <Router>
      <Navbar />
      <Routes>
     <Route exact path ="/" element={<Home/>}/>
     <Route exact path='/about' element={<About/>}/>
     <Route exact path='/contact' element={<Contact/>}/>
     <Route exact path='/login' element={<Login />}/>
     <Route exact path='/sign' element={<Signup />}/>
     <Route exact path='/appointment' element={<AppointmentList/>}/>
     <Route exact path='/doctors'  element={<Doctors/>}/>
     <Route exact path='/booking' element={<BookItem />}/>
     <Route exact path='/payment' element={<Major />}/>
     <Route exact path='/access' element={<Raj />}/>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
