import React from 'react';
import Flat from './flat';

const App = (props) => {
  return (
    <div className='container'>
      <div className='flat-list'>
        <Flat />
      </div>
      <div className='map-container'></div>
    </div>
  );
};

export default App;
