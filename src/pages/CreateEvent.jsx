import React from "react";
import http from "../helpers/http";
import moment from "moment";
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

const CreateEvent = () => {
  const token = useSelector((state) => state.auth.token);
  const [events, setEvents] = React.useState([]);
  const [profile, setProfile] = React.useState({});

  React.useEffect(() => {
    async function getData() {
      const { data } = await http().get("/events", {
        params: { limit: 1000 },
      });
      setEvents(data.results);
    }
    getData();

    const getProfile = async () => {
      const { data } = await http(token).get("/profile");
      setProfile(data.results);
    };
    getProfile();
  }, []);

  return (
    <body className="relative">
      <div className="absolute z-10 w-full min-h-screen h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
        <div className="text-black bg-white min-w-[80%] min-h-[200px] rounded-xl p-10">
          <div className="mb-11 text-xl tracking-wider font-semibold">
            Create Event
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
                      src={
                        profile.picture.startsWith("https")
                          ? profile.picture
                          : `http://localhost:8888/uploads/${profile.picture}`
                      }
                      alt={profile?.fullName}
                    />
                  )}
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
                <Link
                  className="flex gap-7 mb-8 text-primary"
                  to="/manage-event"
                >
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
              {events.map((event) => {
                return (
                  <div className="flex" key={`event-${event.id}`}>
                    <div className="flex flex-col items-center mr-8">
                      <p className="text-sm text-[#FF8900] pt-3">
                        {moment(event.date).format("DD")}
                      </p>
                      <p className="text-xs">
                        {moment(event.date).format("ddd")}
                      </p>
                    </div>
                    <div className="grow">
                      <div>
                        <p className="md:text-2xl text-lg font-semibold mb-4 tracking-widest">
                          {event.title}
                        </p>
                        <p className="text-xs mb-2">{event.location}</p>
                        <p className="text-xs mb-2">
                          {moment(event.date).format("ddd, DD MMM, LT")}
                        </p>
                        <div className="flex gap-3.5 text-xs text-[#61764B]">
                          <Link to="/event">Detail</Link>
                          <Link to="/update-event">Update</Link>
                          <Link to="">Delete</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Right Content End */}
        </div>
        {/* Footer Start */}
        <Footer />
        {/* Footer End */}
      </main>
      {/* Main Content End */}
    </body>
  );
};

export default CreateEvent;
