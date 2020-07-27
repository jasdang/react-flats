import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  return props.flats.map(
    ({name, imageUrl, price, priceCurrency, lat, lng, selected}, index) => {
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
          selected={index === props.selectedFlatId}
          index={index}
        />
      );
    }
  );
};

export default FlatList;
