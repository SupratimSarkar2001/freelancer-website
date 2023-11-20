import React, { useState, useEffect, useContext } from 'react'
import CardWithOutAction from '../Components/CardWithOutAction'
import UserContext from '../Components/UserContext'
import axios from 'axios';
import NothingHere from './NothingHere';

function ClientRequest() {
  const { userId } = useContext(UserContext);
  const [yourProjects, setYourProjects] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/api/projects/createdById?createdById=${userId}`);
        setYourProjects(response.data);
      } catch (error) {
        console.error('Error fetching your projects:', error.message);

      }
    };

    fetchData();
  }, []);
  return (
    <div className='container'>
      {yourProjects.length === 0 ? <NothingHere /> : <div>
        <h1 className='text-center'>See All Your Projects Here</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          {
            yourProjects.map((data, index) => (
              <div key={index} className="col-md-4 col-sm-6 mb-3">
                <CardWithOutAction title={data.title} description={data.description} createdById={data.createdById} />
              </div>
            ))
          }
        </div>
      </div>}
    </div>
  )
}

export default ClientRequest
