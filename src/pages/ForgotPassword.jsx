import toyFaces from "../assets/images/toyFaces.png";
import { Link } from "react-router-dom";
import { HiTicket } from "react-icons/hi";

const ForgotPassword = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 hidden md:flex justify-center items-center bg-[#61764b]">
        <div className="relative">
          <img className="w-[400px]" src={toyFaces} alt="Toy Faces" />
          <div className="dissolve"></div>
        </div>
      </div>
      <div className="max-w-md w-full flex justify-center items-center">
        <form className="w-[80%] flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-4">
            <HiTicket className="text-primary" size={35} />
            <div className="text-2xl font-semibold">
              <Link to="/">
                <span className="text-primary">21</span>
                <span className="text-[#ff3d71]">Cinetix</span>
              </Link>
            </div>
          </div>
          <div className="text-neutral font-semibold text-2xl">
            Forgot Password
          </div>
          <div className="text-neutral mb-5 text-sm">
            You’ll get mail soon on your email
          </div>
          <div>
            <input
              placeholder="Email"
              className="input input-bordered input-base-100 w-full"
              type="email"
              name="email"
            />
          </div>
          <div className="mt-4">
            <Link to="/login">
              <button className="btn btn-primary btn-block text-base font-semibold normal-case">
                Send
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
