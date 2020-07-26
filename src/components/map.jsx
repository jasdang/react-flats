import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
const key = require('../../keys.json')['GOOGLE_MAP_JS'];
import Marker from './marker';

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: parseFloat(this.props.lat),
        lng: parseFloat(this.props.lng),
      },
      zoom: 11,
    };
  }

  render() {
    console.log(this.props.lat);
    return (
      // Important! Always set the container height explicitly
      <div style={{height: '100vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{key: key}}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}>
          <Marker
            lat={this.state.center.lat}
            lng={this.state.center.lng}
            text='My Marker'
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
