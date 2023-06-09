import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './compnents/Navbar';
import Login from './compnents/LoginForm';
import SignupForm from './compnents/Signup';
import MainNavbar from './compnents/MainNavBar';
import Main from './compnents/Main';
import ForgotPassword from './compnents/ForgotPassword';
import Footer from './compnents/Footer';
import CarouseLL from './compnents/Carousel';

function App() {
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  return (
    <Router>
      {/* <Navbar/> */}
        <MainNavbar/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<Login />} />
          <Route path='/main' element={<Main />}></Route>
          <Route path='/forgot-password' element={<ForgotPassword />}></Route>
        </Routes>
    </Router>
    // <Footer/>
    // <CarouseLL />
  );
}

export default App;
