import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './currentLocation';
import { googleApi } from './api';

export class MapContainer extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                activeMarker: {},
                selectedPlace: {},
                locsettings: ''
            }
            this.onMarkerClick = this.onMarkerClick.bind(this);
            this.islocation = this.islocation.bind(this);
    }

componentDidMount() {
  this.islocation()
}

onMarkerClick(props, marker){
  this.setState({
    selectedPlace: props,
    activeMarker: marker
  })
  this.props.setView('weather', {props})
};

islocation() {
  const quer =
        navigator.permissions.query({ name: 'geolocation' })
        .then(res => {return res})
        .then(result => this.setState({locsettings: result.state}))
}

    render() {
        return (
            <div className='background'>
                <div className='mapContainer'>
                <CurrentLocation
                  centerAroundCurrentLocation
                  google={this.props.google}
                  className='cm-container'
                  zoom={10}
                >
                    <Marker
                      onClick={this.onMarkerClick}
                      name={'Current Location'}
                    />
                    <Marker
                      position={{lat: 33.542721, lng: -117.785355}}
                      onClick={this.onMarkerClick}
                      name={'Laguna Beach'}
                    />
                    <Marker
                      position={{lat: 33.608768, lng: -117.873360}}
                      onClick={this.onMarkerClick}
                      name={'Newport Beach'}
                    />
                    <Marker
                      position={{lat: 33.659485, lng: -117.998802}}
                      onClick={this.onMarkerClick}
                      name={'Huntington Beach'}
                    />
                    <Marker
                      position={{lat: 33.467224, lng: -117.698097}}
                      onClick={this.onMarkerClick}
                      name={'Dana Point'}
                    />
                    <Marker
                      position={{lat: 33.427353,lng: -117.612602}}
                      onClick={this.onMarkerClick}
                      name={'San Clemente'}
                    />
                    <Marker
                      position={{lat: 33.770050,lng: -118.193741}}
                      onClick={this.onMarkerClick}
                      name={'Long Beach'}
                    />
                    <Marker
                      position={{lat: 33.195911,lng: -117.379517}}
                      onClick={this.onMarkerClick}
                      name={'Oceanside'}
                    />
                    <Marker
                      position={{lat: 33.844980, lng: -118.387240}}
                      onClick={this.onMarkerClick}
                      name={'Redondo Beach'}
                    />
                    <Marker
                      position={{lat: 32.700031, lng: -117.246681}}
                      onClick={this.onMarkerClick}
                      name={'Point Loma'}
                    />
                    <Marker
                      position={{lat: 33.458420, lng: -117.665180}}
                      onClick={this.onMarkerClick}
                      name={'Capistrano Beach'}
                    />
                    <Marker
                      position={{lat: 33.044800, lng: -117.292450}}
                      onClick={this.onMarkerClick}
                      name={'Encinitas'}
                    />
                    <Marker
                      position={{lat: 32.959389, lng: -117.266296}}
                      onClick={this.onMarkerClick}
                      name={'Del Mar'}
                    />
                    <Marker
                      position={{lat: 32.832809, lng: -117.271271}}
                      onClick={this.onMarkerClick}
                      name={'La Jolla'}
                    />
                    <Marker
                      position={{lat: 33.166039, lng: -117.337929}}
                      onClick={this.onMarkerClick}
                      name={'Carlsbad'}
                    />
                    <Marker
                      position={{lat: 34.420830, lng: -119.698189}}
                      onClick={this.onMarkerClick}
                      name={'Santa Barbara'}
                    />
                    <Marker
                      position={{lat: 34.019455, lng: -118.491188}}
                      onClick={this.onMarkerClick}
                      name={'Santa Monica'}
                    />
                    <Marker
                      position={{lat: 34.025921, lng: -118.779755}}
                      onClick={this.onMarkerClick}
                      name={'Malibu'}
                    />
                    <Marker
                      position={{lat: 34.280491, lng: -119.294518}}
                      onClick={this.onMarkerClick}
                      name={'Ventura'}
                    />
                    <Marker
                      position={{lat: 33.993118, lng: -118.456200}}
                      onClick={this.onMarkerClick}
                      name={'Venice Beach'}
                    />
                    <Marker
                      position={{lat: 33.884735, lng: -118.410912}}
                      onClick={this.onMarkerClick}
                      name={'Manhattan Beach'}
                    />
                    <Marker
                      position={{lat: 34.157530, lng: -119.223540}}
                      onClick={this.onMarkerClick}
                      name={'Channel Islands Beach'}
                    />
                    <Marker
                      position={{lat: 33.331676, lng: -118.384437}}
                      onClick={this.onMarkerClick}
                      name={'Catalina'}
                    />
                </CurrentLocation>
                <div className= 'homeButton' onClick={() => this.props.setView('home', {})}>Home</div>
                </div>
    
            </div>
        ); 
    }
}

export default GoogleApiWrapper({
    apiKey: googleApi
  })(MapContainer);