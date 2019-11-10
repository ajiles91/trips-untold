import React, { Component } from 'react';
import AttractionsForm from './AttractionsForm'
import AttractionsResults from './AttractionsResults'

class AttractionsSection extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: undefined,
        city: undefined,
        country: undefined,
        state:undefined,
        lon: undefined,
        lat: undefined,
        error: undefined
      };
    }
  
    
  
    getAttractions = async (event) => {
      event.preventDefault();
        const ATTRACTION_API_KEY = '5ae2e3f221c38a28845f05b637c385bf96afbd0ee0efa31f1d54771e';
      const city = event.target.elements.city.value;
      const country = event.target.elements.country.value;
      const state = event.target.elements.state.value;

      if (country && city) {
        const coord_api_call = await fetch(
          `https://api.opentripmap.com/0.1/en/places/geoname?name=${city}&country=${country}&apikey=${ATTRACTION_API_KEY}`
        );
  
        const coord_response = await coord_api_call.json();
        
  
        this.setState({
          lat: coord_response.lat,
          lon: coord_response.lon,
          state: state,
          error: false,
        });
       
        console.log(coord_response)
        console.log('longitude:',this.state.lon)
        console.log('latitude:',this.state.lat)

        let lat = this.state.lot;
        let lon = this.state.lon;

        const attractions_api_call = await fetch(
          `https://api.opentripmap.com/0.1/en/places/radius?radius=80467.2&lon=${lon}&lat=${lat}&kinds=interesting_places&rate=2&limit=25&apikey=${ATTRACTION_API_KEY}`
        );

        const attractions_response = await attractions_api_call.json();
       console.log(attractions_response)

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
                  {/* <FoodHeader /> */}
                </div>
                <div className="col-xs-7 form-container">
                  
                  <AttractionsForm 
                    getAttractions={this.getAttractions} 
                  />

                  <AttractionsResults 
                    // restaurants={data}
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
export default AttractionsSection;