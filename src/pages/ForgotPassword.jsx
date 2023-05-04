import toyFaces from "../assets/images/toyFaces.png";
import logo from "../assets/images/logo-wetick.png";

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
          <div className="flex items-center mb-4">
            <img className="h-12" src={logo} alt="logo" />
            <div className="text-2xl font-semibold">
              <span className="text-primary">We</span>
              <span className="text-[#ff3d71]">tick</span>
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
            <button className="btn btn-primary btn-block text-base font-semibold normal-case">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
