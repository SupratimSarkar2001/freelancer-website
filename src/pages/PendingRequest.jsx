import React, { useState, useEffect } from 'react';
import CardWithAction from '../Components/CardWithAction';
import axios from 'axios';
import NothingHere from "./NothingHere"

function PendingRequest() {
  const [pendingRequest, setPendingRequest] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/api/projects/pending')
      .then(response => {
        setPendingRequest(response.data);
      })
      .catch(error => {
        console.error('Error fetching pending requests:', error);
      });
  }, []);

  return (
    <div className='container'>
      {pendingRequest.length === 0 ? <NothingHere /> : (
        <div>
          <h1 className='text-center'>See All Your Request Here</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
            {pendingRequest.map((data, index) => (
              <div key={index} className="col-md-4 col-sm-6 mb-3">
                <CardWithAction id={data.id} title={data.title} description={data.description} createdById={data.createdById} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PendingRequest;

