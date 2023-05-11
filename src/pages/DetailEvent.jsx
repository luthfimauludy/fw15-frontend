import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import wetick from "../assets/images/logo-wetick.png";
import profile from "../assets/images/profile3.jpg";

const DetailEvent = () => {
  return (
    <div className="md:bg-[#E9EDC9]">
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
      <div className="flex md:flex-row flex-col justify-center gap-20 md:mt-12 md:mx-[120px] md:mb-24 bg-white rounded-2xl md:py-24 py-5 relative">
        {/* Left Content Start */}
        <aside className="relative md:px-0 px-3">
          <div className="rounded-3xl overflow-hidden md:w-[300px] h-[400px] mb-7 relative">
            <img
              className="w-full h-full object-cover"
              src="/assets/img/event-banner.png"
              alt="Event Banner"
            />
            <div className="absolute w-full h-full bottom-0 bg-gradient-to-b from-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,0.8)]"></div>
          </div>
          <div className="flex justify-center items-center text-xl font-semibold gap-2">
            <FiHeart className="md:static absolute top-24 right-5 text-[#C1C5D0]" />
            <i
              className="md:static absolute top-24 right-5 text-[#C1C5D0]"
              data-feather="heart"
            ></i>
            <div className="hidden md:block text-black">Add to Wishlist</div>
          </div>
        </aside>
        {/* Left Content End */}
        {/* Right Content Start */}
        <div className="max-w-[450px] md:static absolute top-24">
          <div className="md:mb-0 mb-32 md:pl-0 pl-3">
            <p className="max-w-[233px] max-h-[72px] text-2xl font-semibold tracking-wider md:text-[#373A42] text-white mb-5">
              Sights & Sounds Exhibition
            </p>
            <div className="flex md:flex-row flex-col justify-between gap-2 md:gap-0 mb-5">
              <div className="flex gap-4">
                <i className="text-[#FC1055]" data-feather="map-pin"></i>
                <p className="md:text-[#373A42] text-white">
                  Jakarta, Indonesia
                </p>
              </div>
              <div className="flex gap-4">
                <i className="text-[#FC1055]" data-feather="clock"></i>
                <p className="md:text-[#373A42] text-white">
                  Wed, 15 Nov, 4:00 PM
                </p>
              </div>
            </div>
            <div className="attendees">
              <p className="text-sm font-medium mb-2.5 md:text-[#373A42] text-white">
                Attendees
              </p>
              <div className="flex md:border-b border-[#E0E4F3] pb-5 mb-5">
                <div className="w-8 h-8 rounded-2xl overflow-hidden -ml-0.5">
                  <img
                    className="object-cover w-full h-full"
                    src="/assets/img/profile1.jpg"
                    alt="profile"
                  />
                </div>
                <div className="w-8 h-8 rounded-2xl overflow-hidden -ml-0.5">
                  <img
                    className="object-cover w-full h-full"
                    src="/assets/img/profile2.jpg"
                    alt="profile"
                  />
                </div>
                <div className="w-8 h-8 rounded-2xl overflow-hidden -ml-0.5">
                  <img
                    className="object-cover w-full h-full"
                    src="/assets/img/profile3.jpg"
                    alt="profile"
                  />
                </div>
                <div className="flex w-8 h-8 rounded-2xl overflow-hidden -ml-0.5 relative">
                  <img
                    className="object-cover w-full h-full"
                    src="/assets/img/profile4.jpg"
                    alt="profile"
                  />
                  <div className="flex justify-center items-center w-8 h-8 bg-[#FF8900] text-xs opacity-70 absolute">
                    <p className="text-white">62+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:px-0 px-3">
            <div className="event-detail">
              <p className="text-xl font-semibold text-[#373A42] mb-5">
                Event Detail
              </p>
              <p className="text-xs text-[rgba(55, 58, 66, 0.75)] mb-2.5">
                After his controversial art exhibition &quot;Tear and
                Consume&quot; back in November 2018, in which guests were
                invited to tear up…
              </p>
              <div className="text-xs font-medium text-[#61764B] mb-6">
                <a href="#">Read More</a>
              </div>
              <p className="text-xl font-semibold text-[#373A42] mb-5">
                Location
              </p>
              <img className="mb-12" src="/assets/img/maps.png" alt="Maps" />
              <div className="max-w-[315px]">
                <a
                  className="flex justify-center items-center h-14 text-base font-semibold rounded-lg shadow-lg shadow-[#61764B] bg-[#61764B] text-white"
                  href="/booking.html"
                >
                  Buy Tickets
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Right Content End */}
      </div>
      {/* Main Content End */}
      {/* Footer Start */}
      <footer className="py-24">
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
    </div>
  );
};

export default DetailEvent;
