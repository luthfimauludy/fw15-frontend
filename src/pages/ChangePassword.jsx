import React from "react";
import http from "../helpers/http";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {
  FiUser,
  FiCreditCard,
  FiEdit3,
  FiLock,
  FiPlusCircle,
  FiList,
  FiHeart,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { useSelector } from "react-redux";

const ChangePassword = () => {
  const token = useSelector((state) => state.auth.token);
  const [profile, setProfile] = React.useState({});

  React.useEffect(() => {
    const getProfile = async () => {
      const { data } = await http(token).get("/profile");
      setProfile(data.results);
    };
    getProfile();
  }, []);

  return (
    <>
      {/* Navbar Start */}
      <Header />
      {/* Navbar End */}
      {/* Main Content Start */}
      <main className="md:bg-[#E9EDC9] md:pt-12">
        <div className="flex mt-5 md:mt-0 mb-24 md:mx-16">
          {/* Left Content Start */}
          <aside className="hidden md:inline pr-16 md:bg-[#E9EDC9]">
            <div className="flex gap-3.5 mb-14">
              <div className="flex gap-3.5">
                <div className="inline-block rounded-full p-[2px] bg-gradient-to-r from-[#61764B] to-[#A0D995]">
                  {profile?.picture && (
                    <img
                      className="w-11 h-11 object-cover rounded-full border-2 border-white"
                      src={`http://localhost:8888/uploads/${profile?.picture}`}
                      alt="Profile"
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col justify-between text-black">
                <div className="text-sm font-semibold">{profile?.fullName}</div>
                <div className="text-xs">Entrepreneur, ID</div>
              </div>
            </div>
            <ul className="text-sm text-black font-semibold">
              <li className="flex gap-4 mb-8">
                <FiUser size={25} color="#C1C5D0" />
                Profile
              </li>
              <li>
                <ul className="ml-12">
                  <li className="flex gap-4 mb-8 relative">
                    <FiCreditCard size={25} color="#C1C5D0" />
                    Card
                    <div className="absolute w-28 border border-black top-2"></div>
                  </li>
                  <li>
                    <Link className="flex gap-4 mb-8" to="/profile">
                      <FiEdit3 size={25} color="#C1C5D0" />
                      Edit Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex gap-4 mb-8 text-primary"
                      to="/change-password"
                    >
                      <FiLock size={25} />
                      Change Password
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="flex gap-4 mb-8" to="/manage-event">
                  <FiPlusCircle size={25} color="#C1C5D0" />
                  Create Event
                </Link>
              </li>
              <li>
                <Link className="flex gap-4 mb-8" to="/my-booking">
                  <FiList size={25} color="#C1C5D0" />
                  My Booking
                </Link>
              </li>
              <li>
                <Link className="flex gap-4 mb-8" to="/my-wishlist">
                  <FiHeart size={25} color="#C1C5D0" />
                  My Wishlist
                </Link>
              </li>
              <li>
                <Link className="flex gap-4 mb-8" to="">
                  <FiSettings size={25} color="#C1C5D0" />
                  Settings
                </Link>
              </li>
              <li>
                <Link className="flex gap-4 mb-8" to="/">
                  <FiLogOut size={25} color="#F03800" />
                  Logout
                </Link>
              </li>
            </ul>
          </aside>
          {/* Left Content End */}
          {/* Right Content Start */}
          <div className="flex-1 bg-white text-black md:min-h-[625px] md:px-12 md:pt-11 rounded-2xl">
            <div className="text-xl font-semibold tracking-wide mb-12">
              Change Password
            </div>
            <form className="flex flex-col w-full gap-6 md:gap-8">
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <label className="md:w-48 w-full mb-2.5 md:mb-0">
                  Old Password
                </label>
                <input
                  className="w-full md:flex-1 h-14 px-7 outline-none border border-[#c1c5d0] rounded-lg"
                  type="password"
                  name="old-password"
                  placeholder="Input Here"
                />
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <label className="md:w-48 w-full mb-2.5 md:mb-0">
                  New Password
                </label>
                <input
                  className="w-full md:flex-1 h-14 px-7 outline-none border border-[#c1c5d0] rounded-lg"
                  type="password"
                  name="new-password"
                  placeholder="Input Here"
                />
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <label className="md:w-48 w-full mb-2.5 md:mb-0">
                  Confirm Password
                </label>
                <input
                  className="w-full md:flex-1 h-14 px-7 outline-none border border-[#c1c5d0] rounded-lg"
                  type="password"
                  name="confirm-password"
                  placeholder="Input Here"
                />
              </div>
              <div>
                <button
                  className="bg-[#61764b] h-14 w-full rounded-2xl shadow-lg shadow-[#61764B] text-white"
                  type="button"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
          {/* Right Content End */}
        </div>
        {/* Main Content End */}
        {/* Footer Start */}
        <Footer />
        {/* Footer End */}
      </main>
    </>
  );
};

export default ChangePassword;
