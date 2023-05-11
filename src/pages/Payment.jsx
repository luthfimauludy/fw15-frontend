import { Link } from "react-router-dom";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import wetick from "../assets/images/logo-wetick.png";
import profile from "../assets/images/profile3.jpg";
import card from "../assets/images/card.png";
import atm from "../assets/images/atm.png";
import bank from "../assets/images/bank.png";
import retail from "../assets/images/retail.png";
import eMoney from "../assets/images/e-money.png";

const Payment = () => {
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
      <div className="flex justify-center mx-[120px] mt-12 mb-24 bg-white rounded-2xl pt-[70px] px-[101px] pb-[67px]">
        <div className="mr-[88px] text-black">
          <div className="mb-7 font-semibold text-xl">Payment Method</div>
          <div className="flex flex-col gap-10">
            <div>
              <label className="relative flex items-center max-w-80 gap-2.5">
                <input type="radio" name="payments" checked />
                <img src={card} alt="Card" />
                <p>Card</p>
                <button className="absolute right-0">
                  <IoIosArrowUp />
                </button>
              </label>
              <div className="min-w-[285px] flex justify-center items-center mt-4 ml-6 gap-4">
                <img src={atm} alt="ATM" />
                <button className="w-11 h-11 text-primary outline-dashed outline-[#61764B] rounded-lg">
                  +
                </button>
              </div>
            </div>
            <div>
              <label className="relative flex items-center max-w-80 gap-2.5">
                <input type="radio" name="payments" />
                <img src={bank} alt="Bank Transfer" />
                <p>Bank Transfer</p>
                <button className="absolute right-0">
                  <IoIosArrowDown />
                </button>
              </label>
            </div>
            <div>
              <label className="relative flex items-center max-w-80 gap-2.5">
                <input type="radio" name="payments" />
                <img src={retail} alt="Retail" />
                <p>Retail</p>
                <button className="absolute right-0">
                  <IoIosArrowDown />
                </button>
              </label>
            </div>
            <div>
              <label className="relative flex items-center max-w-80 gap-2.5">
                <input type="radio" name="payments" />
                <img src={eMoney} alt="E-Money" />
                <p>E-Money</p>
                <button className="absolute right-0">
                  <IoIosArrowDown />
                </button>
              </label>
            </div>
          </div>
        </div>
        <div className="min-w-[450px] max-h-[314px] pl-[100px] border-l border-[rgba(193, 197, 208, 0.25)]">
          <div className="text-black mb-7 font-semibold text-xl">
            Ticket Detail
          </div>
          <div className="flex justify-between text-sm font-semibold mb-4">
            <div className="text-black">Event</div>
            <div className="text-primary">Slight & Sounds Exhibition</div>
          </div>
          <div className="flex justify-between text-sm font-semibold mb-4">
            <div className="text-black">Ticket Section</div>
            <div className="text-primary">VIP</div>
          </div>
          <div className="flex justify-between text-sm font-semibold mb-4">
            <div className="text-black">Quantity</div>
            <div className="text-primary">2</div>
          </div>
          <div className="flex justify-between text-sm font-semibold mb-4">
            <div className="text-black">Total Payment</div>
            <div className="text-primary">$70</div>
          </div>
          <button className="w-full h-12 bg-primary text-white rounded-xl mt-9 shadow-lg shadow-primary">
            Payment
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

export default Payment;
