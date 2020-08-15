import React from 'react';
import {Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '380px',
    height: '650px',
    marginLeft: '1rem',
    border: '1px solid white' 
  };

export class MapContainer extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
            }
    }

    render() {
        return (
            <div className='background'>
                <div className='mapContainer'>
                <Map
                  google={this.props.google}
                  zoom={10}
                  style= {mapStyles}
                  initialCenter={{
                    lat: 33.5,
                    lng: -117.78
                    }}
                />
                </div>
                <div className= 'homeButton' onClick={() => this.props.setView('home', {})}>Home</div>
            </div>
        ); 
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyC5tWM4fIw56Hb1cZ9cg6bbBKwwSR5rZy8'
  })(MapContainer);