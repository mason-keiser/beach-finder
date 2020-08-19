import React from 'react';

const api = {
    key: "6d7d1e7d4d37757e05e72f81a893fa86",
    baseurl: "http://api.openweathermap.org/data/2.5/"
}

export default class Weather extends React.Component{
    constructor(props) {
        super(props);
    
    }

    render() {
        return (
            <div className='background'>
                <header>{this.props.markerInfo.params.props.name}</header>
                <div className= 'homeButton' onClick={() => this.props.setView('home', {})}>Home</div>
            </div>
        )
    }
}