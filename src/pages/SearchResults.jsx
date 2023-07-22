import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import http from "../helpers/http";
import { Link } from "react-router-dom";
import moment from "moment";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Formik } from "formik";
import { CiSearch } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = React.useState([]);
  const [cities, setCities] = React.useState([]);
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const limitItem = async (event) => {
    const limit = event.target.value;
    const { data } = await http().get("/events", { params: { limit } });
    setSearchResults(data);
  };

  React.useEffect(() => {
    const getEventBySearch = async () => {
      const { data } = await http().get("/events", { params: searchParams });
      setSearchResults(data);
    };

    const getCities = async () => {
      const {data} = await http(token).get("/cities?limit=10");
      setCities(data.results);
    };
    getEventBySearch();
    getCities();
  }, [token, searchParams]);

  const pagination = async (page = 1) => {
    const {data} = await http(token).get("/events", {
      params: {page: page},
    });
    setSearchResults(data);
  };

  const onSearch = (values) => {
    const qs = new URLSearchParams(values).toString();
    navigate(`/search?${qs}`);
  };

  return (
    <>
      <Header />
      <div className="bg-primary">
        <div className="flex justify-between items-center">
          <div className="min-w-[35%] px-10 pt-10">
            <label className="text-white">
              Show{"  "}
              <select onChange={limitItem} className="text-black p-1 rounded-md">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              {"  "}
              entries
            </label>
          </div>
          <Formik
            initialValues={{ search: "", city: "" }}
            onSubmit={onSearch}
          >
            {({ handleBlur, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit} className="block md:w-full pt-10">
                <div className="inline-flex items-center md:min-w-[450px] h-16 py-2 px-3 bg-white border rounded-xl">
                  <div className="flex items-center">
                    <CiSearch color="black" size={25} />
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="search"
                      className="h-8 text-xs text-black px-3 outline-none w-[100px] md:min-w-[180px]"
                      type="text"
                      placeholder="Search Event"
                    />
                  </div>
                  <div className="flex items-center border-l-2 pl-2">
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
        <div className="flex justify-center items-center gap-5 pt-5">
          <button
            disabled={searchResults.results?.pageInfo?.page <= 1}
            onClick={() => pagination(searchResults.results?.pageInfo?.page - 1)}
            className="btn bg-secondary text-white border-none normal-case hover:bg-primary"
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            disabled={searchResults.results?.pageInfo?.page === searchResults.results?.pageInfo?.totalPage}
            onClick={() => pagination(searchResults.results?.pageInfo?.page + 1)}
            className="btn bg-secondary text-white border-none normal-case hover:bg-primary"
          >
            <FaArrowRight size={25} />
          </button>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-10 mb-20">
          {searchResults?.results?.rows?.length === 0 ? (
            <div></div>
          ) : (
            searchResults?.results?.rows?.map((event) => {
              return (
                <Link to={`/detail-event/${event.id}`} key={`event-${event.id}`}>
                  <div className="relative max-w-64 h-[376px] rounded-3xl overflow-hidden">
                    <img
                      className="w-auto h-full object-cover"
                      src={event.picture.startsWith("https") ? event.picture : `http://localhost:8888/uploads/${event.picture}`}
                      alt="banner1"
                    />
                    <div className="absolute bottom-0 w-full text-white flex flex-col gap-1 p-5 bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.5)]">
                      <div>{moment(event.date).format("ddd, DD MMM, LT")}</div>
                      <div className="font-semibold text-2xl tracking-widest">
                        {event.title}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchResults;
