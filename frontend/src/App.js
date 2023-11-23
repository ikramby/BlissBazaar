
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/register";
import SignInSide from "./pages/login";
import React from "react";
import EditProfile from "./pages/EditProfile";


import AboutUs from './pages/AboutUs';
import NewProductForm from './pages/Newproduct';
import SearchAppBar from './component/navbar'


function App() {
  return (
    <Router>
      <nav>


       <SearchAppBar />

        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/edit-profile">Edit Profile</Link>

      </nav>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignInSide />} />

        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/NewProduct" element={<NewProductForm />} />

        <Route path="/edit-profile" element={<EditProfile />} />

      </Routes>
    </Router>
  );
}

export default App;