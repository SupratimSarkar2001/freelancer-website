import React,{useContext} from 'react';
import { useNavigate } from 'react-router-dom'
import UserContext from './UserContext';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const {userId,setUserId}= useContext(UserContext);
 const navigate=useNavigate();
 const handleLogOut=()=>{
  console.log("Logout");
  setUserId(null);
  navigate("/login")
 }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)',marginBottom:"48px"}}>
      <div className="container">
        <Link className="navbar-brand" to="/home">Work<small>.com</small></Link>
        <div className="justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {   userId!==null &&
                <button className="btn btn-outline-light" onClick={() => handleLogOut()}>Logout</button>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
