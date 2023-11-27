
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/register";
import SignInSide from "./pages/login";
import React from "react";
import EditProfile from "./pages/EditProfile";
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermOfUse from './pages/TermOfUse'; 
import NewProductForm from './pages/Newproduct';
import SearchAppBar from './component/navbar';
import { AuthProvider } from './component/AuthContext';
import AllProduct from './pages/allProduct';
import BasketCard from "./pages/basketCard";
import EditProductForm from './pages/Editproduct';



function App() {
  return (
    <AuthProvider>
    <Router>
      <nav>
       <SearchAppBar />
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/NewProduct" element={<NewProductForm />} />
        <Route path="/EditProduct/:productId" element={<EditProductForm />} />

        <Route path="/edit-profile" element={<EditProfile />} />

        <Route path="/allproduct" element={<AllProduct />} />
        <Route path="/basket" element={<BasketCard/>} />

        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermOfUse" element={<TermOfUse />} />
      

        TermsOfUse
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;