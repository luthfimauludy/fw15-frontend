import React from "react";
import moment from "moment";
import http from "../helpers/http";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
import { useDispatch, useSelector } from "react-redux";
import { logout as logoutAction } from "../redux/reducers/auth";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [profile, setProfile] = React.useState({});

  React.useEffect(() => {
    const getProfile = async () => {
      const { data } = await http(token).get("/profile");
      setProfile(data.results);
    };
    getProfile();
  }, []);

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
                  {profile?.picture && (
                    <img
                      className="w-11 h-11 object-cover rounded-full border-2 border-white"
                      src={`http://localhost:8888/uploads/${profile?.picture}`}
                      alt="Profile"
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col justify-between text-black">
                <div className="text-sm font-semibold">{profile?.fullName}</div>
                <div className="text-xs">Entrepreneur, ID</div>
              </div>
            </div>
            <ul className="text-sm text-black font-semibold">
              <li className="flex gap-4 mb-8">
                <FiUser size={25} color="#C1C5D0" />
                Profile
              </li>
              <li>
                <ul className="ml-12">
                  <li className="flex gap-4 mb-8 relative">
                    <FiCreditCard size={25} color="#C1C5D0" />
                    Card
                    <div className="absolute w-28 border border-black top-2"></div>
                  </li>
                  <li>
                    <Link
                      className="flex gap-4 mb-8 text-primary"
                      to="/profile"
                    >
                      <FiEdit3 size={25} />
                      Edit Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="flex gap-4 mb-8" to="/change-password">
                      <FiLock size={25} color="#C1C5D0" />
                      Change Password
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="flex gap-4 mb-8" to="/manage-event">
                  <FiPlusCircle size={25} color="#C1C5D0" />
                  Create Event
                </Link>
              </li>
              <li>
                <Link className="flex gap-4 mb-8" to="/my-booking">
                  <FiList size={25} color="#C1C5D0" />
                  My Booking
                </Link>
              </li>
              <li>
                <Link className="flex gap-4 mb-8" to="/my-wishlist">
                  <FiHeart size={25} color="#C1C5D0" />
                  My Wishlist
                </Link>
              </li>
              <li>
                <Link className="flex gap-4 mb-8" to="">
                  <FiSettings size={25} color="#C1C5D0" />
                  Settings
                </Link>
              </li>
              <li>
                <Link className="flex gap-4 mb-8" to="/">
                  <FiLogOut size={25} color="#F03800" />
                  <button onClick={doLogout}>Logout</button>
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
              <form className="flex flex-col-reverse md:flex-row px-5 md:px-0">
                <div className="flex flex-col text-sm text-[#373A42]">
                  <div className="flex flex-col md:flex-row md:items-center mb-8">
                    <label className="md:w-48 mb-2.5 md:mb-0" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="md:flex-1 h-14 px-7 border border-[#c1c5d0] outline-none rounded-2xl"
                      type="text"
                      name="name"
                      placeholder={profile?.fullName}
                    />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center mb-8 md:mb-12">
                    <label className="w-48 mb-4 md:mb-0" htmlFor="email">
                      Email
                    </label>
                    <div className="flex">
                      <p>{profile?.email}</p>
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
                      <p>{profile?.phoneNumber}</p>
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
                        <option selected>{profile?.profession}</option>
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
                        <option selected>{profile?.nasionality}</option>
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
                        {moment(profile?.birthDate).format("DD/MM/YYYY")}
                      </div>
                      <div className="text-[#61764B] ml-[15px] underline decoration-auto">
                        <a href="#">Edit</a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="bg-[#61764B] h-14 w-72 md:w-80 rounded-2xl shadow-lg shadow-[#61764B] text-white"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </div>
                <div className="md:h-[303px] md:ml-12 md:pl-12 md:mt-[76px] md:border-l border-[#C1C5D040]">
                  <div>
                    <div className="inline-block ml-14 mb-12 rounded-full p-[2px] bg-gradient-to-r from-[#61764B] to-[#A0D995]">
                      {profile?.picture && (
                        <img
                          className="w-[137px] h-[137px] object-cover rounded-full border-8 border-white"
                          src={`http://localhost:8888/uploads/${profile?.picture}`}
                          alt="Profile"
                        />
                      )}
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
              </form>
            </div>
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

export default Profile;
