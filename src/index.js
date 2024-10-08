import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Pages
import Home from './Pages/Home';
import Store from './Pages/Store';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Contact from './Pages/Contact';
import ProductPage from './Pages/ProductPage';
import AddProduct from './Pages/AddProduct';
import SellerGuidance from './Pages/SellerGuidance';
import ProfilePage from './Pages/ProfilePage';

// Styles
import './Styles/GlobalRules/global.css';
import './Styles/home/home.css';
import './Styles/Login-Signup/login.css';
import './Styles/Store/store.css';
import './Styles/SellerGuidance/sellerGuidance.css';
import './Styles/Contact/contact.css';
import './Styles/ProfilePage/profilePage.css';
// Component Styles
import './Styles/Components Style/Header/header.css'
import './Styles/Components Style/Footer/footer.css'
import './Styles/Components Style/ProductAdd-Card-Page/ProductAddCardPage.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {path: "/" ,element: <Home />,},
  {path: "Store" ,element: <Store />,},
  {path: "Login" ,element: <Login />,},
  {path: "Signup" ,element: <Signup />,},
  {path: "Contact" ,element: <Contact />,},
  {path: "ProductPage/:productId" ,element: <ProductPage />,},
  {path: "AddProduct" ,element: <AddProduct />,},
  {path: "SellerGuidance" ,element: <SellerGuidance />,},
  {path: "ProfilePage" ,element: <ProfilePage />,},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
