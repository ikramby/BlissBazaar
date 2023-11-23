
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import  HomePage from './pages/HomePage';
import SignUp from './pages/register';
import SignInSide from './pages/login';
import AboutUs from './pages/AboutUs';

import SearchAppBar from './component/navbar'

function App() {
  return (
    <Router>
      <nav>
       <SearchAppBar />
      </nav>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;