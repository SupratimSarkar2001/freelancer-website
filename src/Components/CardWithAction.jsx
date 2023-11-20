import React, { useState, useEffect, useContext } from 'react'
import UserContext from './UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CardWithAction({ id, title, description, createdById }) {
  const navigate = useNavigate();
  const { userId } = useContext(UserContext)
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

  const handleOnClick = () => {
    axios.put(`http://localhost:9000/api/projects/update/${id}`,{
      "id":id,
      "title":title,
      "description":description,
      "createdById":createdById,
      "assignedToId":userId
    })
      .then(res=>{
        console.log("Sucessfully updated project");
        navigate("/accepted-request")
      }
    )
    .catch (error => {
    console.error('Error updating project:', error);
  })
}
return (
  <div className="card border-secondary mb-3 shadow" style={{ maxWidth: "22rem" }}>
    <div className="card-header">Requested By: <b>{clientName}</b></div>
    <div className="card-body" style={{ height: "200px", overflowY: "auto" }}>
      <h5 className="card-title text-success">{title}</h5>
      <p className="card-text">{description}</p>
      <button type="button" className="btn btn-success btn-lg btn-block" onClick={() => handleOnClick()}>Accept</button>
    </div>
  </div>
)
}

export default CardWithAction
