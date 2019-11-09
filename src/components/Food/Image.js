import React, { Component } from 'react';

export default class Image extends Component {
	render(){
		console.log("PROPS=>", this.props);
		return(
			<img src={this.props.image_url} />
		)
	}
}