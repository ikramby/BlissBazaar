import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUp from './pages/register';
import SignInSide from './pages/login';
import EditProfile from './pages/EditProfile';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermOfUse from './pages/TermOfUse'; 
import NewProductForm from './pages/Newproduct';
import SearchAppBar from './component/navbar';
import { AuthProvider } from './component/AuthContext';
import AllProduct from './pages/allProduct';
import BasketCard from './pages/basketCard';
import EditProductForm from './pages/Editproduct';
import Dashboard from './pages/dashboard';
import Seller from './pages/seller';
import ProtectedRoute from './component/ProtectedRoute'; // Import ProtectedRoute

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
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermOfUse" element={<TermOfUse />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/basket" element={<BasketCard />} />

          {/* Protected Routes */}
          <Route path="/dashboard" element={ <Dashboard /> } />
          <Route path="/seller" element={<ProtectedRoute element={<Seller />} allowedRoles={['seller']} />} />
          <Route path="/NewProduct" element={<ProtectedRoute element={<NewProductForm />} allowedRoles={['seller']} />} />
          <Route path="/EditProduct/:productId" element={<ProtectedRoute element={<EditProductForm />} allowedRoles={['seller']} />} />
          <Route path="/edit-profile" element={<ProtectedRoute element={<EditProfile />} allowedRoles={['user', 'seller']} />} />

          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
