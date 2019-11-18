import React, { Component } from 'react';
import AttractionsImage from './AttractionsImage';
import AttractionsInfo from './AttractionsInfo';


export default class AttractionsResults extends Component {
    render() {
        console.log("Attraction Results props=>", this.props);
        return (
            <div>

                {this.props.attractions.map((attraction) => {
                    return (
                        <div className='result'>
                            <AttractionsImage
                                src={attraction.preview ? attraction.preview.source : '' }

                            />
                            <AttractionsInfo
                                name={attraction.name}
                                city={attraction.address.city}
                                des={attraction.wikipedia_extracts.text}
                                state={attraction.address.state}
                                href={attraction.wikipedia}
                                road={attraction.address.road ? attraction.address.road : ''}
                                number={attraction.address.house_number ? attraction.house_number : ''}
                            />
                        </div>
                    )

                })}
            </div>
            
        )
    }
}