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
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import wetick from "../assets/images/logo-wetick.png";
import profile from "../assets/images/profile3.jpg";

const UpdateEvent = () => {
  return (
    <body className="relative">
      <div className="absolute w-full min-h-screen h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
        <div className="text-black bg-white min-w-[80%] min-h-[200px] rounded-xl p-10">
          <div className="mb-11 text-xl tracking-wider font-semibold">
            Update Event
          </div>
          <div className="flex justify-between gap-16">
            <div className="w-[481px]">
              <div className="mb-2">Name</div>
              <div>
                <input
                  type="text"
                  className="w-full h-14 px-5 py-4 mb-8 border rounded-xl border-[#C1C5D0]"
                  placeholder="Input Name Event ..."
                />
              </div>
              <div className="mb-2">Location</div>
              <div>
                <input
                  type="text"
                  className="w-full h-14 px-5 py-4 mb-8 border rounded-xl border-[#C1C5D0]"
                  placeholder="Select Location"
                />
              </div>
              <div className="mb-2">Price</div>
              <div>
                <input
                  type="text"
                  className="w-full h-14 px-5 py-4 mb-8 border rounded-xl border-[#C1C5D0]"
                  placeholder="Input Price"
                />
              </div>
            </div>
            <div className="w-[481px]">
              <div className="mb-2">Category</div>
              <div>
                <input
                  type="text"
                  className="w-full h-14 px-5 py-4 mb-8 border rounded-xl border-[#C1C5D0]"
                  placeholder="Select Category"
                />
              </div>
              <div className="mb-2">Date Time Show</div>
              <div>
                <input
                  type="text"
                  className="w-full h-14 px-5 py-4 mb-8 border rounded-xl border-[#C1C5D0]"
                  placeholder="01/01/2022"
                />
              </div>
              <div className="mb-2">Image</div>
              <div>
                <input
                  type="text"
                  className="w-full h-14 px-5 py-4 mb-8 border rounded-xl border-[#C1C5D0]"
                  placeholder="Choose File ..."
                />
              </div>
            </div>
          </div>
          <div className="mb-2">Detail</div>
          <div>
            <input
              type="text"
              className="w-full h-14 px-5 pt-5 pb-12 mb-8 border rounded-xl border-[#C1C5D0]"
              placeholder="Input Detail ..."
            />
          </div>
          <div className="flex justify-end">
            <a
              className="flex justify-center items-center min-w-[315px] h-12 rounded-xl text-white bg-[#61764B]"
              href="/manage-event.html"
            >
              Save
            </a>
          </div>
        </div>
      </div>
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
                  <Link className="flex gap-7 mb-8" to="/profile">
                    <FiEdit3 size={25} color="#C1C5D0" />
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
              <Link className="flex gap-7 mb-8 text-primary" to="/manage-event">
                <FiPlusCircle size={25} />
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
        <div className="flex-1 text-black bg-white md:px-12 md:py-11 rounded-2xl md:mr-16">
          <div className="flex md:flex-row flex-col gap-3 justify-between mb-10 md:mb-0">
            <div className="text-xl font-semibold tracking-wide md:mb-12">
              Manage Event
            </div>
            <div className="flex">
              <Link
                className="flex justify-center items-center w-[125px] h-[50px] text-xs text-[#61764B] rounded-2xl bg-[#E9EDC9]"
                to="/create-event"
              >
                Create
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex">
                <div className="flex flex-col items-center mr-8">
                  <p className="text-sm text-[#FF8900] pt-3">15</p>
                  <p className="text-xs">Wed</p>
                </div>
                <div className="grow">
                  <div>
                    <p className="md:text-2xl text-lg font-semibold mb-4 tracking-widest">
                      Sights & Sounds Exhibition
                    </p>
                    <p className="text-xs mb-2">Jakarta, Indonesia</p>
                    <p className="text-xs mb-2">Wed, 15 Nov, 4:00 PM</p>
                    <div className="flex gap-3.5 text-xs text-[#61764B]">
                      <a href="/detail-event.html">Detail</a>
                      <a href="/update-event.html">Update</a>
                      <a href="#">Delete</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex">
                <div className="flex flex-col items-center mr-8">
                  <p className="text-sm text-[#FF8900] pt-3">15</p>
                  <p className="text-xs">Wed</p>
                </div>
                <div className="grow border-t">
                  <div>
                    <p className="md:text-2xl text-lg font-semibold mb-4 tracking-widest">
                      Sights & Sounds Exhibition
                    </p>
                    <p className="text-xs mb-2">Jakarta, Indonesia</p>
                    <p className="text-xs mb-2">Wed, 15 Nov, 4:00 PM</p>
                    <div className="flex gap-3.5 text-xs text-[#61764B]">
                      <a href="/detail-event.html">Detail</a>
                      <a href="/update-event.html">Update</a>
                      <a href="#">Delete</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex">
                <div className="flex flex-col items-center mr-8">
                  <p className="text-sm text-[#FF8900] pt-3">15</p>
                  <p className="text-xs">Wed</p>
                </div>
                <div className="grow border-t">
                  <div>
                    <p className="md:text-2xl text-lg font-semibold mb-4 tracking-widest">
                      Sights & Sounds Exhibition
                    </p>
                    <p className="text-xs mb-2">Jakarta, Indonesia</p>
                    <p className="text-xs mb-2">Wed, 15 Nov, 4:00 PM</p>
                    <div className="flex gap-3.5 text-xs text-[#61764B]">
                      <a href="/detail-event.html">Detail</a>
                      <a href="/update-event.html">Update</a>
                      <a href="#">Delete</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex">
                <div className="flex flex-col items-center mr-8">
                  <p className="text-sm text-[#FF8900] pt-3">15</p>
                  <p className="text-xs">Wed</p>
                </div>
                <div className="grow border-t">
                  <div>
                    <p className="md:text-2xl text-lg font-semibold mb-4 tracking-widest">
                      Sights & Sounds Exhibition
                    </p>
                    <p className="text-xs mb-2">Jakarta, Indonesia</p>
                    <p className="text-xs mb-2">Wed, 15 Nov, 4:00 PM</p>
                    <div className="flex gap-3.5 text-xs text-[#61764B]">
                      <a href="/detail-event.html">Detail</a>
                      <a href="/update-event.html">Update</a>
                      <a href="#">Delete</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex">
                <div className="flex flex-col items-center mr-8">
                  <p className="text-sm text-[#FF8900] pt-3">15</p>
                  <p className="text-xs">Wed</p>
                </div>
                <div className="grow border-t">
                  <div>
                    <p className="md:text-2xl text-lg font-semibold mb-4 tracking-widest">
                      Sights & Sounds Exhibition
                    </p>
                    <p className="text-xs mb-2">Jakarta, Indonesia</p>
                    <p className="text-xs mb-2">Wed, 15 Nov, 4:00 PM</p>
                    <div className="flex gap-3.5 text-xs text-[#61764B]">
                      <a href="/detail-event.html">Detail</a>
                      <a href="/update-event.html">Update</a>
                      <a href="#">Delete</a>
                    </div>
                  </div>
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
    </body>
  );
};

export default UpdateEvent;
