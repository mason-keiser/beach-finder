import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './currentLocation'

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
    showingInfoWindow: true
  })};

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
                >
                    <Marker
                      onClick={this.onMarkerClick}
                      name={'current location'}
                    />
                    <InfoWindow
                      marker={this.state.activeMarker}
                      visible={this.state.showingInfoWindow}
                      onClose={this.onClose}
                    >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                    </InfoWindow>
                </CurrentLocation>
                </div>
                <div className= 'homeButton' onClick={() => this.props.setView('home', {})}>Home</div>
            </div>
        ); 
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyC5tWM4fIw56Hb1cZ9cg6bbBKwwSR5rZy8'
  })(MapContainer);