import React, { Component } from 'react';
import FoodForm from './FoodForm'
import FoodResults from './FoodResults'

class FoodSection extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: undefined,
        city: undefined,
        country: undefined,
        state:undefined,
        restaurants: [],
        error: undefined
      };
    }
  
    getFood = async (event) => {
      event.preventDefault();
    
      const city = event.target.elements.city.value;
      const country = event.target.elements.country.value;
      const state = event.target.elements.state.value;

      var countryNormalization = country.toLowerCase();

      if (countryNormalization === 'usa' || countryNormalization === 'united states') {
        countryNormalization = 'us'
      } else {
        countryNormalization = country
      }

      if (country && city) {
        const api_call = await fetch(
          `https://opentable.herokuapp.com/api/restaurants?city=${city}&state=${state}&country=${countryNormalization}`
        );
  
        const response = await api_call.json();
        
        this.setState({
          restaurants: response.restaurants,
          error: false,
        });

      } else {
        this.setState({
          error: true
        });
      }
    };
    
    render() {
      var data = this.state.restaurants
      return (
        <div className="wrapper">
          <FoodForm 
            getFood={this.getFood} 
          />
          <FoodResults 
            restaurants={data}
          />
        </div>
      );
    }
  }
export default FoodSection;