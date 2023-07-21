import React from "react";
import http from "../helpers/http";
import { HiTicket } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout as logoutAction } from "../redux/reducers/auth";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [profile, setProfile] = React.useState({});
  const token = useSelector((state) => state.auth.token);

  React.useEffect(() => {
    async function getProfileData() {
      const { data } = await http(token).get("/profile");
      setProfile(data.results);
    }
    getProfileData();
  }, []);

  const doLogout = () => {
    window.localStorage.removeItem("token");
    dispatch(logoutAction(""));
    navigate("/login");
  };

  return (
    <>
      <nav className="flex md:flex-row flex-col md:h-24 px-8 font-semibold">
        <div className="flex md:justify-center justify-between items-center">
          <div className="flex justify-center items-center gap-2 text-2xl">
            <HiTicket className="text-primary" size={35} />
            <div className="text-2xl">
              <Link to="/">
                <span className="text-primary">Even</span>
                <span className="text-secondary">Tix</span>
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center border rounded-lg p-1 bg-primary">
            <button id="btn-toggler">
              <FiMenu />
            </button>
          </div>
        </div>
        <div
          id="menu"
          className="hidden md:flex md:flex-row flex-col flex-1 md:pl-8 mb-5 md:mb-0 text-sm text-[#373A42]"
        >
          <ul className="flex justify-center md:flex-row flex-col flex-1 gap-3">
            <li className="flex justify-center items-center min-w-[100px]">
              <Link
                className="hover:text-primary pb-2.5 border-b border-transparent hover:border-primary"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="flex justify-center items-center min-w-[100px]">
              <Link
                className="hover:text-primary pb-2.5 border-b border-transparent hover:border-primary"
                to="/manage-event"
              >
                Create Event
              </Link>
            </li>
            <li className="flex justify-center items-center min-w-[100px]">
              <a
                className="hover:text-primary pb-2.5 border-b border-transparent hover:border-primary"
                href="#cities"
              >
                Location
              </a>
            </li>
          </ul>
          <div className="flex md:flex-row flex-col gap-3 items-center text-sm font-semibold">
            {token ? (
              <div className="text-[#373A42] flex items-center gap-3">
                <div className="inline-block rounded-full p-[2px] bg-gradient-to-r from-primary to-[#A0D995]">
                  {profile?.picture && (
                    <img
                      className="w-11 h-11 object-cover rounded-full border-2 border-white"
                      src={
                        profile.picture.startsWith("https")
                          ? profile.picture
                          : `http://localhost:8888/uploads/${profile.picture}`
                      }
                      alt={profile?.fullName}
                    />
                  )}
                </div>
                <div>
                  <Link to="/profile">{profile?.fullName}</Link>
                </div>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} className="btn m-1 bg-primary">
                    <FiMenu />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <button
                        onClick={doLogout}
                        className="btn btn-primary normal-case text-white"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
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
