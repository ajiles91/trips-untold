import React, { Component } from 'react';
import './AttractionsInfo.css'

export default class AttractionsInfo extends Component {
	render(){
		return(
			<div className='attractions-info'>
				<header>{this.props.name}</header>
				<p className='to-center'>Address:{this.props.number} {this.props.road}, 
				{this.props.city}, {this.props.state}</p>
				<p>{this.props.des}</p>
				{/* <a href={this.props.wikipedia}>Get More Info Here</a>  */}
			</div>
		)

	}
}
