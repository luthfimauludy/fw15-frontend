import React from "react";
import axios from "axios";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import header from "../assets/images/toyFaces.png";
import wetick from "../assets/images/logo-wetick.png";
import http from "../helpers/http";

const Home = () => {
  const navigate = useNavigate();
  const [events, setEvents] = React.useState([]);
  const [profile, setProfile] = React.useState({});
  const [cities, setCities] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [partners, setPartners] = React.useState([]);
  const [token, setToken] = React.useState("");
  React.useEffect(() => {
    async function getDataEvents() {
      const { data } = await axios.get("http://localhost:8888/events");
      setEvents(data.results);
    }
    getDataEvents();
    async function getDataProfile() {
      const token = window.localStorage.getItem("token");
      const { data } = await http(token).get("/profile");
      setProfile(data.results);
    }
    getDataProfile();
    async function getDataCities() {
      const { data } = await axios.get("http://localhost:8888/cities");
      setCities(data.results);
    }
    getDataCities();
    async function getDataCategories() {
      const { data } = await axios.get("http://localhost:8888/categories");
      setCategories(data.results);
    }
    getDataCategories();
    async function getDataPartners() {
      const { data } = await axios.get("http://localhost:8888/partners");
      setPartners(data.results);
    }
    getDataPartners();
    if (window.localStorage.getItem("token")) {
      setToken(window.localStorage.getItem("token"));
    }
  }, []);

  const doLogout = () => {
    window.localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <header className="flex max-h-[720px] flex-col">
        {/* Navbar Start */}
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
                <Link
                  className="hover:text-[#61764B] pb-2.5 border-b border-transparent hover:border-[#61764B]"
                  to="/event"
                >
                  Location
                </Link>
              </li>
            </ul>
            <div className="flex md:flex-row flex-col gap-3 items-center text-sm font-semibold">
              {token ? (
                <div className="text-black flex items-center gap-3">
                  <Link to="/profile">{profile?.fullName}</Link>
                  <button onClick={doLogout} className="btn btn-primary">
                    Logout
                  </button>
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
        {/* Navbar End */}
        {/* Banner End */}
        <section className="flex md:flex-row flex-col md:px-24 py-10 items-center md:flex-1 bg-[#61764B] bg-cover bg-no-repeat bg-[url(/assets/img/accent-heading.png)]">
          <div className="md:flex-1 flex flex-col md:items-start items-center gap-5">
            <p className="text-xl md:text-5xl md:text-left text-center tracking-widest font-semibold max-w-[200px] md:max-w-[500px] text-white">
              Find events you love with our
            </p>
            <form className="block md:w-full">
              <div className="inline-flex items-center md:min-w-[500px] h-16 py-2 px-3 bg-white border rounded-xl">
                <CiSearch size={25} />
                <input
                  className="h-8 text-xs px-3 outline-none w-[100px] md:min-w-[250px]"
                  type="text"
                  placeholder="Search Event"
                />
                <FiMapPin size={25} />
                <select className="h-8 outline-none px-3 appearance-none text-xs md:min-w-[150px]">
                  <option disabled selected>
                    Where?
                  </option>
                  <option>Bogor</option>
                  <option>Jakarta</option>
                </select>
                <button className="w-8 h-8 bg-[#FF3D71] text-white border rounded-lg">
                  &rarr;
                </button>
              </div>
            </form>
          </div>
          <div>
            <div className="people">
              <img src={header} alt="People" />
            </div>
          </div>
        </section>
        {/* Banner End */}
      </header>
      <main>
        {/* Event Content Start */}
        <section className="flex gap-8 flex-col items-center my-10">
          <div className="flex bg-rose-300 gap-2.5 py-1.5 px-2.5 items-center rounded-full">
            <div className="w-8 h-0 rounded-t-sm border border-[#FF3D71]"></div>
            <p className="text-xs font-semibold text-[#FF3D71] tracking-[3px]">
              EVENT
            </p>
          </div>
          <p className="text-4xl text-black font-semibold">Events For You</p>
          <div className="flex md:gap-12 mt-10">
            <div className="pt-4">
              <button className="w-11 h-11 bg-white text-[#C1C5D0] border rounded-[10px]">
                &larr;
              </button>
            </div>
            <div className="flex justify-center md:gap-14">
              <div className="flex justify-center md:gap-14">
                <div className="flex flex-col items-center p-2.5 w-[50px] h-[75px] relative">
                  <p>13</p>
                  <p>Mon</p>
                </div>
                <div className="flex flex-col items-center p-2.5 w-[50px] h-[75px] relative">
                  <p>14</p>
                  <p>Tue</p>
                </div>
                <div className="active flex flex-col items-center p-2.5 w-[50px] h-[75px] relative">
                  <p>15</p>
                  <p>Wed</p>
                </div>
              </div>
              <div className="flex justify-center md:gap-14">
                <div className="flex flex-col items-center p-2.5 w-[50px] h-[75px] relative">
                  <p>16</p>
                  <p>Thu</p>
                </div>
                <div className="flex flex-col items-center p-2.5 w-[50px] h-[75px] relative">
                  <p>17</p>
                  <p>Fri</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <button className="w-11 h-11 bg-[#61764B] text-white border rounded-[10px]">
                &rarr;
              </button>
            </div>
          </div>
        </section>
        <section className="overflow-x-scroll md:ml-[120px] ml-2.5 md:pr-[120px] pr-2.5">
          <div id="eventWrapper" className="inline-flex gap-5">
            {events.map((event) => {
              return (
                <Link
                  to={`/detail-event/${event.id}`}
                  key={`event-${event.id}`}
                >
                  <div className="relative w-64 h-[376px] rounded-3xl overflow-hidden">
                    <img
                      className="w-auto h-full object-cover"
                      src={`http://localhost:8888/uploads/${event.picture}`}
                      alt="banner1"
                    />
                    <div className="absolute bottom-0 w-full text-white flex flex-col gap-1 p-5 bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.5)]">
                      <div>{moment(event.date).format("MM-DD-YYYY")}</div>
                      <div className="font-semibold text-2xl tracking-widest">
                        <Link to="/DetailEvent">{event.title}</Link>
                      </div>
                      {/* <div className="flex ml-2">
                        <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2">
                          <img
                            className="object-cover w-full h-full"
                            src="/assets/img/profile1.jpg"
                            alt="profile 1"
                          />
                        </div>
                        <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2">
                          <img
                            className="object-cover w-full h-full"
                            src="/assets/img/profile2.jpg"
                            alt="profile 2"
                          />
                        </div>
                        <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2">
                          <img
                            className="object-cover w-full h-full"
                            src="/assets/img/profile3.jpg"
                            alt="profile 3"
                          />
                        </div>
                        <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2">
                          <img
                            className="object-cover w-full h-full"
                            src="/assets/img/profile4.jpg"
                            alt="profile 4"
                          />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
        <div className="flex justify-center items-center gap-3 my-5 mb-24">
          <a
            className="text-[#61764B] flex justify-center items-center font-bold min-w-[180px] tracking-widest h-10 border border-[#61764B] rounded-xl"
            href="#"
          >
            See All
          </a>
        </div>
        {/* Event Content End */}
        {/* Location Content Start */}
        <section className="m-14 bg-[#61764B] rounded-xl bg-center bg-[url(./assets/images/accent-location.png)] bg-cover bg-no-repeat md:p-24 p-8">
          <div className="py-2 px-5 rounded-full inline-flex items-center gap-2 text-white bg-gray-400">
            <div className="w-8 border-t-sm border border-white"></div>
            <p className="text-xs font-semibold tracking-[3px]">LOCATION</p>
          </div>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 md:gap-2 text-white mt-5">
            <div className="text-xl md:text-5xl sm:text-5xl px-3 font-semibold flex-1">
              Discover Events Near Your
            </div>
            {cities.map((city) => {
              return (
                <div
                  className="flex-1 flex flex-col items-center"
                  key={city.id}
                >
                  <img
                    src={`http://localhost:8888/uploads/${city.picture}`}
                    alt="Jakarta City"
                  />
                  {city.name}
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mt-12">
            <div>
              <a
                className="text-[#61764B] bg-white flex justify-center items-center font-bold min-w-[180px] tracking-widest h-10 rounded-xl"
                href="#"
              >
                See All
              </a>
            </div>
          </div>
        </section>
        {/* Location Content End */}
        {/* Category Content Start */}
        <section className="flex gap-8 flex-col items-center my-10">
          <div className="flex bg-rose-300 gap-2.5 py-1.5 px-2.5 items-center rounded-full">
            <div className="w-8 h-0 rounded-t-sm border border-[#FF3D71]"></div>
            <p className="text-xs font-semibold text-[#FF3D71] tracking-[3px]">
              CATEGORY
            </p>
          </div>
          <p className="text-4xl text-center text-black font-semibold">
            Browse Event By Category
          </p>
          <div className="flex md:flex-row flex-col flex-1 gap-3">
            <div className="flex">
              {categories.map((category) => {
                return (
                  <div
                    className="flex justify-center items-center min-w-[100px]"
                    key={category.id}
                  >
                    <a
                      className="text-[#C1C5D0] hover:text-[#61764B] pb-1 border-b border-transparent hover:border-[#61764B] font-semibold"
                      href="#"
                    >
                      {category.name}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="md:overflow-x-hidden overflow-x-scroll gap-5 my-5 mb-24">
          <div className="flex md:justify-center items-center gap-5 mx-5 md:mx-0">
            <div className="hidden md:block">
              <button className="w-11 h-11 bg-white text-[#C1C5D0] border rounded-[10px]">
                &larr;
              </button>
            </div>
            <div className="inline-flex gap-5">
              {events.map((event) => {
                return (
                  <div
                    className="w-[300px] h-[350px] overflow-hidden rounded-3xl flex flex-col"
                    key={event.id}
                  >
                    <div className="flex-2 overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={`http://localhost:8888/uploads/${event.picture}`}
                        alt="banner1"
                      />
                    </div>
                    <div className="flex flex-col justify-end flex-1 min-h-[161px] text-white p-8 bg-[#61764B] relative">
                      {/* <div className="flex absolute -top-5 ml-2">
                        <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2">
                          <img
                            className="object-cover w-full h-full"
                            src="/assets/img/profile1.jpg"
                            alt="profile 1"
                          />
                        </div>
                        <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2">
                          <img
                            className="object-cover w-full h-full"
                            src="/assets/img/profile2.jpg"
                            alt="profile 2"
                          />
                        </div>
                        <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2">
                          <img
                            className="object-cover w-full h-full"
                            src="/assets/img/profile3.jpg"
                            alt="profile 3"
                          />
                        </div>
                        <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2">
                          <img
                            className="object-cover w-full h-full"
                            src="/assets/img/profile4.jpg"
                            alt="profile 4"
                          />
                        </div>
                      </div> */}
                      <div className="text-sm font-medium">
                        {moment(event.date).format("MM-DD-YYYY")}
                      </div>
                      <div className="text-2xl font-bold tracking-wide">
                        {event.title}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="hidden md:block">
              <button className="w-11 h-11 bg-[#61764B] text-white border rounded-[10px]">
                &rarr;
              </button>
            </div>
          </div>
        </section>
        {/* Category Content End */}
        {/* Partner Content End */}
        <div className="bg-[#373A42] py-24 p-5 md:py-10 text-white bg-cover bg-no-repeat bg-[url(./assets/images/accent-partner.png)]">
          <section className="flex gap-8 flex-col items-center my-10">
            <div className="flex bg-gray-400 gap-2.5 py-1.5 px-2.5 items-center rounded-full">
              <div className="w-8 h-0 rounded-t-sm border border-white"></div>
              <p className="text-xs font-semibold tracking-[3px]">PARTNER</p>
            </div>
            <p className="text-4xl text-center font-semibold">
              Our Trusted Partners
            </p>
            <p className="text-xs text-[#C1C5D0] font-normal mb-5">
              By companies like :
            </p>
            <div className="flex md:flex-row flex-col items-center gap-10">
              {partners.map((partner) => {
                return (
                  <div key={partner.id}>
                    <img
                      src={`http://localhost:8888/uploads/${partner.picture}`}
                      alt="Sponsor"
                    />
                  </div>
                );
              })}
            </div>
          </section>
        </div>
        {/* Partner Content End */}
      </main>
      {/* Footer Start */}
      <footer className="py-24">
        <div className="flex flex-col md:items-center p-2.5 md:p-0 gap-12 md:gap-20 bg-white">
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
                <li className="font-semibold">Features</li>
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
                <li className="font-semibold">Company</li>
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

export default Home;
