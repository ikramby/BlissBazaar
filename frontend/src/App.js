
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/register";
import SignInSide from "./pages/login";
import React from "react";
import EditProfile from "./pages/EditProfile";
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQ from './pages/faq';
import TermOfUse from './pages/TermOfUse'; 
import NewProductForm from './pages/Newproduct';
import SearchAppBar from './component/navbar';
import { AuthProvider } from './component/AuthContext';
import AllProduct from './pages/allProduct';
import BasketCard from "./pages/basketCard";
import MediaCustomer from "./component/mediaCustomer";
import FeaturesPage from "./pages/feature";
import PartnerWithUsPage from './pages/partner';
import OurTeamPage from './pages/teams';


import EditProductForm from './pages/Editproduct';
import Dashboard from './pages/dashboard'
import Seller from "./pages/seller";

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
        <Route path="/products/:productId" element={<MediaCustomer />} />


        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/seller" element={<Seller />} />

        <Route path="/allproduct" element={<AllProduct />} />
        <Route path="/basket" element={<BasketCard/>} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Feature" element={<FeaturesPage />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Team" element={<OurTeamPage />} />

        <Route path="/OurPartner" element={<PartnerWithUsPage />} />
        <Route path="/TermOfUse" element={<TermOfUse />} />
        <Route path="/dashboard" element={<Dashboard />} />
        

        TermsOfUse
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;