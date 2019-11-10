import React, { Component } from 'react';

export default class FoodImage extends Component {
	render(){
		console.log("Image PROPS=>", this.props);
		return(
			<img src={this.props.source} alt="#"/>
		)
	}
}