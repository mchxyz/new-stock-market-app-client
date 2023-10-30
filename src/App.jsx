import { Routes, Route } from "react-router-dom"
import { SignupPage } from './routes/signup-page';
import { LoginPage } from './routes/login-page';
import { CompaniesPage } from './routes/companies-page';
import { Root } from './routes/root';
import ErrorPage from './error-page';
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div>

        <Navbar />

   <Routes>

    <Route path='/' element={<Root />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/companies" element={<CompaniesPage />} />
    <Route path='*' element={<ErrorPage />} />

</Routes>

    </div>
  )
}

export default App

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