import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import toyFaces from "../assets/images/toyFaces.png";
import logo from "../assets/images/logo-wetick.png";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import propTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage } from "../redux/reducers/auth";
import { asyncLoginAction } from "../redux/actions/auth";

const validationSchema = Yup.object({
  email: Yup.string().email("Email is not valid"),
  password: Yup.string().required("Password is not valid"),
});

const FormLogin = ({
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
    <form
      onSubmit={handleSubmit}
      className="w-[80%] text-black flex flex-col gap-2"
    >
      <div className="flex items-center mb-4">
        <img className="h-12" src={logo} alt="logo" />
        <div className="text-2xl font-semibold">
          <span className="text-primary">We</span>
          <span className="text-secondary">tick</span>
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
      {warningMessage && (
        <div className="alert alert-warning shadow-lg flex justify-center">
          {warningMessage}
        </div>
      )}
      <div className="form-control">
        <input
          placeholder="Email"
          className={`input input-bordered border-neutral-300 w-full ${
            errors.email && touched.email && "input-error"
          }`}
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {errors.email && touched.email && (
          <label className="label">
            <span className="label-text-alt text-error">{errors.email}</span>
          </label>
        )}
      </div>
      <div className="form-control">
        <input
          placeholder="Password"
          className={`input input-bordered border-neutral-300 w-full ${
            errors.password && touched.password && "input-error"
          }`}
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {errors.password && touched.password && (
          <label className="label">
            <span className="label-text-alt text-error">{errors.password}</span>
          </label>
        )}
      </div>
      <div className="text-right font-semibold text-sm mb-4">
        <Link className="text-primary" to="/forgot-password">
          Forgot Password?
        </Link>
      </div>
      <div className="mb-8">
        <button
          disabled={isSubmitting}
          type="submit"
          className="btn btn-primary rounded-xl btn-block text-base font-semibold normal-case"
        >
          Sign In
        </button>
      </div>
      <div className="text-center text-neutral text-sm">or sign in with</div>
      <div className="flex justify-center gap-5">
        <Link className="btn btn-ghost hover:bg-primary border-primary hover:border-primary w-24">
          <FcGoogle size={25} />
        </Link>
        <Link className="btn btn-ghost hover:bg-primary border-primary hover:border-primary w-24">
          <FaFacebook size={25} color="#426782" />
        </Link>
      </div>
    </form>
  );
};

FormLogin.propTypes = {
  values: propTypes.objectOf(propTypes.string),
  errors: propTypes.objectOf(propTypes.string),
  touched: propTypes.objectOf(propTypes.bool),
  handleBlur: propTypes.func,
  handleChange: propTypes.func,
  handleSubmit: propTypes.func,
  isSubmitting: propTypes.bool,
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const formError = useSelector((state) => state.auth.formError);

  React.useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const doLogin = async (values, { setSubmitting, setErrors }) => {
    dispatch(clearMessage());
    dispatch(asyncLoginAction(values));
    if (formError.length) {
      setErrors({
        email: formError.filter((item) => item.param === "email")[0].message,
        password: formError.filter((item) => item.param === "password")[0]
          .message,
      });
    }
    setSubmitting(false);
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 hidden md:flex justify-center items-center bg-[#61764b]">
        <div className="relative">
          <img className="w-[400px]" src={toyFaces} alt="Toy Faces" />
          <div className="dissolve"></div>
        </div>
      </div>
      <div className="max-w-md w-full flex justify-center items-center">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={doLogin}
        >
          {(props) => <FormLogin {...props} />}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
