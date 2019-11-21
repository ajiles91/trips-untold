import React, { Component } from 'react';
import Image from './FoodImage';
import Info from './FoodInfo';
import './FoodResults.css'

export default class FoodResults extends Component {
    render() {
        console.log("Food Results props=>", this.props);
        return (
            <div className='container'>
                <div className='grid'>
                    {this.props.restaurants.map((restaurant) => {
                        return (
                            <div className='restaurant-indiv'>
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
                
            </div>
            
        )
    }
}