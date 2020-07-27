import React from 'react';

const Flat = ({
  name,
  imageUrl,
  price,
  priceCurrency,
  lat,
  lng,
  selectFlat,
  index,
  selected,
}) => {
  const divStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})`,
  };

  const handleClick = () => {
    selectFlat(index);
    console.log(classNames());
  };

  const classNames = () => {
    if (selected) {
      return 'card active';
    } else {
      return 'card';
    }
  };

  return (
    <div className={classNames()} style={divStyle} onClick={handleClick}>
      <div className='card-category'>{`${price} ${priceCurrency}`}</div>
      <div className='card-description'>
        <h2>{name}</h2>
      </div>
      <a className='card-link' href='#'></a>
    </div>
  );
};

export default Flat;
