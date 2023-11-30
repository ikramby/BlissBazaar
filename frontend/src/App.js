import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/register";
import SignInSide from "./pages/login";
import React from "react";
import EditProfile from "./pages/EditProfile";
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/Privacy';
import TermOfUse from './pages/TermOfUse'; 
import NewProductForm from './pages/Newproduct';
import SearchAppBar from './component/navbar';
import { AuthProvider } from './component/AuthContext';
import AllProduct from './pages/allProduct';
import EditProductForm from './pages/Editproduct';
import Dashboard from './pages/dashboard'
import Seller from "./pages/seller";
import MediaCustomer from "./component/mediaCustomer";
import FAQPage from "./pages/faq";
import Team from "./pages/teams";

import MediaCustomer from "./component/mediaCustomer";
import PartnerWithUsPage from "./pages/partner";
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
        <Route path="/seller" element={<Seller />} />
        <Route path="/FAQ" element={<FAQPage />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/OurPartner" element={<PartnerWithUsPage />} />

        <Route path="/allproduct" element={<AllProduct />} />
        <Route path="/products/:productId" element={<MediaCustomer />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermOfUse" element={<TermOfUse />} />
        <Route path="/dashboard" element={<Dashboard />} />


        TermsOfUse
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;