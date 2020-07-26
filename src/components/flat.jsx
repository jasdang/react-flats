import React, {Component} from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      imageUrl: this.props.imageUrl,
      price: this.props.price,
      priceCurrency: this.props.priceCurrency,
      lat: this.props.lat,
      lng: this.props.lng,
    };
  }
  render() {
    const divStyle = {
      backgroundImage:
        'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url({this.state.imageUrl})',
    };
    return (
      <div className='card' style={divStyle}>
        <div className='card-category'>{`${this.state.price} ${this.state.priceCurrency}`}</div>
        <div className='card-description'>
          <h2>Super 60m2 in trendy neighborhood!</h2>
        </div>
        <a className='card-link' href='#'></a>
      </div>
    );
  }
}

export default Flat;
