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
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logout as logoutAction } from "../redux/reducers/auth";

const ChangePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [profile, setProfile] = React.useState({});
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");
  const [eyeOld, setEyeOld] = React.useState(false);
  const [oldPassword, setOldPassword] = React.useState(false);
  const [eyeNewPassword, setEyeNewPassword] = React.useState(false);
  const [newPassword, setNewPassword] = React.useState(false);
  const [eyeConfirmPassword, setEyeConfirmPassword] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = React.useState(false);

  const handleOldPassword = () => {
    setEyeOld(!oldPassword);
    setOldPassword(!eyeOld);
  };

  const handleNewPassword = () => {
    setEyeNewPassword(!newPassword);
    setNewPassword(!eyeNewPassword);
  };

  const handleConfirmPassword = () => {
    setEyeConfirmPassword(!confirmPassword);
    setConfirmPassword(!eyeConfirmPassword);
  };

  React.useEffect(() => {
    const getProfile = async () => {
      const { data } = await http(token).get("/profile");
      setProfile(data.results);
    };
    getProfile();
  }, [token]);

  const doChangePassword = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const { value: oldPassword } = e.target.oldPassword;
      const { value: newPassword } = e.target.newPassword;
      const { value: confirmPassword } = e.target.confirmPassword;
      const body = new URLSearchParams({
        oldPassword,
        newPassword,
        confirmPassword,
      }).toString();
      const { data } = await http(token).post("/change-password", body);

      setSuccessMessage(data.message);
      if (data.message) {
        setEyeOld(!oldPassword);
        setOldPassword(!eyeOld);
        setEyeNewPassword(!newPassword);
        setNewPassword(!eyeNewPassword);
        setEyeConfirmPassword(!confirmPassword);
        setConfirmPassword(!eyeConfirmPassword);
        setTimeout(() => {
          setSuccessMessage("");
        }, 2000);
      }
    } catch (error) {
      const message = error?.response?.data?.message;
      setErrorMessage(message);
    }
  };

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
                    <Link className="flex gap-4 mb-8" to="/profile">
                      <FiEdit3 size={25} color="#C1C5D0" />
                      Edit Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex gap-4 mb-8 text-primary"
                      to="/change-password"
                    >
                      <FiLock size={25} />
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
          <div className="flex-1 bg-white text-black md:min-h-[625px] md:px-12 md:pt-11 rounded-2xl">
            <div className="text-xl font-semibold tracking-wide mb-12">
              Change Password
            </div>
            <form
              onSubmit={doChangePassword}
              className="flex flex-col w-full gap-6 md:gap-8"
            >
              {errorMessage && (
                <div className="alert alert-error">{errorMessage}</div>
              )}
              {successMessage && (
                <div className="alert alert-success">{successMessage}</div>
              )}
              <div className="flex flex-col md:flex-row items-start md:items-center relative">
                <div className="md:w-48 w-full mb-2.5 md:mb-0">
                  Old Password
                </div>
                <input
                  className="w-full md:flex-1 h-14 px-7 outline-none border border-[#c1c5d0] rounded-lg"
                  type={oldPassword ? "text" : "password"}
                  name="oldPassword"
                  placeholder="Old Password"
                />
                <button
                  type="button"
                  onClick={handleOldPassword}
                  className="absolute top-[18px] right-4"
                >
                  {eyeOld ? (
                    <i className="">
                      <FiEyeOff size={20} />
                    </i>
                  ) : (
                    <i className="">
                      <FiEye size={20} />
                    </i>
                  )}
                </button>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center relative">
                <div className="md:w-48 w-full mb-2.5 md:mb-0">
                  New Password
                </div>
                <input
                  className="w-full md:flex-1 h-14 px-7 outline-none border border-[#c1c5d0] rounded-lg"
                  type={newPassword ? "text" : "password"}
                  name="newPassword"
                  placeholder="New Password"
                />
                <button
                  type="button"
                  onClick={handleNewPassword}
                  className="absolute top-[18px] right-4"
                >
                  {eyeNewPassword ? (
                    <i className="">
                      <FiEyeOff size={20} />
                    </i>
                  ) : (
                    <i className="">
                      <FiEye size={20} />
                    </i>
                  )}
                </button>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center relative">
                <div className="md:w-48 w-full mb-2.5 md:mb-0">
                  Confirm Password
                </div>
                <input
                  className="w-full md:flex-1 h-14 px-7 outline-none border border-[#c1c5d0] rounded-lg"
                  type={confirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                <button
                  type="button"
                  onClick={handleConfirmPassword}
                  className="absolute top-[18px] right-4"
                >
                  {eyeConfirmPassword ? (
                    <i className="">
                      <FiEyeOff size={20} />
                    </i>
                  ) : (
                    <i className="">
                      <FiEye size={20} />
                    </i>
                  )}
                </button>
              </div>
              <div>
                <button
                  className="bg-[#61764b] h-14 w-full rounded-2xl shadow-lg shadow-[#61764B] text-white"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </form>
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

export default ChangePassword;
