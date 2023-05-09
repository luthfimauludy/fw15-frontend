import { Link, useNavigate } from "react-router-dom";
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
import { IoIosArrowDown } from "react-icons/io";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import wetick from "../assets/images/logo-wetick.png";
import profile from "../assets/images/profile3.jpg";
import React from "react";

const Profile = () => {
  const navigate = useNavigate();
  const [token, setToken] = React.useState("");
  const [initToken, setInitToken] = React.useState(false);
  React.useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setToken(window.localStorage.getItem("token"));
    }
    setInitToken(true);
  }, []);
  React.useEffect(() => {
    if (initToken) {
      if (!token) {
        navigate("/login", {
          state: { warningMessage: "You have to login first" },
        });
      }
    }
  }, [token, initToken, navigate]);

  return (
    <>
      {/* Navbar Start */}
      <nav className="flex md:flex-row flex-col md:h-24 px-8 bg-white font-semibold">
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
          className="hidden md:flex md:flex-row flex-col flex-1 md:pl-8 mb-5 md:mb-0 text-sm"
        >
          <ul className="flex justify-center md:flex-row flex-col flex-1 gap-3 text-black">
            <li className="flex justify-center items-center min-w-[100px]">
              <Link
                className="hover:text-[#61764B] pb-2.5 border-b border-transparent hover:border-[#61764B]"
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
              <Link
                className="hover:text-[#61764B] pb-2.5 border-b border-transparent hover:border-[#61764B]"
                to="/event"
              >
                Location
              </Link>
            </li>
          </ul>
          <div className="flex justify-center gap-3 items-center text-sm font-semibold">
            <div className="inline-block rounded-full p-[2px] bg-gradient-to-r from-[#61764B] to-[#A0D995]">
              <img
                className="w-11 h-11 object-cover rounded-full border-2 border-white"
                src={profile}
                alt="Profile"
              />
            </div>
            <div className="text-black">
              <Link to="/profile">John Tomson</Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
      {/* Main Content Start */}
      <main className="flex mt-5 md:mt-0 md:pt-12 pb-24 md:px-16 bg-white md:bg-[#E9EDC9]">
        {/* Left Content Start */}
        <aside className="hidden md:inline mr-16">
          <div className="flex gap-3.5 mb-14">
            <div className="flex gap-3.5">
              <div className="inline-block rounded-full p-[2px] bg-gradient-to-r from-[#61764B] to-[#A0D995]">
                <img
                  className="w-11 h-11 object-cover rounded-full border-2 border-white"
                  src={profile}
                  alt="Profile"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between text-black">
              <div className="text-sm font-semibold">Jhon Tomson</div>
              <div className="text-xs">Entrepreneur, ID</div>
            </div>
          </div>
          <ul className="text-sm text-black font-semibold">
            <li className="flex gap-7 mb-8">
              <FiUser size={25} color="#C1C5D0" />
              Profile
            </li>
            <li>
              <ul className="ml-12">
                <li className="flex gap-7 mb-8 relative">
                  <FiCreditCard size={25} color="#C1C5D0" />
                  Card
                  <div className="absolute w-28 border border-black top-2"></div>
                </li>
                <li>
                  <Link className="flex gap-7 mb-8 text-primary" to="/profile">
                    <FiEdit3 size={25} />
                    Edit Profile
                  </Link>
                </li>
                <li>
                  <Link className="flex gap-7 mb-8" to="/change-password">
                    <FiLock size={25} color="#C1C5D0" />
                    Change Password
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="flex gap-7 mb-8" to="/manage-event">
                <FiPlusCircle size={25} color="#C1C5D0" />
                Create Event
              </Link>
            </li>
            <li>
              <Link className="flex gap-7 mb-8" to="/my-booking">
                <FiList size={25} color="#C1C5D0" />
                My Booking
              </Link>
            </li>
            <li>
              <Link className="flex gap-7 mb-8" to="/my-wishlist">
                <FiHeart size={25} color="#C1C5D0" />
                My Wishlist
              </Link>
            </li>
            <li>
              <Link className="flex gap-7 mb-8" to="">
                <FiSettings size={25} color="#C1C5D0" />
                Settings
              </Link>
            </li>
            <li>
              <Link className="flex gap-7 mb-8" to="/">
                <FiLogOut size={25} color="#F03800" />
                Logout
              </Link>
            </li>
          </ul>
        </aside>
        {/* Left Content End */}
        {/* Right Content Start */}
        <div className="flex-1">
          <div className="bg-white md:min-h-[825px] md:px-12 md:py-11 rounded-2xl">
            <div className="text-xl text-black font-semibold tracking-wide px-5 md:px-0 mb-12">
              Profile
            </div>
            <div className="flex flex-col-reverse md:flex-row px-5 md:px-0">
              <form className="flex flex-col text-sm text-[#373A42]">
                <div className="flex flex-col md:flex-row md:items-center mb-8">
                  <label className="md:w-48 mb-2.5 md:mb-0" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="md:flex-1 h-14 px-7 border border-[#c1c5d0] outline-none rounded-2xl"
                    type="text"
                    name="name"
                    placeholder="Jhon Tomson"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:items-center mb-8 md:mb-0">
                  <label className="w-48 mb-2.5 md:mb-0" htmlFor="username">
                    Username
                  </label>
                  <div className="flex">
                    <p>@jhont0</p>
                    <div className="text-[#61764B] ml-[15px] underline decoration-auto">
                      <a href="#">Edit</a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center mb-8 md:my-12">
                  <label className="w-48 mb-4 md:mb-0" htmlFor="email">
                    Email
                  </label>
                  <div className="flex">
                    <p>jhont0@mail.com</p>
                    <div className="text-[#61764B] ml-[15px] underline decoration-auto">
                      <a href="#">Edit</a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center mb-8 md:mb-12">
                  <label className="w-48 mb-4 md:mb-0" htmlFor="phone-number">
                    Phone Number
                  </label>
                  <div className="flex">
                    <p>081234567890</p>
                    <div className="text-[#61764B] ml-[15px] underline decoration-auto">
                      <a href="#">Edit</a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center mb-8">
                  <label className="w-48 mb-4 md:mb-0" htmlFor="gender">
                    Gender
                  </label>
                  <div className="flex">
                    <input type="radio" name="gender" checked="checked" />
                    <label className="ml-2.5 mr-[50px]">Male</label>
                    <input type="radio" name="gender" />
                    <label className="ml-2.5">Female</label>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center mb-8 md:mb-4">
                  <label className="w-48 mb-2.5 md:mb-0">Profession</label>
                  <div className="relative flex-1 px-7 border border-[#c1c5d0] rounded-2xl">
                    <select className="h-14 outline-none appearance-none md:min-w-[200px]">
                      <option disabled selected>
                        Entrepreneur
                      </option>
                      <option>Programmer</option>
                      <option>Manager</option>
                    </select>
                    <div className="absolute flex top-5 right-5">
                      <IoIosArrowDown />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center mb-8">
                  <label className="w-48 mb-2.5 md:mb-0">Nasionality</label>
                  <div className="relative flex-1 px-7 border border-[#c1c5d0] rounded-2xl">
                    <select className="h-14 outline-none appearance-none md:min-w-[200px]">
                      <option disabled selected>
                        Indonesia
                      </option>
                      <option>Saudi Arabia</option>
                      <option>Australia</option>
                    </select>
                    <div className="absolute flex top-5 right-5">
                      <IoIosArrowDown />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center mb-8 md:mb-12">
                  <label
                    className="w-48 mb-2.5 md:mb-0"
                    htmlFor="birthday-date"
                  >
                    Birthday Date
                  </label>
                  <div className="flex">
                    <div className="flex text-sm text-[#777777]">
                      <p className="mr-1">24</p>
                      <p className="mr-1">/</p>
                      <p className="mr-1">10</p>
                      <p className="mr-1">/</p>
                      <p>2000</p>
                    </div>
                    <div className="text-[#61764B] ml-[15px] underline decoration-auto">
                      <a href="#">Edit</a>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="bg-[#61764B] h-14 w-72 md:w-80 rounded-2xl shadow-lg shadow-[#61764B] text-white"
                    type="button"
                  >
                    Save
                  </button>
                </div>
              </form>
              <div className="md:h-[303px] md:ml-12 md:pl-12 md:mt-[76px] md:border-l border-[#C1C5D040]">
                <div>
                  <div className="inline-block ml-14 mb-12 rounded-full p-[2px] bg-gradient-to-r from-[#61764B] to-[#A0D995]">
                    <img
                      className="w-[137px] h-[137px] object-cover rounded-full border-8 border-white"
                      src={profile}
                      alt="Profile"
                    />
                  </div>
                  <button className="hidden md:inline w-64 h-10 mb-[25px] rounded-lg border-solid border border-[#61764B] text-sm text-[#61764B] font-semibold tracking-widest">
                    Choose Photo
                  </button>
                </div>
                <div className="hidden md:inline text-xs text-[#373A42BF]">
                  <p className="mb-[15px]">Image size: max, 2 MB</p>
                  <p>Image formats: .JPG, .JPEG, .PNG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Content End */}
      </main>
      {/* Main Content End */}
      {/* Footer Start */}
      <footer>
        <div className="flex flex-col md:items-center p-2.5 md:p-0 gap-12 md:gap-20 bg-[#E9EDC9]">
          <div className="flex md:flex-row flex-col md:justify-center gap-14 md:gap-32">
            <div>
              <div className="flex items-center text-2xl mb-4 md:mb-8 font-semibold">
                <img src={wetick} alt="logo" />
                <a href="/index.html">
                  <span className="text-[#61764B]">We</span>
                  <span className="text-[#FF3D71]">tick</span>
                </a>
              </div>
              <div className="text-sm text-black mb-4">
                Find events you love with our
              </div>
              <div className="flex gap-4 text-[#C1C5D0]">
                <a href="https://www.facebook.com">
                  <FaFacebook />
                </a>
                <a href="https://www.whatsapp.com">
                  <FaWhatsapp />
                </a>
                <a href="https://www.instagram.com">
                  <FaInstagram />
                </a>
                <a href="https://www.twitter.com">
                  <FaTwitter />
                </a>
              </div>
            </div>
            <div>
              <ul className="flex flex-col gap-4">
                <li className="text-black font-semibold">Wetick</li>
                <li className="text-sm text-[#C1C5D0]">
                  <a href="#">About Us</a>
                </li>
                <li className="text-sm text-[#C1C5D0]">
                  <a href="#">Features</a>
                </li>
                <li className="text-sm text-[#C1C5D0]">
                  <a href="#">Blog</a>
                </li>
                <li className="text-sm text-[#C1C5D0]">
                  <a href="#">Payments</a>
                </li>
                <li className="text-sm text-[#C1C5D0]">
                  <a href="#">Mobile App</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-4">
                <li className="text-black font-semibold">Features</li>
                <li className="text-sm text-[#C1C5D0]">
                  <a href="#">Booking</a>
                </li>
                <li className="text-sm text-[#C1C5D0]">
                  <a href="#">Create Event</a>
                </li>
                <li className="text-sm text-[#C1C5D0]">
                  <a href="#">Discover</a>
                </li>
                <li className="text-sm text-[#C1C5D0]">
                  <a href="#">Register</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-4">
                <li className="text-black font-semibold">Company</li>
                <li className="text-sm text-[#C1C5D0]">
                  <a href="#">Partnership</a>
                </li>
                <li className="text-sm text-[#C1C5D0]">
                  <a href="#">Help</a>
                </li>
                <li className="text-sm text-[#C1C5D0]">
                  <a href="#">Term of Service</a>
                </li>
                <li className="text-sm text-[#C1C5D0]">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="text-sm text-[#C1C5D0]">
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-base font-semibold text-[#5A7184] md:w-[860px]">
            © 2020 Wetick All Rights Reserved
          </p>
        </div>
      </footer>
      {/* Footer End */}
    </>
  );
};

export default Profile;
