import React, { useState, useEffect } from 'react'
import axios from 'axios';

function CardWithOutAction({ title, description, createdById }) {
 const [clientName, setClientName] = useState("");

 useEffect(() => {
  axios.get(`http://localhost:9000/api/users/${createdById}`)
   .then(response => {
    setClientName(response.data.name);
   })
   .catch(error => {
    console.error('Error fetching pending requests:', error);
   });
 }, []);
 return (
  <div className="card border-secondary mb-3 shadow" style={{ maxWidth: "22rem" }}>
   <div className="card-header">Requested By: <b>{clientName}</b></div>
   <div className="card-body" style={{ height: "200px", overflowY: "auto" }}>
    <h5 className="card-title text-success">{title}</h5>
    <p className="card-text">{description}</p>
   </div>
  </div>
 )
}

export default CardWithOutAction
