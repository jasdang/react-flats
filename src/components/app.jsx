import React, {Component} from 'react';
import FlatList from './flat_list';
import flats from '../../data/flats';
// import SimpleMap from './map';
import GoogleMapReact from 'google-map-react';
const key = require('../../keys.json')['GOOGLE_MAP_JS'];
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 48.884211,
        lng: 2.34789,
      },
      zoom: 12,
      selectedFlatId: 0,
    };
  }

  selectFlat = (index) => {
    this.setState({
      center: flats[index],
      selectedFlatId: index,
    });
    // console.log(this.state.center);
  };

  render() {
    return (
      <div>
        <div className='flat-list'>
          <FlatList
            flats={flats}
            selectFlat={this.selectFlat}
            selectedFlatId={this.state.selectedFlatId}
          />
        </div>
        <div className='map-container' style={{height: '100vh', width: '100%'}}>
          <GoogleMapReact
            bootstrapURLKeys={{key: key}}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
            yesIWantToUseGoogleMapApiInternals>
            <Marker
              lat={this.state.center.lat}
              lng={this.state.center.lng}
              text='My Marker'
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
