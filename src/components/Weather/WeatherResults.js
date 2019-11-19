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

// import React from "react";
// import "./weather.style.css";

// const Weather = props => {
//   return (
//     <div className="container text-light">
//       <div className="Card">
//         <h1 className="text-white py-3">{props.cityname}</h1>
//         <h5 className="py-4">
//           <i className={`wi ${props.weatherIcon} display-1`} />
//         </h5>

//         {/* Get Celsius */}
//         {props.temp_celsius ? (
//           <h1 className="py-2">{props.temp_celsius}&deg;</h1>
//         ) : null}

//         {/* show max and min temp */}
//         {maxminTemp(props.temp_min, props.temp_max)}

//         {/* Weather description */}
//         <h4 className="py-3">
//           {props.description.charAt(0).toUpperCase() +
//             props.description.slice(1)}
//         </h4>
//       </div>
//     </div>
//   );
// };

// export default Weather;

// function maxminTemp(min, max) {
//   if (max && min) {
//     return (
//       <h3>
//         <span className="px-4">{min}&deg;</span>
//         <span className="px-4">{max}&deg;</span>
//       </h3>
//     );
//   }
// }