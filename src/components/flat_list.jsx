import React from 'react';
import Flat from './flat';
import flats from '../../data/flats';

const FlatList = (props) => {
  return flats.map(({name, imageUrl, price, priceCurrency, lat, lng}) => {
    return (
      <Flat
        name={name}
        imageUrl={imageUrl}
        price={price}
        priceCurrency={priceCurrency}
        lat={lat}
        lng={lng}
        key={`${lat}-${lng}`}
      />
    );
  });
};

export default FlatList;
