import React, {Component} from 'react';
import FlatList from './flat_list';
import flats from '../../data/flats';
import SimpleMap from './map';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: {
        lat: 55,
        lng: 55,
      },
    };
  }

  selectFlat = (index) => {
    console.log(index);
    // this.state({
    //   selectedFlat: flat,
    // });
  };

  render() {
    return (
      <div className='container'>
        <div className='flat-list'>
          <FlatList flats={flats} selectFlat={this.selectFlat} />
        </div>
        <div className='map-container'>
          <SimpleMap
            lat={this.state.selectedFlat.lat}
            lng={this.state.selectedFlat.lng}
          />
        </div>
      </div>
    );
  }
}

export default App;
