import React from 'react';

export default class Weather extends React.Component{
    constructor(props) {
        super(props);
    
    }

    render() {
        return (
            <div className='background'>
                <div className= 'homeButton' onClick={() => this.props.setView('home', {})}>Home</div>
            </div>
        )
    }
}