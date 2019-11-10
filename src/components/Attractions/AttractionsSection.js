import React, { Component } from 'react';
import AttractionsForm from './AttractionsForm'
import AttractionsResults from './AttractionsResults'
// import config from '../../config'

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
        xid: undefined,
        name:undefined,
        attractions_response: {},
        error: undefined
      };
    }
  
    
  
    getAttractions = async (event) => {
      event.preventDefault();
        // const ATTRACTION_API_KEY = `${config.REACT_APP_ATTRACTION_API_KEY}`;
        const ATTRACTION_API_KEY = '5ae2e3f221c38a28845f05b637c385bf96afbd0ee0efa31f1d54771e'
      const city = event.target.elements.city.value;
      const country = event.target.elements.country.value;
      const state = event.target.elements.state.value;

      // if (country && city) {
      //   const coord_api_call = await fetch(
      //     `https://api.opentripmap.com/0.1/en/places/geoname?name=${city}&country=${country}&apikey=${config.ATTRACTION_API_KEY}`
      //   );
  
      //   const coord_response = await coord_api_call.json();
        
  
      //   this.setState({
      //     lat: coord_response.lat,
      //     lon: coord_response.lon,
      //     state: state,
      //     error: false,
      //   });
       
      //   console.log(coord_response)
      //   console.log('longitude:',this.state.lon)
      //   console.log('latitude:',this.state.lat)

      //   let lat = this.state.lot;
      //   let lon = this.state.lon;

      //   const attractions_api_call = await fetch(
      //     `https://api.opentripmap.com/0.1/en/places/radius?radius=80467.2&lon=${lon}&lat=${lat}&kinds=interesting_places&rate=2&limit=25&apikey=${ATTRACTION_API_KEY}`
      //   );

      //   const attractions_response = await attractions_api_call.json();
      //   this.setState({
      //     attractions_response: attractions_response,
      //   })
      //  console.log(attractions_response)

       fetch(`https://api.opentripmap.com/0.1/en/places/geoname?name=${city}&country=${country}&apikey=${ATTRACTION_API_KEY}`)
       .then(res => res.json())
        .then(responseJson => { 
          this.setState({
            lat: responseJson.lat,
            lon: responseJson.lon,
            state: state,
           error: false,
          })
          //responseJson contains the response from the first call.
          console.log('longitude:',this.state.lon)
          console.log('latitude:',this.state.lat)

          let lat = this.state.lat;
          let lon = this.state.lon;

        fetch(`https://api.opentripmap.com/0.1/en/places/radius?radius=80467.2&lon=${lon}&lat=${lat}&kinds=interesting_places&rate=2&limit=25&apikey=${ATTRACTION_API_KEY}`)
        .then(res => res.json())
          .then(responseJson => { 
            //responseJson contains the response from the 2nd call.
           console.log(responseJson)
            this.setState({
              attractions_response: responseJson
            })
            console.log('Request from 2nd Call', this.state.attractions_response)
            let arrayXID = this.state.attractions_response.features;
            console.log('1st xid:', arrayXID)
            console.log('1st xid:', arrayXID[0].properties)
            
            let getXID = arrayXID.filter(function(obj) {
              return obj.properties.xid === "W545849817"
            });

            console.log('Filter Function Results:', getXID)


        fetch(`https://api.opentripmap.com/0.1/en/places/xid/Q5461246?apikey=5ae2e3f221c38a28845f05b637c385bf96afbd0ee0efa31f1d54771e`)
        .then(res => res.json())
          .then(responseJson => {
            console.log(responseJson)
            //responseJson contains the response from the 3rd call.
          })
      })
      })    

      // } else {
      //   this.setState({
      //     error: true
      //   });
      // }
    };
    
    render() {
      console.log(process.env)
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