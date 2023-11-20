import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { useNavigate, Link } from "react-router-dom"
import UserContext from '../Components/UserContext';
import axios from 'axios';

const Login = () => {

 const navigate = useNavigate();

 const { setUserId } = useContext(UserContext);
 const [requestResponse, setRequestResponse] = useState({
  textMessage: '',
  alertClass: ''
 })

 const initialValues = {
  email: '',
  password: ''
 }

 const onSubmit = (values) => {
  axios
   .get(`http://localhost:9000/api/users/login?email=${values.email}&password=${values.password}`)
   .then((response) => {
    const userId = response.data.id;

    if (userId) {
     setUserId(userId);
     setRequestResponse({
      textMessage: "Login successful",
      alertClass: "alert alert-success",
     });
     navigate("/home")
    } else {
     setRequestResponse({
      textMessage: "Invalid email or password",
      alertClass: "alert alert-danger",
     });
    }
   })
   .catch((error) => {
    console.error("Login failed", error);
    setRequestResponse({
     textMessage: "Login failed",
     alertClass: "alert alert-danger",
    });
   });
 };


 const validationSchema = Yup.object({
  email: Yup.string().required('email is required').email('email should be valid'),
  password: Yup.string().required('password is required')
 })

 const formik = useFormik({
  initialValues,
  onSubmit,
  validationSchema,
  validateOnMount: true
 })

 return (
  <div className="conatiner">
   <div className="row">
    <div className="col-md-3"></div>
    <div className="col-md-6">
     <div className="wrapper">
      <div className={requestResponse.alertClass} role="alert">
       {requestResponse.textMessage}
      </div>
      <h2>Login Here</h2>
      <hr />
      <form onSubmit={formik.handleSubmit}>
       <div className="form-group">
        <label>Email</label>
        <input type="text" value={formik.values.email}
         name="email"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         className={formik.touched.email && formik.errors.email ? 'form-control is-invalid' : 'form-control'} />
        {formik.touched.email && formik.errors.email ? <small className='text-danger'>{formik.errors.email}</small> : null}
       </div>
       <div className="form-group">
        <label>Password</label>
        <input type="password"
         name="password"
         value={formik.values.password}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         className={formik.touched.password && formik.errors.password ? 'form-control is-invalid' : 'form-control'} />
        {formik.touched.password && formik.errors.password ? <small className='text-danger'>{formik.errors.password}</small> : null}
       </div>
       <input type="submit" value="Login" disabled={!formik.isValid} className="btn btn-primary btn-block" />
      </form>
      <br />
      <p className="text-center">
       New Users? <Link to="/register">Click Here</Link>
      </p>
     </div>
    </div>
    <div className="col-md-3"></div>
   </div>
  </div>
 )
}

export default Login
