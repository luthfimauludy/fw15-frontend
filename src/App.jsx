import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Event from "./pages/Event";
import Booking from "./pages/Booking";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassword";
import ManageEvent from "./pages/ManageEvent";
import MyBooking from "./pages/MyBooking";
import MyWishlist from "./pages/MyWishlist";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/manage-event" element={<ManageEvent />} />
        <Route path="/my-booking" element={<MyBooking />} />
        <Route path="/my-wishlist" element={<MyWishlist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
