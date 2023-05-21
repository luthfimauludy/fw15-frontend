import banner from "../assets/images/banner-booking.png";
import ticket1 from "../assets/images/ticket1.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BiSort } from "react-icons/bi";
import React from "react";
import http from "../helpers/http";
import { useSelector } from "react-redux";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";

const Booking = () => {
  const { id: eventId } = useParams();
  const navigate = useNavigate();
  const [sections, setSections] = React.useState([]);
  const [filledSection, setFilledSection] = React.useState({
    id: 0,
    quantity: 0,
  });
  const token = useSelector((state) => state.auth.token);

  const increment = (id) => {
    setFilledSection({
      id,
      quantity: filledSection.quantity + 1,
    });
  };

  const decrement = (id) => {
    setFilledSection({
      id,
      quantity: filledSection.quantity - 1,
    });
  };

  React.useEffect(() => {
    const getSections = async () => {
      const { data } = await http(token).get("/sections");
      setSections(data.results);
    };
    getSections();
  }, []);

  const doReservation = async () => {
    const form = new URLSearchParams({
      eventId,
      sectionId: filledSection.id,
      quantity: filledSection.quantity,
    }).toString();
    const { data } = await http(token).post("/reservations", form);

    navigate("/payment", {
      state: {
        eventId,
        eventName: data.results.events.title,
        reservationId: data.results.id,
        sectionName: data.results.sectionName,
        quantity: data.results.quantity,
        totalPayment: data.results.totalPrice,
      },
    });
  };

  const selectedSection =
    filledSection && sections.filter((item) => item.id === filledSection.id)[0];

  return (
    <>
      {/* Navbar Start */}
      <Header />
      {/* Navbar End */}
      <div className="md:bg-[#E9EDC9] md:pt-12">
        {/* Main Content Start */}
        <div className="flex flex-col md:flex-row justify-center m-0 md:mx-[120px] md:mb-24 bg-white rounded-2xl p-2 md:pt-[70px] md:px-12 md:pb-[67px]">
          <div className="w-fit max-h-[228px] md:max-h-[750px] rotate-45 md:rotate-0 flex justify-center items-center">
            <img
              className="max-w-[250px] md:max-w-[444px]"
              src={banner}
              alt="banner"
            />
          </div>
          <div className="max-w-full mb-12 md:mb-0 md:min-w-[376px]">
            <div className="h-12 flex justify-between items-center mb-5 md:mb-14">
              <div className="text-xl font-semibold text-black">Tickets</div>
              <div className="flex items-center">
                <p className="text-xs font-semibold text-[#FC1055]">BY PRICE</p>
                <BiSort className="w-12" color="blue" />
              </div>
            </div>
            <div className="min-w-[300px] md:w-full">
              {sections.map((item) => {
                return (
                  <div
                    key={`section-${item.id}`}
                    className="flex mb-6 md:mb-14"
                  >
                    <div className="mr-2.5 h-full justify-start">
                      <div>
                        <img
                          className="w-11 h-11"
                          src={ticket1}
                          alt="Ticket 1"
                        />
                      </div>
                    </div>
                    <div className="min-w-[240px] md:w-full">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm text-black font-semibold mb-[3px]">
                            SECTION {item.name}, ROW 1
                          </p>
                          <p className="text-xs mt-0 text-[BDC0C4]">
                            12 Seats available
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-black font-semibold mb-[3px]">
                            IDR {item.price}
                          </p>
                          <p className="text-xs mt-0 text-[BDC0C4]">
                            per person
                          </p>
                        </div>
                      </div>
                      <div className="mt-[22px] flex justify-between items-center">
                        <div>
                          <p className="text-xs text-black font-semibold m-0">
                            Quantity
                          </p>
                        </div>
                        <div className="flex justify-evenly items-center">
                          <button
                            onClick={() => decrement(item.id)}
                            className="btn btn-sm btn-primary btn-square btn-outline"
                          >
                            <FiMinus />
                          </button>
                          <p className="text-black ml-2.5">
                            {item.id === filledSection.id
                              ? filledSection.quantity
                              : 0}
                          </p>
                          <button
                            onClick={() => increment(item.id)}
                            className="ml-2.5 btn btn-sm btn-primary btn-square btn-outline"
                          >
                            <FiPlus />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between mt-6 mb-9">
              <div className="text-sm text-black font-semibold">
                <p className="mb-4">Ticket Section</p>
                <p className="mb-4">Quantity</p>
                <p className="mb-4">Total Payment</p>
              </div>
              <div className="text-sm text-primary font-semibold text-right text-[61764B]">
                <p className="mb-4">{selectedSection?.name || "-"}</p>
                <p className="mb-4">{filledSection?.quantity}</p>
                <p className="mb-4">
                  IDR {selectedSection?.price * filledSection?.quantity || "0"}
                </p>
              </div>
            </div>
            <button
              onClick={doReservation}
              className="flex w-full md:w-72 btn btn-primary normal-case shadow-lg shadow-primary"
            >
              Checkout
            </button>
          </div>
        </div>
        {/* Main Content End */}
        {/* Footer Start */}
        <Footer />
        {/* Footer End */}
      </div>
    </>
  );
};

export default Booking;
