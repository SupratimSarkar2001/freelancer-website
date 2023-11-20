import React from 'react';
import { useNavigate } from 'react-router-dom';

const ActionCard = ({
 title,description,image,url
}) => {
 const navigate = useNavigate();
 const handleOnclick =()=>{
  navigate(url);
 }
 const cardStyle = {
  maxWidth: '600px',
  margin: 'auto',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
 };

 const imageStyle = {
  width: '100%',
  height: '300px',
  objectFit: 'cover',
 };

 return (
  <div className="card mb-3" style={cardStyle}>
   <img
    src={image}
    className="card-img-top"
    alt="Card Image"
    style={imageStyle}
   />
   <div className="card-body">
    <h5 className="card-title text-success"><b>{title}</b></h5>
    <p className="card-text">
     {description}
    </p>
    <button className="btn btn-success" onClick={()=>handleOnclick()}>Click</button>
   </div>
  </div>
 );
};

export default ActionCard;
