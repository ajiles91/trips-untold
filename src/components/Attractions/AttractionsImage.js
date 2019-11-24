import React, { Component } from 'react';
import './AttractionsImage.css'

export default class FoodImage extends Component {
	render(){
		return(
			<img src={this.props.src} alt="#"/>
		)
	}
}