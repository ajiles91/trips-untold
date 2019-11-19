import React, { Component } from 'react';
import AttractionsImage from './AttractionsImage';
import AttractionsInfo from './AttractionsInfo';

export default class AttractionsResults extends Component {
    render() {
        console.log("Attraction Results props=>", this.props);
        return (
            <div className='whole-attraction-result'>

                <button onClick={this.props.getMoreAttractionsBackward} disabled={this.props.backwardsDisabled}>back</button>
                <button onClick={this.props.getMoreAttractionsForward} disabled={this.props.forwardsDisabled}>forward</button>
                    
                {this.props.attractions.map((attraction) => {
                    return (
                        <div className='result'>
                            <AttractionsImage
                                src={attraction.preview ? attraction.preview.source : '' }

                            />
                            <AttractionsInfo
                                name={attraction.name}
                                city={attraction.address && attraction.address.city ? attraction.address.city : ''}
                                des={attraction.wikipedia_extracts && attraction.wikipedia_extracts.text ? attraction.wikipedia_extracts.text : ''}
                                state={attraction.address && attraction.address.state ? attraction.address.state : ''}
                                href={attraction.wikipedia ? attraction.wikipedia : ''}
                                road={attraction.address && attraction.address.road ? attraction.address.road : ''}
                                number={attraction.address && attraction.address.house_number ? attraction.house_number : ''}
                            />
                        </div>
                    )
                })}

                <button onClick={this.props.getMoreAttractionsBackward} disabled={this.props.backwardsDisabled}>back</button>
                <button onClick={this.props.getMoreAttractionsForward} disabled={this.props.forwardsDisabled}>forward</button>
            </div>
            
        )
    }
}