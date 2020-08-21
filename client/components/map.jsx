import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './currentLocation';
import { googleApi } from './api';


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
                showingInfoWindow: false,
                activeMarker: {},
                selectedPlace: {}
            }
            this.onMarkerClick = this.onMarkerClick.bind(this);
            this.onClose = this.onClose.bind(this)
    }

onMarkerClick(props, marker, e){
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: false
  })
  this.props.setView('weather', {props})
};

onClose(props) {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};

    render() {
        return (
            <div className='background'>
                <div className='mapContainer'>
                <CurrentLocation
                  centerAroundCurrentLocation
                  google={this.props.google}
                  style={mapStyles}
                  zoom={10}
                >
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
                      position={{lat: 33.729880, lng: -118.041670}}
                      onClick={this.onMarkerClick}
                      name={'Bolsa Chica'}
                    />
                    <Marker
                      position={{lat: 33.458420, lng: -117.665180}}
                      onClick={this.onMarkerClick}
                      name={'Capistrano Beach'}
                    />
                    <Marker
                      position={{lat: 33.640670, lng: -117.594550}}
                      onClick={this.onMarkerClick}
                      name={'Rancho Santa Margarita'}
                    />
                    <Marker
                      position={{lat: 33.685909, lng: -117.824722}}
                      onClick={this.onMarkerClick}
                      name={'Irvine'}
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
                </CurrentLocation>
                </div>
                <div className= 'homeButton' onClick={() => this.props.setView('home', {})}>Home</div>
            </div>
        ); 
    }
}

export default GoogleApiWrapper({
    apiKey: googleApi
  })(MapContainer);