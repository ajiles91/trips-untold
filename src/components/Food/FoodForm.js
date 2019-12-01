import React from "react";
import { Link } from 'react-router-dom';
import './FoodForm.css'

const FoodForm = props => (
  <div className='whole-page'>
    <div className='greeting center'>
      <h1 className='section-header'>Type in a city to get some restaurants!</h1>
    </div>
    
    <form className='attractions-form' onSubmit={props.getFood}>
      <div>{props.error ? error() : ""}</div>
      <div>{props.noResultsError ? noResultsError() : ""}</div>
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
        
      <button>Get Restaurants</button>
    </form>
    <div className='buttons-section'>
      
        <Link to ='/'>
          <button>Back to Main Page</button>
        </Link>

        <Link to ='/weather'>
          <button>Go to Weather Page</button>
        </Link>

        <Link to ='/attractions'>
          <button>Go to Attractions Page</button>
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
  
const noResultsError = props => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Sorry No Results Nearby!
    </div>
  );
};

export default FoodForm;