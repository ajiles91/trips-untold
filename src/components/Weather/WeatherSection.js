import React, { Component } from 'react';
import './WeatherSection.css';
import WeatherForm from './WeatherForm'
import WeatherResults from './WeatherResults'
// import config from './../../config'

class WeatherSection extends Component {
    constructor(props) {
      super(props);
      this.state = {
        temp: undefined,
        temp_max: undefined,
        temp_min: undefined,
        main:undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
      };
    }
  
    getWeather = async (event) => {
      event.preventDefault();

      const city = event.target.elements.city.value;
      const country = event.target.elements.country.value;
      const API_KEY = 'f3d7f5d4c72cfbaa2f55436ddc5646b1';
      if (country && city) {
        const api_call = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
        );
  
        const response = await api_call.json();
  
        this.setState({
          city: `${response.name}, ${response.sys.country}`,
          country: response.sys.country,
          main: response.weather[0].main,
          temp: response.main.temp,
          humidity: response.main.humidity,
          temp_max: response.main.temp_max,
          temp_min: response.main.temp_min,
          description: response.weather[0].description,
          error: false
        });
        console.log(response)

      } else {
        this.setState({
          error: true
        });
      }
    };


    
  
    render() {
      return (
        <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  
                </div>
                <div className="col-xs-7 form-container">
                  <WeatherForm getWeather={this.getWeather} />
                  <WeatherResults 
                    temp={this.state.temp} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    main={this.state.main}
                    temp_max={this.state.temp_max}
                    temp_min={this.state.temp_min}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }
  }
export default WeatherSection;