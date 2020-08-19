import React from 'react';

const api = {
    key: "6d7d1e7d4d37757e05e72f81a893fa86",
    baseurl: "http://api.openweathermap.org/data/2.5/"
}

const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date}, ${month} ${year}`
}

export default class Weather extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='weather-background'>
                <header className='weather-header'>{this.props.markerInfo.params.props.name}</header>
                <div className='date-box'>
                    <div className='date'>{dateBuilder(new Date())}</div>
                </div>
                <div className="weather-box">
                    <div className="temp">50ºf</div>
                    <div className="weather">Raining</div>
                </div>
                <div className= 'weatherHomeButton' onClick={() => this.props.setView('home', {})}>Home</div>
                <div className = 'mapButton' onClick={() => this.props.setView('map', {})}>Map</div>
            </div>
        )
    }
}