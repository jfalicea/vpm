import React from 'react';
import AddVendor from './AddVendors'
import axios from 'axios'
import VendorListItem from './VendorListItem';

class VendorDashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showModal: false
    };
  }
  
  async componentDidMount  (){
  //make call to the database to get list of vendors 
  const url = `http://localhost:3000/vendor/`;
  const axiosResp = await axios.get(url);
  this.setState({
    currentVendorData: axiosResp.data
  })
  }

  _showModal=()=>{
    this.setState({
      showModal: true
    })
  }
  _closeModal=()=>this.setState({showModal: false})

  render(){
    let loadingMsg
    if(!this.state.currentVendorData){
      loadingMsg = <h1>LOADING....</h1>
    }else{
      loadingMsg = this.state.currentVendorData.map((vendor,i)=>{
        return <VendorListItem key={i} vendorInfo={vendor} />
      })
    }
    return(<>
      <h1>Vendor List</h1>
        <div>
          <div className="row">
              {loadingMsg}
          </div>
        </div>
        <h3 style={{"display":"inline"}}><strong>Add a Vendor</strong></h3>
        <a onClick={this._showModal} className="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
        {/* Add vendor modal */}
        <div style={this.state.showModal ? {"display": "block"} : {"display":"none"}}> 
          <AddVendor closeModal={this._closeModal} />
        </div>
    </>)
  }
}
export default VendorDashboard;