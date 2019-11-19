import React, { Component } from 'react';

export default class AttractionsInfo extends Component {
	render(){
		console.log("PROPS=>", this.props);
		return(
			<div>
				<header>{this.props.name}</header>
				<p>Address:{this.props.number} {this.props.road}, 
				{this.props.city}, {this.props.state}</p>
				<p>{this.props.des}</p>
				{/* <a href={this.props.wikipedia}>Get More Info Here</a>  */}
			</div>
		)

	}
}
