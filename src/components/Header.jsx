import React from "react";
import http from "../helpers/http";
import wetick from "../assets/images/logo-wetick.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout as logoutAction } from "../redux/reducers/auth";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [profile, setProfile] = React.useState({});
  const token = useSelector((state) => state.auth.token);

  async function getProfileData() {
    const { data } = await http(token).get("/profile");
    setProfile(data.results);
  }
  getProfileData();

  const doLogout = () => {
    window.localStorage.removeItem("token");
    dispatch(logoutAction(""));
    navigate("/login");
  };

  return (
    <>
      <nav className="flex md:flex-row flex-col md:h-24 px-8 font-semibold">
        <div className="flex md:justify-center justify-between items-center">
          <div className="flex justify-center items-center text-2xl">
            <img src={wetick} alt="logo" />
            <div className="text-2xl">
              <Link to="/">
                <span className="text-[#61764B]">We</span>
                <span className="text-[#FF3D71]">tick</span>
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center border rounded-lg p-1 bg-[#61764B]">
            <button id="btn-toggler">
              <i className="text-white" data-feather="menu"></i>
            </button>
          </div>
        </div>
        <div
          id="menu"
          className="hidden md:flex md:flex-row flex-col flex-1 md:pl-8 mb-5 md:mb-0 text-sm text-black"
        >
          <ul className="flex justify-center md:flex-row flex-col flex-1 gap-3">
            <li className="flex justify-center items-center min-w-[100px]">
              <Link
                className="text-[#61764B] pb-2.5 border-b border-[#61764B]"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="flex justify-center items-center min-w-[100px]">
              <Link
                className="hover:text-[#61764B] pb-2.5 border-b border-transparent hover:border-[#61764B]"
                to="/create-event"
              >
                Create Event
              </Link>
            </li>
            <li className="flex justify-center items-center min-w-[100px]">
              <a
                className="hover:text-[#61764B] pb-2.5 border-b border-transparent hover:border-[#61764B]"
                href="#cities"
              >
                Location
              </a>
            </li>
          </ul>
          <div className="flex md:flex-row flex-col gap-3 items-center text-sm font-semibold">
            {token ? (
              <div className="text-black flex items-center gap-3">
                <div className="inline-block rounded-full p-[2px] bg-gradient-to-r from-[#61764B] to-[#A0D995]">
                  {profile?.picture && (
                    <img
                      className="w-11 h-11 object-cover rounded-full border-2 border-white"
                      src={`http://localhost:8888/uploads/${profile?.picture}`}
                      alt="Profile"
                    />
                  )}
                </div>
                <div>
                  <Link to="/profile">{profile?.fullName}</Link>
                </div>
                <div>
                  <button
                    onClick={doLogout}
                    className="btn btn-primary normal-case"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex md:flex-row flex-col gap-3 items-center text-sm font-semibold">
                <div className="w-full">
                  <Link
                    className="flex justify-center items-center font-semibold md:min-w-[180px] w-full tracking-widest h-12 rounded-xl hover:text-primary"
                    to="/login"
                  >
                    Login
                  </Link>
                </div>
                <div className="w-full">
                  <Link
                    className="flex justify-center items-center font-semibold md:min-w-[180px] w-full tracking-widest h-12 rounded-xl text-white shadow-lg shadow-primary bg-primary hover:bg-green-800"
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
