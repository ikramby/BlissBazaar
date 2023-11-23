
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import  HomePage from './pages/HomePage';
import SignUp from './pages/register';
import SignInSide from './pages/login';
import SearchAppBar from './component/navbar';

function App() {
  return (
    <Router>
      <nav>
      {/* test */}
       <SearchAppBar />
      </nav>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignInSide />} />
      </Routes>
    </Router>
  );
}

export default App;