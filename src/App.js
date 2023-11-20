import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ClientRequest from "./pages/ClientRequest";
import Login from "./pages/Login";
import NewRequest from "./pages/NewRequest";
import Register from "./pages/Register";
import PendingRequest from "./pages/PendingRequest"
import AcceptedRequest from "./pages/AcceptedRequest"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserContext from "./Components/UserContext";
import { useState } from 'react';

function App() {
  const [userId, setUserId] = useState(null);
  console.log(userId);
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userId, setUserId }}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/new-request" element={<NewRequest />} />
            <Route path="/client-request" element={<ClientRequest />} />
            <Route path="/pending-request" element={<PendingRequest />} />
            <Route path="/accepted-request" element={<AcceptedRequest />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>

  );
}

export default App;
