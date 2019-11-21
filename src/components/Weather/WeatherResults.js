import React from "react";
import './WeatherResults.css'

const WeatherResults = props => (
	<div className="weather-info">
	 {	
	 	props.city && props.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }</span>
	 	</p> 
	 }
	 { 	
	 	props.temp && <p className="weather__key"> Current Temperature: 
	 		<span className="weather__value"> { props.temp }	</span>
	 	</p> 
	 }
	 { 	
	 	props.temp_max && <p className="weather__key"> Temperature High: 
	 		<span className="weather__value"> { props.temp_max }	</span>
	 	</p> 
	 }
	 { 	
	 	props.temp_min && <p className="weather__key"> Temperature Low: 
	 		<span className="weather__value"> { props.temp_min }	</span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p className="weather__key"> Humidity: 
	 		<span className="weather__value"> { props.humidity }%</span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p className="weather__key"> Conditions: 
	 		<span className="weather__value"> { props.description } </span>
	 </p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);

export default WeatherResults;