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

      if (country && city) {
        const api_call = await fetch(
          `https://opentable.herokuapp.com/api/restaurants?city=${city}&state=${state}&country=${country}`
        );
  
        const response = await api_call.json();
        
  
        this.setState({
          restaurants: response.restaurants,
          error: false,
        });
       
        console.log(response)
        console.log(this.state.restaurants)
       

      } else {
        this.setState({
          error: true
        });
      }
    };
    
    render() {
      var data = this.state.restaurants
      return (
        <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  {/* <FoodHeader /> */}
                </div>
                <div className="col-xs-7 form-container">
                  
                  <FoodForm 
                    getFood={this.getFood} 
                  />

                  <FoodResults 
                    restaurants={data}
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
export default FoodSection;