import React from 'react';
import VendorDashboard from './VendorManagement/VendorDashboard';
import BusinessImpactAnalysis from './BusinessImpactAnalysis/BusinessImpactAnalysis';
import ISORoadmapDashboard from './ISORoadmap/ISORoadmapDashboard';

class UserPages extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  render(){
    return(<>
        <section id="iso-roadmap">
          <ISORoadmapDashboard />
        </section>
        <section id='vendor-management'>
            <VendorDashboard />
        </section>
        <section id='business-impact-analysis'>
            <BusinessImpactAnalysis />
        </section>
    </>)
  }
}
export default UserPages;