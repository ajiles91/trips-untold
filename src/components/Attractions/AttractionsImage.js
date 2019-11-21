import React, { Component } from 'react';
import './AttractionsImage.css'

export default class FoodImage extends Component {
	render(){
		console.log("Image PROPS=>", this.props);
		return(
			<img src={this.props.src} alt="#"/>
		)
	}
}