import React, { Component } from 'react';
import Image from './FoodImage';
import Info from './FoodInfo'


export default class FoodResults extends Component {
    render() {
        console.log("Food Results props=>", this.props);
        return (
            <div>
                {this.props.restaurants.map((restaurant) => {
                    return (
                        <div>
                            <Image
                                source={restaurant.image_url ? restaurant.image_url : ''}

                            />
                            <Info
                                name={restaurant.name ? restaurant.name : '' }
                                href={restaurant.reserve_url ? restaurant.reserve_url  : '' }
                                price={restaurant.price ? restaurant.price : '' }
                            />
                        </div>
                    )

                })}
            </div>
            
        )
    }
}