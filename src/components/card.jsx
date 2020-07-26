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
    return (
      <div
        class='card'
        style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg';);">
        <div class='card-category'>150 EUR</div>
        <div class='card-description'>
          <h2>Super 60m2 in trendy neighborhood!</h2>
        </div>
        <a class='card-link' href='#'></a>
      </div>
    );
  }
}

export default Flat;
