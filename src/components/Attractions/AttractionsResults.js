import React, { Component } from 'react';
// import AttractionsImage from './AttractionsImage';
// import AttractionsInfo from './AttractionsInfo'


export default class AttractionsResults extends Component {
    render() {
        console.log("Attraction Results props=>", this.props);
        return (
            <div>

                here's where results will go

                {/* {this.props.restaurants.map((restaurant) => {
                    return (
                        <div>
                            <AttractionsImage
                                source={restaurant.image_url}

                            />
                            <AttractionsInfo
                                name={restaurant.name}
                                href={restaurant.reserve_url}
                                price={restaurant.price}
                            />
                        </div>
                    )

                })} */}
            </div>
            
        )
    }
}