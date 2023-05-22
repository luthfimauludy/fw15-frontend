import toyFaces from "../assets/images/toyFaces.png";
import * as Yup from "yup";
import propTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { HiTicket } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { clearMessage } from "../redux/reducers/auth";
import { asyncForgotAction } from "../redux/actions/auth";
import { Formik } from "formik";

const validationSchema = Yup.object({
  email: Yup.string().required().email("Email is not valid"),
});

const FormForgot = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => {
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const warningMessage = useSelector((state) => state.auth.warningMessage);

  return (
    <form onSubmit={handleSubmit} className="w-[80%] flex flex-col gap-2">
      <div className="flex items-center gap-2 mb-4">
        <HiTicket className="text-primary" size={35} />
        <div className="text-2xl font-semibold">
          <Link to="/">
            <span className="text-primary">21</span>
            <span className="text-[#ff3d71]">Cinetix</span>
          </Link>
        </div>
      </div>
      <div className="text-neutral font-semibold text-2xl">Forgot Password</div>
      <div className="text-neutral mb-5 text-sm">
        You’ll get mail soon on your email
      </div>
      {successMessage && (
        <div className="alert alert-success shadow-lg flex justify-center">
          {successMessage}
        </div>
      )}
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
      <div className="mt-4">
        <Link to="/login">
          <button
            disabled={isSubmitting}
            className="btn btn-primary btn-block text-base font-semibold normal-case"
          >
            Send
          </button>
        </Link>
      </div>
    </form>
  );
};

FormForgot.propTypes = {
  values: propTypes.objectOf(propTypes.string),
  errors: propTypes.objectOf(propTypes.string),
  touched: propTypes.objectOf(propTypes.bool),
  handleBlur: propTypes.func,
  handleChange: propTypes.func,
  handleSubmit: propTypes.func,
  isSubmitting: propTypes.bool,
};

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const formError = useSelector((state) => state.auth.formError);

  React.useEffect(() => {
    if (token) {
      navigate("/login");
    }
  }, [token, navigate]);

  React.useEffect(() => {
    dispatch(clearMessage());
  }, []);

  const doForgot = async (values, { setSubmitting, setErrors }) => {
    dispatch(clearMessage());
    dispatch(asyncForgotAction(values));
    if (formError.length) {
      setErrors({
        email: formError.filter((item) => item.param === "email")[0].message,
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
          }}
          validationSchema={validationSchema}
          onSubmit={doForgot}
        >
          {(props) => <FormForgot {...props} />}
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;
