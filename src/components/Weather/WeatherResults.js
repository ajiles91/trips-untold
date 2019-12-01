import React from "react";
import './WeatherResults.css'

const WeatherResults = props => {

	let currentTempKelvin = props.temp
	const currentTempFahrenheit = Math.floor(((currentTempKelvin-273.15)*1.8)+32)

	let minTempKelvin = props.temp_min
	const minTempFahrenheit = Math.floor(((minTempKelvin-273.15)*1.8)+32)

	let maxTempKelvin = props.temp_max
	const maxTempFahrenheit = Math.floor(((maxTempKelvin-273.15)*1.8)+32)

	return(
<div className="weather-info">
	 {	
	 	props.city && props.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }</span>
	 	</p> 
	 }
	 { 	
	 	props.temp && <p className="weather__key"> Current Temperature: 
	 		<span className="weather__value"> {currentTempFahrenheit}&deg;F</span>
	 	</p> 
	 }
	 { 	
	 	props.temp_max && <p className="weather__key"> Temperature High: 
	 		<span className="weather__value"> {maxTempFahrenheit}&deg;F</span>
	 	</p> 
	 }
	 { 	
	 	props.temp_min && <p className="weather__key"> Temperature Low: 
	 		<span className="weather__value"> { minTempFahrenheit}&deg;F</span>
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

	)
	
}

export default WeatherResults;