import React from 'react';
import ReactDOM from 'react-dom';

export class CurrentLocation extends React.Component {
    constructor(props) {
        super(props);
        const { lat, lng } = this.props.initialCenter;
        this.state = {
          currentLocation: {
            lat: lat,
            lng: lng
          }
        };
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
          this.loadMap();
        }
        if (prevState.currentLocation !== this.state.currentLocation) {
          this.recenterMap();
        }
    }

    recenterMap() {
        const map = this.map;
        const current = this.state.currentLocation;
        const google = this.props.google;
        const maps = google.maps;
        if (map) {
          let center = new maps.LatLng(current.lat, current.lng);
          map.panTo(center);
        }
    }

    componentDidMount() {
        if (this.props.centerAroundCurrentLocation) {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
              const coords = pos.coords;
              this.setState({
                currentLocation: {
                  lat: coords.latitude,
                  lng: coords.longitude
                }
              });
            });
          }
        }
        this.loadMap();
      }
        
    loadMap() {
        if (this.props && this.props.google) {
          const { google } = this.props;
          const maps = google.maps;
          const mapRef = this.refs.map;
          const node = ReactDOM.findDOMNode(mapRef);
          let { zoom } = this.props;
          const { lat, lng } = this.state.currentLocation;
          const center = new maps.LatLng(lat, lng);
          const mapConfig = Object.assign(
            {},
            {
              center: center,
              zoom: zoom
            }
          );
          this.map = new maps.Map(node, mapConfig);
        }
    }

    renderChildren() {
        const { children } = this.props;
        return React.Children.map(children, c => {
          return React.cloneElement(c, {
            map: this.map,
            google: this.props.google,
            mapCenter: this.state.currentLocation
          });
        })
    }

    render() {
       
        return (
          <div>
            <div className='cm-container' ref="map">
             Loading map...
            </div>
           {this.renderChildren()}
          </div>
       );
    }
}
export default CurrentLocation;

CurrentLocation.defaultProps = {
  zoom: 10,
  initialCenter: {
    lat: 33.542721,
    lng: -117.785355
  },
  centerAroundCurrentLocation: false,
  visible: true
};