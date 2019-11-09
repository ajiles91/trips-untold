import React from "react";

const WeatherForm = props => (
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
);

const error = props => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country!
    </div>
  );
};
  

export default WeatherForm;