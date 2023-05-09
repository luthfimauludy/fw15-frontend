import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toyFaces from "../assets/images/toyFaces.png";
import logo from "../assets/images/logo-wetick.png";
import React from "react";
import http from "../helpers/http";

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState("");
  const [token, setToken] = React.useState("");
  const doLogin = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    try {
      const { value: email } = event.target.email;
      const { value: password } = event.target.password;
      const body = new URLSearchParams({ email, password }).toString();
      const { data } = await http().post(
        "http://localhost:8888/auth/login",
        body
      );
      window.localStorage.setItem("token", data.results.token);
      setToken(data.results.token);
    } catch (err) {
      const message = err?.response?.data?.message;
      if (message) {
        setErrorMessage(message);
      }
    }
  };

  React.useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div className="flex h-screen">
      <div className="flex-1 hidden md:flex justify-center items-center bg-[#61764b]">
        <div className="relative">
          <img className="w-[400px]" src={toyFaces} alt="Toy Faces" />
          <div className="dissolve"></div>
        </div>
      </div>
      <div className="max-w-md w-full flex justify-center items-center">
        <form
          onSubmit={doLogin}
          className="w-[80%] text-black flex flex-col gap-2"
        >
          <div className="flex items-center mb-4">
            <img className="h-12" src={logo} alt="logo" />
            <div className="text-2xl font-semibold">
              <span className="text-primary">We</span>
              <span className="text-[#ff3d71]">tick</span>
            </div>
          </div>
          <div className="text-neutral font-semibold text-2xl">Sign in</div>
          <div className="text-neutral mb-5 text-sm">
            Hi, Welcome back to Urticket!
          </div>
          {errorMessage && (
            <div className="alert alert-error shadow-lg flex justify-center">
              {errorMessage}
            </div>
          )}
          <div>
            <input
              placeholder="Email"
              className="input input-bordered border-neutral-300 w-full"
              type="email"
              name="email"
            />
          </div>
          <div>
            <input
              placeholder="Password"
              className="input input-bordered border-neutral-300 w-full"
              type="password"
              name="password"
            />
          </div>
          <div className="text-right font-semibold text-sm mb-4">
            <Link className="text-primary" to="/forgot-password">
              Forgot Password?
            </Link>
          </div>
          <div className="mb-8">
            <button className="btn btn-primary btn-block text-base font-semibold normal-case">
              Sign In
            </button>
          </div>
          <div className="text-center text-neutral text-sm">
            or sign in with
          </div>
          <div className="flex justify-center gap-5">
            <button className="btn btn-secondary hover:bg-primary border-primary hover:border-primary w-24">
              <FcGoogle size={25} />
            </button>
            <button className="btn btn-secondary hover:bg-primary border-primary hover:border-primary w-24">
              <FaFacebook size={25} color="#426782" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
