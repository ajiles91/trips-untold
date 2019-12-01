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


        <select
          placeholder="State or DC"
          name="state"
          type="text"
        >
          <option value="AL">AL</option>
          <option value="AK">AK</option>
          <option value="AR">AR</option>	
          <option value="AZ">AZ</option>
          <option value="CA">CA</option>
          <option value="CO">CO</option>
          <option value="CT">CT</option>
          <option value="DC">DC</option>
          <option value="DE">DE</option>
          <option value="FL">FL</option>
          <option value="GA">GA</option>
          <option value="HI">HI</option>
          <option value="IA">IA</option>	
          <option value="ID">ID</option>
          <option value="IL">IL</option>
          <option value="IN">IN</option>
          <option value="KS">KS</option>
          <option value="KY">KY</option>
          <option value="LA">LA</option>
          <option value="MA">MA</option>
          <option value="MD">MD</option>
          <option value="ME">ME</option>
          <option value="MI">MI</option>
          <option value="MN">MN</option>
          <option value="MO">MO</option>	
          <option value="MS">MS</option>
          <option value="MT">MT</option>
          <option value="NC">NC</option>	
          <option value="NE">NE</option>
          <option value="NH">NH</option>
          <option value="NJ">NJ</option>
          <option value="NM">NM</option>			
          <option value="NV">NV</option>
          <option value="NY">NY</option>
          <option value="ND">ND</option>
          <option value="OH">OH</option>
          <option value="OK">OK</option>
          <option value="OR">OR</option>
          <option value="PA">PA</option>
          <option value="RI">RI</option>
          <option value="SC">SC</option>
          <option value="SD">SD</option>
          <option value="TN">TN</option>
          <option value="TX">TX</option>
          <option value="UT">UT</option>
          <option value="VT">VT</option>
          <option value="VA">VA</option>
          <option value="WA">WA</option>
          <option value="WI">WI</option>	
          <option value="WV">WV</option>
          <option value="WY">WY</option>
        </select>		

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