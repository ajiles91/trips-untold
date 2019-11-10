import React from "react";

const AttractionsForm = props => (
	<form onSubmit={props.getAttractions}>
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
);

const error = props => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country!
    </div>
  );
};
  

export default AttractionsForm;