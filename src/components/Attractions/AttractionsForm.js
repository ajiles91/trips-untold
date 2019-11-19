import React from "react";
import './AttractionsForm.css'

const AttractionsForm = props => (
  <div>
    <h1>You have to use US for United State for the country because of the API</h1>
    <form className='attractions-form' onSubmit={props.getAttractions}>
      <div>{props.error ? error() : ""}</div>
        <input 
          type="text" 
          name="city" 
          placeholder="City"
          autoComplete="off"
        />

        <input 
          type="text" 
          name="state" 
          placeholder="state"
          autoComplete="off"
        />

        <input 
          type="text" 
          name="country" 
          placeholder="Country"
          autoComplete="off"
        />
        
      <button>Get Local Attractions</button>
    </form>
  </div>
);

const error = props => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country!
    </div>
  );
};
  

export default AttractionsForm;