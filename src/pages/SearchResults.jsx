import React from "react";
import { useSearchParams } from "react-router-dom";
import http from "../helpers/http";
import { Link } from "react-router-dom";
import moment from "moment";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = React.useState([]);
  const limitItem = async (event) => {
    const limit = event.target.value;
    console.log(limit);
    const { data } = await http().get("/events", { params: { limit } });
    setSearchResults(data.results);
  };

  React.useEffect(() => {
    const getEventBySearch = async () => {
      const { data } = await http().get("/events", { params: searchParams });
      setSearchResults(data.results);
    };
    getEventBySearch();
  }, []);

  return (
    <>
      <Header />
      <div className="bg-primary">
        <div className="px-10 pt-10">
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
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-10 mb-20">
          {searchResults.map((event) => {
            return (
              <Link to={`/detail-event/${event.id}`} key={`event-${event.id}`}>
                <div className="relative max-w-64 h-[376px] rounded-3xl overflow-hidden">
                  <img
                    className="w-auto h-full object-cover"
                    src={`http://localhost:8888/uploads/${event.picture}`}
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
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchResults;
