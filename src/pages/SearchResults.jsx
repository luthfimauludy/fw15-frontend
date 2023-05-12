import React from "react";
import { useSearchParams } from "react-router-dom";
import http from "../helpers/http";
import { Link } from "react-router-dom";
import moment from "moment";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SearchResults = () => {
  const [serachParams] = useSearchParams();
  const [searchResults, setSearchResults] = React.useState([]);

  React.useEffect(() => {
    const getEventBySearch = async () => {
      const { data } = await http().get("/events", { params: serachParams });
      setSearchResults(data.results);
    };
    getEventBySearch();
  }, []);

  return (
    <>
      <Header />
      <div className="grid grid-cols-4 bg-primary">
        {searchResults.map((event) => {
          return (
            <Link to={`/detail-event/${event.id}`} key={`event-${event.id}`}>
              <div className="relative w-64 h-[376px] rounded-3xl overflow-hidden">
                <img
                  className="w-auto h-full object-cover"
                  src={`http://localhost:8888/uploads/${event.picture}`}
                  alt="banner1"
                />
                <div className="absolute bottom-0 w-full text-white flex flex-col gap-1 p-5 bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.5)]">
                  <div>{moment(event.date).format("MM-DD-YYYY")}</div>
                  <div className="font-semibold text-2xl tracking-widest">
                    {event.title}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default SearchResults;
