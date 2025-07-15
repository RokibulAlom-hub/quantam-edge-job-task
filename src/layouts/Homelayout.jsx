import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Home from "../pages/Homepage/Home";
import LoginPage from "../pages/Loginpage/Login";
import { Outlet } from "react-router-dom";

const Homelayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  );
};

export default Homelayout;
