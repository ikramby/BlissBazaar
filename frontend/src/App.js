
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import HomePage from './pages/HomePage';
import SignUp from './pages/register';
import SignInSide from './pages/login';
import AboutUs from './pages/AboutUs'; // Import the AboutUs component

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/about-us">About Us</Link>
      </nav>
      <Routes>
      {/*
       <Route path="/" element={<HomePage />} />
      */} 
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/about-us" element={<AboutUs />} /> 

      </Routes>
    </Router>
  );
}

export default App;
