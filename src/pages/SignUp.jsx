import { Link, useNavigate } from "react-router-dom";
import toyFaces from "../assets/images/toyFaces.png";
import logo from "../assets/images/logo-wetick.png";
import * as Yup from "yup";
import propTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Fullname is not valid"),
  email: Yup.string().email("Email is not valid"),
  password: Yup.string().required("Password is not valid"),
});

const FormSignup = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => {
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const warningMessage = useSelector((state) => state.auth.warningMessage);
  return (
    <form className="w-[80%] flex flex-col gap-2">
      <div className="flex items-center mb-4">
        <img className="h-12" src={logo} alt="logo" />
        <div className="text-2xl font-semibold">
          <span className="text-primary">We</span>
          <span className="text-[#ff3d71]">tick</span>
        </div>
      </div>
      <div className="text-neutral font-semibold text-2xl">Sign Up</div>
      <div className="text-neutral mb-5 text-sm">
        Already have an account?{" "}
        <Link className="text-primary font-semibold" to="/login">
          Log in
        </Link>
      </div>
      <div>
        <input
          placeholder="Full Name"
          className="input input-bordered border-neutral-300 w-full"
          type="text"
          name="fullName"
        />
      </div>
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
      <div>
        <input
          placeholder="Confirm Password"
          className="input input-bordered border-neutral-300 w-full"
          type="password"
          name="password"
        />
      </div>
      <div className="my-5 text-base text-black">
        <label className="flex items-center gap-2">
          <input name="checkBox" type="checkbox" />
          <span className="checkmarking"></span>
          Accept terms and condition
        </label>
      </div>
      <div className="mb-8">
        <Link to="/login">
          <button
            type="submit"
            className="btn btn-primary btn-block text-base font-semibold normal-case"
          >
            Sign Up
          </button>
        </Link>
      </div>
    </form>
  );
};

FormSignup.propTypes = {
  values: propTypes.objectOf(propTypes.string),
  errors: propTypes.objectOf(propTypes.string),
  touched: propTypes.objectOf(propTypes.bool),
  handleBlur: propTypes.func,
  handleChange: propTypes.func,
  handleSubmit: propTypes.func,
  isSubmitting: propTypes.bool,
};

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formError = useSelector((state) => state.auth.formError);

  return (
    <div className="flex h-screen">
      <div className="flex-1 hidden md:flex justify-center items-center bg-[#61764b]">
        <div className="relative">
          <img className="w-[400px]" src={toyFaces} alt="Toy Faces" />
          <div className="dissolve"></div>
        </div>
      </div>
      <div className="max-w-md w-full flex justify-center items-center"></div>
    </div>
  );
};

export default SignUp;
