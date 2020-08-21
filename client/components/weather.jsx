import React, { useState } from "react"


const api = {
    key: "6d7d1e7d4d37757e05e72f81a893fa86",
    baseurl: "http://api.openweathermap.org/data/2.5/"
}

function dateBuilder(d) {
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
        this.state = {
            weatherInfo: {}
        }
        this.celsiusConverter = this.celsiusConverter.bind(this);
    }

    componentDidMount(){
        fetch(`${api.baseurl}weather?q=${this.props.markerInfo.params.props.name}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    weatherInfo: result
                })
            })
    }

    celsiusConverter(val) {
        let valNum = parseFloat(val);
        return Math.round((valNum * 1.8) + 32) + 'fº' ;
    }

    render() {
        return (
            <div className='weather-background'>
                <header className='weather-header'>{this.props.markerInfo.params.props.name}</header>
                <div className='date-box'>
                    <div className='date'>{dateBuilder(new Date())}</div>
                </div>
                {( typeof this.state.weatherInfo.main != "undefined") ? (
                <div> 
                <div className="weather-box">
                    <div className="temp">{this.celsiusConverter(this.state.weatherInfo.main.temp) }</div>
                    <div className="weather">{this.state.weatherInfo.weather[0].description}</div>
                    <div className='temps'>Low: {this.state.weatherInfo.main.temp_min}</div>
                    <div className='temps'>High: {this.state.weatherInfo.main.temp_max}</div>
                    <div className='joke'> Ever wonder just how many clouds are in the sky? No need to wonder anymore.. There('s) only {this.state.weatherInfo.clouds.all} clouds out today!</div>
                </div> 
                </div>)
                : null }
                <div className= 'weatherHomeButton' onClick={() => this.props.setView('home', {})}>Home</div>
                <div className = 'mapButton' onClick={() => this.props.setView('map', {})}>Map</div>
            </div>
        )
    }
}