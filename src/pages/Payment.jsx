import atm from "../assets/images/atm.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BsCreditCardFill, BsBank2 } from "react-icons/bs";
import { FaStore, FaDollarSign } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import http from "../helpers/http";

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const [selectedPayment, setSelectedPayment] = React.useState(null);

  const doPayment = async (e) => {
    e.preventDefault();
    const { reservationId } = state;
    const form = new URLSearchParams({
      reservationId,
      paymentMethodId: selectedPayment,
    }).toString();
    const { data } = await http(token).post("/payments", form);
    if (data) {
      navigate("/my-booking", { replace: true });
    }
  };

  return (
    <>
      {/* Navbar Start */}
      <Header />
      {/* Navbar End */}
      <div className="bg-[#E9EDC9] md:pt-12">
        {/* Main Content Start */}
        <form
          onSubmit={doPayment}
          className="flex justify-center mx-[120px] mb-24 bg-white rounded-2xl pt-[70px] px-[101px] pb-[67px]"
        >
          <div className="mr-[88px] text-black">
            <div className="mb-7 font-semibold text-xl">Payment Method</div>
            <div className="flex flex-col gap-10">
              <div>
                <label className="relative flex items-center max-w-80 gap-2.5">
                  <input
                    type="radio"
                    value="1"
                    onChange={(e) => setSelectedPayment(e.target.value)}
                    name="paymentMethod"
                    defaultChecked="1"
                  />
                  <i className="text-[#B799FF]">
                    <BsCreditCardFill size={25} />
                  </i>
                  <p>Card</p>
                  <button type="button" className="absolute right-0">
                    <IoIosArrowUp />
                  </button>
                </label>
                <div className="min-w-[285px] flex justify-center items-center mt-4 ml-6 gap-4">
                  <img src={atm} alt="ATM" />
                  <button
                    type="button"
                    className="w-11 h-11 text-primary outline-dashed outline-[#61764B] rounded-lg"
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <label className="relative flex items-center max-w-80 gap-2.5">
                  <input
                    type="radio"
                    value="2"
                    onChange={(e) => setSelectedPayment(e.target.value)}
                    name="paymentMethod"
                  />
                  <i className="text-[#FF55BB]">
                    <BsBank2 size={25} />
                  </i>
                  <p>Bank Transfer</p>
                  <button type="button" className="absolute right-0">
                    <IoIosArrowDown />
                  </button>
                </label>
              </div>
              <div>
                <label className="relative flex items-center max-w-80 gap-2.5">
                  <input
                    type="radio"
                    value="3"
                    onChange={(e) => setSelectedPayment(e.target.value)}
                    name="paymentMethod"
                  />
                  <i className="text-[#F79327]">
                    <FaStore size={25} />
                  </i>
                  <p>Retail</p>
                  <button type="button" className="absolute right-0">
                    <IoIosArrowDown />
                  </button>
                </label>
              </div>
              <div>
                <label className="relative flex items-center max-w-80 gap-2.5">
                  <input
                    type="radio"
                    value="5"
                    onChange={(e) => setSelectedPayment(e.target.value)}
                    name="paymentMethod"
                  />
                  <i className="text-[#19A7CE]">
                    <FaDollarSign size={25} />
                  </i>
                  <p>E-Money</p>
                  <button type="button" className="absolute right-0">
                    <IoIosArrowDown />
                  </button>
                </label>
              </div>
            </div>
          </div>
          <div className="min-w-[450px] max-h-[314px] pl-[100px] border-l border-[rgba(193, 197, 208, 0.25)]">
            <div className="text-black mb-7 font-semibold text-xl">
              Ticket Detail
            </div>
            <div className="flex justify-between text-sm font-semibold mb-4">
              <div className="text-black">Event</div>
              <div className="text-primary">{state.eventName}</div>
            </div>
            <div className="flex justify-between text-sm font-semibold mb-4">
              <div className="text-black">Ticket Section</div>
              <div className="text-primary">{state.sectionName}</div>
            </div>
            <div className="flex justify-between text-sm font-semibold mb-4">
              <div className="text-black">Quantity</div>
              <div className="text-primary">{state.quantity}</div>
            </div>
            <div className="flex justify-between text-sm font-semibold mb-4">
              <div className="text-black">Total Payment</div>
              <div className="text-primary">IDR {state.totalPayment}</div>
            </div>
            <button
              type="submit"
              className="w-full h-12 btn btn-primary normal-case shadow-lg shadow-primary"
            >
              Payment
            </button>
          </div>
        </form>
        {/* Main Content End */}
        {/* Footer Start */}
        <Footer />
        {/* Footer End */}
      </div>
    </>
  );
};

export default Payment;
