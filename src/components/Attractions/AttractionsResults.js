import React, { Component } from 'react';
import AttractionsImage from './AttractionsImage';
import AttractionsInfo from './AttractionsInfo';
import './AttractionsResults.css'

export default class AttractionsResults extends Component {
    // constructor(props) {}
    // static defaultProps = {
    //     catName: "Sandy",
    //     eyeColor: "deepblue",
    //     age: "120"        
    // }
    render() {
        
        const userClicked = this.props.userClicked;
        const backwardButton = (userClicked === true) ? <button onClick={this.props.getMoreAttractionsBackward} disabled={this.props.backwardsDisabled}>back</button> : null
        const fwdButton = (userClicked === true) ? <button onClick={this.props.getMoreAttractionsForward} disabled={this.props.forwardsDisabled}>forward</button> : null

        return (
            <div className='whole-attraction-result'>
                <div className = 'buttons-section-top'>
                    {backwardButton}
                    {fwdButton}
                </div>
                

                <div className='results-container'>
                    <div className='grid'>
                        {this.props.attractions.map((attraction) => {
                            return (
                                <div className='result'>
                                    <AttractionsImage
                                        src={attraction.preview ? attraction.preview.source : 'No Photo Available' }

                                    />
                                    <AttractionsInfo
                                        name={attraction.name}
                                        city={attraction.address && attraction.address.city ? attraction.address.city : ''}
                                        des={attraction.wikipedia_extracts && attraction.wikipedia_extracts.text ? attraction.wikipedia_extracts.text : ''}
                                        state={attraction.address && attraction.address.state ? attraction.address.state : ''}
                                        href={attraction.wikipedia ? attraction.wikipedia : ''}
                                        road={attraction.address && attraction.address.road ? attraction.address.road : ''}
                                        number={attraction.address && attraction.address.house_number ? attraction.house_number : ''}
                                    />
                                </div>
                            )
                        })} 
                    </div>
                </div>                
                
                <div className = 'buttons-section-bottom'>
                    {backwardButton}
                    {fwdButton}
                </div>
            </div>
            
        )
    }
}