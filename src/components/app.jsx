import React, {Component} from 'react';
import FlatList from './flat_list';
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

  selectFlat = (event) => {
    console.log(event.currentTarget);
    // this.state({
    //   selectedFlat: flat,
    // });
  };

  render() {
    return (
      <div className='container'>
        <div className='flat-list'>
          <FlatList selectFlat={this.selectFlat} />
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
