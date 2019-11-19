import React, { Component } from 'react';
import AttractionsForm from './AttractionsForm'
import AttractionsResults from './AttractionsResults'
// import './AttractionsSection.css'


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
        sliceStart:0,
        sliceEnd:7,
        backButtonDisabled : true,
        fwdButtonDisabled : false,
        disabled: false,
        userClicked: false
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
              xIDs: theXIDs,
              userClicked: true
            })
            console.log('xids saved to state', this.state.xIDs)
            let maxFetchCount = this.state.xIDs.length >= 8 ? 8 : this.state.xIDs.length-1;
            let locations = theXIDs.slice(0,maxFetchCount).map(async xid => {
              return await this.getLocation(xid)
            })

            Promise.all(locations)
            .then(data => {
              console.log(data)
              this.setState({
                data,
                userClicked: true
              })
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
      //if start less than or equal to zero, ignore request
      //else, move backwards
      //start = start - 8;
      //end = end - 8;
      if (this.state.sliceStart > 0) {
        let start = this.state.sliceStart - 8;
        let end = this.state.sliceEnd - 8;
        let moreXIDs = this.state.xIDs
        let moreLocations = moreXIDs.slice(start, end).map(async xid => {
          return await this.getLocation(xid)
        })
      
        this.setState({
          sliceStart: start,
          sliceEnd:end
        },() => console.log(this.state.sliceEnd)) 

        console.log({moreLocations})
        Promise.all(moreLocations)
          .then(newData => {
          console.log('This is in newdata:', newData)
          
          this.setState({
            data:newData,
            fwdButtonDisabled : false
          })
        })
          if (start === 0) {
            this.setState({ backButtonDisabled : true })
          }
        } else {
            this.setState({ backButtonDisabled : true })
        }
    }

    getMoreAttractionsForward = () => {
      // start = start + 8
      //end = end + 8
      //moreLocations = this.state.xIDs(start, end);

      let start = this.state.sliceStart + 8;
      let end =  this.state.xIDs.length - this.state.sliceEnd >= 8 ? this.state.sliceEnd + 8 : this.state.xIDs.length - this.state.sliceEnd;
      if (end <= this.state.xIDs.length-1) {
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
          sliceStart: start,
          sliceEnd:end
        },() => console.log(this.state.sliceEnd)) 


      Promise.all(moreLocations)
      .then(newData => {
          console.log('This is in newdata:', newData)
          
        this.setState({
            data: newData,
            backButtonDisabled : false
          })
      })
      if (end >= this.state.xIDs.length - 1) {
        this.setState({ fwdButtonDisabled : true })
      }
    } else {
      this.setState({ fwdButtonDisabled : true })
    }
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
              
              <AttractionsResults 
                attractions={data}
                getMoreAttractionsBackward={this.getMoreAttractionsBackward} 
                backwardsDisabled={this.state.backButtonDisabled} 
                getMoreAttractionsForward={this.getMoreAttractionsForward} 
                forwardsDisabled={this.state.fwdButtonDisabled}
                userClicked={this.state.userClicked} 
              />
              
            </div>
          </div>
        </div>
      );
    }
  }
export default AttractionsSection;