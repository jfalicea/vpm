import React from 'react';
import axios from 'axios';
class AddVendor extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      vendorName:"", address:"", address2:"", city:"", zipcode:"", state:"", 
      vendorContactPerson:"",vendorFaxNumber:"", vendorPhoneNumber:""
    };
  }

  handleFormChanges =(e)=>{
    switch(e.target.name){
        case 'vendorName':
            this.setState({vendorName:e.target.value})
            return;
        case 'address':
            this.setState({address:e.target.value})
            return;
        case 'address2':
            this.setState({address2:e.target.value})
            return;
        case 'city':
            this.setState({city:e.target.value})
            return;
        case 'zipcode':
            this.setState({zipcode:e.target.value})
            return;
        case 'state':
            this.setState({state:e.target.value})
            return;
        case 'vendorContactPerson':
            this.setState({vendorContactPerson:e.target.value})
            return;
        case 'vendorFaxNumber':
            this.setState({vendorFaxNumber:e.target.value})
            return;
        case 'vendorPhoneNumber':
            this.setState({vendorPhoneNumber:e.target.value})
            return;
    }
  }

  submitNewVendorForm=async(e)=>{
    e.preventDefault();
    const url = `http://localhost:3000/vendor/add`;
    const formData = {...this.state};
    const axiosResp = await axios.post(url, formData);
    console.log('====', axiosResp.data)
    this.setState({
        vendorName:"", address:"", address2:"", city:"", zipcode:"", state:"", 
        vendorContactPerson:"",vendorFaxNumber:"", vendorPhoneNumber:""
    })
  }


  render(){
    return(<>
        <div className="container">
            <h1 onClick={this.props.closeModal}>X</h1>
            <div className="row">
                <form className="col s12" onSubmit={this.submitNewVendorForm}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="text" className="validate" value={this.state.vendorName} onChange={this.handleFormChanges} name='vendorName' />
                            <label htmlFor="vendorName">Vendor Name</label>
                        </div>
                        <div className="input-field col s12">
                            <input type="text" className="validate" value={this.state.address} onChange={this.handleFormChanges} name='address'/>
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="input-field col s12">
                            <input type="text" className="validate" value={this.state.address2} onChange={this.handleFormChanges} name='address2'/>
                            <label htmlFor="address2">Suite/Apt/etc.</label>
                        </div>
                        <div className="input-field col s12 m4">
                            <input type="text" className="validate" value={this.state.city} onChange={this.handleFormChanges} name='city'/>
                            <label htmlFor="city">city</label>
                        </div>
                        <div className="input-field col s12 m4">
                            <input type="text" className="validate" value={this.state.state} onChange={this.handleFormChanges} name='state'/>
                            <label htmlFor="state">state</label>
                        </div>
                        <div className="input-field col s12 m4">
                            <input type="text" className="validate" value={this.state.zipcode} onChange={this.handleFormChanges} name='zipcode'/>
                            <label htmlFor="zipcode">zipcode</label>
                        </div>
                        <div className="input-field col s12">
                            <input type="text" className="validate" value={this.state.vendorContactPerson} onChange={this.handleFormChanges} name='vendorContactPerson'/>
                            <label htmlFor="vendorContactPerson">Vendor Contact Name</label>
                        </div>
                        <div className="input-field col s12 m6">
                            <input type="text" className="validate" value={this.state.vendorPhoneNumber} onChange={this.handleFormChanges} name='vendorPhoneNumber'/>
                            <label htmlFor="VendorPhoneNumber">Contact Phone Number</label>
                        </div>
                        <div className="input-field col s12 m6">
                            <input type="text" className="validate" value={this.state.vendorFaxNumber} onChange={this.handleFormChanges} name='vendorFaxNumber'/>
                            <label htmlFor="vendorFaxNumber">Fax Number</label>
                        </div>
                    </div>
                    <div className='container center-align'>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>



    </>)
  }
}
export default AddVendor;