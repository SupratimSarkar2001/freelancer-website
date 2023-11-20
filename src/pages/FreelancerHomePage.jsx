import React from 'react';
import ActionCard from '../Components/ActionCard';

const FreelancerHomePage = () => {
  return (
    <div className="container text-center">
      <h2 className='mt-3 md-3'>Explore New Opportunities Here!</h2>
      <hr/>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <ActionCard title="See New Projects" description="Discover opportunities: Navigate and seize new projects"
          image="https://cdn.dribbble.com/users/5436783/screenshots/11958673/media/af6d25ec040794b616e739c868caa178.gif"
          url="/pending-request"
          />
        </div>
        <div className="col-lg-6 col-md-8 col-sm-12">
          <ActionCard 
          title="Projects Under You" 
          description="Efficient project management: Streamline tasks and collaborations"
          image="https://cdn.dribbble.com/users/1195555/screenshots/15426613/media/6eadc668ca76aeae20118e0f8370207e.gif"
          url="/accepted-request"
          />
        </div>
      </div>
    </div>
  );
};

export default FreelancerHomePage;