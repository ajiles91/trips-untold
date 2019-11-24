import React, { Component } from 'react';
import './FoodImage.css'
export default class FoodImage extends Component {
	render(){
		return(
			<img src={this.props.source} alt="#"/>
		)
	}
}