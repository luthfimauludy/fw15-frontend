import wetick from "../assets/images/logo-wetick.png";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="py-24">
        <div className="flex flex-col md:items-center text-black p-2.5 md:p-0 gap-12 md:gap-20">
          <div className="flex md:flex-row flex-col md:justify-center gap-14 md:gap-32">
            <div>
              <div className="flex items-center text-2xl mb-4 md:mb-8 font-semibold">
                <img src={wetick} alt="logo" />
                <a href="/index.html">
                  <span className="text-[#61764B]">We</span>
                  <span className="text-[#FF3D71]">tick</span>
                </a>
              </div>
              <div className="text-sm mb-4">Find events you love with our</div>
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
                <li className="font-semibold">Wetick</li>
                <li className="text-sm text-[#C1C5D0]">
                  <a>About Us</a>
                </li>
                <li className="text-sm text-[#C1C5D0]">
                  <a>Features</a>
                </li>
                <li className="text-sm text-[#C1C5D0]">
                  <a>Blog</a>
                </li>
                <li className="text-sm text-[#C1C5D0]">
                  <a>Payments</a>
                </li>
                <li className="text-sm text-[#C1C5D0]">
                  <a>Mobile App</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-4">
                <li className="font-semibold">Features</li>
                <li className="text-sm text-[#C1C5D0]">
                  <a>Booking</a>
                </li>
                <li className="text-sm text-[#C1C5D0]">
                  <a>Create Event</a>
                </li>
                <li className="text-sm text-[#C1C5D0]">
                  <a>Discover</a>
                </li>
                <li className="text-sm text-[#C1C5D0]">
                  <a>Register</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-4">
                <li className="font-semibold">Company</li>
                <li className="text-sm text-[#C1C5D0]">
                  <a>Partnership</a>
                </li>
                <li className="text-sm text-[#C1C5D0]">
                  <a>Help</a>
                </li>
                <li className="text-sm text-[#C1C5D0]">
                  <a>Term of Service</a>
                </li>
                <li className="text-sm text-[#C1C5D0]">
                  <a>Privacy Policy</a>
                </li>
                <li className="text-sm text-[#C1C5D0]">
                  <a>Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-base font-semibold text-[#5A7184] md:w-[860px]">
            © 2020 Wetick All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
