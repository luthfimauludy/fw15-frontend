import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex justify-center items-center bg-[#61764b]">
        <div className="relative">
          <img
            className="w-[400px]"
            src="../assets/toyFaces.png"
            alt="Toy Faces"
          />
          <div className="absolute w-[400px] min-h-[150px] bottom-0 bg-gradient-to-b from-[rgba(51, 102, 255, 0) 10%] to-[#61764b] 75%"></div>
        </div>
      </div>
      <div className="max-w-md w-full flex justify-center items-center">
        <form className="w-[80%] flex flex-col gap-5">
          <div className="text-neutral font-semibold text-2xl">Sign in</div>
          <div className="text-neutral">Hi, Welcome back to Urticket!</div>
          <div>
            <input
              placeholder="Email"
              className="input input-bordered w-full"
              type="email"
              name="email"
            />
          </div>
          <div>
            <input
              placeholder="Password"
              className="input input-bordered w-full"
              type="password"
              name="password"
            />
          </div>
          <div className="text-right">
            <Link className="text-primary font-bold" to="/forgot-password">
              Forgot Password?
            </Link>
          </div>
          <div>
            <button className="btn btn-primary btn-block">Sign In</button>
          </div>
          <div className="text-center">or sign in with</div>
          <div className="flex justify-center gap-5">
            <button className="btn btn-secondary w-24">
              <FcGoogle />
            </button>
            <button className="btn btn-secondary w-24">
              <FaFacebook />
            </button>
          </div>
        </form>
      </div>
      {/* <div className="form-section">
        <div className="flex">
          <img className="logo" src="/assets/img/logo.png" alt="logo" />
          <div className="logo-text">
            <span className="we-text">We</span>
            <span className="tick-text">tick</span>
          </div>
        </div>
        <div>
          <h2 className="title">Sign In</h2>
          <div className="desc">Hi, Welcome back to Urticket!</div>
        </div>
        <div>
          <form id="login">
            <div id="alert"></div>
            <div>
              <input id="username" type="text" placeholder="Username" />
            </div>
            <div>
              <input id="email" type="email" placeholder="Email" />
            </div>
            <div className="toggleable-password">
              <input id="password" type="password" placeholder="Password" />
              <button>
                <i data-feather="eye"></i>
              </button>
            </div>
            <div className="forgot-password">
              <a href="/forgot-password.html">Forgot Password?</a>
            </div>
            <div className="submit">
              <button type="submit">Sign In</button>
            </div>
          </form>
        </div>
        <div>
          <div className="sign-with">or sign in with</div>
          <div className="sign-btn">
            <div className="btn-google">
              <a href="https://www.google.com">
                <button>
                  <img src="/assets/img/google.png" alt="google" />
                </button>
              </a>
            </div>
            <div className="btn-facebook">
              <a href="https://www.facebook.com">
                <button>
                  <img src="/assets/img/facebook.png" alt="facebook" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Login;
