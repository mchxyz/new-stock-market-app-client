import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Root } from './routes/root';
import ErrorPage from './error-page';
import { AuthProvider } from './components/AuthProvider';
import { SignupPage } from './routes/signup-page';
import { LoginPage } from './routes/login-page';
import { CompaniesPage } from './routes/companies-page';
import App from './App';

// Routes 
// Documentation was followed to be able to work on the routers. Please reference: https://reactrouter.com/en/main/start/tutorial for more information.
// When we're on the sign up route we should be able to see the sign up page. 

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/signup",
//     element: <SignupPage />,
//   },
//   {
//     path: "/login",
//     element: <LoginPage />,
//   },
//   {
//     path: "/companies",
//     element: <CompaniesPage />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
   <AuthProvider>
    <App />
  </AuthProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

