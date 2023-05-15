import React from "react";
import moment from "moment";
import header from "../assets/images/toyFaces.png";
import http from "../helpers/http";
import Header from "../components/Header";
import Footer from "../components/Footer";
import attendees from "../assets/images/profile3.jpg";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Formik } from "formik";

const Home = () => {
  const navigate = useNavigate();
  // const [searchParams, setSearchParams] = useSearchParams;
  const [events, setEvents] = React.useState([]);
  const [eventCategories, setEventCategories] = React.useState([]);
  const [cities, setCities] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [partners, setPartners] = React.useState([]);
  const token = useSelector((state) => state.auth.token);

  async function getEventCategories(name) {
    const { data } = await http().get("/events", {
      params: { category: name },
    });
    setEventCategories(data.results);
  }

  React.useEffect(() => {
    async function getData() {
      const { data } = await http().get("/events", {
        params: { limit: 1000 },
      });
      setEvents(data.results);
    }
    getData();

    getEventCategories();

    async function getCitiesData() {
      const { data } = await http(token).get("/cities");
      setCities(data.results);
    }
    getCitiesData();

    async function getCategoriesData() {
      const { data } = await http(token).get("/categories", {
        params: { limit: 1000 },
      });
      setCategories(data.results);
    }
    getCategoriesData();

    async function getPartnersData() {
      const { data } = await http(token).get("/partners");
      setPartners(data.results);
    }
    getPartnersData();
  }, []);

  const onSearch = (values) => {
    const qs = new URLSearchParams(values).toString();
    navigate(`/search?${qs}`);
    // setSearchParams(values, "/search");
  };

  return (
    <>
      <header className="flex max-h-[720px] flex-col">
        {/* Navbar Start */}
        <Header />
        {/* Navbar End */}
        {/* Banner End */}
        <section className="flex md:flex-row flex-col md:px-24 py-10 items-center md:flex-1 bg-[#61764B] bg-cover bg-no-repeat bg-[url(./assets/images/accent-heading.png)]">
          <div className="md:flex-1 flex flex-col md:items-start items-center gap-5">
            <p className="text-xl md:text-5xl md:text-left text-center tracking-widest font-semibold max-w-[200px] md:max-w-[500px] text-white">
              Find events you love with our
            </p>
            <Formik
              initialValues={{ search: "", city: "" }}
              onSubmit={onSearch}
            >
              {({ handleBlur, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit} className="block md:w-full">
                  <div className="inline-flex items-center md:min-w-[500px] h-16 py-2 px-3 bg-white border rounded-xl">
                    <div className="flex items-center">
                      <CiSearch color="black" size={25} />
                      <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="search"
                        className="h-8 text-xs px-3 outline-none w-[100px] md:min-w-[250px]"
                        type="text"
                        placeholder="Search Event"
                      />
                    </div>
                    <div className="flex items-center">
                      <FiMapPin color="black" size={25} />
                      <select
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="city"
                        className="h-8 text-black outline-none px-3 appearance-none text-xs md:min-w-[150px]"
                      >
                        <option value="">All location</option>
                        {cities.map((city) => {
                          return (
                            <option
                              key={`cities-select=${city.id}`}
                              value={city.name}
                            >
                              {city.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-8 h-8 bg-[#FF3D71] text-white border rounded-lg"
                    >
                      &rarr;
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
          <div>
            <div className="people">
              <img src={header} alt="People" />
            </div>
          </div>
        </section>
        {/* Banner End */}
      </header>
      <main className="pb-24">
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
                    {event?.picture && (
                      <img
                        className="w-auto h-full object-cover"
                        src={
                          event.picture.startsWith("https")
                            ? event.picture
                            : `http://localhost:8888/uploads/${event.picture}`
                        }
                        alt={event.name}
                      />
                    )}
                    <div className="absolute bottom-0 w-full text-white flex flex-col gap-1 p-5 bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.5)]">
                      <div>{moment(event.date).format("ddd, DD MMM, LT")}</div>
                      <div className="font-semibold text-2xl tracking-widest">
                        {event.title}
                      </div>
                      <div className="flex ml-2">
                        <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2">
                          <img
                            className="object-cover w-full h-full"
                            src={attendees}
                            alt="profile 1"
                          />
                        </div>
                        <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2">
                          <img
                            className="object-cover w-full h-full"
                            src={attendees}
                            alt="profile 2"
                          />
                        </div>
                        <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2">
                          <img
                            className="object-cover w-full h-full"
                            src={attendees}
                            alt="profile 3"
                          />
                        </div>
                        <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2">
                          <img
                            className="object-cover w-full h-full"
                            src={attendees}
                            alt="profile 4"
                          />
                        </div>
                      </div>
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
        <section
          id="cities"
          className="m-14 bg-[#61764B] rounded-xl bg-center bg-[url(./assets/images/accent-location.png)] bg-cover bg-no-repeat md:p-24 p-8"
        >
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
          <div className="flex md:flex-row flex-col flex-1">
            <div className="flex gap-11">
              {categories.map((category) => {
                return (
                  <button
                    onClick={() => getEventCategories(category.name)}
                    className="flex justify-center items-center text-gray-400 hover:text-primary font-semibold border-b-2 border-transparent hover:border-primary"
                    key={`category-${category.id}`}
                  >
                    {category.name}
                  </button>
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
              {eventCategories.map((event) => {
                return (
                  <Link
                    to={`/detail-event/${event.id}`}
                    key={`event-category-${event.id}`}
                  >
                    <div className="w-72 h-80 rounded-3xl overflow-hidden flex flex-col">
                      <div className="flex-2 overflow-hidden">
                        <img
                          className="w-full h-full object-cover"
                          src={`http://localhost:8888/uploads/${event.picture}`}
                          alt="banner1"
                        />
                      </div>
                      <div className="relative w-full min-h-[160px] text-white flex flex-col justify-end gap-1 p-5 bg-primary">
                        <div className="text-sm font-medium">
                          {moment(event.date).format("ddd, DD MMM, LT")}
                        </div>
                        <div className="text-2xl font-semibold tracking-widest">
                          {event.title}
                        </div>
                        <div className="flex absolute -top-4 ml-2">
                          <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2">
                            <img
                              className="object-cover w-full h-full"
                              src={attendees}
                              alt="profile 1"
                            />
                          </div>
                          <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2">
                            <img
                              className="object-cover w-full h-full"
                              src={attendees}
                              alt="profile 2"
                            />
                          </div>
                          <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2">
                            <img
                              className="object-cover w-full h-full"
                              src={attendees}
                              alt="profile 3"
                            />
                          </div>
                          <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2">
                            <img
                              className="object-cover w-full h-full"
                              src={attendees}
                              alt="profile 4"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
              {eventCategories.length < 1 && (
                <div className="text-center font-semibold text-3xl text-black">
                  No data
                </div>
              )}
            </div>
            <div className="hidden md:block">
              <button className="w-11 h-11 bg-[#61764B] text-white border rounded-[10px]">
                &rarr;
              </button>
            </div>
          </div>
        </section>
        {/* Category Content End */}
        {/* Partner Content Start */}
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
      <Footer />
      {/* Footer End */}
    </>
  );
};

export default Home;
