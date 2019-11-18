import React from 'react';

const MoreResultsButtons = props => (
    <div>
        <button onClick={props.getMoreAttractionsBackward}>back</button>
        <button onClick={props.getMoreAttractionsForward}>forward</button>
    </div>
    
)
export default MoreResultsButtons