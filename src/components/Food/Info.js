import React, { Component } from 'react';

export default class Info extends Component {
	render(){
		console.log("PROPS=>", this.props);
		return(
			<div>
				<header>{this.props.name}</header>
				<p>Price:{this.props.price} out of 4 dollar signs</p>
				<a href={this.props.reserve_url}>Get More Info and Make Reservations Here!</a>
			</div>
		)

	}
}