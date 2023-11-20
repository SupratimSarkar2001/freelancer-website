import React, { useState, useEffect, useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import UserContext from '../Components/UserContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewRequest = () => {
  const {userId}=useContext(UserContext)
  const navigate =useNavigate();
  const initialValues = {
    title: '',
    description: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
  });

  const onSubmit = (values, { resetForm }) => {
    values = {...values, "createdById":userId}
    console.log(values);
    axios
      .post("http://localhost:9000/api/projects/add", values)
      .then((response) => {
        console.log("Add successful", response.data);
        navigate("/home");
      })
      .catch((error) => {
        console.error("Add failed", error);
      })
      .finally(() => {
        resetForm();
      });
  };


  return (
    <div className="container mt-5">
      <h2>New Request</h2>
      <hr />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <Field type="text" name="title" className="form-control" />
            <ErrorMessage name="title" component="div" className="text-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <Field as="textarea" name="description" className="form-control" />
            <ErrorMessage name="description" component="div" className="text-danger" />
          </div>

          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default NewRequest;
