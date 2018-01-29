import React from 'react';

export default class Datepicker extends React.Component {  
  render() {
    return (      
      <input type="text" id="id_field_dateofbirth" className="datepicker form-control" placeholder="DD-MM-YYYY"/>
    );    
  }
}