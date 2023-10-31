import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";
import SignIn from "./pages/SignInPage/SignIn";
import SignUp from "./pages/SignUpPage/SignUp";
import Profile from "./pages/ProfilePage/Profile"
import About from "./pages/AboutPage/About";
import Navbar from "./components/NavbarComponent/Navbar";
import { ToastContainer } from "react-toastify";
import 'noty/lib/noty.css';
export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  );
}
