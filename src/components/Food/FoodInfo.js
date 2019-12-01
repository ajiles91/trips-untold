import React, { Component } from 'react';

export default class FoodInfo extends Component {
	render(){
		return(
			<div>
				<header>{this.props.name}</header>
				<p>Price: {this.props.price} out of 4 dollar signs</p>
				<a href={this.props.href}>Get More Info and Make Reservations Here!</a>
			</div>
		)

	}
}