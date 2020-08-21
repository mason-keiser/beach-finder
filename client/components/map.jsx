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