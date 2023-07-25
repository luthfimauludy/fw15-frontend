import React from "react";
import http from "../helpers/http";
import Header from "../components/Header";
import Footer from "../components/Footer";
import defaultPicture from "../assets/images/default-profile-picture.jpg";
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
import { useSelector, useDispatch } from "react-redux";
import { logout as logoutAction } from "../redux/reducers/auth";
import moment from "moment";

const MyWishlist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [profile, setProfile] = React.useState({});
  const [wishlists, setWishlists] = React.useState([]);

  React.useEffect(() => {
    const getProfile = async () => {
      const { data } = await http(token).get("/profile");
      setProfile(data.results);
    };
    getProfile();

    const getWishlistData = async () => {
      const { data } = await http(token).get("/wishlists");
      setWishlists(data.results);
    };
    getWishlistData();
  }, [token]);

  const doLogout = () => {
    window.localStorage.removeItem("token");
    dispatch(logoutAction(""));
    navigate("/login");
  };

  return (
    <>
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
                  {profile.picture === null ? (
                    <img
                      className="w-11 h-11 object-cover rounded-full border-2 border-white"
                      src={defaultPicture}
                    />
                  ) : (
                    <img
                      className="w-11 h-11 object-cover rounded-full border-2 border-white"
                      src={
                        profile?.picture?.startsWith("https")
                          ? profile.picture
                          : `http://${
                              import.meta.env.VITE_BACKEND_URL
                            }/uploads/${profile.picture}`
                      }
                      alt={profile?.fullName}
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col justify-between text-black">
                <div className="text-sm font-semibold">{profile?.fullName}</div>
                <div className="text-xs">
                  {profile?.profession === null ? (
                    <p className="text-center">-</p>
                  ) : (
                    <p>
                      {profile?.profession}, {profile?.nasionality}
                    </p>
                  )}
                </div>
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
                <Link
                  className="flex gap-7 mb-8 text-primary"
                  href="/my-wishlist"
                >
                  <FiHeart size={25} />
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
                  <button onClick={doLogout}>Logout</button>
                </Link>
              </li>
            </ul>
          </aside>
          {/* Left Content End */}
          {/* Right Content Start */}
          <div className="flex-1 text-black bg-white max-h-[825px] md:px-12 md:py-11 rounded-2xl md:mr-16">
            <div className="text-xl font-semibold tracking-wide mb-12">
              <p>My Wishlist</p>
            </div>
            <div className="flex flex-col gap-6">
              {wishlists.map((wishlist) => {
                return (
                  <div
                    key={`wishlist-${wishlist.id}`}
                    className="flex relative"
                  >
                    <div className="flex flex-col items-center mr-8">
                      <p className="text-sm text-[#FF8900] pt-3">
                        {moment(wishlist.date).format("DD")}
                      </p>
                      <p className="text-xs">
                        {moment(wishlist.date).format("ddd")}
                      </p>
                    </div>
                    <div className="grow">
                      <div>
                        <p className="md:text-2xl text-lg font-semibold mb-4 tracking-widest">
                          {wishlist.title}
                        </p>
                        <p className="text-xs mb-2">
                          {wishlist.location}, Indonesia
                        </p>
                        <p className="text-xs">
                          {moment(wishlist.date).format("ddd, DD MMM, LT")}
                        </p>
                      </div>
                    </div>
                    <button className="md:static absolute left-0 bottom-2">
                      <FiHeart size={25} className="text-primary" />
                    </button>
                  </div>
                );
              })}
            </div>
            {wishlists.length < 1 && (
              <div>
                <div className=" h-full flex flex-col items-center justify-center gap-7 ">
                  <div className="font-semibold text-2xl text-[#61764B]">
                    No Tickets Found
                  </div>
                  <div className="font-medium text base max-w-[300px] text-center">
                    It appears you haven&apos;t bought any Tickets yet. Maybe
                    try searching these?
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Right Content End */}
        </div>
        {/* Main Content End */}
        {/* Footer Start */}
        <Footer />
        {/* Footer End */}
      </main>
    </>
  );
};

export default MyWishlist;
