import React from 'react';
function VendorListItem(props){
  //create vendor card 
  return(<>
      <div className="col s12 m4">
        <h1>{props.vendorInfo.vendor_name}</h1>
        <h3>{props.vendorInfo.vendor_contact_person}</h3>
      </div>
  </>)
}
export default VendorListItem;