import React, { useState,useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom"
import UserContext from '../Components/UserContext';
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const { setUserId } = useContext(UserContext);
  const initialValues = {
    name: "",
    email: "",
    password: "",
    phone: "",
    type: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(4, "Password must be at least 4 characters").required("Password is required"),
    phone: Yup.string().required("phone is required"),
    type: Yup.string().required("type is required"),
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    axios
    .post("http://localhost:9000/api/users/register", values)
    .then((response) => {
        console.log("Registration successful", response.data);
        setUserId(response.data.id);
        setIsSuccess(true);
        navigate("/home");
    })
    .catch((error) => {
        console.error("Registration failed", error);
    })
    .finally(() => {
        setSubmitting(false);
    });
  };

  return (
    <div className="container mt-5">
      < h2 > Registration Form</ h2>
      <hr />
      {
        isSuccess ? (
          <div className="alert alert-success">
            Registration successful! {/* You can customize this message */}
          </div>
        ) : (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <Field type="text" name="name" className="form-control" />
                  <ErrorMessage name="name" component="div" className="text-danger" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field type="email" name="email" className="form-control" />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field type="password" name="password" className="form-control" />
                  <ErrorMessage name="password" component="div" className="text-danger" />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <Field type="text" name="phone" className="form-control" />
                  <ErrorMessage name="phone" component="div" className="text-danger" />
                </div>

                <div className="form-group">
                  <label htmlFor="type">Type</label>
                  <Field as="select" name="type" className="form-control">
                    <option value="">Select Type</option>
                    <option value="Client">Client</option>
                    <option value="Freelancer">Freelancer</option>
                  </Field>
                  <ErrorMessage name="type" component="div" className="text-danger" />
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    Register
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        )
      }
      <p className="text-center">
        Already Registered?<Link to="/login">Login</Link>
      </p>
    </div >
  )
}

export default Register
