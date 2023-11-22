
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import SignUp from './pages/register';
import SignInSide from './pages/login';

import SearchAppBar from './component/navbar'

function App() {
  return (
    <Router>
      <nav>
       <SearchAppBar />
       
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/about-us" element={<AboutUs />} /> 

      </Routes>
    </Router>
  );
}

export default App;
