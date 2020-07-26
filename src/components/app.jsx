import React, {Component} from 'react';
import FlatList from './flat_list';
import SimpleMap from './map';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='flat-list'>
          <FlatList />
        </div>
        <div className='map-container'>
          <SimpleMap lat='55' lng='55' />
        </div>
      </div>
    );
  }
}

export default App;
