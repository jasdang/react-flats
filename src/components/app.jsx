import React from 'react';
import FlatList from './flat_list';
import SimpleMap from './map';

const App = (props) => {
  return (
    <div className='container'>
      <div className='flat-list'>
        <FlatList />
      </div>
      <div className='map-container'>
        <SimpleMap />
      </div>
    </div>
  );
};

export default App;
