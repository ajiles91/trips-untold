import React, { Component } from 'react';
import AttractionsForm from './AttractionsForm'
import AttractionsResults from './AttractionsResults'
// import config from '../../config'
import './AttractionsSection.css'
import MoreResultsButtons from './MoreResultsButtons'

class AttractionsSection extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: '',
        city: '',
        country: '',
        state:'',
        lon: 0,
        lat: 0,
        xIDs: '',
        name:'',
        attractions_response: {},
        error: undefined,
        data:[],
        sliceStart:9,
        sliceEnd:17,
        disabled: false
      };
    }
  
    getAttractions = async (event) => {
      event.preventDefault();
      
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

        fetch(`https://api.opentripmap.com/0.1/en/places/radius?radius=80467.2&lon=${lon}&lat=${lat}&kinds=interesting_places&rate=2&limit=80&apikey=${ATTRACTION_API_KEY}`)
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

    getMoreAttractionsBackward = () => {
      let start = this.state.sliceStart
      let end = this.state.sliceEnd
      let moreXIDs = this.state.xIDs
      let moreLocations = moreXIDs.slice(start, end).map(async xid => {
        return await this.getLocation(xid)
      })
     
     this.setState({
        sliceStart: start - 8,
        sliceEnd:end - 8
      },() => console.log(this.state.sliceEnd)) 

      console.log({moreLocations})
      Promise.all(moreLocations)
      .then(newData => {
        console.log('This is in newdata:', newData)
      
       this.setState({
          data:newData
        })
     })
    }

    getMoreAttractionsForward = () => {
      let start = this.state.sliceStart
      let end = this.state.sliceEnd
      let moreXIDs = this.state.xIDs
      let moreLocations = moreXIDs.slice(start, end).map(async xid => {
        return await this.getLocation(xid)
      })

     if (moreLocations.length < 8){
        this.setState({
          disabled:'disabled'
        })
     }
     console.log({moreLocations})
     this.setState({
        sliceStart: start+8,
        sliceEnd:end+8
      },() => console.log(this.state.sliceEnd)) 


     Promise.all(moreLocations)
     .then(newData => {
        console.log('This is in newdata:', newData)
        
       this.setState({
          data: newData
        })
     })
    }

    render() {
      console.log('This is in data:', this.state.data)
      let data = this.state.data;
      return (
        <div>
          <div className="wrapper">
            <div className="col-xs-7 form-container">
                  
              <AttractionsForm 
                getAttractions={this.getAttractions} 
              />

              <MoreResultsButtons
                getMoreAttractionsBackward={this.getMoreAttractionsBackward}
                getMoreAttractionsForward={this.getMoreAttractionsForward}
              />
              
              <AttractionsResults 
                attractions={data}
              />
              
              <MoreResultsButtons
                getMoreAttractionsBackward={this.getMoreAttractionsBackward}
                getMoreAttractionsForward={this.getMoreAttractionsForward}
              />
            </div>
          </div>
        </div>
      );
    }
  }
export default AttractionsSection;