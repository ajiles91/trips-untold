import React from "react";
import { Link } from 'react-router-dom';

const WeatherForm = props => (
  <div>
   <h1>Type in a city to get the local weather!</h1>
    <h2>You have to use US for United States as the input for country because of the API</h2>
    <form onSubmit={props.getWeather}>
          <div>{props.error ? error() : ""}</div>
          <input 
              type="text" 
              name="city" 
              placeholder="City"
              autoComplete="off"
          />

          <input 
              type="text" 
              name="country" 
              placeholder="Country"
              autoComplete="off"
          />
      <button>Get Weather</button>
    </form>
    <Link to ='/'>
      <button>Back to Main Page</button>
    </Link>

    <Link to ='/food'>
      <button>Go to Food Page</button>
    </Link>

    <Link to ='/attractions'>
      <button>Go to Food Page</button>
    </Link>
  </div>
);

const error = props => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country!
    </div>
  );
};
  

export default WeatherForm;