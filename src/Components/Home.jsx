import React, { useState, useEffect, useContext } from 'react';
import ClientHomePage from '../pages/ClientHomePage';
import FreelancerHomePage from '../pages/FreelancerHomePage';
import UserContext from './UserContext';
import axios from 'axios';

const Home = () => {
  const { userId } = useContext(UserContext);
  const [userType, setUserType] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:9000/api/users/${userId}`)
      .then((response) => {
        console.log("Getting user successful", response.data);
        setUserType(response.data.type);
      })
      .catch((error) => {
        console.error("No user with this ID", error);
      });
  }, [userId]);

  return (
    <div className="container">
      {userType === "Client" && <ClientHomePage />}
      {userType === "Freelancer" && <FreelancerHomePage />}
    </div>
  );
};

export default Home;

