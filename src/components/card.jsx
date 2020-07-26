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
    return <div className='card'></div>;
  }
}

export default Flat;
