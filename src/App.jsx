import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import Home from "./pages/Home";
import DetailEvent from "./pages/DetailEvent";
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
import CreateEvent from "./pages/CreateEvent";
import UpdateEvent from "./pages/UpdateEvent";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail-event" element={<DetailEvent />} />
          <Route path="/booking" element={<Booking />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="/payment" element={<Payment />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/manage-event" element={<ManageEvent />} />
          <Route path="/my-booking" element={<MyBooking />} />
          <Route path="/my-wishlist" element={<MyWishlist />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/update-event" element={<UpdateEvent />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
