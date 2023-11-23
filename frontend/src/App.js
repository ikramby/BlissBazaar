
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUp from './pages/register';
import SignInSide from './pages/login';
<<<<<<< HEAD
import AboutUs from './pages/AboutUs'; // Import the AboutUs component
=======
import SearchAppBar from './component/navbar'
>>>>>>> 515b36a2abaf3b3328df0e56357b164d8b356a17

function App() {
  return (
    <Router>
      <nav>
<<<<<<< HEAD
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/about-us">About Us</Link>
=======
       <SearchAppBar />
>>>>>>> 515b36a2abaf3b3328df0e56357b164d8b356a17
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/about-us" element={<AboutUs />} /> 

      </Routes>
    </Router>
  );
}

export default App;
