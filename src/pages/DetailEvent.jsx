import React from "react";
import moment from "moment";
import attendees from "../assets/images/profile3.jpg";
import maps from "../assets/images/maps.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import http from "../helpers/http";
import { useParams, Link } from "react-router-dom";
import { FiMapPin, FiClock } from "react-icons/fi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import ScrollToTop from "../components/ScrollToTop";
import { useSelector } from "react-redux";

const DetailEvent = () => {
  const { id } = useParams();
  const token = useSelector((state) => state.auth.token);
  const [event, setEvent] = React.useState({});
  const [wishlistBtn, setWishlistBtn] = React.useState(false);

  React.useEffect(() => {
    const getEventData = async () => {
      const { data } = await http().get(`/events/${id}`);
      setEvent(data.results);
    };
    if (id) {
      getEventData(id);
    }
  }, [id]);

  React.useEffect(() => {
    const eventId = { eventId: id };
    const qs = new URLSearchParams(eventId).toString();
    const fetchData = async () => {
      const { data } = await http(token).get(`/wishlists/check?${qs}`);
      const btnStatus = data.results;
      if (btnStatus) {
        setWishlistBtn(true);
      } else {
        setWishlistBtn(false);
      }
    };
    fetchData();
  }, [token, id]);

  const addRemoveWishlist = async () => {
    try {
      const eventId = { eventId: id };
      const qs = new URLSearchParams(eventId).toString();
      await http(token).post("/wishlists", qs);
      if (wishlistBtn) {
        setWishlistBtn(false);
      } else {
        setWishlistBtn(true);
      }
    } catch (err) {
      const message = err?.response?.data?.message;
      if (message) {
        console.log(message);
      }
    }
  };

  return (
    <>
      {/* Navbar Start */}
      <Header />
      {/* Navbar End */}
      <div className="md:bg-[#E9EDC9] md:pt-12">
        {/* Main Content Start */}
        <div className="flex md:flex-row flex-col justify-center gap-20 md:mx-[120px] mb-[450px] md:mb-24 bg-white rounded-2xl md:py-24 py-5 relative">
          {/* Left Content Start */}
          <aside className="relative md:px-0 px-3">
            <div className="rounded-3xl overflow-hidden md:w-[300px] h-[400px] mb-7 relative">
              {event?.picture && (
                <img
                  className="w-full h-full object-cover"
                  src={
                    event.picture.startsWith("https")
                      ? event.picture
                      : `http://localhost:8888/uploads/${event?.picture}`
                  }
                  alt="Event Banner"
                />
              )}
              <div className="absolute w-full h-full bottom-0 bg-gradient-to-b from-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,0.8)]"></div>
            </div>
            <div className="flex justify-center items-center text-xl font-semibold gap-2">
              <button type="button" onClick={addRemoveWishlist}>
                {wishlistBtn === true ? (
                  <FaHeart
                    className="md:static absolute top-24 right-5 text-[#C1C5D0]"
                    color="red"
                  />
                ) : (
                  <FaRegHeart className="md:static absolute top-24 right-5 text-[#C1C5D0]" />
                )}
              </button>
              <div className="hidden md:block text-black">Add to Wishlist</div>
            </div>
          </aside>
          {/* Left Content End */}
          {/* Right Content Start */}
          <div className="max-w-[450px] md:static absolute top-24">
            <div className="md:mb-0 mb-32 md:pl-0 pl-3">
              <p className="max-w-[233px] max-h-[72px] text-2xl font-semibold tracking-wider md:text-[#373A42] text-white mb-5">
                {event?.title}
              </p>
              <div className="flex md:flex-row flex-col justify-between gap-2 md:gap-0 mb-5">
                <div className="flex gap-2">
                  <FiMapPin color="black" size={25} />
                  <p className="md:text-[#373A42] text-white">
                    {event?.location}
                  </p>
                </div>
                <div className="flex gap-2">
                  <FiClock color="#FF3D71" size={25} />
                  <p className="md:text-[#373A42] text-white">
                    {moment(event?.date).format("ddd, DD MMM, LT")}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium mb-2.5 md:text-[#373A42] text-white">
                  Attendees
                </p>
                <div className="flex md:border-b border-[#E0E4F3] pb-5 mb-5">
                  <div className="w-8 h-8 rounded-2xl overflow-hidden -ml-0.5">
                    <img
                      className="object-cover w-full h-full"
                      src={attendees}
                      alt="profile"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-2xl overflow-hidden -ml-0.5">
                    <img
                      className="object-cover w-full h-full"
                      src={attendees}
                      alt="profile"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-2xl overflow-hidden -ml-0.5">
                    <img
                      className="object-cover w-full h-full"
                      src={attendees}
                      alt="profile"
                    />
                  </div>
                  <div className="flex w-8 h-8 rounded-2xl overflow-hidden -ml-0.5 relative">
                    <img
                      className="object-cover w-full h-full"
                      src={attendees}
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
              <div>
                <p className="text-xl font-semibold text-[#373A42] mb-5">
                  Event Detail
                </p>
                <p className="text-xs text-[rgba(55, 58, 66, 0.75)] mb-2.5">
                  {event?.descriptions}
                </p>
                <div className="text-xs font-medium text-[#61764B] mb-6">
                  <a href="#">Read More</a>
                </div>
                <p className="text-xl font-semibold text-[#373A42] mb-5">
                  Location
                </p>
                <img className="mb-12" src={maps} alt="Maps" />
                <div className="max-w-[315px]">
                  <Link
                    className="btn btn-primary normal-case w-full"
                    to={`/booking/${id}`}
                  >
                    Buy Tickets
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Right Content End */}
        </div>
        {/* Main Content End */}
        {/* Footer Start */}
        <Footer />
        {/* Footer End */}
        <ScrollToTop />
      </div>
    </>
  );
};

export default DetailEvent;
