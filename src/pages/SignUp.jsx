import React from "react";
import toyFaces from "../assets/images/toyFaces.png";
import logo from "../assets/images/logo-wetick.png";
import * as Yup from "yup";
import propTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage } from "../redux/reducers/auth";
import { Formik } from "formik";
import { asyncSignUpAction } from "../redux/actions/auth";

const validationSchema = Yup.object({
  fullName: Yup.string()
    .required()
    .min(3, "Name length is not valid, at least 3 characters"),
  email: Yup.string().required().email("Email is not valid"),
  password: Yup.string()
    .required()
    .min(
      8,
      "Password must be strong, at least 8 characters and must include capital letters, numbers and symbols"
    ),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
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
    <form
      onSubmit={handleSubmit}
      className="w-[80%] text-black flex flex-col gap-2"
    >
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
      <div>
        <input
          placeholder="Full Name"
          className={`input input-bordered border-neutral-300 w-full ${
            errors.fullName && touched.fullName && "input-error"
          }`}
          type="text"
          name="fullName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.fullName}
        />
        {errors.fullName && touched.fullName && (
          <label className="label">
            <span className="label-text-alt text-error">{errors.fullName}</span>
          </label>
        )}
      </div>
      <div>
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
      <div>
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
      <div>
        <input
          placeholder="Confirm Password"
          className={`input input-bordered border-neutral-300 w-full ${
            errors.confirmPassword && touched.confirmPassword && "input-error"
          }`}
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.confirmPassword}
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <label className="label">
            <span className="label-text-alt text-error">
              {errors.confirmPassword}
            </span>
          </label>
        )}
      </div>
      <div className="my-5 text-base text-black">
        <label className="flex items-center gap-2">
          <input name="checkBox" type="checkbox" />
          <span className="checkmarking"></span>
          Accept terms and condition
        </label>
      </div>
      <div className="mb-8">
        <button
          disabled={isSubmitting}
          type="submit"
          className="btn btn-primary btn-block text-base font-semibold normal-case"
        >
          Sign Up
        </button>
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
  // const token = useSelector((state) => state.auth.token);
  const successMessage = useSelector((state) => state.auth.successMessage);
  // const formError = useSelector((state) => state.auth.formError);

  React.useEffect(() => {
    if (successMessage) {
      navigate("/login");
    }
  }, [successMessage, navigate]);

  const doSignup = async (values, { setSubmitting /*setErrors*/ }) => {
    dispatch(clearMessage());
    dispatch(asyncSignUpAction(values));
    // if (formError.length) {
    //   setErrors({
    //     fullName: formError.filter((item) => item.param === "fullName")[0]
    //       .message,
    //     email: formError.filter((item) => item.param === "email")[0].message,
    //     password: formError.filter((item) => item.param === "password")[0]
    //       .message,
    //   });
    // }
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
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={doSignup}
        >
          {(props) => <FormSignup {...props} />}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
