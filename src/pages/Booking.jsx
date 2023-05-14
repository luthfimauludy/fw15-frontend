import banner from "../assets/images/banner-booking.png";
import ticket1 from "../assets/images/ticket1.png";
import ticket2 from "../assets/images/ticket2.png";
import ticket3 from "../assets/images/ticket3.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BiSort } from "react-icons/bi";

const Booking = () => {
  return (
    <>
      {/* Navbar Start */}
      <Header />
      {/* Navbar End */}
      <div className="md:bg-[#E9EDC9] md:pt-12">
        {/* Main Content Start */}
        <div className="flex flex-col md:flex-row justify-center m-0 md:mx-[120px] md:mb-24 bg-white rounded-2xl p-2 md:pt-[70px] md:px-12 md:pb-[67px]">
          <div className="w-full max-h-[228px] md:max-h-[750px] rotate-45 md:rotate-0 flex justify-center items-center">
            <img
              className="max-w-[250px] md:max-w-[644px]"
              src={banner}
              alt="banner"
            />
          </div>
          <div className="min-w-full mb-12 md:mb-0 md:min-w-[376px]">
            <div className="h-12 flex justify-between items-center mb-5 md:mb-14">
              <div className="text-xl font-semibold text-black">Tickets</div>
              <div className="flex items-center">
                <p className="text-xs font-semibold text-[#FC1055]">BY PRICE</p>
                <BiSort className="w-12" color="blue" />
              </div>
            </div>
            <div className="min-w-[300px] md:w-full">
              <div className="flex mb-6 md:mb-14">
                <div className="mr-2.5 h-full justify-start">
                  <div>
                    <img className="w-11 h-11" src={ticket1} alt="Ticket 1" />
                  </div>
                </div>
                <div className="min-w-[240px] md:w-full">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-black font-semibold mb-[3px]">
                        SECTION REG, ROW 1
                      </p>
                      <p className="text-xs mt-0 text-[BDC0C4]">
                        12 Seats available
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-black font-semibold mb-[3px]">
                        $15
                      </p>
                      <p className="text-xs mt-0 text-[BDC0C4]">per person</p>
                    </div>
                  </div>
                  <div className="mt-[22px] flex justify-between items-center">
                    <div>
                      <p className="text-xs text-black font-semibold m-0">
                        Quantity
                      </p>
                    </div>
                    <div className="flex justify-evenly items-center">
                      <button className="btn btn-sm btn-square btn-outline">
                        -
                      </button>
                      <p className="text-black ml-2.5">0</p>
                      <button className="ml-2.5 btn btn-sm btn-square btn-outline">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex mb-6 md:mb-14">
                <div className="mr-2.5 h-full justify-items-start">
                  <div>
                    <img className="w-11 h-11" src={ticket2} alt="Ticket 2" />
                  </div>
                </div>
                <div className="min-w-[240px] md:w-full">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-black font-semibold mb-[3px]">
                        SECTION VIP, ROW 2
                      </p>
                      <p className="text-xs mt-0 text-[BDC0C4]">
                        9 Seats available
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-black font-semibold mb-[3px]">
                        $35
                      </p>
                      <p className="text-xs mt-0 text-[BDC0C4]">per person</p>
                    </div>
                  </div>
                  <div className="mt-[22px] flex justify-between items-center">
                    <div>
                      <p className="text-xs text-black font-semibold m-0">
                        Quantity
                      </p>
                    </div>
                    <div className="flex justify-evenly items-center">
                      <button className="btn btn-sm btn-square btn-outline">
                        -
                      </button>
                      <p className="text-black ml-2.5">2</p>
                      <button className="ml-2.5 btn btn-sm btn-square btn-outline">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex border-b border-[#E0E4F3] pb-8">
                <div className="mr-2.5 h-full justify-start">
                  <div>
                    <img className="w-11 h-11" src={ticket3} alt="Ticket 3" />
                  </div>
                </div>
                <div className="min-w-[240px] md:w-full">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-black font-semibold mb-[3px]">
                        SECTION VVIP, ROW 3
                      </p>
                      <p className="text-xs mt-0 text-[BDC0C4]">
                        6 Seats available
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-black font-semibold mb-[3px]">
                        $50
                      </p>
                      <p className="text-xs mt-0 text-[BDC0C4]">per person</p>
                    </div>
                  </div>
                  <div className="mt-[22px] flex justify-between items-center">
                    <div>
                      <p className="text-xs text-black font-semibold m-0">
                        Quantity
                      </p>
                    </div>
                    <div className="flex justify-evenly items-center">
                      <button className="btn btn-sm btn-square btn-outline">
                        -
                      </button>
                      <p className="text-black ml-2.5">0</p>
                      <button className="ml-2.5 btn btn-sm btn-square btn-outline">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-6 mb-9">
              <div className="text-sm text-black font-semibold">
                <p className="mb-4">Ticket Section</p>
                <p className="mb-4">Quantity</p>
                <p className="mb-4">Total Payment</p>
              </div>
              <div className="text-sm text-primary font-semibold text-right text-[61764B]">
                <p className="mb-4">VIP</p>
                <p className="mb-4">2</p>
                <p className="mb-4">$70</p>
              </div>
            </div>
            <button className="flex w-full md:w-72 justify-center items-center h-14 text-base font-semibold rounded-lg shadow-lg shadow-[#61764B] bg-[#61764B] text-white">
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
