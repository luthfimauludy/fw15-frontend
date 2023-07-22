import React from "react";
import http from "../helpers/http";
import moment from "moment";
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
import { useSelector, useDispatch } from "react-redux";
import { logout as logoutAction } from "../redux/reducers/auth";
import { AiOutlineCloseCircle, AiOutlineLoading3Quarters, AiOutlinePicture } from "react-icons/ai";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  title: Yup.string().required("Title cannot be empty!"),
  cityId: Yup.string().required("City cannot be empty!"),
  categoryId: Yup.string().required("Category cannot be empty!"),
  date: Yup.string().required("Date cannot be empty!"),
  descriptions: Yup.string().required("Descriptions cannot be empty!"),
});
const validationSchemaUpdate = Yup.object({
  title: Yup.string().required("Title cannot be empty!"),
  descriptions: Yup.string().required("Descriptions cannot be empty!"),
});

const ManageEvent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [events, setEvents] = React.useState([]);
  const [detailEvents, setDetailEvents] = React.useState({});
  const [profile, setProfile] = React.useState({});
  const [categories, setCategories] = React.useState([]);
  const [locations, setLocations] = React.useState([]);
  const [openModal, setOpenModal] = React.useState(false);
  const [openModalEvent, setOpenModalEvent] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState("");
  const [selectedPicture, setSelectedPicture] = React.useState(false);
  const [pictureURI, setPictureURI] = React.useState("");
  const [pictureErr, setPictureErr] = React.useState(true);
  const [selectedEventId, setSelectedEventId] = React.useState(null);
  const [modalAction, setModalAction] = React.useState("");
  const [editDate, setEditDate] = React.useState(false);

  React.useEffect(() => {
    async function getDataEvents() {
      const { data } = await http(token).get(
        "/events/manage?sort=id&sortBy=desc"
      );
      setTotalPage(data.totalPage);
      setEvents(data.results);
    }
    if (token) {
      getDataEvents();
    }

    const getProfile = async () => {
      const { data } = await http(token).get("/profile");
      setProfile(data.results);
    };
    getProfile();
  }, [token]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage + 1 <= totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  React.useEffect(() => {
    const getCategories = async () => {
      const { data } = await http(token).get("/categories?limit=10");
      setCategories(data.results);
    };
    if (token) {
      getCategories();
    }
  }, [token, setCategories]);

  React.useEffect(() => {
    const getLocations = async () => {
      const { data } = await http(token).get("/cities");
      setLocations(data.results);
    };
    if (token) {
      getLocations();
    }
  }, [token, setLocations]);

  const updateEvent = React.useCallback(async () => {
    const { data } = await http(token).get(
      `/events/manage?page=${currentPage}&limit=5&sort=id&sortBy=desc`
    );
    setEvents(data.results);
  }, [token, currentPage]);

  const fileToDataUrl = (file) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setPictureURI(reader.result);
    });
    reader.readAsDataURL(file);
  };

  const changePicture = (e) => {
    const file = e.target.files[0];
    setSelectedPicture(file);
    fileToDataUrl(file);
  };

  const handleModalEvent = async (paramId, action) => {
    setSelectedEventId(paramId);
    setModalAction(action);
    setOpenModalEvent(true);
    if (action === "detail" || action === "update") {
      const { data } = await http(token).get(`/events/${paramId}`);
      setDetailEvents(data.results);
    }
  };

  const handleCloseModalEvent = () => {
    setModalAction("");
    setSelectedEventId(null);
    setOpenModalEvent(false);
    setDetailEvents({});
    setSelectedPicture(false);
    setEditDate(false);
  };

  const handleDeleteEvent = async () => {
    setOpenModal(true);
    if (selectedEventId) {
      const { data } = await http(token).delete(
        `/events/manage/${selectedEventId}`
      );
      console.log(data.message);
      updateEvent();
      setModalAction("");
      setSelectedEventId(null);
      setOpenModalEvent(false);
      setOpenModal(false);
    }
  };

  const doCreateEvent = async (values, { resetForm }) => {
    setOpenModal(true);
    if (!selectedPicture) {
      setOpenModal(false);
      setPictureErr(false);
      return;
    } else {
      setPictureErr(true);
    }
    const form = new FormData();
    Object.keys(values).forEach((key) => {
      if (values[key]) {
        if (key === "date") {
          form.append(key, moment(values[key]).format("YYYY-MM-DD"));
        } else {
          form.append(key, values[key]);
        }
      }
    });
    if (selectedPicture) {
      form.append("picture", selectedPicture);
    }

    await http(token).post("/events/manage", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setCurrentPage(1);
    updateEvent();
    setModalAction("");
    setSelectedEventId(null);
    setOpenModalEvent(false);
    setDetailEvents({});
    setSelectedPicture(false);
    setEditDate(false);
    setOpenModal(false);
    resetForm();
  };

  const doUpdateEvent = async (values, { resetForm }) => {
    setOpenModal(true);
    const form = new FormData();
    Object.keys(values).forEach((key) => {
      if (values[key]) {
        if (key === "date") {
          form.append(key, moment(values[key]).format("YYYY-MM-DD"));
        } else {
          form.append(key, values[key]);
        }
      }
    });
    if (selectedPicture) {
      form.append("picture", selectedPicture);
    }
    await http(token).patch(`/events/manage/${selectedEventId}`, form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    updateEvent();
    setModalAction("");
    setSelectedEventId(null);
    setOpenModalEvent(false);
    setDetailEvents({});
    setSelectedPicture(false);
    setEditDate(false);
    setOpenModal(false);
    resetForm();
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
                  <button onClick={doLogout}>Logout</button>
                </Link>
              </li>
            </ul>
          </aside>
          {/* Left Content End */}
          {/* Right Content Start */}
          <div className="flex-1 text-black bg-white md:px-12 md:py-11 rounded-2xl md:mr-16 relative">
            <div className="flex md:flex-row flex-col gap-3 justify-between mb-10 md:mb-0">
              <div className="text-xl font-semibold tracking-wide md:mb-12">
                Manage Event
              </div>
              <div className="w-32 h-14 rounded-2xl flex justify-center items-center">
                <button
                  onClick={() => handleModalEvent("", "create")}
                  className="flex justify-center items-center w-[125px] h-[50px] text-xs text-[#61764B] rounded-2xl bg-[#E9EDC9]"
                >
                  Create
                </button>

                <input
                  type="checkbox"
                  id="my_modal_6"
                  className="modal-toggle"
                  checked={openModalEvent}
                />
                <div className="modal">
                  <div
                    className={`modal-box mx-4 w-full md:w-[90%] ${
                      modalAction !== "delete"
                        ? "lg:max-w-[900px]"
                        : "lg:max-w-[600px]"
                    }  bg-white`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="text-[20px] text-[#373a42] font-semibold tracking-[1px]">
                        {modalAction === "create" && "Create Event"}
                        {modalAction === "detail" && "Detail Event"}
                        {modalAction === "update" && "Edit Event"}
                        {modalAction === "delete" &&
                          "Are you sure to delete this event ?"}
                      </div>
                      <div>
                        {modalAction !== "delete" ? (
                          <button className="" onClick={handleCloseModalEvent}>
                            <i className="text-red-400">
                              <AiOutlineCloseCircle size={30} />
                            </i>
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    {modalAction === "create" && (
                      <Formik
                        initialValues={{
                          title: "",
                          cityId: "",
                          categoryId: "",
                          date: "",
                          descriptions: "",
                        }}
                        validationSchema={validationSchema}
                        onSubmit={doCreateEvent}
                        enableReinitialize={true}
                      >
                        {({
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          values,
                          errors,
                          touched,
                        }) => (
                          <form onSubmit={handleSubmit}>
                            <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-9">
                              <div className="flex items-start w-full flex-1">
                                <div className="flex flex-col gap-3.5 w-full">
                                  <div className="flex flex-col align-start justify-start gap-3.5 w-full">
                                    <div className="text-sm text-[#373a42] tracking-[1px]">
                                      Name
                                    </div>
                                    <div className="w-full">
                                      <input
                                        name="title"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.title}
                                        type="text"
                                        className="input input-bordered w-full px-3 h-[55px] border-primary capitalize"
                                        placeholder="Title"
                                      />
                                    </div>
                                    {errors.title && touched.title && (
                                      <label htmlFor="title" className="label">
                                        <span className="label-text-alt text-error">
                                          {errors.title}
                                        </span>
                                      </label>
                                    )}
                                  </div>
                                  <div className="flex flex-col align-start justify-start gap-3.5 w-full">
                                    <div className="text-sm text-[#373a42] tracking-[1px]">
                                      Location
                                    </div>
                                    <div className="w-full">
                                      <select
                                        name="cityId"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="select select-bordered w-full px-3 h-[55px] border-primary capitalize"
                                      >
                                        <option className="hidden">
                                          Select Location
                                        </option>
                                        {locations.map((item) => {
                                          return (
                                            <React.Fragment
                                              key={`location-${item.id}`}
                                            >
                                              <option
                                                className="capitalize"
                                                value={item.id}
                                              >
                                                {item.name}
                                              </option>
                                            </React.Fragment>
                                          );
                                        })}
                                      </select>
                                    </div>
                                    {errors.cityId && touched.cityId && (
                                      <label htmlFor="cityId" className="label">
                                        <span className="label-text-alt text-error">
                                          {errors.cityId}
                                        </span>
                                      </label>
                                    )}
                                  </div>

                                  <div className="flex flex-col align-start justify-start gap-3.5 w-full">
                                    <div className="text-sm text-[#373a42] tracking-[1px]">
                                      Category
                                    </div>
                                    <div className="w-full">
                                      <select
                                        name="categoryId"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="select select-bordered w-full px-3 h-[55px] border-primary capitalize"
                                      >
                                        <option className="hidden">
                                          Select Category
                                        </option>
                                        {categories.map((item) => {
                                          return (
                                            <React.Fragment
                                              key={`location-${item.id}`}
                                            >
                                              <option
                                                className="capitalize"
                                                value={item.id}
                                              >
                                                {item.name}
                                              </option>
                                            </React.Fragment>
                                          );
                                        })}
                                      </select>
                                    </div>
                                    {errors.categoryId &&
                                      touched.categoryId && (
                                      <label
                                        htmlFor="categoryId"
                                        className="label"
                                      >
                                        <span className="label-text-alt text-error">
                                          {errors.categoryId}
                                        </span>
                                      </label>
                                    )}
                                  </div>
                                  <div className="flex flex-col align-start justify-start gap-3.5 w-full">
                                    <div className="text-sm tracking-[1px] capitalize">
                                      Date Time Show
                                    </div>
                                    <div className="w-full">
                                      <input
                                        name="date"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.date}
                                        type="date"
                                        className="input input-bordered w-full px-3 h-[55px] border-primary"
                                      />
                                    </div>
                                    {errors.date && touched.date && (
                                      <label htmlFor="date" className="label">
                                        <span className="label-text-alt text-error">
                                          {errors.date}
                                        </span>
                                      </label>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-start w-full flex-1">
                                <div className="flex flex-col gap-3.5 w-full justify-center items-center">
                                  {!selectedPicture && (
                                    <div className="w-[291px] h-[332px] rounded-xl relative flex justify-center items-center">
                                      <i className="">
                                        <AiOutlinePicture size={50} />
                                      </i>
                                      <div className="absolute bg-white border-2 rounded-xl border-slate-500 w-full h-full top-0 left-0 opacity-50 text-white flex justify-center items-center"></div>
                                    </div>
                                  )}
                                  {selectedPicture && (
                                    <div className="w-[291px] h-[352px] relative overflow-hidden rounded-xl">
                                      <img
                                        className="w-[291px] h-[353px] rounded-xl object-cover border-4 border-white"
                                        src={pictureURI}
                                        alt="profile"
                                      />
                                      <div className="absolute bg-gray-400 w-full h-full top-0 left-0 opacity-50 text-white flex justify-center items-center"></div>
                                    </div>
                                  )}
                                  <div className="w-[291px] flex flex-col justify-center">
                                    <label className="btn bg-[#fff] w-full h-10 rounded-xl border-2 border-primary text-primary text-sm font-semibold tracking-[1px] mb-4">
                                      <span>Choose photo</span>
                                      <input
                                        name="picture"
                                        onChange={changePicture}
                                        className="hidden"
                                        type="file"
                                      />
                                    </label>
                                    {!pictureErr && (
                                      <label className="label">
                                        <span className="label-text-alt text-error">
                                          Please insert event picture!
                                        </span>
                                      </label>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-[20px] tracking-[1px] mt-11">
                              <div className="text-sm tracking-[1px] mb-3">
                                Detail
                              </div>
                              <div className="w-full">
                                <textarea
                                  name="descriptions"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.descriptions}
                                  className="border-2 border-primary w-full rounded-xl text-sm tracking-[1px] px-3.5 py-3.5"
                                  cols="30"
                                  rows="3"
                                  placeholder="Input Detail"
                                ></textarea>
                              </div>
                              {errors.descriptions && touched.descriptions && (
                                <label htmlFor="descriptions" className="label">
                                  <span className="label-text-alt text-error">
                                    {errors.descriptions}
                                  </span>
                                </label>
                              )}
                            </div>
                            <div className="w-full flex items-center justify-end mt-11">
                              <button
                                className="shadow-for-all-button w-[315px] h-[55px] rounded-xl bg-[#61764B] text-white text-sm font-semibold tracking-[1px]"
                                type="submit"
                              >
                                Confirm
                              </button>
                            </div>
                          </form>
                        )}
                      </Formik>
                    )}

                    {modalAction === "detail" && (
                      <div>
                        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-9">
                          <div className="flex items-start w-full flex-1">
                            <div className="flex flex-col gap-3.5 w-full">
                              <div className="flex flex-col align-start justify-start gap-3.5 w-full">
                                <div className="text-sm text-[#373a42] tracking-[1px]">
                                  Name
                                </div>
                                <div className="w-full text-lg font-semibold capitalize">
                                  {detailEvents?.title}
                                </div>
                              </div>
                              <div className="flex flex-col align-start justify-start gap-3.5 w-full">
                                <div className="text-sm text-[#373a42] tracking-[1px]">
                                  Location
                                </div>
                                <div className="w-full">
                                  <div className="w-full text-lg font-semibold capitalize">
                                    {detailEvents?.location}
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-col align-start justify-start gap-3.5 w-full">
                                <div className="text-sm text-[#373a42] tracking-[1px]">
                                  Category
                                </div>
                                <div className="w-full">
                                  <div className="w-full text-lg font-semibold capitalize">
                                    {detailEvents?.category}
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col align-start justify-start gap-3.5 w-full">
                                <div className="text-sm tracking-[1px] capitalize">
                                  Date Time Show
                                </div>
                                <div className="w-full">
                                  <div className="w-full text-lg font-semibold capitalize">
                                    {moment(detailEvents?.date).format(
                                      "LLLL"
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start w-full flex-1">
                            <div className="flex flex-col gap-3.5 w-full justify-center items-center">
                              {detailEvents && (
                                <div className="w-[291px] h-[352px] relative overflow-hidden rounded-xl">
                                  {
                                    <img
                                      className="w-full h-full border-4 border-white rounded-xl object-cover"
                                      src={detailEvents?.picture}
                                    />
                                  }
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="text-[20px] tracking-[1px] mt-11">
                          <div className="text-sm tracking-[1px] mb-3">
                            Detail
                          </div>
                          <div className="w-full">
                            <div className="w-full text-lg font-semibold capitalize">
                              {detailEvents?.descriptions}
                            </div>
                          </div>
                        </div>
                        <div className="w-full flex items-center justify-center md:justify-end mt-11">
                          <button
                            onClick={handleCloseModalEvent}
                            className="shadow-for-all-button w-[315px] h-[55px] rounded-xl bg-[#61764B] text-white text-sm font-semibold tracking-[1px]"
                            type="button"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    )}
                    {modalAction === "update" && (
                      <Formik
                        initialValues={{
                          title: detailEvents?.title,
                          cityId: detailEvents?.cityId,
                          categoryId: detailEvents?.categoryId,
                          date: detailEvents?.date,
                          descriptions: detailEvents?.descriptions,
                        }}
                        validationSchema={validationSchemaUpdate}
                        onSubmit={doUpdateEvent}
                        enableReinitialize={true}
                      >
                        {({
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          values,
                          errors,
                          touched,
                        }) => (
                          <form onSubmit={handleSubmit}>
                            <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-9">
                              <div className="flex items-start w-full flex-1">
                                <div className="flex flex-col gap-3.5 w-full">
                                  <div className="flex flex-col align-start justify-start gap-3.5 w-full">
                                    <div className="text-sm text-[#373a42] tracking-[1px]">
                                      Name
                                    </div>
                                    <div className="w-full">
                                      <input
                                        name="title"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.title}
                                        type="text"
                                        className="input input-bordered w-full px-3 h-[55px] border-primary capitalize"
                                        placeholder="Title"
                                      />
                                    </div>
                                    {errors.title && touched.title && (
                                      <label htmlFor="title" className="label">
                                        <span className="label-text-alt text-error">
                                          {errors.title}
                                        </span>
                                      </label>
                                    )}
                                  </div>
                                  <div className="flex flex-col align-start justify-start gap-3.5 w-full">
                                    <div className="text-sm text-[#373a42] tracking-[1px]">
                                      Location
                                    </div>
                                    <div className="w-full">
                                      <select
                                        name="cityId"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="select select-bordered w-full px-3 h-[55px] border-primary capitalize"
                                        value={values.location}
                                      >
                                        <option className="hidden">
                                          {detailEvents?.location}
                                        </option>
                                        {locations.map((item) => {
                                          return (
                                            <React.Fragment
                                              key={`location-${item.id}`}
                                            >
                                              <option
                                                className="capitalize"
                                                value={item.id}
                                              >
                                                {item.name}
                                              </option>
                                            </React.Fragment>
                                          );
                                        })}
                                      </select>
                                    </div>
                                    {errors.cityId && touched.cityId && (
                                      <label htmlFor="cityId" className="label">
                                        <span className="label-text-alt text-error">
                                          {errors.cityId}
                                        </span>
                                      </label>
                                    )}
                                  </div>

                                  <div className="flex flex-col align-start justify-start gap-3.5 w-full">
                                    <div className="text-sm text-[#373a42] tracking-[1px]">
                                      Category
                                    </div>
                                    <div className="w-full">
                                      <select
                                        name="categoryId"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="select select-bordered w-full px-3 h-[55px] border-primary capitalize"
                                        value={values.categoryId}
                                      >
                                        <option className="hidden">
                                          {detailEvents?.category}
                                        </option>
                                        {categories.map((item) => {
                                          return (
                                            <React.Fragment
                                              key={`location-${item.id}`}
                                            >
                                              <option
                                                className="capitalize"
                                                value={item.id}
                                              >
                                                {item.name}
                                              </option>
                                            </React.Fragment>
                                          );
                                        })}
                                      </select>
                                    </div>
                                    {errors.categoryId &&
                                      touched.categoryId && (
                                      <label
                                        htmlFor="categoryId"
                                        className="label"
                                      >
                                        <span className="label-text-alt text-error">
                                          {errors.categoryId}
                                        </span>
                                      </label>
                                    )}
                                  </div>
                                  <div className="flex flex-col align-start justify-start gap-3.5 w-full">
                                    <div className="text-sm  tracking-[1px] capitalize">
                                      Date Time Show
                                    </div>
                                    <div className="w-full flex items-center justify-between">
                                      {!editDate && (
                                        <span>
                                          {detailEvents?.date === null ? (
                                            <span className="text-red-400">
                                              Not set
                                            </span>
                                          ) : (
                                            moment(
                                              detailEvents?.date
                                            ).format("DD/MM/YYYY")
                                          )}
                                        </span>
                                      )}

                                      {editDate && (
                                        <input
                                          name="date"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.date}
                                          type="date"
                                          className="input input-bordered w-full px-3 h-[55px] border-primary"
                                        />
                                      )}
                                      {!editDate && (
                                        <div>
                                          <button
                                            onClick={() => setEditDate(true)}
                                            className="text-primary font-semibold text-sm"
                                          >
                                            Edit
                                          </button>
                                        </div>
                                      )}
                                    </div>
                                    {errors.date && touched.date && (
                                      <label htmlFor="date" className="label">
                                        <span className="label-text-alt text-error">
                                          {errors.date}
                                        </span>
                                      </label>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-start w-full flex-1">
                                <div className="flex flex-col gap-3.5 w-full justify-center items-center">
                                  {!selectedPicture && (
                                    <div className="w-[291px] h-[332px] rounded-xl relative flex justify-center items-center">
                                      <img
                                        className="w-full h-full border-4 border-white rounded-xl object-cover"
                                        src={detailEvents?.picture}
                                      />
                                    </div>
                                  )}
                                  {selectedPicture && (
                                    <div className="w-[291px] h-[352px] relative overflow-hidden rounded-xl">
                                      <img
                                        className="w-[291px] h-[353px] rounded-xl object-cover border-4 border-white"
                                        src={pictureURI}
                                        alt="profile"
                                      />
                                      <div className="absolute bg-gray-400 w-full h-full top-0 left-0 opacity-50 text-white flex justify-center items-center"></div>
                                    </div>
                                  )}
                                  <div className="w-[291px] flex flex-col justify-center">
                                    <label className="btn bg-[#fff] w-full h-10 rounded-xl border-2 border-primary text-primary text-sm font-semibold tracking-[1px] mb-4">
                                      <span>Choose photo</span>
                                      <input
                                        name="picture"
                                        onChange={changePicture}
                                        className="hidden"
                                        type="file"
                                      />
                                    </label>
                                    {!pictureErr && (
                                      <label className="label">
                                        <span className="label-text-alt text-error">
                                          Please insert event picture!
                                        </span>
                                      </label>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-[20px] tracking-[1px] mt-11">
                              <div className="text-sm tracking-[1px] mb-3">
                                Detail
                              </div>
                              <div className="w-full">
                                <textarea
                                  name="descriptions"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.descriptions}
                                  className="border-2 border-primary w-full rounded-xl text-sm tracking-[1px] px-3.5 py-3.5"
                                  cols="30"
                                  rows="3"
                                  placeholder="Input Detail"
                                ></textarea>
                              </div>
                              {errors.descriptions && touched.descriptions && (
                                <label htmlFor="descriptions" className="label">
                                  <span className="label-text-alt text-error">
                                    {errors.descriptions}
                                  </span>
                                </label>
                              )}
                            </div>
                            <div className="w-full flex items-center justify-end mt-11">
                              <button
                                className="shadow-for-all-button w-[315px] h-[55px] rounded-xl bg-primary text-white text-sm font-semibold tracking-[1px]"
                                type="submit"
                              >
                                Update
                              </button>
                            </div>
                          </form>
                        )}
                      </Formik>
                    )}
                    {modalAction === "delete" && (
                      <div className="flex items-center justify-end gap-2 h-full">
                        <div>
                          <button
                            className="bg-primary w-16 p-2 rounded-lg text-white"
                            onClick={handleDeleteEvent}
                          >
                            Yes
                          </button>
                        </div>
                        <div>
                          <button
                            className="bg-secondary w-16 p-2 rounded-lg text-white"
                            onClick={handleCloseModalEvent}
                          >
                            No
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
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
                          <button onClick={() => handleModalEvent(event.id, "detail")}>Detail</button>
                          <button onClick={() => handleModalEvent(event.id, "update")}>Update</button>
                          <button onClick={() => handleModalEvent(event.id, "delete")}>Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {events.length < 1 && (
              <div>
                <div className=' h-full flex flex-col items-center justify-center gap-7 '>
                  <div className='font-semibold text-2xl text-[#61764B]'>No Event Found</div>
                  <div className='font-medium text base max-w-[300px] text-center'>It appears you haven&apos;t added any Events yet. Maybe try searching these?</div>
                </div>
              </div>
            )}
            {events.length >= 1 && (
              <div className='flex justify-start items-center gap-4 absolute right-12 bottom-12'>
                <div className='text-primary'>
                  Page {currentPage} of {totalPage}
                </div>
                <button onClick={handlePrevious} className='btn btn-secondary text-white capitalize'>
                  Prev
                </button>
                <button onClick={handleNext} className='btn btn-primary text-white capitalize'>
                  Next
                </button>
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

export default ManageEvent;
