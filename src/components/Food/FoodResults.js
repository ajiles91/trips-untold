import React, { Component } from 'react';
import Image from './Image';
import Info from './Info'


export default class FoodCard extends Component {
    render() {
        console.log("props=>", this.props);
        return (
            <div>
                {this.props.restaurants.map((restaurant) => {
                    return (
                        <div>
                            <Image
                                source={restaurants.image_url}

                            />
                            <Info
                                name={restaurants.name}
                                href={restaurants.reserve_url}
                            />
                        </div>
                    )

                })}
            </div>
            
        )
    }
}