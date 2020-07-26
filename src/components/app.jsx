import React from 'react';
import FlatList from './flat_list';

const App = (props) => {
  return (
    <div className='container'>
      <div className='flat-list'>
        <FlatList />
      </div>
      <div className='map-container'></div>
    </div>
  );
};

export default App;
