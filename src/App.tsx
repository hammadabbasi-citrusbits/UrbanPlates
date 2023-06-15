import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './compnents/LoginForm';
import SignupForm from './compnents/Signup';
import Main from './compnents/Main';
import ForgotPassword from './compnents/ForgotPassword';
import LoggedIn from './compnents/LoggedOut';
import CategoryItems from './compnents/CategoryItems';
import Navbar from './compnents/Navbar';



function App() {
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<Login />} />
          <Route path='/main' element={<Main />}></Route>
          <Route path='/forgot-password' element={<ForgotPassword />}></Route>
          <Route path='/loggedIn' element={<LoggedIn/>}></Route>
          {/* <Route path='/regularmenu' element={<RegularMenu/>}></Route> */}
          {/* <Route path='/platepassmenu' element={<PlatePassMenu/>}></Route> */}
          {/* <Route path="/plate/:id" element={<PlatePassMenu/>} /> */}
          <Route path="/plate/:id" element={<CategoryItems  />} />
        </Routes>
    </Router>
    // <Footer/>
    // <CarouseLL />
  );
}

export default App;
