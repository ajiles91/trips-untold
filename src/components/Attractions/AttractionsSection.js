import React, { Component } from 'react';
import AttractionsForm from './AttractionsForm'
import AttractionsResults from './AttractionsResults'
import { promised } from 'q';
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
        xIDs: undefined,
        name:undefined,
        attractions_response: {},
        error: undefined,
        data:[]
      };
    }
  
    // componentDidMount() {
    //   this.getAttractions()
    // }
  
    getAttractions = async (event) => {
      event.preventDefault();
        // const ATTRACTION_API_KEY = `${config.REACT_APP_ATTRACTION_API_KEY}`;
        const ATTRACTION_API_KEY = '5ae2e3f221c38a28845f05b637c385bf96afbd0ee0efa31f1d54771e'
      const city = event.target.elements.city.value;
      const country = event.target.elements.country.value;
      const state = event.target.elements.state.value;

      

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
              attractions_response: responseJson.features
            })
            console.log('Request from 2nd Call', this.state.attractions_response)
            let arrayXID = this.state.attractions_response;
            let theXIDs = arrayXID.map( point =>{
              return point.properties.xid;
            })
            console.log('Hopefully:',theXIDs)
            this.setState({
              xIDs: theXIDs
            })
            console.log('xids saved to state', this.state.xIDs)
            
            let locations = theXIDs.slice(0,8).map(async xid => {
               return await this.getLocation(xid)
             
            })

            Promise.all(locations)
            .then(data => {
              console.log(data)
              this.setState({data})
            })
      
      })
      })
    };// end getAttractions

    getLocation = async (xid) => {
      const result = await fetch(`https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=5ae2e3f221c38a28845f05b637c385bf96afbd0ee0efa31f1d54771e`)
        .then(res => res.json())
          .then(responseJson => {
            return responseJson
          })
      return result
    }

    handleMoreAttractions = () => {
      let moreXIDs = this.state.xIDs
      let moreLocations = moreXIDs.slice(9,17).map(async xid => {
        return await this.getLocation(xid)
      
     })

     Promise.all(moreLocations)
     .then(data => {
       console.log(data)
       this.setState({data})
     })
    }


    displayLocations = () => {
      return this.state.data.map((data, index) => (
        <>
          <p key={index}>{data.name}</p><br />
          <img src={data.preview.source} alt="#" />
          <hr />
          <button onClick={this.handleMoreAttractions}>
            Get More Attractions
          </button>
        </>
        
      ))
    }
    
    render() {
      console.log(process.env)
      return (
        <div>
          {/* {this.getAttractions()} */}
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
        {this.displayLocations()}
      </div>
      );
    }
  }
export default AttractionsSection;