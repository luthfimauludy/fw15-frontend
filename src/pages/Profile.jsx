import React from "react";
import moment from "moment";
import http from "../helpers/http";
import Header from "../components/Header";
import Footer from "../components/Footer";
import defaultProfile from "../assets/images/default-profile-picture.jpg";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
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
import { useDispatch, useSelector } from "react-redux";
import { logout as logoutAction } from "../redux/reducers/auth";
import { Formik, Field } from "formik";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [profile, setProfile] = React.useState({});
  const [editEmail, setEditEmail] = React.useState(false);
  const [editPhoneNumber, setEditPhoneNumber] = React.useState(false);
  const [editBirthDate, setEditBirthDate] = React.useState(false);
  const [selectedPicture, setSelectedPicture] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  React.useEffect(() => {
    const getProfile = async () => {
      const { data } = await http(token).get("/profile");
      setProfile(data.results);
    };
    getProfile();
  }, []);

  React.useEffect(() => {
    console.log(selectedPicture);
  }, [selectedPicture]);

  const editProfile = async (values) => {
    setOpenModal(true);
    const form = new FormData();
    Object.keys(values).forEach((key) => {
      if (values[key]) {
        if (key === "birthDate") {
          form.append(
            key,
            moment(values[key], "DD-MM-YYYY").format("YYYY/MM/DD")
          );
        } else {
          form.append(key, values[key]);
        }
      }
    });
    if (selectedPicture) {
      form.append("picture", selectedPicture);
    }
    const { data } = await http(token).patch("/profile", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setProfile(data.results);
    setEditEmail(false);
    setEditPhoneNumber(false);
    setEditBirthDate(false);
    setOpenModal(false);
  };

  const doLogout = () => {
    window.localStorage.removeItem("token");
    dispatch(logoutAction(""));
    navigate("/login");
  };

  return (
    <>
      <div>
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
                  <div className="inline-block rounded-full p-[2px] bg-gradient-to-r from-primary to-[#A0D995]">
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
                  <div className="text-sm font-semibold">
                    {profile?.fullName}
                  </div>
                  <div className="text-xs">
                    {profile?.profession}, {profile?.nasionality}
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
              <Formik
                initialValues={{
                  fullName: profile?.fullName,
                  email: profile?.email,
                  phoneNumber: profile?.phoneNumber,
                  gender: profile?.gender ? "1" : "0",
                  profession: profile?.profession,
                  nasionality: profile?.nasionality,
                  birthDate:
                    profile?.birthDate &&
                    moment(profile.birthDate).format("YYYY-MM-DD"),
                }}
                onSubmit={editProfile}
                enableReinitialize
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  errors,
                  touched,
                  values,
                }) => (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white md:min-h-[825px] md:px-12 md:py-11 rounded-2xl"
                  >
                    <div className="text-xl text-black font-semibold tracking-wide px-5 md:px-0 mb-12">
                      Profile
                    </div>
                    <div className="flex flex-col-reverse md:flex-row px-5 md:px-0">
                      <div className="flex flex-col text-sm text-[#373A42]">
                        <div className="flex flex-col md:flex-row md:items-center mb-8 md:mb-4">
                          <div className="w-40 mb-2.5 md:mb-0">Name</div>
                          <input
                            className="input input-bordered px-4 md:flex-1 border-[#c1c5d0] outline-none rounded-2xl"
                            type="text"
                            name="fullName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.fullName}
                          />
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center mb-8 md:mb-4">
                          <div className="w-40 mb-4 md:mb-0">Email</div>
                          <div className="flex-1 flex">
                            {!editEmail && (
                              <span>
                                {profile?.email === null ? (
                                  <span className="text-red-400">Not Set</span>
                                ) : (
                                  profile?.email
                                )}
                              </span>
                            )}
                            {editEmail && (
                              <input
                                type="text"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                className="input input-bordered px-4 w-full border-[#c1c5d0] outline-none rounded-2xl"
                              />
                            )}
                            {!editEmail && (
                              <div className="text-primary ml-[15px] underline decoration-auto">
                                <button onClick={() => setEditEmail(true)}>
                                  Edit
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center mb-8 md:mb-4">
                          <div className="w-40 mb-4 md:mb-0">Phone Number</div>
                          <div className="flex-1 flex">
                            {!editPhoneNumber && (
                              <span>
                                {profile?.phoneNumber === null ? (
                                  <span className="text-red-400">Not Set</span>
                                ) : (
                                  profile?.phoneNumber
                                )}
                              </span>
                            )}
                            {editPhoneNumber && (
                              <input
                                type="text"
                                name="phoneNumber"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phoneNumber}
                                className="input input-bordered px-4 w-full border-[#c1c5d0] outline-none rounded-2xl"
                              />
                            )}
                            {!editPhoneNumber && (
                              <div className="text-primary ml-[15px] underline decoration-auto">
                                <button
                                  onClick={() => setEditPhoneNumber(true)}
                                >
                                  Edit
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center mb-8 md:mb-4">
                          <div className="w-40 mb-4 md:mb-0">Gender</div>
                          <div className="flex gap-5">
                            <label className="flex items-center gap-2.5">
                              <Field
                                type="radio"
                                name="gender"
                                value="0"
                                className="radio radio-primary"
                              />
                              <span>Male</span>
                            </label>
                            <label className="flex items-center gap-2.5">
                              <Field
                                type="radio"
                                name="gender"
                                value="1"
                                className="radio radio-primary"
                              />
                              <span>Female</span>
                            </label>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center mb-8 md:mb-4">
                          <div className="w-40 mb-2.5 md:mb-0">Profession</div>
                          <div className="flex-1">
                            <select
                              name="profession"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.profession}
                              className="select select-bordered min-w-full border-[#c1c5d0] rounded-2xl font-normal"
                            >
                              <option className="hidden">
                                Select Profession
                              </option>
                              <option>{profile?.profession}</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center mb-8 md:mb-4">
                          <div className="w-40 mb-2.5 md:mb-0">Nasionality</div>
                          <div className="flex-1">
                            <select
                              name="nasionality"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.nasionality}
                              className="select select-bordered min-w-full border-[#c1c5d0] rounded-2xl font-normal"
                            >
                              <option className="hidden">
                                Select Nasionality
                              </option>
                              <option>{profile?.nasionality}</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center mb-8">
                          <div className="w-40 mb-2.5 md:mb-0">
                            Birthday Date
                          </div>
                          <div className="flex-1 flex">
                            {!editBirthDate && (
                              <span>
                                {profile?.birthDate === null ? (
                                  <span className="text-red-400">Not Set</span>
                                ) : (
                                  moment(profile?.birthDate).format(
                                    "DD/MM/YYYY"
                                  )
                                )}
                              </span>
                            )}
                            {editBirthDate && (
                              <input
                                type="date"
                                name="birthDate"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.birthDate}
                                className="input input-bordered px-4 w-full border-[#c1c5d0] outline-none rounded-2xl"
                              />
                            )}
                            {!editBirthDate && (
                              <div className="text-primary ml-[15px] underline decoration-auto">
                                <button onClick={() => setEditBirthDate(true)}>
                                  Edit
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                        <div>
                          <button
                            className="bg-primary h-14 w-72 md:w-80 rounded-2xl shadow-lg shadow-primary text-white"
                            type="submit"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                      <div className="md:h-[303px] md:ml-12 md:pl-24 md:mt-[76px] md:border-l border-[#C1C5D040]">
                        <div className="inline-block rounded-full p-[2px] mb-6 ml-12 bg-gradient-to-r from-primary to-[#A0D995]">
                          {profile?.picture && (
                            <img
                              className="w-[137px] h-[137px] object-cover rounded-full border-8 border-white"
                              src={
                                profile?.picture?.startsWith("https")
                                  ? profile?.picture
                                  : profile?.picture === null
                                  ? defaultProfile
                                  : `http://${
                                      import.meta.env.VITE_BACKEND_URL
                                    }/uploads/${profile?.picture}`
                              }
                              alt={profile?.fullName}
                            />
                          )}
                        </div>
                        <div className="hidden md:inline text-sm text-primary font-semibold tracking-widest">
                          <label className="btn btn-outline btn-primary w-60 mb-6 rounded-lg border-primary normal-case">
                            <span>Choose Photo</span>
                            <input
                              name="picture"
                              onChange={(e) =>
                                setSelectedPicture(e.target.files[0])
                              }
                              className="hidden"
                              type="file"
                            />
                          </label>
                        </div>
                        <div className="hidden md:inline text-xs text-[#373A42]">
                          <p className="mb-4">Image size: max, 2 MB</p>
                          <p>Image formats: .JPG, .JPEG, .PNG</p>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
            {/* Right Content End */}
          </div>
          {/* Footer Start */}
          <Footer />
          {/* Footer End */}
        </main>
        {/* Main Content End */}
      </div>
      <input
        type="checkbox"
        id="loading"
        className="modal-toggle"
        checked={openModal}
      />
      <div className="modal">
        <div className="modal-box bg-transparent shadow-none">
          <div className="flex justify-center">
            <AiOutlineLoading3Quarters
              className="animate-spin"
              color="white"
              size={80}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
