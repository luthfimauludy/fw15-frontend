import { Link } from "react-router-dom";
import { BiSort } from "react-icons/bi";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import wetick from "../assets/images/logo-wetick.png";
import profile from "../assets/images/profile3.jpg";
import banner from "../assets/images/banner-booking.png";
import ticket1 from "../assets/images/ticket1.png";
import ticket2 from "../assets/images/ticket2.png";
import ticket3 from "../assets/images/ticket3.png";

const Booking = () => {
  return (
    <div className="bg-[#E9EDC9]">
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
      <div className="flex justify-center mx-[120px] mt-12 mb-24 bg-white rounded-2xl pt-[70px] pr-12 pb-[67px] pl-12">
        <div className="w-full flex justify-center items-center">
          <img src={banner} alt="banner" />
        </div>
        <div className="min-w-[376px]">
          <div className="h-12 flex justify-between items-center mb-14">
            <div className="text-xl font-semibold text-black">Tickets</div>
            <div className="flex items-center">
              <p className="text-xs font-semibold text-[#FC1055]">BY PRICE</p>
              <BiSort className="w-12" color="blue" />
            </div>
          </div>
          <div className="w-full">
            <div className="flex mb-14">
              <div className="mr-2.5 h-full justify-start">
                <div>
                  <img className="w-11 h-11" src={ticket1} alt="Ticket 1" />
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-black font-semibold mb-[3px]">
                      SECTION REG, ROW 1
                    </p>
                    <p className="text-xs mt-0 text-[BDC0C4]">
                      12 Seats available
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-black font-semibold mb-[3px]">
                      $15
                    </p>
                    <p className="text-xs mt-0 text-[BDC0C4]">per person</p>
                  </div>
                </div>
                <div className="mt-[22px] flex justify-between items-center">
                  <div>
                    <p className="text-xs text-black font-semibold m-0">
                      Quantity
                    </p>
                  </div>
                  <div className="flex justify-evenly items-center">
                    <button className="btn btn-sm btn-square btn-outline">
                      -
                    </button>
                    <p className="text-black ml-2.5">0</p>
                    <button className="ml-2.5 btn btn-sm btn-square btn-outline">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mb-14">
              <div className="mr-2.5 h-full justify-start">
                <div>
                  <img className="w-11 h-11" src={ticket2} alt="Ticket 2" />
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-black font-semibold mb-[3px]">
                      SECTION VIP, ROW 2
                    </p>
                    <p className="text-xs mt-0 text-[BDC0C4]">
                      9 Seats available
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-black font-semibold mb-[3px]">
                      $35
                    </p>
                    <p className="text-xs mt-0 text-[BDC0C4]">per person</p>
                  </div>
                </div>
                <div className="mt-[22px] flex justify-between items-center">
                  <div>
                    <p className="text-xs text-black font-semibold m-0">
                      Quantity
                    </p>
                  </div>
                  <div className="flex justify-evenly items-center">
                    <button className="btn btn-sm btn-square btn-outline">
                      -
                    </button>
                    <p className="text-black ml-2.5">2</p>
                    <button className="ml-2.5 btn btn-sm btn-square btn-outline">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex border-b border-[#E0E4F3] pb-8">
              <div className="mr-2.5 h-full justify-start">
                <div>
                  <img className="w-11 h-11" src={ticket3} alt="Ticket 3" />
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-black font-semibold mb-[3px]">
                      SECTION VVIP, ROW 3
                    </p>
                    <p className="text-xs mt-0 text-[BDC0C4]">
                      6 Seats available
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-black font-semibold mb-[3px]">
                      $50
                    </p>
                    <p className="text-xs mt-0 text-[BDC0C4]">per person</p>
                  </div>
                </div>
                <div className="mt-[22px] flex justify-between items-center">
                  <div>
                    <p className="text-xs text-black font-semibold m-0">
                      Quantity
                    </p>
                  </div>
                  <div className="flex justify-evenly items-center">
                    <button className="btn btn-sm btn-square btn-outline">
                      -
                    </button>
                    <p className="text-black ml-2.5">0</p>
                    <button className="ml-2.5 btn btn-sm btn-square btn-outline">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-6 mb-9">
            <div className="text-sm text-black font-semibold">
              <p className="mb-4">Ticket Section</p>
              <p className="mb-4">Quantity</p>
              <p className="mb-4">Total Payment</p>
            </div>
            <div className="text-sm text-primary font-semibold text-right text-[61764B]">
              <p className="mb-4">VIP</p>
              <p className="mb-4">2</p>
              <p className="mb-4">$70</p>
            </div>
          </div>
          <button className="flex w-72 justify-center items-center h-14 text-base font-semibold rounded-lg shadow-lg shadow-[#61764B] bg-[#61764B] text-white">
            Checkout
          </button>
        </div>
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

export default Booking;
