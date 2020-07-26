import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  return props.flats.map(
    ({name, imageUrl, price, priceCurrency, lat, lng}, index) => {
      return (
        <Flat
          name={name}
          imageUrl={imageUrl}
          price={price}
          priceCurrency={priceCurrency}
          lat={lat}
          lng={lng}
          key={`${lat}-${lng}`}
          selectFlat={props.selectFlat}
          index={index}
        />
      );
    }
  );
};

export default FlatList;
