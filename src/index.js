import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Pages
import Home from './Pages/Home';
import Store from './Pages/Store';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ProductPage from './Pages/ProductPage';
import AddProduct from './Pages/AddProduct';
import BanProducts from './Pages/BanProducts';

// Styles
import './Styles/GlobalRules/global.css';
import './Styles/home/home.css';
import './Styles/Login-Signup/login.css';
import './Styles/Store/store.css';
import './Styles/AddProduct/addProduct.css';
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
  {path: "ProductPage/:productId" ,element: <ProductPage />,},
  {path: "AddProduct" ,element: <AddProduct />,},
  {path: "BanProducts" ,element: <BanProducts />,},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
