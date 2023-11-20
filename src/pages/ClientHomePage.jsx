import React from 'react';
import ActionCard from '../Components/ActionCard';

const ClientHomePage = () => {
  return (
    <div className="container text-center">
      <h2 className='mt-3 md-3'>Explore New Opportunities Here!</h2>
      <hr/>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <ActionCard title="Create New Request" description="Seamless access to project support: Click, connect, and elevate."
          image="https://cdn.dribbble.com/users/2552139/screenshots/6581837/four_dribbble.gif"
          url="/new-request"
          />
        </div>
        <div className="col-lg-6 col-md-8 col-sm-12">
          <ActionCard 
          title="See All Your Request" 
          description="Effortless tracking: Explore all project requests at your fingertips."
          image="https://cdn.dribbble.com/users/2552139/screenshots/6573027/one_dribble.gif"
          url="/client-request"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientHomePage;

