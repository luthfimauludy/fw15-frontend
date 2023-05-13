import card from "../assets/images/card.png";
import atm from "../assets/images/atm.png";
import bank from "../assets/images/bank.png";
import retail from "../assets/images/retail.png";
import eMoney from "../assets/images/e-money.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Payment = () => {
  return (
    <>
      {/* Navbar Start */}
      <Header />
      {/* Navbar End */}
      <div className="bg-[#E9EDC9] md:pt-12">
        {/* Main Content Start */}
        <div className="flex justify-center mx-[120px] mb-24 bg-white rounded-2xl pt-[70px] px-[101px] pb-[67px]">
          <div className="mr-[88px] text-black">
            <div className="mb-7 font-semibold text-xl">Payment Method</div>
            <div className="flex flex-col gap-10">
              <div>
                <label className="relative flex items-center max-w-80 gap-2.5">
                  <input type="radio" name="payments" checked />
                  <img src={card} alt="Card" />
                  <p>Card</p>
                  <button className="absolute right-0">
                    <IoIosArrowUp />
                  </button>
                </label>
                <div className="min-w-[285px] flex justify-center items-center mt-4 ml-6 gap-4">
                  <img src={atm} alt="ATM" />
                  <button className="w-11 h-11 text-primary outline-dashed outline-[#61764B] rounded-lg">
                    +
                  </button>
                </div>
              </div>
              <div>
                <label className="relative flex items-center max-w-80 gap-2.5">
                  <input type="radio" name="payments" />
                  <img src={bank} alt="Bank Transfer" />
                  <p>Bank Transfer</p>
                  <button className="absolute right-0">
                    <IoIosArrowDown />
                  </button>
                </label>
              </div>
              <div>
                <label className="relative flex items-center max-w-80 gap-2.5">
                  <input type="radio" name="payments" />
                  <img src={retail} alt="Retail" />
                  <p>Retail</p>
                  <button className="absolute right-0">
                    <IoIosArrowDown />
                  </button>
                </label>
              </div>
              <div>
                <label className="relative flex items-center max-w-80 gap-2.5">
                  <input type="radio" name="payments" />
                  <img src={eMoney} alt="E-Money" />
                  <p>E-Money</p>
                  <button className="absolute right-0">
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
              <div className="text-primary">Slight & Sounds Exhibition</div>
            </div>
            <div className="flex justify-between text-sm font-semibold mb-4">
              <div className="text-black">Ticket Section</div>
              <div className="text-primary">VIP</div>
            </div>
            <div className="flex justify-between text-sm font-semibold mb-4">
              <div className="text-black">Quantity</div>
              <div className="text-primary">2</div>
            </div>
            <div className="flex justify-between text-sm font-semibold mb-4">
              <div className="text-black">Total Payment</div>
              <div className="text-primary">$70</div>
            </div>
            <button className="w-full h-12 bg-primary text-white rounded-xl mt-9 shadow-lg shadow-primary">
              Payment
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

export default Payment;
