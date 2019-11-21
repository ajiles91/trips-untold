import React from "react";
import './AttractionsForm.css'
import { Link } from 'react-router-dom';

const AttractionsForm = props => (
  <div>
    <h1 className='section-header'>Type in a city to get some local attractions!</h1>
    <h2>You have to use US for United States as the input for country because of the API</h2>
    <h2>Also clicking backward and forward too quickly causes the API to freeze</h2>
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
    <div className='buttons-section'>
      <Link to ='/'>
        <button>Back to Main Page</button>
      </Link>

      <Link to ='/weather'>
        <button>Go to Weather Page</button>
      </Link>

      <Link to ='/food'>
        <button>Go to Food Page</button>
      </Link>

    </div>
    
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